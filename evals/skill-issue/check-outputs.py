#!/usr/bin/env python3
import json
import re
import subprocess
import sys
from pathlib import Path

arm = Path(sys.argv[1]).resolve()
workspace = arm / "workspace"
eval_name = arm.parents[1].name
result = {"eval": eval_name, "files": sorted(str(p.relative_to(workspace)) for p in workspace.rglob("*") if p.is_file())}
required_headings = ["Trigger", "Scope", "Inputs", "Roles", "Procedure", "Outputs", "Exceptions", "QC", "References"]

def text(path):
    return path.read_text(errors="replace") if path.is_file() else ""

if eval_name.startswith("eval-1-"):
    rejection = workspace / "output" / "rejection.md"
    result.update(rejection_exists=rejection.is_file(), skill_files=[str(p.relative_to(workspace)) for p in workspace.rglob("SKILL.md")], rejection_text=text(rejection))
elif eval_name.startswith("eval-2-"):
    result["decision_text"] = text(workspace / "decision.md")
elif eval_name.startswith("eval-3-"):
    result["decision_text"] = text(workspace / "decision.md")
elif eval_name.startswith("eval-4-"):
    skill = workspace / "output" / "client-update-policy" / "SKILL.md"
    body = text(skill)
    result.update(
        skill_exists=skill.is_file(),
        headings=re.findall(r"^## (.+)$", body, re.M),
        headings_exact=re.findall(r"^## (.+)$", body, re.M) == required_headings,
        name_matches=bool(re.search(r"^name:\s*client-update-policy\s*$", body, re.M)),
        contains_local_rules={token: token.lower() in body.lower() for token in ["4 p.m.", "Amber", "Client Services Director", "relationship at risk"]},
        generic_phrases_present={phrase: phrase in body.lower() for phrase in ["write clearly", "check spelling", "use active voice"]},
    )
