# Automake Program — evaluator-optimizer ratchet

This file is the agents.md of an automake run: the orchestrator agent reads `RUN_DIR/program.md` and executes the loop below. When writing `program.md`, fill every `<placeholder>` with the run's real values and keep the roles, loop, guardrails, and verdict format intact.

## Configuration

- `REPO_DIR`: `<absolute repo path>` — the only place candidates change files.
- `RUN_DIR`: `<absolute run path>` — the only place ratchet state lives.
- `BASELINE`: `<initial committed baseline ref>`
- `MAX_ITERATIONS`: `<n>`
- `MAX_CONSECUTIVE_FAILURES`: `<n>`

## Roles

- **Orchestrator** — the agent reading this file. It dispatches subagents, operates git, parses verdicts, and keeps the run files current. It never builds a candidate and never judges one.
- **Optimizer** — one subagent per attempt. Input: the full text of `prompt.md`, the current `learnings.md`, and `REPO_DIR`. It must never receive `judge.md`, any judgment, or any verdict rationale.
- **Evaluator** — one fresh subagent per attempt. Input: the full text of `judge.md`, `REPO_DIR` read-only, `RUN_DIR` for scratch, and the `BASELINE` and `CANDIDATE` refs. It must never receive `prompt.md`, optimizer output or rationale, `learnings.md`, or prior judgments.

## Ratchet loop

Repeat until `MAX_ITERATIONS` attempts are spent or consecutive failures reach `MAX_CONSECUTIVE_FAILURES`:

1. Read `results.tsv`, `learnings.md`, and `state.md`.
2. Dispatch the optimizer subagent to build one focused candidate in `REPO_DIR` and run the cheap checks named in `prompt.md`.
3. Record `NOT_BETTER` without judging when the optimizer fails, a cheap check fails, or there is no diff; reset `REPO_DIR` to `BASELINE` and continue the loop.
4. Commit the candidate and record the `BASELINE` and `CANDIDATE` refs.
5. Freeze `REPO_DIR` and dispatch a fresh evaluator subagent to compare `BASELINE` to `CANDIDATE` from the diff and return the exact verdict format below.
6. Treat evaluator crash, timeout, malformed verdict, or missing evidence as `NOT_BETTER`.
7. Check for uncommitted evaluator-created changes in `REPO_DIR`; if present, log the mutation, restore safely, and record `NOT_BETTER`.
8. On `BETTER`: keep the candidate, set `BASELINE` to `CANDIDATE`, and reset consecutive failures to 0.
9. On `NOT_BETTER`: reset and clean `REPO_DIR` to `BASELINE` and increment consecutive failures.
10. Append a row to `results.tsv`, merge the verdict's LEARNINGS into `learnings.md`, write the judgment to `runs/<run>/judgments/<candidate>.md`, and update `state.md` — for every attempt, including conservative rejections.

After the loop, report the final kept commit, `BETTER`/`NOT_BETTER` counts, and the run-folder paths.

## Guardrails

- Work only in `REPO_DIR`; create or append only these files under `RUN_DIR`: `program.md`, `prompt.md`, `judge.md`, `results.tsv`, `learnings.md`, `state.md`, `runs/<run>/judgments/<candidate>.md`. Write no automake files into `REPO_DIR`.
- Never modify or weaken checks, tests, or configs that gate candidates or that judge criteria depend on; `judge.md` must reject candidate-gate changes.
- `judge.md` must weigh added size and complexity as a cost: a bigger or more elaborate candidate that is not clearly better net of that cost is `NOT_BETTER`.
- The evaluator must not mutate `REPO_DIR`; its temporary artifacts go only under `RUN_DIR` or `/tmp`.

## Verdict format

`judge.md` must require, and the orchestrator must parse, exactly:

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
