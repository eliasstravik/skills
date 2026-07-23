# Automake execution protocol

Resolve these values before the first attempt:

- `REPO_DIR`: absolute target repository.
- `RUN_DIR`: the supplied state root plus one random three-word
  lowercase-hyphen slug.
- `BASELINE`: clean committed HEAD created by preflight.
- `MAX_ITERATIONS`, `MAX_CONSECUTIVE_FAILURES`, and `SUCCESS_CONDITION`: approved or defaulted values.

## Terminal state layout

At completion, `RUN_DIR` contains only:

- `optimizer.md`, `evaluator.md`, and `orchestrator.md`
- `results.tsv`, `learnings.md`, and `state.md`
- `runs/<attempt>/evaluations/<candidate-or-no-candidate>.md`

Create per-launch scratch only inside `RUN_DIR/.scratch/<launch>` and remove
`.scratch` before reporting. Never use `RUN_DIR` as a CLI home or copy
credentials, configuration, databases, caches, or unrelated runtime assets
into it.

`results.tsv` has one row per consumed attempt with attempt number, starting
baseline, candidate or `NONE`, verdict, reason, Optimizer launch ID, Evaluator
launch ID or `NONE`, and ending baseline. `state.md` records configuration,
current baseline, BETTER and NOT_BETTER counts, consecutive failures, stop
reason, and a chronological ledger of every child launch—including failures,
retry relationships, model, role, exit/result, candidate outcome, and whether
the launch consumed an attempt.

## Role ownership

- The Orchestrator alone creates commits, moves HEAD, restores the worktree,
  parses verdicts, and writes ratchet state; it never edits or judges a
  candidate.
- Each fresh Optimizer receives only `optimizer.md`, `learnings.md`, and
  `REPO_DIR`; give it write access only to `REPO_DIR`, forbid Git writes, and
  require one focused diff plus the named cheap checks.
- Each fresh Evaluator receives only `evaluator.md`, the baseline and candidate
  refs, their diff, read-only `REPO_DIR`, and ephemeral run-local scratch; never
  give it Optimizer output, `learnings.md`, prior evaluations, or write access.

Use GPT-5.6 Sol, Terra, or Luna only. Launch with user configuration ignored,
an ephemeral session, and the narrowest technical sandbox. Pass paths as
arguments or prompt data rather than repurposing tool-home environment
variables.

## Ratchet transition

For each attempt:

1. Read current state, results, and learnings.
2. Launch one Optimizer and record the launch before acting on its output.
3. On launch failure, Optimizer failure, failed cheap check, or no diff, record
   `NOT_BETTER` without an Evaluator, write a concrete Orchestrator learning,
   restore `BASELINE`, finish the attempt records, and continue.
4. Otherwise have the Orchestrator commit the candidate and record both refs.
5. Freeze repository writes, launch one fresh Evaluator, and record the launch.
6. Treat crash, timeout, malformed output, missing evidence, or repository
   mutation as `NOT_BETTER` without retrying the candidate outside the ratchet.
7. Accept only a complete `BETTER` evaluation; keep its commit as the new
   baseline and reset consecutive failures.
8. For `NOT_BETTER`, restore HEAD, index, tracked bytes, and status exactly to
   `BASELINE`, then increment consecutive failures.
9. Append the results row, update state and learnings, and save the complete
   evaluation or Orchestrator rejection under the attempt evaluation path.
10. Stop only at an observed success condition, iteration limit, or consecutive
    failure limit.

The Evaluator must reject changes that weaken tests, checks, fixtures, or
evaluation configuration and must count added code, dependencies, abstraction,
maintenance, and operational burden against the candidate.

## Exact evaluation

Require this shape with every section non-empty:

```text
VERDICT: BETTER | NOT_BETTER
SUMMARY: <one-line reason>

RATIONALE:
<why the candidate does or does not beat the baseline>

EVIDENCE:
<diff, checks, and task-shaped evidence>

LEARNINGS:
<what another attempt should try or avoid>
```

After termination, verify a clean repository and canonical terminal layout,
then report the final kept commit, BETTER and NOT_BETTER counts, stop reason,
and paths to `RUN_DIR`, results, learnings, state, and evaluations.
