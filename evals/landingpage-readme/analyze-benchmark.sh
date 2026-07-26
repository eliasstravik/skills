#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "usage: $0 <iteration-directory>" >&2
  exit 64
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ITERATION_DIR="$1"
ANALYZER_MODEL="gpt-5.6-luna"
SKILL_CREATOR_ROOT="${SKILL_CREATOR_ROOT:-$HOME/.agents/skills/skill-creator}"
ANALYSIS_DIR="$ITERATION_DIR/benchmark-analysis"
if [[ -s "$ITERATION_DIR/full-SKILL.md" ]]; then
  SKILL_SNAPSHOT="$ITERATION_DIR/full-SKILL.md"
else
  SKILL_SNAPSHOT="$ITERATION_DIR/bare-core-SKILL.md"
fi

test -s "$ITERATION_DIR/benchmark.json"
test -s "$SKILL_SNAPSHOT"
test -s "$SKILL_CREATOR_ROOT/agents/analyzer.md"
test -s "$SCRIPT_DIR/analysis-schema.json"

mkdir -p "$ANALYSIS_DIR"
cp "$SKILL_CREATOR_ROOT/agents/analyzer.md" "$ANALYSIS_DIR/analyzer.md"

{
  echo "# Benchmark analyst pass"
  echo
  echo "Use only the staged analyzer instructions, benchmark, grades, and candidate skill inside $ITERATION_DIR. Do not invoke another model, skill, helper agent, web search, browser, service, credential, or external temporary directory."
  echo "Read $ANALYSIS_DIR/analyzer.md completely, especially Analyzing Benchmark Results, and follow it."
  echo "Read $ITERATION_DIR/benchmark.json, per-run grading.json files, and $SKILL_SNAPSHOT."
  echo "Surface specific per-assertion, cross-eval, timing, and token patterns hidden by the aggregates."
  echo "Do not suggest changes to the skill in this benchmark pass."
  echo "Return only JSON matching the provided schema."
} > "$ANALYSIS_DIR/prompt.md"

{
  printf 'model=%s\n' "$ANALYZER_MODEL"
  printf 'reasoning_effort=high\n'
  printf 'sandbox=workspace-write\n'
  printf 'ephemeral=true\n'
  printf 'ignore_user_config=true\n'
  printf 'ignore_rules=true\n'
  printf 'approval_policy=never\n'
  printf 'working_directory=%s\n' "$ITERATION_DIR"
} > "$ANALYSIS_DIR/command.txt"

jq \
  '.metadata.executor_model = "gpt-5.6-sol"
   | .metadata.analyzer_model = "gpt-5.6-luna"
   | .metadata.runs_per_configuration = 1' \
  "$ITERATION_DIR/benchmark.json" > "$ITERATION_DIR/benchmark.corrected-metadata.json"
mv "$ITERATION_DIR/benchmark.corrected-metadata.json" "$ITERATION_DIR/benchmark.json"

codex exec \
  --skip-git-repo-check \
  --ignore-user-config \
  --ignore-rules \
  --ephemeral \
  --json \
  --model "$ANALYZER_MODEL" \
  --config 'model_reasoning_effort="high"' \
  --config 'approval_policy="never"' \
  --sandbox workspace-write \
  --cd "$ITERATION_DIR" \
  --output-schema "$SCRIPT_DIR/analysis-schema.json" \
  --output-last-message "$ANALYSIS_DIR/analysis.json" \
  - < "$ANALYSIS_DIR/prompt.md" \
  > "$ANALYSIS_DIR/events.jsonl" \
  2> "$ANALYSIS_DIR/stderr.log"

jq -e '.notes | length > 0' "$ANALYSIS_DIR/analysis.json" > /dev/null
jq \
  --slurpfile analysis "$ANALYSIS_DIR/analysis.json" \
  '.notes = $analysis[0].notes' \
  "$ITERATION_DIR/benchmark.json" > "$ITERATION_DIR/benchmark.with-analysis.json"
mv "$ITERATION_DIR/benchmark.with-analysis.json" "$ITERATION_DIR/benchmark.json"

PYTHONPATH="$SKILL_CREATOR_ROOT" python3 -c \
  'import json,sys; from pathlib import Path; from scripts.aggregate_benchmark import generate_markdown; source=Path(sys.argv[1]); Path(sys.argv[2]).write_text(generate_markdown(json.loads(source.read_text())))' \
  "$ITERATION_DIR/benchmark.json" \
  "$ITERATION_DIR/benchmark.md"

echo "benchmark analysis complete: $ITERATION_DIR"
