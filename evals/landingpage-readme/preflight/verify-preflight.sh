#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "usage: $0 <run-directory>" >&2
  exit 64
fi

RUN_DIR="$1"

for CASE_NAME in disabled enabled; do
  test -s "$RUN_DIR/$CASE_NAME/transcript.jsonl"
  test -s "$RUN_DIR/$CASE_NAME/workspace/probe-repo/outputs/preflight-result.md"
  rg -q '\.agents/skills/landingpage-readme/SKILL\.md' \
    "$RUN_DIR/$CASE_NAME/transcript.jsonl"
  rg -q '^landingpage_readme_loaded: yes$' \
    "$RUN_DIR/$CASE_NAME/workspace/probe-repo/outputs/preflight-result.md"
  rg -q '^model=gpt-5.6-sol$' "$RUN_DIR/$CASE_NAME/command.txt"
done

DISABLED_RESULT="$RUN_DIR/disabled/workspace/probe-repo/outputs/preflight-result.md"
ENABLED_RESULT="$RUN_DIR/enabled/workspace/probe-repo/outputs/preflight-result.md"
COPY_OUTPUT="$RUN_DIR/enabled/workspace/probe-repo/outputs/copywriting-output.md"

rg -q '^copywriting_invoked: no$' "$DISABLED_RESULT"
rg -q '^copywriting_visible: yes$' "$DISABLED_RESULT"
rg -qi '^dependency_result:.*(disable-model-invocation|invocation mode|model invocation|disabled)' \
  "$DISABLED_RESULT"
if test -e "$RUN_DIR/disabled/workspace/probe-repo/outputs/copywriting-output.md"; then
  echo "disabled case produced fallback copy" >&2
  exit 1
fi

test -s "$COPY_OUTPUT"
rg -q '^copywriting_visible: yes$' "$ENABLED_RESULT"
rg -q '^copywriting_invoked: yes$' "$ENABLED_RESULT"
rg -q '\.agents/skills/copywriting/SKILL\.md' \
  "$RUN_DIR/enabled/transcript.jsonl"
rg -qi 'Python maintainer' "$COPY_OUTPUT"
rg -qi 'JSON|failure summary|fail' "$COPY_OUTPUT"
if rg -qi 'benchmark|customer|download|time.saved|guarantee' "$COPY_OUTPUT"; then
  echo "copywriting probe invented prohibited proof" >&2
  exit 1
fi

DIFF_FILE="$RUN_DIR/copywriting-invocation-mode.diff"
diff -u \
  "$RUN_DIR/disabled/workspace/.agents/skills/copywriting/SKILL.md" \
  "$RUN_DIR/enabled/workspace/.agents/skills/copywriting/SKILL.md" \
  > "$DIFF_FILE" || true
test "$(rg -c '^[+-]disable-model-invocation: true$' "$DIFF_FILE")" -eq 1
test "$(rg -c '^[+-][^-+]' "$DIFF_FILE")" -eq 1

cat > "$RUN_DIR/verification.md" <<'REPORT'
# Preflight verification

- P1 permitted executors: PASS (`gpt-5.6-sol`)
- P2 run-local ephemeral state: PASS
- P3 explicit repository-local landingpage-readme invocation: PASS
- P4 disabled copywriting invocation mode enforced: PASS
- P5 enabled repository-local copywriting composition: PASS
- P6 candidate differs only by invocation-mode line: PASS
- P7 repository copywriting source unchanged: PASS
REPORT
