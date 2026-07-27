#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "usage: $0 <new-run-directory>" >&2
  exit 64
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(git -C "$SCRIPT_DIR" rev-parse --show-toplevel)"
RUN_DIR="$1"
MODEL_ID="gpt-5.6-sol"

case "$RUN_DIR" in
  "$REPO_ROOT"/evals/landingpage-readme/runs/preflight/*) ;;
  *)
    echo "run directory must be a new evals/landingpage-readme/runs/preflight/* path" >&2
    exit 64
    ;;
esac

if [[ -e "$RUN_DIR" ]]; then
  echo "refusing to overwrite existing run directory: $RUN_DIR" >&2
  exit 73
fi

COPYWRITING_SOURCE_HASH="$(git -C "$REPO_ROOT" hash-object skills/copywriting/SKILL.md)"

for CASE_NAME in disabled enabled; do
  CASE_DIR="$RUN_DIR/$CASE_NAME"
  WORKSPACE_DIR="$CASE_DIR/workspace"
  mkdir -p "$WORKSPACE_DIR/.agents/skills/copywriting"
  mkdir -p "$WORKSPACE_DIR/probe-repo/outputs"
  cp -R "$SCRIPT_DIR/skills/landingpage-readme" "$WORKSPACE_DIR/.agents/skills/"
  cp -R "$SCRIPT_DIR/probe-repo/." "$WORKSPACE_DIR/probe-repo/"
  cp "$REPO_ROOT/skills/copywriting/SKILL.md" "$WORKSPACE_DIR/.agents/skills/copywriting/SKILL.md"

  if [[ "$CASE_NAME" == "enabled" ]]; then
    sed -i.bak '/^disable-model-invocation: true$/d' \
      "$WORKSPACE_DIR/.agents/skills/copywriting/SKILL.md"
    test -f "$WORKSPACE_DIR/.agents/skills/copywriting/SKILL.md.bak"
    rm "$WORKSPACE_DIR/.agents/skills/copywriting/SKILL.md.bak"
  fi

  git -C "$WORKSPACE_DIR" init --quiet
  git -C "$WORKSPACE_DIR" add .
  git -C "$WORKSPACE_DIR" \
    -c user.name="Landingpage README Preflight" \
    -c user.email="preflight@example.invalid" \
    commit --quiet -m "Stage $CASE_NAME preflight workspace"

  {
    printf 'case=%s\n' "$CASE_NAME"
    printf 'model=%s\n' "$MODEL_ID"
    printf 'sandbox=workspace-write\n'
    printf 'ephemeral=true\n'
    printf 'ignore_user_config=true\n'
    printf 'ignore_rules=true\n'
    printf 'approval_policy=never\n'
    printf 'working_directory=%s\n' "$WORKSPACE_DIR"
  } > "$CASE_DIR/command.txt"

  codex exec \
    --skip-git-repo-check \
    --ignore-user-config \
    --ignore-rules \
    --ephemeral \
    --json \
    --model "$MODEL_ID" \
    --config 'model_reasoning_effort="high"' \
    --config 'approval_policy="never"' \
    --sandbox workspace-write \
    --cd "$WORKSPACE_DIR" \
    --output-last-message "$CASE_DIR/last-message.md" \
    - < "$SCRIPT_DIR/$CASE_NAME-prompt.md" \
    > "$CASE_DIR/transcript.jsonl" \
    2> "$CASE_DIR/stderr.log"
done

COPYWRITING_AFTER_HASH="$(git -C "$REPO_ROOT" hash-object skills/copywriting/SKILL.md)"
if [[ "$COPYWRITING_SOURCE_HASH" != "$COPYWRITING_AFTER_HASH" ]]; then
  echo "repository copywriting source changed during preflight" >&2
  exit 1
fi

"$SCRIPT_DIR/verify-preflight.sh" "$RUN_DIR"