elif eval_name.startswith("eval-5-"):
    root = workspace / "output" / "case-intake"
    skill = root / "SKILL.md"
    body = text(skill)
    refs = sorted((root / "references").glob("*")) if (root / "references").is_dir() else []
    scripts = sorted((root / "scripts").glob("*.py")) if (root / "scripts").is_dir() else []
    registry_fields = ["case_id", "account_id", "queue", "severity", "opened_at", "owner", "region", "customer_visible", "summary", "contract_tier", "escalation_id", "parent_case_id"]
    ref_text = "\n".join(text(p) for p in refs)
    result.update(
        skill_exists=skill.is_file(),
        headings=re.findall(r"^## (.+)$", body, re.M),
        headings_exact=re.findall(r"^## (.+)$", body, re.M) == required_headings,
        body_lines=len(body.splitlines()),
        reference_files=[str(p.relative_to(workspace)) for p in refs],
        script_files=[str(p.relative_to(workspace)) for p in scripts],
        registry_in_reference={field: field in ref_text for field in registry_fields},
        main_mentions_overflow=bool(re.search(r"references/", body)) and bool(re.search(r"scripts/", body)),
    )
    if scripts:
        valid = subprocess.run([sys.executable, str(scripts[0]), str(workspace / "valid.json")], cwd=workspace, capture_output=True, text=True, timeout=10)
        invalid = subprocess.run([sys.executable, str(scripts[0]), str(workspace / "invalid.json")], cwd=workspace, capture_output=True, text=True, timeout=10)
        invalid_missing = subprocess.run([sys.executable, str(scripts[0]), str(workspace / "invalid-missing.json")], cwd=workspace, capture_output=True, text=True, timeout=10)
        invalid_case_id = subprocess.run([sys.executable, str(scripts[0]), str(workspace / "invalid-case-id.json")], cwd=workspace, capture_output=True, text=True, timeout=10)
        no_argument = subprocess.run([sys.executable, str(scripts[0])], cwd=workspace, capture_output=True, text=True, timeout=10)
        required_fields = registry_fields[:10]
        valid_payload = json.loads((workspace / "valid.json").read_text())
        objective_tests = arm / "objective-tests"
        objective_tests.mkdir(exist_ok=True)
        missing_field_results = {}
        for field in required_fields:
            payload = dict(valid_payload)
            payload.pop(field)
            fixture = objective_tests / f"missing-{field}.json"
            fixture.write_text(json.dumps(payload, indent=2) + "\n")
            checked = subprocess.run([sys.executable, str(scripts[0]), str(fixture)], cwd=workspace, capture_output=True, text=True, timeout=10)
            missing_field_results[field] = {"exit": checked.returncode, "stdout": checked.stdout, "stderr": checked.stderr, "mentions_field": field in checked.stderr}
        boundary_payloads = {
            "valid-case-low": ("case_id", "CS-000000", True, "VALID"),
            "valid-case-high": ("case_id", "CS-999999", True, "VALID"),
            "invalid-case-short": ("case_id", "CS-12345", False, "case_id"),
            "invalid-case-long": ("case_id", "CS-1234567", False, "case_id"),
            "invalid-case-prefix": ("case_id", "CASE-123456", False, "case_id"),
            "valid-queue-billing": ("queue", "billing", True, "VALID"),
            "valid-queue-access": ("queue", "access", True, "VALID"),
            "valid-queue-delivery": ("queue", "delivery", True, "VALID"),
            "invalid-queue-empty": ("queue", "", False, "queue"),
            "invalid-queue-case": ("queue", "Billing", False, "queue"),
            "invalid-queue-type": ("queue", 1, False, "queue"),
            "valid-severity-1": ("severity", 1, True, "VALID"),
            "valid-severity-2": ("severity", 2, True, "VALID"),
            "valid-severity-3": ("severity", 3, True, "VALID"),
            "valid-severity-4": ("severity", 4, True, "VALID"),
            "invalid-severity-low": ("severity", 0, False, "severity"),
            "invalid-severity-high": ("severity", 5, False, "severity"),
            "invalid-severity-string": ("severity", "2", False, "severity"),
            "invalid-severity-float": ("severity", 1.5, False, "severity"),
            "invalid-severity-null": ("severity", None, False, "severity"),
        }
        boundary_results = {}
        for label, (field, value, should_pass, expected_text) in boundary_payloads.items():
            payload = dict(valid_payload)
            payload[field] = value
            fixture = objective_tests / f"{label}.json"
            fixture.write_text(json.dumps(payload, indent=2) + "\n")
            checked = subprocess.run([sys.executable, str(scripts[0]), str(fixture)], cwd=workspace, capture_output=True, text=True, timeout=10)
            actual_text = checked.stdout if should_pass else checked.stderr
            matched = (checked.returncode == 0 if should_pass else checked.returncode != 0) and expected_text in actual_text
            boundary_results[label] = {"exit": checked.returncode, "stdout": checked.stdout, "stderr": checked.stderr, "matched": matched}
        result["validator"] = {
            "valid_exit": valid.returncode,
            "valid_stdout": valid.stdout,
            "valid_stderr": valid.stderr,
            "invalid_exit": invalid.returncode,
            "invalid_stdout": invalid.stdout,
            "invalid_stderr": invalid.stderr,
            "invalid_missing_exit": invalid_missing.returncode,
            "invalid_missing_stdout": invalid_missing.stdout,
            "invalid_missing_stderr": invalid_missing.stderr,
            "invalid_case_id_exit": invalid_case_id.returncode,
            "invalid_case_id_stdout": invalid_case_id.stdout,
            "invalid_case_id_stderr": invalid_case_id.stderr,
            "no_argument_exit": no_argument.returncode,
            "no_argument_stdout": no_argument.stdout,
            "no_argument_stderr": no_argument.stderr,
            "missing_field_results": missing_field_results,
            "all_required_fields_rejected": all(item["exit"] != 0 and item["mentions_field"] for item in missing_field_results.values()),
            "boundary_results": boundary_results,
            "all_boundary_cases_match": all(item["matched"] for item in boundary_results.values()),
        }

(arm / "objective-evidence.json").write_text(json.dumps(result, indent=2) + "\n")
