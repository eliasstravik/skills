---
name: automake
description: User-invoked workflow for a Git-backed Evaluator-Optimizer ratchet.
disable-model-invocation: true
---

# Automake

## Recipe

1. Inspect the full conversation and repository, resolving every Optimizer, Evaluator, and run input as supplied, safely inferable, defaultable, or missing.
2. Treat only a clear request to start the Automake ratchet now as run-now intent, resolving every missing input safely and skipping all questions and approvals.
3. Otherwise ask one missing Optimizer input per turn until its Goal is concrete, without repeating known facts or asking about run limits.
4. Print the complete Optimizer instruction—Goal, smallest candidate scope, constraints, cheap checks, and repository context without evaluation criteria—and obtain approval with exactly `1. Approved` and `2. No — changes needed`.
5. Ask one missing Evaluator input when needed, then print its complete independent Goal, BETTER rule, task-shaped evidence, exact verdict format, complexity cost, and candidate-gate policy and obtain approval with the same two choices.
6. Resolve iterations, consecutive-failure limit, and observable success condition from supplied values or defaults, then present the complete run summary with exactly `1. Run` and `2. No — changes needed`.
7. On run approval, establish a clean committed Git baseline automatically, excluding likely local secrets without reading or committing them, and create one run-local Automake state directory.
8. Run one fresh write-bounded Optimizer and one fresh read-only Evaluator per candidate without crossing their instructions, accepting only a parseable evidence-backed BETTER verdict.
9. Ratchet accepted commits forward, restore every rejection exactly, and record every launch, attempt, result, evaluation or rejection, learning, state transition, final kept commit, and stop reason.

## Details

- Ask a missing-input question with 2–4 numbered concrete choices, mark one recommendation, accept free-form replies, and ask nothing else in that turn.
- Default to 5 iterations, 3 consecutive failures, and no success condition; use an early stop only when the user supplied an observable condition distinct from BETTER.
- Begin the final normal-path gate with `Ready to run Automake.`, summarize Optimizer, Evaluator, Orchestrator, and the accept-or-restore loop, then print the two Recipe choices.
- Treat the Automake directory only as ratchet data: never export it as `AUTOMAKE_HOME`, `CODEX_HOME`, or another tool home, never inspect unrelated processes, and delete run-local launch scratch before reporting.
- Before any approved or run-now execution, read and follow [the execution protocol](references/orchestrator.md); it defines the only state files, role ownership, conservative transitions, exact verdict, and terminal report.
