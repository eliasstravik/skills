#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "usage: $0 <iteration-directory>" >&2
  exit 64
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ITERATION_DIR="$1"
GRADER_MODEL="gpt-5.6-terra"
SKILL_CREATOR_ROOT="${SKILL_CREATOR_ROOT:-$HOME/.agents/skills/skill-creator}"
GRADER_INPUTS="$ITERATION_DIR/grader-inputs"

test -s "$ITERATION_DIR/contamination-scan.md"
test -s "$SKILL_CREATOR_ROOT/agents/grader.md"
test -s "$SCRIPT_DIR/grading-schema.json"

mkdir -p "$GRADER_INPUTS/ground-truth"
cp "$SKILL_CREATOR_ROOT/agents/grader.md" "$GRADER_INPUTS/grader.md"
cp "$SCRIPT_DIR/assertions.md" "$GRADER_INPUTS/assertions.md"
cp "$SCRIPT_DIR"/ground-truth/*.md "$GRADER_INPUTS/ground-truth/"
cp "$ITERATION_DIR/contamination-scan.md" "$GRADER_INPUTS/contamination-scan.md"

assertion_ids_for_eval() {
  case "$1" in
    1) echo "L2 L3 L4 L5 L7 L8 L9 L10 L11 L12 L13 L14 L15 C1" ;;
    2) echo "L2 L3 L4 L5 L7 L8 L9 L10 L11 L12 L13 L14 L15 B1" ;;
    3) echo "L2 L3 L4 L5 L7 L8 L9 L10 L11 L12 L13 L14 L15 W1" ;;
    4) echo "L2 L3 L6 L12 L13 L14 L15" ;;
    *) return 64 ;;
  esac
}

ground_truth_for_eval() {
  case "$1" in
    1|4) echo "$GRADER_INPUTS/ground-truth/tracefold-cli.md" ;;
    2) echo "$GRADER_INPUTS/ground-truth/redact-config-library.md" ;;
    3) echo "$GRADER_INPUTS/ground-truth/driftboard-web.md" ;;
    *) return 64 ;;
  esac
}

grade_arm() {
  local arm_dir="$1"
  local config_dir
  local eval_dir
  local eval_base
  local eval_id
  local configuration
  local paired_arm
  local assertion_ids
  local ground_truth
  local expected_count
  local started_epoch
  local ended_epoch
  local grader_duration
  local tmp_timing
  local command_calls
  local file_change_calls
  local errors
  local output_chars
  local transcript_chars
  local tmp_grading

  config_dir="$(dirname "$arm_dir")"
  eval_dir="$(dirname "$config_dir")"
  eval_base="$(basename "$eval_dir")"
  eval_id="${eval_base#eval-}"
  eval_id="${eval_id%%-*}"
  configuration="$(basename "$config_dir")"
  assertion_ids="$(assertion_ids_for_eval "$eval_id")"
  ground_truth="$(ground_truth_for_eval "$eval_id")"
  expected_count="$(wc -w <<< "$assertion_ids" | tr -d ' ')"

  if [[ "$configuration" == "with_skill" ]]; then
    paired_arm="$eval_dir/without_skill/run-1"
  else
    paired_arm="$eval_dir/with_skill/run-1"
  fi

  {
    echo "# Independent assertion grade"
    echo
    echo "Use only the staged instructions and evidence inside $ITERATION_DIR. Do not invoke another model, skill, helper agent, web search, browser, service, credential, or external temporary directory."
    echo "Read $GRADER_INPUTS/grader.md completely and follow it."
    echo "Read $GRADER_INPUTS/assertions.md and grade exactly these assertion IDs, in this order: $assertion_ids"
    echo "Read evaluator truth at $ground_truth."
    echo "Read the arm prompt, complete codex-events.jsonl, transcript.md, every output, and workspace state under $arm_dir."
    echo "For L15, grade the no-skill transcript and events in the pair; the paired arm is $paired_arm."
    echo "Use $GRADER_INPUTS/contamination-scan.md only as corroborating evidence, not as a substitute for reading the raw run."
    echo "Begin each expectation text with its exact assertion ID. Return exactly $expected_count expectation objects."
    echo "Apply the burden of proof to PASS, include concise specific evidence, extract only consequential claims, and flag only material eval-design gaps."
    echo "Return only JSON matching the provided schema. Do not wrap it in Markdown."
  } > "$arm_dir/grader-prompt.md"

  {
    printf 'model=%s\n' "$GRADER_MODEL"
    printf 'reasoning_effort=high\n'
    printf 'sandbox=workspace-write\n'
    printf 'ephemeral=true\n'
    printf 'ignore_user_config=true\n'
    printf 'ignore_rules=true\n'
    printf 'approval_policy=never\n'
    printf 'working_directory=%s\n' "$ITERATION_DIR"
  } > "$arm_dir/grader-command.txt"

  started_epoch="$(date +%s)"
  codex exec \
    --skip-git-repo-check \
    --ignore-user-config \
    --ignore-rules \
    --ephemeral \
    --json \
    --model "$GRADER_MODEL" \
    --config 'model_reasoning_effort="high"' \
    --config 'approval_policy="never"' \
    --sandbox workspace-write \
    --cd "$ITERATION_DIR" \
    --output-schema "$SCRIPT_DIR/grading-schema.json" \
    --output-last-message "$arm_dir/grading.json" \
    - < "$arm_dir/grader-prompt.md" \
    > "$arm_dir/grader-events.jsonl" \
    2> "$arm_dir/grader-stderr.log"
  ended_epoch="$(date +%s)"
  grader_duration="$((ended_epoch - started_epoch))"

  jq -e . "$arm_dir/grading.json" > /dev/null
  test "$(jq '.expectations | length' "$arm_dir/grading.json")" -eq "$expected_count"
  test "$(jq '[.expectations[].passed] | length' "$arm_dir/grading.json")" -eq "$expected_count"
  test "$(jq '.summary.total' "$arm_dir/grading.json")" -eq "$expected_count"
  test "$(jq '[.expectations[] | select(.passed)] | length' "$arm_dir/grading.json")" -eq "$(jq '.summary.passed' "$arm_dir/grading.json")"
  test "$(jq '[.expectations[] | select(.passed | not)] | length' "$arm_dir/grading.json")" -eq "$(jq '.summary.failed' "$arm_dir/grading.json")"

  read -r -a expected_ids <<< "$assertion_ids"
  for index in "${!expected_ids[@]}"; do
    test "$(jq -r --argjson index "$index" '.expectations[$index].text' "$arm_dir/grading.json" | awk '{print $1}')" = "${expected_ids[$index]}"
  done

  tmp_timing="$arm_dir/timing.with-grader.json"
  jq \
    --argjson grader_duration "$grader_duration" \
    '. + {
      grader_duration_seconds: $grader_duration,
      total_duration_seconds: (.executor_duration_seconds + $grader_duration)
    }' \
    "$arm_dir/timing.json" > "$tmp_timing"
  mv "$tmp_timing" "$arm_dir/timing.json"

  command_calls="$(jq -s '[.[] | select(.type == "item.completed" and .item.type == "command_execution")] | length' "$arm_dir/codex-events.jsonl")"
  file_change_calls="$(jq -s '[.[] | select(.type == "item.completed" and .item.type == "file_change")] | length' "$arm_dir/codex-events.jsonl")"
  errors="$(jq -s '[.[] | select(.type == "turn.failed")] | length' "$arm_dir/codex-events.jsonl")"
  output_chars="$(find "$arm_dir/outputs" -type f -exec wc -c {} + | awk 'END { print $1 + 0 }')"
  transcript_chars="$(wc -c < "$arm_dir/transcript.md" | tr -d ' ')"
  tmp_grading="$arm_dir/grading.with-metrics.json"
  jq \
    --argjson command_calls "$command_calls" \
    --argjson file_change_calls "$file_change_calls" \
    --argjson errors "$errors" \
    --argjson output_chars "$output_chars" \
    --argjson transcript_chars "$transcript_chars" \
    '. + {
      execution_metrics: {
        tool_calls: {
          command_execution: $command_calls,
          file_change: $file_change_calls
        },
        total_tool_calls: ($command_calls + $file_change_calls),
        total_steps: ($command_calls + $file_change_calls),
        errors_encountered: $errors,
        output_chars: $output_chars,
        transcript_chars: $transcript_chars
      }
    }' \
    "$arm_dir/grading.json" > "$tmp_grading"
  mv "$tmp_grading" "$arm_dir/grading.json"
}

pids=()
while IFS= read -r arm_dir; do
  grade_arm "$arm_dir" &
  pids+=("$!")
done < <(find "$ITERATION_DIR" -mindepth 3 -maxdepth 3 -type d -name run-1 | sort)

failures=0
for pid in "${pids[@]}"; do
  if ! wait "$pid"; then
    failures=$((failures + 1))
  fi
done

if [[ "$failures" -ne 0 ]]; then
  echo "$failures grader arm(s) failed" >&2
  exit 1
fi

for eval_dir in "$ITERATION_DIR"/eval-*; do
  jq \
    --slurpfile grade "$eval_dir/with_skill/run-1/grading.json" \
    '.assertions = ($grade[0].expectations | map(.text))' \
    "$eval_dir/eval_metadata.json" > "$eval_dir/eval_metadata.with-assertions.json"
  mv "$eval_dir/eval_metadata.with-assertions.json" "$eval_dir/eval_metadata.json"
  cp "$eval_dir/eval_metadata.json" "$eval_dir/with_skill/run-1/eval_metadata.json"
  cp "$eval_dir/eval_metadata.json" "$eval_dir/without_skill/run-1/eval_metadata.json"
done

echo "formal grading complete: $ITERATION_DIR"
