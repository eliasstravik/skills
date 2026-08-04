#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 2 ]]; then
  echo "usage: $0 <baseline|treatment> <iteration-directory>" >&2
  exit 64
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(git -C "$SCRIPT_DIR" rev-parse --show-toplevel)"
ARM_KIND="$1"
ITERATION_DIR="$2"
RUN_KIND="${MIDWIT_RUN_KIND:-bare-core}"
EXECUTOR_MODEL="gpt-5.6-sol"
SKILL_PATH="$REPO_ROOT/skills/midwit/SKILL.md"
BASELINE_SKILL_PATH="${MIDWIT_BASELINE_SKILL_PATH:-}"

case "$ARM_KIND" in
  baseline) CONFIGURATION="without_skill" ;;
  treatment) CONFIGURATION="with_skill" ;;
  *)
    echo "arm kind must be baseline or treatment" >&2
    exit 64
    ;;
esac

case "$ITERATION_DIR" in
  "$REPO_ROOT"/evals/midwit/runs/"$RUN_KIND"/*) ;;
  *)
    echo "iteration directory must be inside evals/midwit/runs/$RUN_KIND/" >&2
    exit 64
    ;;
esac

case "$RUN_KIND" in
  bare-core|full) ;;
  *)
    echo "MIDWIT_RUN_KIND must be bare-core or full" >&2
    exit 64
    ;;
esac

test -s "$SKILL_PATH"
if [[ -n "$BASELINE_SKILL_PATH" ]]; then
  test -s "$BASELINE_SKILL_PATH"
fi
test "$(rg -c '^# Midwit$' "$SKILL_PATH")" -eq 1
test "$(rg -c '^## Rules$' "$SKILL_PATH")" -eq 1
test "$(rg -c '^- ' "$SKILL_PATH")" -eq 10
if [[ "$RUN_KIND" == "bare-core" ]]; then
  test "$(rg '^## Details$' "$SKILL_PATH" | wc -l | tr -d ' ')" -eq 0
  test "$(awk 'BEGIN { fences=0; body=0 } /^---$/ { fences++; next } fences >= 2 { body++ } END { print body }' "$SKILL_PATH")" -le 20
else
  test "$(rg -c '^## Details$' "$SKILL_PATH")" -eq 1
  test "$(awk 'BEGIN { fences=0; body=0 } /^---$/ { fences++; next } fences >= 2 { body++ } END { print body }' "$SKILL_PATH")" -le 100
  test "$(awk '/^## Details$/ { details=1; next } details && /^## / { details=0 } details { lines++ } END { print lines + 0 }' "$SKILL_PATH")" -le 80
fi

write_source_hashes() {
  git -C "$REPO_ROOT" hash-object \
    "$SKILL_PATH" \
    "$SCRIPT_DIR/evals.json" \
    "$SCRIPT_DIR/assertions.md"
  find "$SCRIPT_DIR/fixtures" -type f -print0 \
    | sort -z \
    | xargs -0 git -C "$REPO_ROOT" hash-object
  if [[ -n "$BASELINE_SKILL_PATH" ]]; then
    git -C "$REPO_ROOT" hash-object "$BASELINE_SKILL_PATH"
  fi
}

if [[ "$ARM_KIND" == "baseline" ]]; then
  if [[ -e "$ITERATION_DIR" ]]; then
    echo "refusing to overwrite existing iteration directory: $ITERATION_DIR" >&2
    exit 73
  fi
  mkdir -p "$ITERATION_DIR"
  cp "$SCRIPT_DIR/evals.json" "$ITERATION_DIR/evals.json"
  cp "$SCRIPT_DIR/assertions.md" "$ITERATION_DIR/assertions.md"
  cp "$SKILL_PATH" "$ITERATION_DIR/$RUN_KIND-SKILL.md"
  if [[ -n "$BASELINE_SKILL_PATH" ]]; then
    cp "$BASELINE_SKILL_PATH" "$ITERATION_DIR/old-skill-SKILL.md"
    printf 'old_skill\n' > "$ITERATION_DIR/baseline-kind.txt"
  else
    printf 'no_skill\n' > "$ITERATION_DIR/baseline-kind.txt"
  fi
  write_source_hashes > "$ITERATION_DIR/source-hashes-before.txt"
else
  test -s "$ITERATION_DIR/source-hashes-before.txt"
  test -s "$ITERATION_DIR/$RUN_KIND-SKILL.md"
  write_source_hashes > "$ITERATION_DIR/source-hashes-before-treatment.txt"
  cp "$SKILL_PATH" "$ITERATION_DIR/$RUN_KIND-treatment-SKILL.md"
  cp "$SCRIPT_DIR/assertions.md" "$ITERATION_DIR/assertions.md"
  if find "$ITERATION_DIR"/eval-* -type d -path '*/with_skill/run-1' -print -quit | rg -q .; then
    echo "refusing to overwrite an existing treatment arm" >&2
    exit 73
  fi
