#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "usage: $0 <iteration-directory>" >&2
  exit 64
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(git -C "$SCRIPT_DIR" rev-parse --show-toplevel)"
ITERATION_DIR="$1"
EXECUTOR_MODEL="gpt-5.6-sol"
SKILL_DIR="$REPO_ROOT/skills/skill-issue"
CODEX_ENTRY="$(readlink "$(command -v codex)" || command -v codex)"
CODEX_NODE="${CODEX_NODE:-$(dirname "$CODEX_ENTRY")/node}"

case "$ITERATION_DIR" in
  "$SCRIPT_DIR"/runs/iteration-*) ;;
  *) echo "iteration directory must be evals/skill-issue/runs/iteration-*" >&2; exit 64 ;;
esac

if [[ -e "$ITERATION_DIR" ]]; then
  echo "refusing to overwrite existing iteration: $ITERATION_DIR" >&2
  exit 73
fi

source_hashes() {
  find "$SKILL_DIR" "$SCRIPT_DIR" \
    -path "$SCRIPT_DIR/runs" -prune -o \
    -type f -print0 \
    | sort -z \
    | xargs -0 git -C "$REPO_ROOT" hash-object
}

mkdir -p "$ITERATION_DIR"
cp "$SCRIPT_DIR/evals.json" "$ITERATION_DIR/evals.json"
cp "$SCRIPT_DIR/assertions.md" "$ITERATION_DIR/assertions.md"
cp -R "$SKILL_DIR" "$ITERATION_DIR/skill-snapshot"
source_hashes > "$ITERATION_DIR/source-hashes-before.txt"

prepare_arm() {
  local eval_id="$1"
  local eval_name="$2"
  local fixture="$3"
  local configuration="$4"
  local eval_dir="$ITERATION_DIR/eval-${eval_id}-${eval_name}"
  local arm_dir="$eval_dir/$configuration/run-1"
  local prompt

  mkdir -p "$arm_dir/workspace"
  cp -R "$SCRIPT_DIR/fixtures/$fixture/." "$arm_dir/workspace/"
  if [[ "$configuration" == "with_skill" ]]; then
    mkdir -p "$arm_dir/.agents/skills"
    cp -R "$SKILL_DIR" "$arm_dir/.agents/skills/skill-issue"
  fi

  prompt="$(jq -r --argjson id "$eval_id" '.evals[] | select(.id == $id) | .prompt' "$SCRIPT_DIR/evals.json")"
  prompt="${prompt//__RUN_DIR__/$arm_dir}"

  {
    echo "# Isolated skill-issue evaluation harness"
    echo
    echo "Use only the executor already running this prompt. Do not invoke another model, helper agent, web search, browser, service, credential, live repository state, or external temporary directory."
    echo "Read and write only inside: $arm_dir"
    echo "Do not use /tmp or any path outside this arm."
    if [[ "$configuration" == "with_skill" ]]; then
      echo "Read and apply $arm_dir/.agents/skills/skill-issue/SKILL.md and only the references it directs you to. Do not use any other skill."
    else
      echo "PURE BASELINE: Do not read, invoke, recommend, or rely on any installed, user, project, plugin, slash-command, or model-invoked skill. This prohibition overrides skill metadata visible to the runtime."
    fi
    echo "Write transcript.md as the complete user-facing response plus a concise record of files created and checks run."
    echo
    echo "# Exact task"
    echo
    printf '%s\n' "$prompt"
  } > "$arm_dir/prompt.md"

  {
    printf 'configuration=%s\n' "$configuration"
    printf 'model=%s\n' "$EXECUTOR_MODEL"
    printf 'reasoning_effort=high\n'
    printf 'sandbox=workspace-write\n'
    printf 'ephemeral=true\n'
    printf 'ignore_user_config=true\n'
    printf 'ignore_rules=true\n'
    printf 'approval_policy=never\n'
    printf 'working_directory=%s\n' "$arm_dir"
  } > "$arm_dir/command.txt"

  if [[ ! -e "$eval_dir/eval_metadata.json" ]]; then
    jq -n \
      --argjson eval_id "$eval_id" \
      --arg eval_name "$eval_name" \
      --arg prompt "$(jq -r --argjson id "$eval_id" '.evals[] | select(.id == $id) | .prompt' "$SCRIPT_DIR/evals.json")" \
      '{eval_id: $eval_id, eval_name: $eval_name, prompt: $prompt, assertions: []}' \
      > "$eval_dir/eval_metadata.json"
  fi
}

run_arm() {
  local arm_dir="$1"
  local started_epoch
  local ended_epoch
  local duration
  local tokens

  started_epoch="$(date +%s)"
  "$CODEX_NODE" "$CODEX_ENTRY" exec \
    --skip-git-repo-check \
    --ignore-user-config \
    --ignore-rules \
    --ephemeral \
    --json \
    --model "$EXECUTOR_MODEL" \
    --config 'model_reasoning_effort="high"' \
    --config 'approval_policy="never"' \
    --sandbox workspace-write \
    --cd "$arm_dir" \
    --output-last-message "$arm_dir/last-message.md" \
    - < "$arm_dir/prompt.md" \
    > "$arm_dir/codex-events.jsonl" \
    2> "$arm_dir/stderr.log"
  ended_epoch="$(date +%s)"
  duration="$((ended_epoch - started_epoch))"

  test -s "$arm_dir/transcript.md"
  tokens="$(jq -s '[.[] | select(.type == "turn.completed") | .usage | (.input_tokens + .output_tokens)] | last // 0' "$arm_dir/codex-events.jsonl")"
  jq -n \
    --argjson tokens "$tokens" \
    --argjson duration "$duration" \
    '{total_tokens: $tokens, duration_ms: ($duration * 1000), total_duration_seconds: $duration, executor_duration_seconds: $duration}' \
    > "$arm_dir/timing.json"

  mkdir -p "$arm_dir/outputs"
  cp "$arm_dir/transcript.md" "$arm_dir/outputs/response.md"
  {
    echo "# Workspace files"
    while IFS= read -r file; do
      echo
      echo "## ${file#"$arm_dir/workspace/"}"
      echo
      echo '```'
      sed -n '1,400p' "$file"
      echo '```'
    done < <(find "$arm_dir/workspace" -type f | sort)
  } > "$arm_dir/outputs/workspace-files.md"
}

while IFS=$'\t' read -r eval_id eval_name fixture; do
  prepare_arm "$eval_id" "$eval_name" "$fixture" without_skill
  prepare_arm "$eval_id" "$eval_name" "$fixture" with_skill
done < <(jq -r '.evals[] | [.id, .name, .fixture] | @tsv' "$SCRIPT_DIR/evals.json")

pids=()
while IFS= read -r arm_dir; do
  run_arm "$arm_dir" &
  pids+=("$!")
done < <(find "$ITERATION_DIR" -mindepth 3 -maxdepth 3 -type d -name run-1 | sort)

failures=0
for pid in "${pids[@]}"; do
  if ! wait "$pid"; then
    failures=$((failures + 1))
  fi
done

if [[ "$failures" -ne 0 ]]; then
  echo "$failures executor arm(s) failed" >&2
  exit 1
fi

source_hashes > "$ITERATION_DIR/source-hashes-after.txt"
cmp "$ITERATION_DIR/source-hashes-before.txt" "$ITERATION_DIR/source-hashes-after.txt"
echo "executor batch complete: $ITERATION_DIR"
