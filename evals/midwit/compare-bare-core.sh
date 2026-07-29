#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "usage: $0 <iteration-directory>" >&2
  exit 64
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ITERATION_DIR="$1"
COMPARATOR_MODEL="gpt-5.6-luna"
SKILL_CREATOR_ROOT="${SKILL_CREATOR_ROOT:-$HOME/.agents/skills/skill-creator}"
COMPARISON_ROOT="$ITERATION_DIR/blind-comparisons"
INPUT_ROOT="$ITERATION_DIR/blind-comparison-inputs"

test -s "$ITERATION_DIR/benchmark.json"
test -s "$SKILL_CREATOR_ROOT/agents/comparator.md"
test -s "$SCRIPT_DIR/comparison-schema.json"

mkdir -p "$COMPARISON_ROOT" "$INPUT_ROOT"
cp "$SKILL_CREATOR_ROOT/agents/comparator.md" "$COMPARISON_ROOT/comparator.md"

stage_side() {
  local source_arm="$1"
  local destination="$2"

  mkdir -p "$destination"
  cp -R "$source_arm/outputs/." "$destination/"
}

run_comparison() {
  local eval_id="$1"
  local eval_dir
  local compare_dir="$COMPARISON_ROOT/eval-$eval_id"
  local expected_output
  local prompt

  eval_dir="$(find "$ITERATION_DIR" -mindepth 1 -maxdepth 1 -type d -name "eval-${eval_id}-*" -print -quit)"
  expected_output="$(jq -r --argjson id "$eval_id" '.evals[] | select(.id == $id) | .expected_output' "$ITERATION_DIR/evals.json")"
  prompt="$(jq -r --argjson id "$eval_id" '.evals[] | select(.id == $id) | .prompt' "$ITERATION_DIR/evals.json")"
  mkdir -p "$compare_dir"

  {
    echo "# Blind forced comparison"
    echo
    echo "Use only the staged comparator instructions and blinded inputs inside $ITERATION_DIR. Do not inspect arm directories, benchmark grades, skill files, mappings, another model, helper agent, web search, browser, service, credential, or external temporary directory."
    echo "Read $COMPARISON_ROOT/comparator.md completely and follow it."
    echo "Compare output A at $INPUT_ROOT/eval-$eval_id/A with output B at $INPUT_ROOT/eval-$eval_id/B."
    echo "Do not infer or discuss which configuration produced either side."
    echo
    echo "Original task:"
    printf '%s\n' "$prompt"
    echo
    echo "Expected outcome:"
    printf '%s\n' "$expected_output"
    echo
    echo "Return only JSON matching the provided schema. Choose a winner unless the outputs are genuinely equivalent."
  } > "$compare_dir/prompt.md"

  {
    printf 'model=%s\n' "$COMPARATOR_MODEL"
    printf 'reasoning_effort=high\n'
    printf 'sandbox=workspace-write\n'
    printf 'ephemeral=true\n'
    printf 'ignore_user_config=true\n'
    printf 'ignore_rules=true\n'
    printf 'approval_policy=never\n'
    printf 'working_directory=%s\n' "$ITERATION_DIR"
  } > "$compare_dir/command.txt"

  codex exec \
    --skip-git-repo-check \
    --ignore-user-config \
    --ignore-rules \
    --ephemeral \
    --json \
    --model "$COMPARATOR_MODEL" \
    --config 'model_reasoning_effort="high"' \
    --config 'approval_policy="never"' \
    --sandbox workspace-write \
    --cd "$ITERATION_DIR" \
    --output-schema "$SCRIPT_DIR/comparison-schema.json" \
    --output-last-message "$compare_dir/comparison.json" \
    - < "$compare_dir/prompt.md" \
    > "$compare_dir/events.jsonl" \
    2> "$compare_dir/stderr.log"
  jq -e '.winner == "A" or .winner == "B" or .winner == "TIE"' "$compare_dir/comparison.json" > /dev/null
}

for eval_id in 1 3 5; do
  eval_dir="$(find "$ITERATION_DIR" -mindepth 1 -maxdepth 1 -type d -name "eval-${eval_id}-*" -print -quit)"
  stage_side "$eval_dir/without_skill/run-1" "$INPUT_ROOT/eval-$eval_id/A"
  stage_side "$eval_dir/with_skill/run-1" "$INPUT_ROOT/eval-$eval_id/B"
done

for eval_id in 2 4; do
  eval_dir="$(find "$ITERATION_DIR" -mindepth 1 -maxdepth 1 -type d -name "eval-${eval_id}-*" -print -quit)"
  stage_side "$eval_dir/with_skill/run-1" "$INPUT_ROOT/eval-$eval_id/A"
  stage_side "$eval_dir/without_skill/run-1" "$INPUT_ROOT/eval-$eval_id/B"
done

pids=()
for eval_id in 1 2 3 4 5; do
  run_comparison "$eval_id" &
  pids+=("$!")
done

failures=0
for pid in "${pids[@]}"; do
  if ! wait "$pid"; then
    failures=$((failures + 1))
  fi
done

if [[ "$failures" -ne 0 ]]; then
  echo "$failures blind comparison(s) failed" >&2
  exit 1
fi

jq -n '{
  "1": {"A": "without_skill", "B": "with_skill"},
  "2": {"A": "with_skill", "B": "without_skill"},
  "3": {"A": "without_skill", "B": "with_skill"},
  "4": {"A": "with_skill", "B": "without_skill"},
  "5": {"A": "without_skill", "B": "with_skill"}
}' > "$COMPARISON_ROOT/blind-mapping.json"

jq -s \
  --slurpfile mapping "$COMPARISON_ROOT/blind-mapping.json" \
  'to_entries | map({
    eval_id: (.key + 1),
    blinded_winner: .value.winner,
    winner: (
      if .value.winner == "TIE"
      then "tie"
      else $mapping[0][((.key + 1) | tostring)][.value.winner]
      end
    ),
    reasoning: .value.reasoning
  })' \
  "$COMPARISON_ROOT"/eval-*/comparison.json \
  > "$COMPARISON_ROOT/summary.json"

echo "blind comparisons complete: $ITERATION_DIR"