fi

prepare_arm() {
  local eval_id="$1"
  local eval_name="$2"
  local fixture="$3"
  local eval_dir="$ITERATION_DIR/eval-${eval_id}-${eval_name}"
  local arm_dir="$eval_dir/$CONFIGURATION/run-1"
  local workspace_dir="$arm_dir/workspace"
  local prompt

  mkdir -p "$workspace_dir"
  if [[ -n "$fixture" ]]; then
    cp -R "$SCRIPT_DIR/fixtures/$fixture/." "$workspace_dir/"
  fi

  if [[ "$CONFIGURATION" == "with_skill" ]]; then
    mkdir -p "$arm_dir/.agents/skills/midwit"
    cp "$SKILL_PATH" "$arm_dir/.agents/skills/midwit/SKILL.md"
  elif [[ -n "$BASELINE_SKILL_PATH" ]]; then
    mkdir -p "$arm_dir/.agents/skills/midwit"
    cp "$BASELINE_SKILL_PATH" "$arm_dir/.agents/skills/midwit/SKILL.md"
  fi

  prompt="$(jq -r --argjson id "$eval_id" '.evals[] | select(.id == $id) | .prompt' "$SCRIPT_DIR/evals.json")"
  prompt="${prompt//__RUN_DIR__/$arm_dir}"

  {
    echo "# Isolated midwit $RUN_KIND evaluation harness"
    echo
    echo "Use only the GPT-5.6 Sol executor already running this prompt. Do not invoke another model, helper agent, skill outside this arm, web search, browser, service, credential, live repository state, or external temporary directory."
    echo "Read and write only inside: $arm_dir"
    echo "Do not use /tmp or any other path outside this arm."
    if [[ "$CONFIGURATION" == "with_skill" ]]; then
      echo "The user explicitly invoked /midwit. Read and apply $arm_dir/.agents/skills/midwit/SKILL.md for the complete scripted session."
    elif [[ -n "$BASELINE_SKILL_PATH" ]]; then
      echo "OLD-SKILL CONTROL: The user explicitly invoked /midwit. Read and apply $arm_dir/.agents/skills/midwit/SKILL.md for the complete scripted session. Do not read the revised repository skill."
    else
      echo "PURE BASELINE: Do not read, invoke, recommend, or rely on any installed, user, project, plugin, slash-command, or model-invoked skill. Treat /midwit below as ordinary user wording only. This prohibition overrides any skill metadata visible to the runtime."
    fi
    echo "Treat SCRIPTED USER REPLIES as later user turns. Consume each reply only after its stated condition, never volunteer a later reply early, and stop if a needed ruling has no matching reply."
    echo "Write transcript.md as the complete ordered user/assistant conversation, including every consumed scripted user turn and every assistant response."
    echo
    echo "# Exact approved task"
    echo
    printf '%s\n' "$prompt"
  } > "$arm_dir/prompt.md"

  {
    printf 'configuration=%s\n' "$CONFIGURATION"
    if [[ "$CONFIGURATION" == "without_skill" && -n "$BASELINE_SKILL_PATH" ]]; then
      printf 'baseline_kind=old_skill\n'
    elif [[ "$CONFIGURATION" == "without_skill" ]]; then
      printf 'baseline_kind=no_skill\n'
    fi
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
  codex exec \
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
    '{
      total_tokens: $tokens,
      duration_ms: ($duration * 1000),
      total_duration_seconds: $duration,
      executor_duration_seconds: $duration
    }' > "$arm_dir/timing.json"

  mkdir -p "$arm_dir/outputs/workspace"
  cp -R "$arm_dir/workspace/." "$arm_dir/outputs/workspace/"
  cp "$arm_dir/transcript.md" "$arm_dir/outputs/response.md"
}

while IFS=$'\t' read -r eval_id eval_name fixture; do
  prepare_arm "$eval_id" "$eval_name" "$fixture"
done < <(jq -r '.evals[] | [.id, .name, (.fixture // "")] | @tsv' "$SCRIPT_DIR/evals.json")

pids=()
while IFS= read -r arm_dir; do
  run_arm "$arm_dir" &
  pids+=("$!")
done < <(find "$ITERATION_DIR" -mindepth 3 -maxdepth 3 -type d -path "*/$CONFIGURATION/run-1" | sort)

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

if [[ "$ARM_KIND" == "baseline" ]]; then
  write_source_hashes > "$ITERATION_DIR/source-hashes-after-baseline.txt"
  cmp "$ITERATION_DIR/source-hashes-before.txt" "$ITERATION_DIR/source-hashes-after-baseline.txt"
else
  write_source_hashes > "$ITERATION_DIR/source-hashes-after.txt"
  cmp "$ITERATION_DIR/source-hashes-before-treatment.txt" "$ITERATION_DIR/source-hashes-after.txt"
fi

echo "$ARM_KIND executor batch complete: $ITERATION_DIR"
