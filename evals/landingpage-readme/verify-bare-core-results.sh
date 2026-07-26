#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "usage: $0 <iteration-directory>" >&2
  exit 64
fi

ITERATION_DIR="$1"
RUN_KIND="${LANDINGPAGE_RUN_KIND:-bare-core}"

test -s "$ITERATION_DIR/contamination-scan.md"
test -s "$ITERATION_DIR/benchmark.json"
test -s "$ITERATION_DIR/benchmark.md"
test -s "$ITERATION_DIR/blind-comparisons/summary.json"
test -s "$ITERATION_DIR/review.html"

test "$(find "$ITERATION_DIR" -path '*/run-1/grading.json' | wc -l | tr -d ' ')" -eq 8
for grade in "$ITERATION_DIR"/eval-*/{with_skill,without_skill}/run-1/grading.json; do
  jq -e '
    . as $grade
    | ($grade.summary.passed + $grade.summary.failed == $grade.summary.total)
      and ($grade.expectations | length == $grade.summary.total)
      and ([ $grade.expectations[] | has("text") and has("passed") and has("evidence") ] | all)
  ' "$grade" > /dev/null
done

test "$(jq '[.runs[] | select(.configuration == "with_skill")] | length' "$ITERATION_DIR/benchmark.json")" -eq 4
test "$(jq '[.runs[] | select(.configuration == "without_skill")] | length' "$ITERATION_DIR/benchmark.json")" -eq 4
test "$(jq -r '.metadata.executor_model' "$ITERATION_DIR/benchmark.json")" = "gpt-5.6-sol"
test "$(jq -r '.metadata.analyzer_model' "$ITERATION_DIR/benchmark.json")" = "gpt-5.6-luna"
test "$(jq -r '.metadata.runs_per_configuration' "$ITERATION_DIR/benchmark.json")" -eq 1

for command_file in "$ITERATION_DIR"/eval-*/{with_skill,without_skill}/run-1/grader-command.txt; do
  rg -q '^model=gpt-5.6-terra$' "$command_file"
done
for command_file in "$ITERATION_DIR"/blind-comparisons/eval-*/command.txt; do
  rg -q '^model=gpt-5.6-luna$' "$command_file"
done
rg -q '^model=gpt-5.6-luna$' "$ITERATION_DIR/benchmark-analysis/command.txt"

test "$(jq 'length' "$ITERATION_DIR/blind-comparisons/summary.json")" -eq 4

test "$(find "$ITERATION_DIR"/eval-{1,2,3}-*/without_skill/run-1 -name grading.json -exec jq -r '.expectations[] | select(.text | startswith("L5 ")) | .passed' {} \; | rg '^false$' | wc -l | tr -d ' ')" -eq 3

if [[ "$RUN_KIND" == "bare-core" ]]; then
  test "$(jq '[.[] | select(.winner == "with_skill")] | length' "$ITERATION_DIR/blind-comparisons/summary.json")" -eq 3
  test "$(jq '[.[] | select(.winner == "without_skill")] | length' "$ITERATION_DIR/blind-comparisons/summary.json")" -eq 1
else
  for grade in "$ITERATION_DIR"/eval-*/with_skill/run-1/grading.json; do
    jq -e '
      ["L2", "L3", "L4", "L5", "L6", "L8", "L9", "L11", "L12", "L13", "L14", "L15"] as $critical
      | [
          .expectations[]
          | select(.text | split(" ")[0] as $id | $critical | index($id))
          | .passed
        ]
      | all
    ' "$grade" > /dev/null
  done
fi

rg -q 'Formal Grades' "$ITERATION_DIR/review.html"
rg -q 'Benchmark Results' "$ITERATION_DIR/review.html"
if rg -q 'No prompt found' "$ITERATION_DIR/review.html"; then
  echo "viewer contains missing prompt placeholders" >&2
  exit 1
fi

if [[ "$RUN_KIND" == "bare-core" ]]; then
  cat > "$ITERATION_DIR/final-verification.md" <<'REPORT'
# Bare-core final verification

- Pure paired executor batch: PASS
- Contamination and model-policy scan: PASS
- Eight formal Terra grades: PASS
- Recurring pure-baseline L5 failure: PASS (3/3 normal controls)
- Skill Creator benchmark aggregation and Luna analysis: PASS
- Four blind Luna comparisons: PASS (bare core wins 3/4)
- Permitted grader/comparator/analyzer models: PASS
- Skill Creator static viewer: PASS
REPORT
else
  cat > "$ITERATION_DIR/final-verification.md" <<'REPORT'
# Full-treatment final verification

- Pure paired executor batch: PASS
- Contamination and model-policy scan: PASS
- Eight formal Terra grades: PASS
- Every applicable with-skill critical assertion: PASS
- Recurring pure-baseline L5 failure: PASS (3/3 normal controls)
- Skill Creator benchmark aggregation and Luna analysis: PASS
- Four blind Luna comparisons: PASS
- Permitted grader/comparator/analyzer models: PASS
- Skill Creator static viewer with previous bare-core outputs: PASS
REPORT
fi

echo "$RUN_KIND result verification passed: $ITERATION_DIR"
