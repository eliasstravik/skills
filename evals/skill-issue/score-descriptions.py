#!/usr/bin/env python3
import hashlib
import json
import re
import sys
from pathlib import Path

run_dir = Path(sys.argv[1]).resolve()
evals = json.loads((run_dir / "trigger-eval.json").read_text())
skill_text = (run_dir / "skill-snapshot" / "SKILL.md").read_text()
current = re.search(r"^description:\s*(.+)$", skill_text, re.M).group(1)
candidate_data = json.loads((run_dir / "candidates.json").read_text())
descriptions = {"CURRENT": current}
descriptions.update({item["id"]: item["description"] for item in candidate_data["candidates"]})
expected = {item["id"]: item for item in evals}
pass_files = sorted(run_dir.glob("evaluator-pass-*/decisions.json"))
if len(pass_files) != 3:
    raise SystemExit("expected exactly three evaluator passes")

scores = {candidate: [] for candidate in descriptions}
for pass_file in pass_files:
    decisions = json.loads(pass_file.read_text())["decisions"]
    by_pair = {(item["candidate_id"], item["query_id"]): item["invoke"] for item in decisions}
    if len(by_pair) != 80:
        raise SystemExit(f"{pass_file}: expected 80 unique decisions")
    for candidate in descriptions:
        record = {"pass": int(pass_file.parent.name.rsplit("-", 1)[1]), "train_correct": 0, "train_total": 0, "test_correct": 0, "test_total": 0, "failures": []}
        for query_id, item in expected.items():
            actual = by_pair[(candidate, query_id)]
            split = item["split"]
            record[f"{split}_total"] += 1
            if actual == item["should_trigger"]:
                record[f"{split}_correct"] += 1
            else:
                record["failures"].append({"query_id": query_id, "split": split, "expected": item["should_trigger"], "actual": actual})
        scores[candidate].append(record)

aggregates = {}
for candidate, passes in scores.items():
    aggregates[candidate] = {
        "train_correct": sum(item["train_correct"] for item in passes),
        "train_total": sum(item["train_total"] for item in passes),
        "test_correct": sum(item["test_correct"] for item in passes),
        "test_total": sum(item["test_total"] for item in passes),
        "passes": passes,
    }

candidate_order = list(descriptions)
best_id = max(candidate_order, key=lambda item: (aggregates[item]["test_correct"], aggregates[item]["train_correct"]))
result = {
    "query_set_sha256": hashlib.sha256((run_dir / "trigger-eval.json").read_bytes()).hexdigest(),
    "models": {"optimizer": "gpt-5.6-luna", "evaluator": "gpt-5.6-luna"},
    "runs_per_query": 3,
    "train_size": 12,
    "test_size": 8,
    "descriptions": descriptions,
    "scores": aggregates,
    "optimizer_recommended_id": candidate_data["recommended_id"],
    "best_id": best_id,
    "best_description": descriptions[best_id],
    "best_score": f"{aggregates[best_id]['test_correct']}/{aggregates[best_id]['test_total']}",
}
(run_dir / "results.json").write_text(json.dumps(result, indent=2) + "\n")
print(json.dumps({"best_id": best_id, "best_description": descriptions[best_id], "scores": aggregates}, indent=2))
