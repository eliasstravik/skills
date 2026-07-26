#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "usage: LANDINGPAGE_RUN_KIND=bare-core|full $0 <iteration-directory>" >&2
  exit 64
fi

ITERATION_DIR="$1"
RUN_KIND="${LANDINGPAGE_RUN_KIND:-bare-core}"
EXPECTED_MODEL="gpt-5.6-sol"
SKILL_SNAPSHOT="$ITERATION_DIR/$RUN_KIND-SKILL.md"

case "$RUN_KIND" in
  bare-core|full) ;;
  *)
    echo "LANDINGPAGE_RUN_KIND must be bare-core or full" >&2
    exit 64
    ;;
esac

test -s "$SKILL_SNAPSHOT"
test "$(rg -c '^# Landingpage README$' "$SKILL_SNAPSHOT")" -eq 1
test "$(rg -c '^## Recipe$' "$SKILL_SNAPSHOT")" -eq 1
if [[ "$RUN_KIND" == "bare-core" ]]; then
  test "$(awk 'BEGIN { fences=0; body=0 } /^---$/ { fences++; next } fences >= 2 { body++ } END { print body }' "$SKILL_SNAPSHOT")" -le 20
  test "$(rg '^## Details$' "$SKILL_SNAPSHOT" | wc -l | tr -d ' ')" -eq 0
else
  test "$(awk 'BEGIN { fences=0; body=0 } /^---$/ { fences++; next } fences >= 2 { body++ } END { print body }' "$SKILL_SNAPSHOT")" -le 100
  test "$(rg -c '^## Details$' "$SKILL_SNAPSHOT")" -eq 1
  test "$(awk '/^## Details$/ { details=1; next } details && /^## / { details=0 } details { lines++ } END { print lines + 0 }' "$SKILL_SNAPSHOT")" -le 80
fi
cmp "$ITERATION_DIR/source-hashes-before.txt" "$ITERATION_DIR/source-hashes-after.txt"

test "$(find "$ITERATION_DIR" -mindepth 3 -maxdepth 3 -type d -name run-1 | wc -l | tr -d ' ')" -eq 8

while IFS= read -r arm; do
  test -s "$arm/command.txt"
  test -s "$arm/codex-events.jsonl"
  test -s "$arm/transcript.md"
  test -s "$arm/timing.json"
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

for events in "$ITERATION_DIR"/eval-*/with_skill/run-1/codex-events.jsonl; do
  rg -q '\.agents/skills/landingpage-readme/SKILL\.md' "$events"
done

for events in "$ITERATION_DIR"/eval-{1,2,3}-*/with_skill/run-1/codex-events.jsonl; do
  rg -q '\.agents/skills/copywriting/SKILL\.md' "$events"
done

if rg -q '\.agents/skills/copywriting/SKILL\.md' \
  "$ITERATION_DIR"/eval-4-*/with_skill/run-1/codex-events.jsonl; then
  echo "masked-dependency treatment read copywriting" >&2
  exit 1
fi

if rg -q 'evals/landingpage-readme/ground-truth|/ground-truth/' \
  "$ITERATION_DIR"/eval-*/{with_skill,without_skill}/run-1/{codex-events.jsonl,transcript.md}; then
  echo "executor discovered evaluator ground truth" >&2
  exit 1
fi

for events in "$ITERATION_DIR"/eval-*/{with_skill,without_skill}/run-1/codex-events.jsonl; do
  if jq -r 'select(.item.type == "command_execution") | .item.command' "$events" \
    | rg -q -- '-lc ["'\'']?[[:space:]]*gh[[:space:]]+|[\n;][[:space:]]*gh[[:space:]]+'; then
    echo "executor ran gh: $events" >&2
    exit 1
  fi
done

if [[ "$RUN_KIND" == "bare-core" ]]; then
  cat > "$ITERATION_DIR/contamination-scan.md" <<'REPORT'
# Bare-core contamination scan

- Bare skill form: PASS (one H1, one flat Recipe, 20 body lines, no Details)
- Executor count: PASS (four fresh pairs; eight isolated arms)
- Executor model: PASS (`gpt-5.6-sol` in every command record)
- Baseline purity: PASS (no baseline skill read or invocation)
- Treatment loading: PASS (landingpage-readme in all four; copywriting only in normal cases)
- Masked dependency: PASS (copywriting was not read in eval 4)
- Ground-truth secrecy: PASS
- GitHub safety: PASS (no `gh` command executed)
- Source integrity: PASS (candidate, dependency, and fixture hashes unchanged)
REPORT
else
  cat > "$ITERATION_DIR/contamination-scan.md" <<'REPORT'
# Full-treatment contamination scan

- Full skill form: PASS (one H1, one flat Recipe, one earned Details section, within 100 body lines)
- Executor count: PASS (four fresh pairs; eight isolated arms)
- Executor model: PASS (`gpt-5.6-sol` in every command record)
- Baseline purity: PASS (no baseline skill read or invocation)
- Treatment loading: PASS (landingpage-readme in all four; copywriting only in normal cases)
- Masked dependency: PASS (copywriting was not read in eval 4)
- Ground-truth secrecy: PASS
- GitHub safety: PASS (no `gh` command executed)
- Source integrity: PASS (candidate, dependency, and fixture hashes unchanged)
REPORT
fi

echo "contamination scan passed: $ITERATION_DIR"
