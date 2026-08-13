#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then echo "usage: $0 <iteration-directory>" >&2; exit 64; fi
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ITERATION_DIR="$1"
ANALYZER_MODEL="gpt-5.6-luna"
SKILL_CREATOR_ROOT="${SKILL_CREATOR_ROOT:-$HOME/.agents/skills/skill-creator}"
ANALYSIS_DIR="$ITERATION_DIR/benchmark-analysis"
CODEX_ENTRY="$(readlink "$(command -v codex)" || command -v codex)"
CODEX_NODE="${CODEX_NODE:-$(dirname "$CODEX_ENTRY")/node}"

test -s "$ITERATION_DIR/benchmark.json"
mkdir -p "$ANALYSIS_DIR"
cp "$SKILL_CREATOR_ROOT/agents/analyzer.md" "$ANALYSIS_DIR/analyzer.md"
jq '.metadata.executor_model = "gpt-5.6-sol" | .metadata.analyzer_model = "gpt-5.6-luna" | .metadata.runs_per_configuration = 1' "$ITERATION_DIR/benchmark.json" > "$ITERATION_DIR/benchmark.corrected-metadata.json"
mv "$ITERATION_DIR/benchmark.corrected-metadata.json" "$ITERATION_DIR/benchmark.json"
{
  echo "# Benchmark analyst pass"
  echo
  echo "Use only staged analyzer instructions, benchmark, grades, and candidate skill inside $ITERATION_DIR. Do not invoke another model, skill, helper agent, web search, browser, service, credential, or external temporary directory."
  echo "Read $ANALYSIS_DIR/analyzer.md completely, especially Analyzing Benchmark Results."
  echo "Read $ITERATION_DIR/benchmark.json, every grading.json, and $ITERATION_DIR/skill-snapshot/SKILL.md."
  echo "The metadata intentionally records one run per configuration; do not reinterpret cross-eval spread as repeated-run variance."
  echo "Surface specific per-assertion, cross-eval, timing, and token patterns hidden by aggregates. Do not propose skill edits."
  echo "Return only JSON matching the schema."
} > "$ANALYSIS_DIR/prompt.md"

"$CODEX_NODE" "$CODEX_ENTRY" exec --skip-git-repo-check --ignore-user-config --ignore-rules --ephemeral --json --model "$ANALYZER_MODEL" --config 'model_reasoning_effort="high"' --config 'approval_policy="never"' --sandbox workspace-write --cd "$ITERATION_DIR" --output-schema "$SCRIPT_DIR/analysis-schema.json" --output-last-message "$ANALYSIS_DIR/analysis.json" - < "$ANALYSIS_DIR/prompt.md" > "$ANALYSIS_DIR/events.jsonl" 2> "$ANALYSIS_DIR/stderr.log"
jq -e '.notes | length > 0' "$ANALYSIS_DIR/analysis.json" > /dev/null
jq --slurpfile analysis "$ANALYSIS_DIR/analysis.json" '.notes = $analysis[0].notes' "$ITERATION_DIR/benchmark.json" > "$ITERATION_DIR/benchmark.with-analysis.json"
mv "$ITERATION_DIR/benchmark.with-analysis.json" "$ITERATION_DIR/benchmark.json"
PYTHONPATH="$SKILL_CREATOR_ROOT" python3 -c 'import json,sys; from pathlib import Path; from scripts.aggregate_benchmark import generate_markdown; p=Path(sys.argv[1]); Path(sys.argv[2]).write_text(generate_markdown(json.loads(p.read_text())))' "$ITERATION_DIR/benchmark.json" "$ITERATION_DIR/benchmark.md"
echo "benchmark analysis complete: $ITERATION_DIR"
