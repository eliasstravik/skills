#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then echo "usage: $0 <output-directory>" >&2; exit 64; fi
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(git -C "$SCRIPT_DIR" rev-parse --show-toplevel)"
OUTPUT_DIR="$1"
MODEL="gpt-5.6-luna"
CODEX_ENTRY="$(readlink "$(command -v codex)" || command -v codex)"
CODEX_NODE="${CODEX_NODE:-$(dirname "$CODEX_ENTRY")/node}"

case "$OUTPUT_DIR" in "$SCRIPT_DIR"/runs/description-optimization) ;; *) echo "output must be evals/skill-issue/runs/description-optimization" >&2; exit 64 ;; esac
if [[ -e "$OUTPUT_DIR" ]]; then echo "refusing to overwrite $OUTPUT_DIR" >&2; exit 73; fi
mkdir -p "$OUTPUT_DIR"
cp "$SCRIPT_DIR/trigger-eval.json" "$OUTPUT_DIR/trigger-eval.json"
cp -R "$REPO_ROOT/skills/skill-issue" "$OUTPUT_DIR/skill-snapshot"

{
  echo "# Skill-description optimizer"
  echo
  echo "Use only the staged skill and labeled training corpus in $OUTPUT_DIR. Do not inspect held-out labels, invoke another model or skill, browse, or read external files."
  echo "Read $OUTPUT_DIR/skill-snapshot/SKILL.md and all three references completely."
  echo "The name is fixed as skill-issue. Propose exactly three distinct model-invoked descriptions A, B, and C, then recommend one."
  echo "Each description must be third person, at most 1,024 characters, contain no XML, state what the skill owns plus positive literal trigger language, and include clear negative boundaries against skill-creator, skill installation, ordinary agent work, and non-agent SOPs."
  echo "Optimize general routing behavior from the labeled training queries; do not enumerate query IDs or overfit examples."
  echo "Return only JSON matching the schema."
  echo
  echo "## Labeled training corpus"
  jq -r '.[] | select(.split == "train") | "\n### Query \(.id)\nExpected invoke: \(.should_trigger)\n\(.query)"' "$OUTPUT_DIR/trigger-eval.json"
} > "$OUTPUT_DIR/optimizer-prompt.md"

"$CODEX_NODE" "$CODEX_ENTRY" exec --skip-git-repo-check --ignore-user-config --ignore-rules --ephemeral --json --model "$MODEL" --config 'model_reasoning_effort="high"' --config 'approval_policy="never"' --sandbox workspace-write --cd "$OUTPUT_DIR" --output-schema "$SCRIPT_DIR/description-candidates-schema.json" --output-last-message "$OUTPUT_DIR/candidates.json" - < "$OUTPUT_DIR/optimizer-prompt.md" > "$OUTPUT_DIR/optimizer-events.jsonl" 2> "$OUTPUT_DIR/optimizer-stderr.log"
jq -e '.candidates | length == 3' "$OUTPUT_DIR/candidates.json" > /dev/null

current_description="$(sed -n 's/^description: //p' "$OUTPUT_DIR/skill-snapshot/SKILL.md")"
for pass in 1 2 3; do
  pass_dir="$OUTPUT_DIR/evaluator-pass-$pass"
  mkdir -p "$pass_dir"
  {
    echo "# Label-blind skill router evaluation"
    echo
    echo "Based only on each candidate description and query text, decide whether an agent should invoke skill-issue. Do not read labels, splits, skill bodies, other passes, or external files; do not invoke another model or skill."
    echo "Return exactly one decision for every combination of four candidate IDs and twenty query IDs: 80 unique decisions total."
    echo "Invoke only when the request needs the agent-skill form authority described. Return only JSON matching the schema."
    echo
    echo "## Candidate descriptions"
    echo
    printf 'CURRENT: %s\n' "$current_description"
    jq -r '.candidates[] | "\(.id): \(.description)"' "$OUTPUT_DIR/candidates.json"
    echo
    echo "## Queries"
    jq -r '.[] | "\(.id). \(.query)"' "$OUTPUT_DIR/trigger-eval.json"
  } > "$pass_dir/prompt.md"
  "$CODEX_NODE" "$CODEX_ENTRY" exec --skip-git-repo-check --ignore-user-config --ignore-rules --ephemeral --json --model "$MODEL" --config 'model_reasoning_effort="high"' --config 'approval_policy="never"' --sandbox workspace-write --cd "$pass_dir" --output-schema "$SCRIPT_DIR/trigger-decisions-schema.json" --output-last-message "$pass_dir/decisions.json" - < "$pass_dir/prompt.md" > "$pass_dir/events.jsonl" 2> "$pass_dir/stderr.log" &
  pids[$pass]="$!"
done

failures=0
for pass in 1 2 3; do if ! wait "${pids[$pass]}"; then failures=$((failures + 1)); fi; done
if [[ "$failures" -ne 0 ]]; then echo "$failures evaluator pass(es) failed" >&2; exit 1; fi
PYTHONDONTWRITEBYTECODE=1 python3 "$SCRIPT_DIR/score-descriptions.py" "$OUTPUT_DIR" > "$OUTPUT_DIR/score-summary.json"
echo "description optimization complete: $OUTPUT_DIR/results.json"
