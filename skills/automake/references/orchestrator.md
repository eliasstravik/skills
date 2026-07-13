# Automake Orchestrator — Evaluator-Optimizer ratchet

This file instructs the Orchestrator for an Automake run. When writing `orchestrator.md`, fill every `<placeholder>` with the run's real values and keep the roles, loop, guardrails, and evaluation format intact.

## Configuration

- `REPO_DIR`: `<absolute repo path>` — the only place candidates change files.
- `RUN_DIR`: `<absolute run path>` — the only place ratchet state lives.
- `BASELINE`: `<initial committed baseline ref>`
- `MAX_ITERATIONS`: `<n>`
- `MAX_CONSECUTIVE_FAILURES`: `<n>`
- `SUCCESS_CONDITION`: `<optional observable done-condition agreed in the consultation, or "none">`

## Roles

- **Orchestrator** — the agent reading this file. It dispatches subagents, operates git, parses verdicts, and keeps the run files current. It never optimizes a candidate and never evaluates one.
- **Optimizer** — one subagent per attempt. Input: the full text of `optimizer.md`, the current `learnings.md`, and `REPO_DIR`. It must never receive `evaluator.md` or Evaluation criteria; Evaluator RATIONALE and LEARNINGS reach it only through `learnings.md`.
- **Evaluator** — one fresh subagent per attempt. Input: the full text of `evaluator.md`, `REPO_DIR` read-only, `RUN_DIR` for scratch, and the `BASELINE` and `CANDIDATE` refs. It must never receive `optimizer.md`, Optimizer output or rationale, `learnings.md`, or prior evaluations.

## Ratchet loop

Repeat until `MAX_ITERATIONS` attempts are spent or consecutive failures reach `MAX_CONSECUTIVE_FAILURES`:

1. Read `results.tsv`, `learnings.md`, and `state.md`.
2. Dispatch the Optimizer to produce one focused candidate in `REPO_DIR` and run the cheap checks named in `optimizer.md`.
3. Record `NOT_BETTER` without evaluation when the Optimizer fails, a cheap check fails, or there is no diff; append a one-line Orchestrator-written learning to `learnings.md` naming what was tried and why it was rejected, reset `REPO_DIR` to `BASELINE`, and continue the loop — never leave a rejected attempt unrecorded in `learnings.md`, or the next Optimizer will retry the same dead end.
4. Commit the candidate and record the `BASELINE` and `CANDIDATE` refs.
5. Freeze `REPO_DIR` and dispatch a fresh Evaluator to compare `BASELINE` to `CANDIDATE` from the diff and return the exact evaluation format below.
6. Treat Evaluator crash, timeout, malformed verdict, or missing evidence as `NOT_BETTER`; with no usable evaluation, write the one-line Orchestrator learning yourself.
7. Check for uncommitted Evaluator-created changes in `REPO_DIR`; if present, log the mutation, restore safely, and record `NOT_BETTER`.
8. On `BETTER`: keep the candidate, set `BASELINE` to `CANDIDATE`, and reset consecutive failures to 0; if `SUCCESS_CONDITION` is set and observably holds, stop early and report.
9. On `NOT_BETTER`: reset and clean `REPO_DIR` to `BASELINE` and increment consecutive failures.
10. Append a row to `results.tsv`, merge the evaluation's RATIONALE and LEARNINGS into `learnings.md`, write the full evaluation to `runs/<run>/evaluations/<candidate>.md`, and update `state.md` — for every attempt, including conservative rejections.

After the loop, report the final kept commit, `BETTER`/`NOT_BETTER` counts, and the run-folder paths.

## Guardrails

- Work only in `REPO_DIR`; create or append only these files under `RUN_DIR`: `orchestrator.md`, `optimizer.md`, `evaluator.md`, `results.tsv`, `learnings.md`, `state.md`, `runs/<run>/evaluations/<candidate>.md`. Write no Automake files into `REPO_DIR`.
- `evaluator.md` must open by stating the Goal: the Evaluator receives nothing else about intent, so an unstated Goal leaves evaluation unmoored from purpose.
- Never modify or weaken checks, tests, or configs that gate candidates or that Evaluation criteria depend on; `evaluator.md` must reject candidate-gate changes.
- `evaluator.md` must weigh added size and complexity as a cost: a bigger or more elaborate candidate that is not clearly better net of that cost is `NOT_BETTER`.
- The Evaluator must not mutate `REPO_DIR`; temporary artifacts go only under `RUN_DIR` or `/tmp`.

## Evaluation format

`evaluator.md` must require the exact evaluation below, whose `VERDICT` is the `BETTER` or `NOT_BETTER` result the Orchestrator parses:

```text
VERDICT: BETTER | NOT_BETTER
SUMMARY: one-line reason

RATIONALE:
why the candidate does or does not beat the baseline

EVIDENCE:
commands run, files inspected, screenshots/endpoints checked, or why a check was skipped

LEARNINGS:
what the next candidate should try or avoid, and whether this direction is promising or a dead end
```
