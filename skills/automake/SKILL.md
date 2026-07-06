---
name: automake
description: Set up an automake ratchet that keeps better candidates and snaps back rejected ones.
disable-model-invocation: true
---

Run an automake ratchet.

A ratchet builds one focused candidate, commits it, has a fresh adversarial judge compare it against the previous kept baseline, keeps `BETTER`, and snaps `NOT_BETTER` back to the baseline.

Consult before writing `program.md`: inspect repo facts before asking; ask one question at a time with options and your recommendation; sharpen the builder prompt and judge criteria until both are executable. Use `MAX_ITERATIONS=5` and `MAX_CONSECUTIVE_FAILURES=3` unless the user already specified different limits.

After the prompt and judge are sharp, generate a three-random-word lowercase slug and create `RUN_DIR=~/.automake/<slug>/`. Set `REPO_DIR` to the absolute current repo path. Stop if `REPO_DIR` is not a git repo or lacks a clean committed baseline; ask the user to commit, stash, clean, or choose another repo before any run approval. Do not reset or clean before approval.

Write only `RUN_DIR/program.md` before asking to run. The program must be compact and self-contained: configuration, prompt, judge, ratchet loop, and judge output format. Do not write automake files into `REPO_DIR`.

`program.md` must contain this contract:

1. Work only in `REPO_DIR`; store all ratchet state under `RUN_DIR`.
2. Create or append only these run files: `results.tsv`, `learnings.md`, `state.md`, and `runs/<run>/judgments/<candidate>.md`.
3. Before each candidate, read prior results, learnings, recent judgments, and relevant repo files.
4. Build one focused candidate, run cheap checks, and reject failed checks or no diff as `NOT_BETTER`; do not modify or weaken checks, tests, or configs that gate candidates or that judge criteria depend on.
5. Commit the candidate, recording `baseline` and `candidate` refs.
6. Freeze while one fresh adversarial subagent judge compares `baseline` to `candidate` from the diff, rejecting candidate-gate changes and weighing added size/complexity as a cost. A bigger or more elaborate candidate that is not clearly better net of that cost is `NOT_BETTER`.
7. Pass the judge only the builder prompt, judge criteria, `RUN_DIR`, `REPO_DIR`, `baseline`, and `candidate`.
8. Do not pass prior judgments, builder logs, or builder rationale as persuasive evidence.
9. The judge must not mutate `REPO_DIR`; temporary artifacts go only under `RUN_DIR` or `/tmp`.
10. The judge must return exactly:

```text
VERDICT: BETTER | NOT_BETTER
SUMMARY: one-line reason

RATIONALE:
why the candidate does or does not beat the baseline

EVIDENCE:
commands run, files inspected, screenshots/endpoints checked, or why a check was skipped

LEARNINGS:
what the next candidate should try or avoid
```

11. Treat builder failure, failed checks, no diff, judge crash, timeout, malformed verdict, missing evidence, or judge-created repo changes as `NOT_BETTER`.
12. After judging, check for uncommitted judge-created changes. If present, log the mutation, restore/clean safely, and do not keep the candidate.
13. Append a result row, learnings, and a judgment artifact for every attempt, including conservative rejections.
14. Keep `BETTER`. Reset/clean `NOT_BETTER` to `baseline`.
15. Reset consecutive failures to `0` on `BETTER`; increment them on `NOT_BETTER`.
16. Stop at the iteration or consecutive-failure limit and report final commit, counts, and run-folder paths.

Ask for explicit approval after writing and verifying `program.md`:

```text
All done — ready to run?
1. Yes, run the ratchet now
2. No, change the program first
```

If approved, read and execute `program.md`. If not, update `program.md` and ask again.
