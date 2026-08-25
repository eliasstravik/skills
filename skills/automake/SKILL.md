---
name: automake
description: "Automake owns a Git-backed ratchet for safely improving a repository through separate optimizer and evaluator roles: it establishes a baseline, proposes and checks candidates, obtains an independent comparison against the current committed state, keeps accepted changes, and restores rejected ones exactly. It triggers when the request is to prepare or execute this bounded improvement workflow, draft or approve its role instructions, set limits or stop conditions, protect local files, initialize the baseline, or invoke `/automake`. It does not trigger when “automake” refers to the GNU build system, when the task is merely a Makefile target or normal bug fix, when the user only wants code review or an explanation, or when the request is generic branch reset or deleted-file restoration."
---

# Automake

## Recipe

1. Inspect the full conversation and repository, resolving every Optimizer, Evaluator, and run input as supplied, safely inferable, defaultable, or missing.
2. Treat only a clear request to start the Automake ratchet now as run-now intent, resolving every missing input safely and skipping all questions and approvals.
3. Otherwise ask one missing Optimizer input per turn until its Goal is concrete, without repeating known facts or asking about run limits.
4. Present the complete Optimizer approval block in this order: `**Approve this Optimizer instruction?**`, the Goal, smallest candidate scope, constraints, cheap checks, and repository context without evaluation criteria, then exactly `1. Approved (Recommended)` and `2. No — changes needed`.
5. Ask one missing Evaluator input when needed.
6. Present the complete Evaluator approval block in the same order: `**Approve this Evaluator instruction?**`, its independent Goal, BETTER rule, task-shaped evidence, exact verdict format, complexity cost, and candidate-gate policy, then the same two choices.
7. Resolve iterations, consecutive-failure limit, and observable success condition from supplied values or defaults.
8. Present the complete run gate in this order: `**Ready to run Automake?**`, the resolved summary, then exactly `1. Run (Recommended)` and `2. No — changes needed`.
9. On run approval, establish a clean committed Git baseline automatically, excluding likely local secrets without reading or committing them, and create one run-local Automake state directory.
10. Run one fresh write-bounded Optimizer and one fresh read-only Evaluator per candidate without crossing their instructions, accepting only a parseable evidence-backed BETTER verdict.
11. Ratchet accepted commits forward, restore every rejection exactly, and record every launch, attempt, result, evaluation or rejection, learning, state transition, final kept commit, and stop reason.

## Details

- Never invoke `AskUserQuestion`; ask every user question directly with a clear bold question first, any necessary context below it, then 2–4 numbered concrete options whose first option is the recommendation and ends with `(Recommended)`; accept free-form replies and ask nothing else in that turn.
- Default to 5 iterations, 3 consecutive failures, and no success condition; use an early stop only when the user supplied an observable condition distinct from BETTER.
- Begin the final normal-path gate with `**Ready to run Automake?**`, put the Optimizer, Evaluator, Orchestrator, and accept-or-restore summary below it, then print the two Recipe choices.
- Treat the Automake directory only as ratchet data: never export it as `AUTOMAKE_HOME`, `CODEX_HOME`, or another tool home, never inspect unrelated processes, and delete run-local launch scratch before reporting.
- Before any approved or run-now execution, read and follow [the execution protocol](references/orchestrator.md); it defines the only state files, role ownership, conservative transitions, exact verdict, and terminal report.
