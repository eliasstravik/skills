# automake — intent

## Real job

`automake` turns a repository improvement goal into a controlled
Evaluator–Optimizer ratchet. Before running, it resolves two independent
instructions:

- an Optimizer instruction that defines the goal, smallest candidate scope,
  constraints, cheap checks, and repository context without exposing evaluation
  criteria;
- an Evaluator instruction that states the same goal, a concrete
  `BETTER`/`NOT_BETTER` rule, task-shaped evidence, candidate-gate protection,
  and complexity cost without exposing Optimizer rationale.

In the normal path, each full instruction is shown and explicitly approved
before a final run summary and run/no-run gate. A semantic run-now request is a
separate contract: when the user clearly asks Automake to begin its ratchet
immediately with current information, unresolved inputs are safely inferred or
defaulted and the ratchet starts without consultation questions or approvals.

On run, Automake establishes a clean committed Git baseline automatically,
writes resolved run files, and orchestrates isolated Optimizer and fresh
Evaluator attempts. `BETTER` advances the baseline; `NOT_BETTER`, malformed
evaluation, failed checks, no diff, or evaluator mutation restores the current
baseline and records a learning before another attempt.

## Live-state surfaces

- the target Git repository, including initialization, staging, commits,
  candidate refs, reset/restore operations, and status cleanliness
- `~/.automake/<three-word-slug>/` for run instructions, state, results,
  learnings, and evaluation records
- child Optimizer and Evaluator contexts and their model selection
- local tests, application surfaces, screenshots, and other evaluator evidence
- likely local secret files that must remain uncommitted

Every eval copies fresh fixtures into its own run, initializes Git only inside
that copy, redirects the Automake home into the run, and restricts every child
to GPT-5.6 Sol, Terra, or Luna. Real repositories, real `~/.automake`, external
credentials, production systems, and unrelated processes are off-limits.

## Interaction contract

- Inspect the full conversation and repository before asking anything.
- In normal consultation, ask one missing Optimizer or Evaluator input per
  turn; never ask a separate Orchestrator question or repeat supplied facts.
- Print each complete `optimizer.md` and `evaluator.md` before its exact
  two-choice approval gate; revisions reprint the whole artifact.
- Resolve iteration limits and success condition from supplied values or
  defaults without asking.
- Present a concrete final summary and ask whether to run.
- A semantic run-now request skips consultation and starts with safe inferred
  defaults; incidental mentions of commands or future running do not.
- Preflight Git without asking: initialize or capture the current contents,
  exclude likely secrets, commit a clean baseline, and stop only on a concrete
  unrecoverable failure.
- Keep Orchestrator, Optimizer, and Evaluator knowledge and write permissions
  separated; every attempt is recorded, and every rejection restores baseline.

## Proposed eval flows

1. **Normal consultation, no run** — A sparse invocation requires one Goal
   question, then full Optimizer approval, one task-specific Evaluator question,
   full Evaluator approval, defaults, and a final run gate. The scripted user
   declines; no Git or run-state mutation may occur.
2. **Supplied intent, accepted candidate** — Goal and judgment rule are already
   supplied, so no redundant questions occur. After artifact approvals and run
   approval, automatic preflight runs one isolated candidate/evaluation cycle;
   a genuinely better small change advances the baseline and is recorded.
3. **Rejected candidate rollback** — A one-iteration run produces a candidate
   that fails the approved net-improvement rule. The evaluator stays read-only,
   the repository returns exactly to baseline, and results plus learnings record
   the rejection.
4. **Run-now dirty/no-HEAD override** — A clear immediate-start request operates
   on a fresh repository with uncommitted content and a likely secret file.
   Automake asks no questions, captures a safe clean baseline without committing
   the secret, writes fully resolved run files, executes the bounded ratchet,
   and reports the final kept ref and evidence.

These flows cover both interaction modes, artifact gates, semantic override,
Git preflight, run isolation, accepted and rejected ratchet transitions,
evidence recording, and rollback safety.
