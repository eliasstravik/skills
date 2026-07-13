---
name: automake
description: Runs an Evaluator-Optimizer ratchet — isolated Optimizer and Evaluator subagents improve and evaluate one candidate per round while the Orchestrator keeps BETTER commits and snaps NOT_BETTER back to baseline.
disable-model-invocation: true
---

# Automake

## Recipe

1. Inspect the invocation and repository, then resolve every run input from the Defaults table without asking about values that safely default.
2. Resolve Goal first: use it only when the invocation states a concrete outcome; otherwise ask the Goal question alone and wait for the answer.
3. Resolve Evaluation criteria second: use them only when the invocation states a concrete `BETTER` versus `NOT_BETTER` rule an Evaluator can apply; otherwise ask the Evaluation criteria question alone and wait for the answer.
4. Preflight the resolved repository and baseline; if it is not a git repo with a clean committed baseline, ask the user how to proceed and change nothing.
5. Present every resolved input with the Final review Template and wait for explicit approval; on requested changes, revise the inputs and repeat this step.
6. After approval, create the run directory and write `orchestrator.md`, `optimizer.md`, and `evaluator.md` as specified below, writing no run files into the repository.
7. Read `orchestrator.md` and run the ratchet exactly as it instructs, dispatching Optimizer and Evaluator subagents; never optimize or evaluate in the Orchestrator context.

## Details

### Defaults

An explicit user value overrides its default. Inspect repository facts before resolving inferred values.

| Input | Resolution when not explicitly supplied |
|---|---|
| `REPO_DIR` | Git root containing the current working directory. |
| `BASELINE` | Current committed `HEAD`, only when the worktree is clean. |
| Goal | No default; ask when the invocation does not provide a concrete outcome. |
| Evaluation criteria | No default; ask when the invocation does not provide an applicable comparison rule. |
| Candidate scope | One smallest coherent change that could improve the baseline toward the Goal. |
| Irreducible constraints | `none`; never invent product, technical, aesthetic, compatibility, or scope constraints. |
| Repository context | Relevant instructions, files, architecture, commands, and conventions found by inspection. |
| Cheap checks | Cheapest relevant existing targeted checks; record `none found` when inspection finds none. |
| Required evidence | Baseline-to-candidate diff plus applicable existing checks and any evidence the Evaluation criteria logically require. |
| Complexity policy | Added code, dependencies, abstractions, maintenance, and operational cost count against the candidate. |
| Candidate-gate policy | Reject removal, weakening, skipping, or manipulation of tests, checks, benchmarks, or configs used to establish improvement. |
| `SUCCESS_CONDITION` | `none`; without an explicit observable early-stop condition, limits stop the run. |
| `MAX_ITERATIONS` | `5`. |
| `MAX_CONSECUTIVE_FAILURES` | `3`. |
| `RUN_DIR` | `~/.automake/<three-random-word-lowercase-slug>/`. |

### Question contract

- Ask Goal and Evaluation criteria as separate questions in that order, one question per turn; never combine them or substitute questions about defaulted inputs.
- Skip either question only when the user's own prompt already supplies everything needed to resolve that input; repository inspection may clarify wording but never supply user intent.
- Give each question 2–4 numbered options with one recommendation; derive concrete options from the invocation and inspected repository rather than asking for free-form specification.
- A Goal names the outcome to improve. Evaluation criteria state how an isolated Evaluator decides whether a candidate is clearly better than its baseline, including material priorities or tradeoffs.
- Use the canonical terms Orchestrator, Optimizer, Evaluator, Goal, Evaluation criteria, evaluation, and verdict exactly; never substitute alternate names for these concepts.

### Run files

- `orchestrator.md` — read `references/orchestrator.md`, fill every placeholder with the approved configuration, and preserve its roles, loop, guardrails, and evaluation format; if missing, stop and report an incomplete skill copy.
- `optimizer.md` — the Optimizer's entire instruction: approved Goal, candidate scope, irreducible constraints, cheap checks, and relevant repository context; never include Evaluation criteria.
- `evaluator.md` — the Evaluator's entire instruction: Goal stated first, approved Evaluation criteria, required evidence, exact evaluation format, complexity policy, and candidate-gate policy; never include `optimizer.md`.

### Isolation rules

- Run Optimizer and Evaluator only as subagents; the Orchestrator only orchestrates.
- Give the Optimizer only `optimizer.md`, `learnings.md`, and the repository — never `evaluator.md` or Evaluation criteria.
- Give each fresh Evaluator only `evaluator.md`, both refs, and the diff — never `optimizer.md`, Optimizer rationale, `learnings.md`, or prior evaluations.
- Move evaluation feedback through commits and `learnings.md`; Evaluator RATIONALE and LEARNINGS flow forward, but Evaluation criteria never do.

### Final review template

```text
Ready to run Automake. Review every input below:
<Goal, Evaluation criteria, REPO_DIR, BASELINE, RUN_DIR, candidate scope, irreducible constraints, repository context, cheap checks, required evidence, complexity policy, candidate-gate policy, SUCCESS_CONDITION, MAX_ITERATIONS, and MAX_CONSECUTIVE_FAILURES>

1. Yes, create the run files and start the ratchet
2. No, change an input first
```

### Frontmatter

- `disable-model-invocation: true` keeps this skill user-invoked only; where unsupported, the narrow description discourages spurious invocation.
