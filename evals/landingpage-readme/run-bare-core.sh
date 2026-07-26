#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "usage: LANDINGPAGE_RUN_KIND=bare-core|full $0 <new-iteration-directory>" >&2
  exit 64
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(git -C "$SCRIPT_DIR" rev-parse --show-toplevel)"
ITERATION_DIR="$1"
RUN_KIND="${LANDINGPAGE_RUN_KIND:-bare-core}"
EXECUTOR_MODEL="gpt-5.6-sol"
SKILL_PATH="$REPO_ROOT/skills/landingpage-readme/SKILL.md"
COPYWRITING_PATH="$REPO_ROOT/skills/copywriting/SKILL.md"

case "$RUN_KIND" in
  bare-core|full) ;;
  *)
    echo "LANDINGPAGE_RUN_KIND must be bare-core or full" >&2
    exit 64
    ;;
esac

case "$ITERATION_DIR" in
  "$REPO_ROOT"/evals/landingpage-readme/runs/"$RUN_KIND"/*) ;;
  *)
    echo "iteration directory must be a new evals/landingpage-readme/runs/$RUN_KIND/* path" >&2
    exit 64
    ;;
esac

if [[ -e "$ITERATION_DIR" ]]; then
  echo "refusing to overwrite existing iteration directory: $ITERATION_DIR" >&2
  exit 73
fi

test -s "$SKILL_PATH"
test -s "$COPYWRITING_PATH"
test "$(rg -c '^# Landingpage README$' "$SKILL_PATH")" -eq 1
test "$(rg -c '^## Recipe$' "$SKILL_PATH")" -eq 1
if [[ "$RUN_KIND" == "bare-core" ]]; then
  test "$(rg '^## Details$' "$SKILL_PATH" | wc -l | tr -d ' ')" -eq 0
  test "$(awk 'BEGIN { fences=0; body=0 } /^---$/ { fences++; next } fences >= 2 { body++ } END { print body }' "$SKILL_PATH")" -le 20
else
  test "$(rg -c '^## Details$' "$SKILL_PATH")" -eq 1
  test "$(awk 'BEGIN { fences=0; body=0 } /^---$/ { fences++; next } fences >= 2 { body++ } END { print body }' "$SKILL_PATH")" -le 100
  test "$(awk '/^## Details$/ { details=1; next } details && /^## / { details=0 } details { lines++ } END { print lines + 0 }' "$SKILL_PATH")" -le 80
fi

mkdir -p "$ITERATION_DIR"
cp "$SCRIPT_DIR/evals.json" "$ITERATION_DIR/evals.json"
cp "$SCRIPT_DIR/assertions.md" "$ITERATION_DIR/assertions.md"
cp "$SKILL_PATH" "$ITERATION_DIR/$RUN_KIND-SKILL.md"

SOURCE_HASHES="$ITERATION_DIR/source-hashes-before.txt"
write_source_hashes() {
  git -C "$REPO_ROOT" hash-object "$SKILL_PATH" "$COPYWRITING_PATH"
  find "$SCRIPT_DIR/fixtures" -type f -print0 \
    | sort -z \
    | xargs -0 git -C "$REPO_ROOT" hash-object
}
write_source_hashes > "$SOURCE_HASHES"

prepare_arm() {
  local eval_id="$1"
  local eval_name="$2"
  local fixture="$3"
  local configuration="$4"
  local arm_dir="$ITERATION_DIR/eval-${eval_id}-${eval_name}/${configuration}/run-1"
  local workspace_dir="$arm_dir/workspace"
  local prompt

  mkdir -p "$workspace_dir"
  cp -R "$SCRIPT_DIR/fixtures/$fixture/." "$workspace_dir/"
  git -C "$workspace_dir" init --quiet
  git -C "$workspace_dir" add .
  git -C "$workspace_dir" \
    -c user.name="Landingpage README Eval" \
    -c user.email="eval@example.invalid" \
    commit --quiet -m "Stage pristine fixture"

  if [[ "$configuration" == "with_skill" ]]; then
    mkdir -p "$arm_dir/.agents/skills/landingpage-readme"
    mkdir -p "$arm_dir/.agents/skills/copywriting"
    cp "$SKILL_PATH" "$arm_dir/.agents/skills/landingpage-readme/SKILL.md"
    cp "$COPYWRITING_PATH" "$arm_dir/.agents/skills/copywriting/SKILL.md"
  fi

  prompt="$(jq -r --argjson id "$eval_id" '.evals[] | select(.id == $id) | .prompt' "$SCRIPT_DIR/evals.json")"
  prompt="${prompt//__RUN_DIR__/$arm_dir}"

  {
    echo "# Isolated evaluation harness"
    echo
    echo "Use only the GPT-5.6 Sol executor already running this prompt. Do not invoke another model, helper agent, skill outside this arm, web search, browser, service, credential, live GitHub state, or external temporary directory."
    echo "Read and write only inside: $arm_dir"
    echo "Treat $workspace_dir as the synthetic repository. Do not read or discover evaluator ground truth."
    if [[ "$configuration" == "with_skill" ]]; then
      echo "The user explicitly invoked /landingpage-readme. Read and follow $arm_dir/.agents/skills/landingpage-readme/SKILL.md. When its Recipe invokes /copywriting, read and follow the staged copywriting skill in this arm, except where the signed eval-4 fiction forbids that read."
    else
      echo "PURE BASELINE: Do not read, invoke, recommend, or rely on any installed, user, project, plugin, slash-command, or model-invoked skill. Treat /landingpage-readme and /copywriting below as ordinary user wording only. This prohibition overrides any skill metadata visible to the runtime."
    fi
    echo "Treat the scripted replies as the user's later turns: consume a reply only after its matching question or gate, continue in this same one-shot run, and preserve the sequence in transcript.md."
    echo "Never execute gh. Save proposed commands only where the task requests."
    echo "Save the complete user-facing sequence verbatim to $arm_dir/transcript.md before ending."
    echo
    echo "# Exact approved task"
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

  if [[ ! -s "$arm_dir/transcript.md" ]]; then
    cp "$arm_dir/last-message.md" "$arm_dir/transcript.md"
  fi

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

  mkdir -p "$arm_dir/outputs"
  [[ -s "$arm_dir/workspace/README.md" ]] && cp "$arm_dir/workspace/README.md" "$arm_dir/outputs/README.md"
  [[ -s "$arm_dir/workspace/outputs/social-preview.md" ]] && cp "$arm_dir/workspace/outputs/social-preview.md" "$arm_dir/outputs/social-preview.md"
  [[ -s "$arm_dir/workspace/outputs/gh-commands.sh" ]] && cp "$arm_dir/workspace/outputs/gh-commands.sh" "$arm_dir/outputs/gh-commands.sh"
  cp "$arm_dir/transcript.md" "$arm_dir/outputs/response.md"
}

while IFS=$'\t' read -r eval_id eval_name fixture; do
  eval_dir="$ITERATION_DIR/eval-${eval_id}-${eval_name}"
  prepare_arm "$eval_id" "$eval_name" "$fixture" "with_skill"
  prepare_arm "$eval_id" "$eval_name" "$fixture" "without_skill"
  jq -n \
    --argjson eval_id "$eval_id" \
    --arg eval_name "$eval_name" \
    --arg prompt "$(jq -r --argjson id "$eval_id" '.evals[] | select(.id == $id) | .prompt' "$SCRIPT_DIR/evals.json")" \
    '{eval_id: $eval_id, eval_name: $eval_name, prompt: $prompt, assertions: []}' \
    > "$eval_dir/eval_metadata.json"
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

write_source_hashes > "$ITERATION_DIR/source-hashes-after.txt"
cmp "$SOURCE_HASHES" "$ITERATION_DIR/source-hashes-after.txt"

echo "executor batch complete: $ITERATION_DIR"
