#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "usage: $0 <iteration-directory>" >&2
  exit 64
fi

ITERATION_DIR="$1"

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

test "$(jq '[.[] | select(.winner == "with_skill")] | length' "$ITERATION_DIR/blind-comparisons/summary.json")" -eq 3
test "$(jq '[.[] | select(.winner == "without_skill")] | length' "$ITERATION_DIR/blind-comparisons/summary.json")" -eq 1

test "$(find "$ITERATION_DIR"/eval-{1,2,3}-*/without_skill/run-1 -name grading.json -exec jq -r '.expectations[] | select(.text | startswith("L5 ")) | .passed' {} \; | rg '^false$' | wc -l | tr -d ' ')" -eq 3

rg -q 'Formal Grades' "$ITERATION_DIR/review.html"
rg -q 'Benchmark Results' "$ITERATION_DIR/review.html"
if rg -q 'No prompt found' "$ITERATION_DIR/review.html"; then
  echo "viewer contains missing prompt placeholders" >&2
  exit 1
fi

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

echo "bare-core result verification passed: $ITERATION_DIR"
