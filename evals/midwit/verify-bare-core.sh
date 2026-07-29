#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "usage: $0 <iteration-directory>" >&2
  exit 64
fi

ITERATION_DIR="$1"
RUN_KIND="${MIDWIT_RUN_KIND:-bare-core}"
EXPECTED_MODEL="gpt-5.6-sol"
SKILL_SNAPSHOT="$ITERATION_DIR/$RUN_KIND-treatment-SKILL.md"

test -s "$SKILL_SNAPSHOT"
test "$(rg -c '^# Midwit$' "$SKILL_SNAPSHOT")" -eq 1
test "$(rg -c '^## Rules$' "$SKILL_SNAPSHOT")" -eq 1
test "$(rg -c '^- ' "$SKILL_SNAPSHOT")" -eq 10
if [[ "$RUN_KIND" == "bare-core" ]]; then
  test "$(awk 'BEGIN { fences=0; body=0 } /^---$/ { fences++; next } fences >= 2 { body++ } END { print body }' "$SKILL_SNAPSHOT")" -le 20
  test "$(rg '^## Details$' "$SKILL_SNAPSHOT" | wc -l | tr -d ' ')" -eq 0
else
  test "$(awk 'BEGIN { fences=0; body=0 } /^---$/ { fences++; next } fences >= 2 { body++ } END { print body }' "$SKILL_SNAPSHOT")" -le 100
  test "$(rg -c '^## Details$' "$SKILL_SNAPSHOT")" -eq 1
  test "$(awk '/^## Details$/ { details=1; next } details && /^## / { details=0 } details { lines++ } END { print lines + 0 }' "$SKILL_SNAPSHOT")" -le 80
fi
cmp "$ITERATION_DIR/source-hashes-before.txt" "$ITERATION_DIR/source-hashes-after-baseline.txt"
cmp "$ITERATION_DIR/source-hashes-before-treatment.txt" "$ITERATION_DIR/source-hashes-after.txt"

test "$(find "$ITERATION_DIR" -mindepth 3 -maxdepth 3 -type d -name run-1 | wc -l | tr -d ' ')" -eq 10

while IFS= read -r arm; do
  test -s "$arm/command.txt"
  test -s "$arm/codex-events.jsonl"
  test -s "$arm/transcript.md"
  test -s "$arm/timing.json"
  test -s "$arm/outputs/response.md"
  rg -q "^model=$EXPECTED_MODEL$" "$arm/command.txt"
  test "$(jq -s '[.[] | select(.type == "turn.completed")] | length' "$arm/codex-events.jsonl")" -eq 1
done < <(find "$ITERATION_DIR" -mindepth 3 -maxdepth 3 -type d -name run-1 | sort)

for events in "$ITERATION_DIR"/eval-*/without_skill/run-1/codex-events.jsonl; do
  if jq -r 'select(.item.type == "command_execution") | [.item.command, .item.aggregated_output] | @tsv' "$events" \
    | rg -q '\.agents/skills|SKILL\.md'; then
    echo "baseline skill contamination: $events" >&2
    exit 1
  fi
done

for events in "$ITERATION_DIR"/eval-*/{with_skill,without_skill}/run-1/codex-events.jsonl; do
  if jq -r 'select(.item.type == "command_execution") | .item.command' "$events" \
    | rg -q '(^|[[:space:]"'\''])/(private/)?(var/)?tmp(/|[[:space:]"'\''])'; then
    echo "executor used an external temporary path: $events" >&2
    exit 1
  fi
done

for events in "$ITERATION_DIR"/eval-*/with_skill/run-1/codex-events.jsonl; do
  rg -q '\.agents/skills/midwit/SKILL\.md' "$events"
done

if [[ "$RUN_KIND" == "bare-core" ]]; then
  FORM_RESULT="one H1, one flat Rules primitive, ten imperatives, no Details, at most 20 body lines"
else
  FORM_RESULT="one H1, one flat Rules primitive, ten core imperatives, one assertion-earned Details line, at most 100 body lines"
fi

cat > "$ITERATION_DIR/contamination-scan.md" <<REPORT
# $RUN_KIND contamination scan

- Skill form: PASS ($FORM_RESULT)
- Executor count: PASS (five fresh pairs; ten isolated arms)
- Executor model: PASS (gpt-5.6-sol in every command record)
- Baseline purity: PASS (no baseline skill read or invocation)
- Treatment loading: PASS (the run-local midwit skill was read in every treatment)
- Transcript contract: PASS (all ten arms saved a transcript and review output)
- External-path isolation: PASS
- Source integrity: PASS (each batch preserved its candidate, eval sources, and fixtures)
REPORT

echo "contamination scan passed: $ITERATION_DIR"
