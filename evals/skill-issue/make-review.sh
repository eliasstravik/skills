#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then echo "usage: $0 <iteration-directory>" >&2; exit 64; fi
ITERATION_DIR="$1"
SKILL_CREATOR_ROOT="${SKILL_CREATOR_ROOT:-$HOME/.agents/skills/skill-creator}"
PYTHONPATH="$SKILL_CREATOR_ROOT" python3 -m scripts.aggregate_benchmark "$ITERATION_DIR" --skill-name skill-issue --skill-path "$ITERATION_DIR/skill-snapshot"
"$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/analyze-evals.sh" "$ITERATION_DIR"
python3 "$SKILL_CREATOR_ROOT/eval-viewer/generate_review.py" "$ITERATION_DIR" --skill-name skill-issue --benchmark "$ITERATION_DIR/benchmark.json" --static "$ITERATION_DIR/review.html"
echo "review generated: $ITERATION_DIR/review.html"
