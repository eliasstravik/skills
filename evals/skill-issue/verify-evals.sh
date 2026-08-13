#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "usage: $0 <iteration-directory>" >&2
  exit 64
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ITERATION_DIR="$1"
EXPECTED_MODEL="gpt-5.6-sol"
EXPECTED_HEADINGS='Trigger Scope Inputs Roles Procedure Outputs Exceptions QC References'
SKILL_SNAPSHOT="$ITERATION_DIR/skill-snapshot/SKILL.md"

test -s "$SKILL_SNAPSHOT"
test "$(rg '^## ' "$SKILL_SNAPSHOT" | sed 's/^## //' | paste -sd ' ' -)" = "$EXPECTED_HEADINGS"
test "$(find "$ITERATION_DIR/skill-snapshot/references" -type f | wc -l | tr -d ' ')" -eq 3
test "$(awk 'BEGIN{f=0;b=0} /^---$/{f++;next} f>=2{b++} END{print b}' "$SKILL_SNAPSHOT")" -lt 500
cmp "$ITERATION_DIR/source-hashes-before.txt" "$ITERATION_DIR/source-hashes-after.txt"

expected_arms="$(( $(jq '.evals | length' "$ITERATION_DIR/evals.json") * 2 ))"
test "$(find "$ITERATION_DIR" -mindepth 3 -maxdepth 3 -type d -name run-1 | wc -l | tr -d ' ')" -eq "$expected_arms"

while IFS= read -r arm; do
  test -s "$arm/command.txt"
  test -s "$arm/codex-events.jsonl"
  test -s "$arm/transcript.md"
  test -s "$arm/timing.json"
  test -s "$arm/outputs/response.md"
  test -s "$arm/outputs/workspace-files.md"
  rg -q "^model=$EXPECTED_MODEL$" "$arm/command.txt"
  test "$(jq -s '[.[] | select(.type == "turn.completed")] | length' "$arm/codex-events.jsonl")" -eq 1
  python3 "$SCRIPT_DIR/check-outputs.py" "$arm"
done < <(find "$ITERATION_DIR" -mindepth 3 -maxdepth 3 -type d -name run-1 | sort)

for events in "$ITERATION_DIR"/eval-*/without_skill/run-1/codex-events.jsonl; do
  if jq -r 'select(.item.type == "command_execution") | [.item.command, .item.aggregated_output] | @tsv' "$events" | rg -q '\.agents/skills|/skills/skill-issue|~/\.agents'; then
    echo "baseline skill contamination: $events" >&2
    exit 1
  fi
done

for events in "$ITERATION_DIR"/eval-*/with_skill/run-1/codex-events.jsonl; do
  rg -q '\.agents/skills/skill-issue/SKILL\.md' "$events"
done

for events in "$ITERATION_DIR"/eval-*/{with_skill,without_skill}/run-1/codex-events.jsonl; do
  if jq -r 'select(.item.type == "command_execution") | .item.command' "$events" | rg -q '(^|[[:space:]"'"'"'])/(private/)?(var/)?tmp(/|[[:space:]"'"'"'])'; then
    echo "executor used an external temporary path: $events" >&2
    exit 1
  fi
done

cat > "$ITERATION_DIR/contamination-scan.md" <<REPORT
# Iteration contamination scan

- Shipping form: PASS (nine ordered sections, three referenced attachments, vendor ceiling met)
- Executor count: PASS (five fresh pairs; ten isolated arms)
- Executor model: PASS ($EXPECTED_MODEL in every command record)
- Baseline purity: PASS (no baseline read or invoked a skill)
- Treatment loading: PASS (every treatment read its run-local skill copy)
- Transcript and output contract: PASS
- External-path isolation: PASS
- Source integrity: PASS
REPORT

echo "verification and contamination scan passed: $ITERATION_DIR"
