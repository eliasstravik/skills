---
name: automake
description: Runs an evaluator-optimizer ratchet — isolated optimizer and evaluator subagents build and judge one candidate per round while the orchestrator keeps BETTER commits and snaps NOT_BETTER back to baseline.
disable-model-invocation: true
---

# Automake

## Recipe

1. Inspect the invocation and repository, then resolve every run input from the Defaults table without asking about values that safely default.
2. Resolve Goal first: use it only when the invocation states a concrete outcome; otherwise ask the Goal question alone and wait for the answer.
3. Resolve Judge second: use it only when the invocation states a concrete `BETTER` versus `NOT_BETTER` rule a cold evaluator can apply; otherwise ask the Judge question alone and wait for the answer.
4. Preflight the resolved repository and baseline; if it is not a git repo with a clean committed baseline, ask the user how to proceed and change nothing.
5. Present every resolved input with the Final review Template and wait for explicit approval; on requested changes, revise the inputs and repeat this step.
6. After approval, create the run directory and write `program.md`, `prompt.md`, and `judge.md` as specified below, writing no run files into the repository.
7. Read `program.md` and orchestrate the ratchet exactly as it instructs, dispatching optimizer and evaluator subagents; never build or judge in the orchestrator context.

## Details

### Defaults

An explicit user value overrides its default. Inspect repository facts before resolving inferred values.

| Input | Resolution when not explicitly supplied |
|---|---|
| `REPO_DIR` | Git root containing the current working directory. |
| `BASELINE` | Current committed `HEAD`, only when the worktree is clean. |
| Goal | No default; ask when the invocation does not provide a concrete outcome. |
| Judge | No default; ask when the invocation does not provide an applicable comparison rule. |
| Candidate scope | One smallest coherent change that could improve the baseline toward the Goal. |
| Irreducible constraints | `none`; never invent product, technical, aesthetic, compatibility, or scope constraints. |
| Repository context | Relevant instructions, files, architecture, commands, and conventions found by inspection. |
| Cheap checks | Cheapest relevant existing targeted checks; record `none found` when inspection finds none. |
| Required evidence | Baseline-to-candidate diff plus applicable existing checks and any evidence the Judge logically requires. |
| Complexity policy | Added code, dependencies, abstractions, maintenance, and operational cost count against the candidate. |
| Candidate-gate policy | Reject removal, weakening, skipping, or manipulation of tests, checks, benchmarks, or configs used to establish improvement. |
| `SUCCESS_CONDITION` | `none`; without an explicit observable early-stop condition, limits stop the run. |
| `MAX_ITERATIONS` | `5`. |
| `MAX_CONSECUTIVE_FAILURES` | `3`. |
| `RUN_DIR` | `~/.automake/<three-random-word-lowercase-slug>/`. |

### Question contract

- Ask Goal and Judge as separate questions in that order, one question per turn; never combine them or substitute questions about defaulted inputs.
- Skip either question only when the user's own prompt already supplies everything needed to resolve that input; repository inspection may clarify wording but never supply user intent.
- Give each question 2–4 numbered options with one recommendation; derive concrete options from the invocation and inspected repository rather than asking for free-form specification.
- A Goal names the outcome to improve. A Judge states how an isolated evaluator decides whether a candidate is clearly better than its baseline, including material priorities or tradeoffs.

### Run files

- `program.md` — read `references/program.md`, fill every placeholder with the approved configuration, and preserve its roles, loop, guardrails, and verdict format; if missing, stop and report an incomplete skill copy.
- `prompt.md` — the optimizer's entire instruction: approved Goal, candidate scope, irreducible constraints, cheap checks, and relevant repository context; never include the Judge or its criteria.
- `judge.md` — the evaluator's entire instruction: Goal stated first, approved Judge, required evidence, exact verdict format, complexity policy, and candidate-gate policy; never include the optimizer prompt.

### Isolation rules

- Run optimizer and evaluator only as subagents; the main agent only orchestrates.
- Give the optimizer only `prompt.md`, `learnings.md`, and the repository — never `judge.md` or its criteria.
- Give each fresh evaluator only `judge.md`, both refs, and the diff — never `prompt.md`, optimizer rationale, `learnings.md`, or prior judgments.
- Move feedback through commits and `learnings.md`; evaluator RATIONALE and LEARNINGS flow forward, but the Judge never does.

### Final review template

```text
Ready to run Automake. Review every input below:
<Goal, Judge, REPO_DIR, BASELINE, RUN_DIR, candidate scope, irreducible constraints, repository context, cheap checks, required evidence, complexity policy, candidate-gate policy, SUCCESS_CONDITION, MAX_ITERATIONS, and MAX_CONSECUTIVE_FAILURES>

1. Yes, create the run files and start the ratchet
2. No, change an input first
```

### Frontmatter

- `disable-model-invocation: true` keeps this skill user-invoked only; where unsupported, the narrow description discourages spurious invocation.
