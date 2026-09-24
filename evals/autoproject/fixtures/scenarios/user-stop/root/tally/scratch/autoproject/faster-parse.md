# autoproject faster-parse

Repo: __RUN__/repo
Origin: yes
Default branch: main
Limits: iterations 5, streak 3, success Candidate's `python bench.py` median is under 400 ms
Roles: maker thread_agent (claude), reviewer thread_agent (claude)

## Maker brief

Goal: make tally parse large CSV exports faster without changing its output.
Candidate scope: one focused change inside tally/parse.py.
Constraints: no new dependencies; do not change tests, fixtures, or bench.py.
Cheap checks: `pytest -q`.
Repo context: tally is a small Python CLI; parsing lives in tally/parse.py and bench.py times a 200k-row file.

## Rubric

Independent goal: tally parses large CSV exports faster with byte-identical output.
BETTER rule: BETTER only when the median of `python bench.py` improves by at least 10% over Base and `pytest -q` passes with no test changed or removed.
Evidence: bench.py medians for Base and Candidate over 5 runs, pytest output, and the diff.
Complexity cost: new dependencies, or more than about 80 changed lines, count against the candidate.
Success condition: MET when Candidate's `python bench.py` median is under 400 ms.
Verdict: the exact VERDICT / SUCCESS / SUMMARY / RATIONALE / EVIDENCE / LEARNINGS block.

## User guidance

None yet.

## Iterations

1 · t-0004 · t-0005 · 9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b · NOT_BETTER · NONE · bench median improved only 3% · Row-level micro-optimizations are too small; try reducing per-row allocations or batching conversion.
2 · t-0006 · t-0007 · c0ffee1234567890abcdef1234567890abcdef12 · NOT_BETTER · NONE · median improved 6%, below the 10% bar · Whole-file readers help a little; avoid the per-row dict build.

## Stop
