---
name: automake
description: Sets up and runs an Evaluator-Optimizer ratchet.
disable-model-invocation: true
---

# Automake

## Recipe

1. Inspect the original invocation, every later user message, and the repository before asking anything; mark each Optimizer, Evaluator, and Orchestrator input as supplied, safely inferable, or missing.
2. When the user's meaning clearly directs Automake to start its ratchet now using the information already available, infer and default every unresolved input and start without further questions or approvals; determine this from intent, never from matching particular words.
3. Start with the Optimizer: gather only missing user-intent inputs, one question per turn, then draft the complete `optimizer.md` from supplied, inferred, and defaulted facts.
4. Print the full `optimizer.md` inline and request approval with the Approval prompt; revise and reprint it until approved.
5. Continue with the Evaluator: use any evaluation intent already supplied; otherwise ask how improvement should be judged, one question in that turn, while recommending the strongest feasible end-to-end evaluation.
6. Draft the complete `evaluator.md`, print it inline, and request approval with the Approval prompt; revise and reprint it until approved.
7. Resolve `MAX_ITERATIONS`, `MAX_CONSECUTIVE_FAILURES`, and `SUCCESS_CONDITION` from supplied values and defaults without asking Orchestrator questions, then present them with the approved artifacts in the Final summary Template.
8. Ask whether to run; when the user declines or gives feedback, revise the affected Optimizer, Evaluator, or Orchestrator value and re-present the necessary artifact approval and final summary until approved.
9. On run approval, preflight the repository and baseline, create the run directory, write the three resolved run files, and read `orchestrator.md` to execute the ratchet exactly as instructed.

## Details

### Consultation contract

- Open the first phase with: `First, I’ll get what I need to write the Optimizer.`
- Skip a question when the original invocation or a later answer already provides enough information to draft that phase; never ask the user to repeat supplied facts.
- During information gathering, ask only Optimizer and Evaluator questions, one missing input per turn, with 2–4 numbered concrete choices and one recommendation; never ask for an Orchestrator input separately, and accept a free-form answer even when it is not one of the choices.
- Treat an Optimizer as draftable when its Goal is concrete; infer the smallest coherent candidate scope from that Goal and the repository, default irreducible constraints to `none`, and discover repository context and cheap checks by inspection.
- If a bare invocation supplies no Goal, ask what outcome the Optimizer should improve. Under the run-now override, infer the highest-confidence, smallest measurable repository improvement instead.
- Treat an Evaluator as draftable when it has a concrete `BETTER` versus `NOT_BETTER` rule and a feasible evidence plan. If either is missing, ask `How should the Evaluator judge improvement?` and offer a repository-specific end-to-end recommendation.
- Before drafting the Evaluator, inspect the real evaluation path and ask only for execution facts it genuinely requires but cannot infer: target environment, startup path, test data or account, configured credentials, and permitted side effects. Never ask the user to paste secrets; ask them to configure credentials in the environment.
- Interpret a request to start immediately semantically: it must clearly refer to running the Automake ratchet now with the current information. Mentions of running tests, commands, future steps, or the words commonly used to express motion are not sufficient.
- For each Optimizer or Evaluator draft, print the artifact followed by exactly:

```text
1. Approved
2. No — tell me what to change (or write feedback directly)
```

- When the user answers No without feedback, ask what should change and wait; after feedback, reprint the entire revised artifact, not only a diff.

### Defaults and evidence

| Input | Resolution when not supplied |
|---|---|
| `REPO_DIR` | Git root containing the current working directory. |
| `BASELINE` | Current committed `HEAD`, only when the worktree is clean. |
| `RUN_DIR` | `~/.automake/<three-random-word-lowercase-slug>/`. |
| Candidate scope | Smallest coherent change that can improve the baseline toward the Goal. |
| Irreducible constraints | `none`; never invent product or technical constraints. |
| Cheap checks | Cheapest relevant existing targeted checks; `none found` when inspection finds none. |
| `MAX_ITERATIONS` | Explicit value, otherwise `5`; never ask separately. |
| `MAX_CONSECUTIVE_FAILURES` | Explicit value, otherwise `3`; never ask separately. |
| `SUCCESS_CONDITION` | Explicit observable early-stop condition from the user's messages that the Evaluator's evidence can determine; otherwise `none`; never ask separately. |

- Make end-to-end behavior the default evidence target, not an optional afterthought. For an app, require exercising the real user workflow through the actual UI or public interface whenever feasible.
- Require screenshots of important states and multi-step transitions when screenshot capture is available; require a video of the flow when recording is available.
- Never target production or allow destructive external side effects without explicit user authorization; prefer an isolated local or test environment and reversible test data.
- If true end-to-end evaluation is infeasible, require the Evaluator to state the concrete blocker and use the closest integration-level evidence; never silently substitute unit checks.
- Always require the baseline-to-candidate diff, applicable existing checks, and evidence needed by the approved verdict rule.
- Reject candidates that weaken or manipulate evaluation gates, and count added code, dependencies, abstractions, maintenance, and operational cost against the candidate.

### Run files and isolation

- `optimizer.md` is the Optimizer's entire instruction: approved Goal, candidate scope, irreducible constraints, cheap checks, and relevant repository context; never include Evaluation criteria.
- `evaluator.md` is the Evaluator's entire instruction: Goal first, approved verdict rule, end-to-end evidence plan, required evidence, exact evaluation format from `references/orchestrator.md`, complexity policy, and candidate-gate policy; never include `optimizer.md`.
- `orchestrator.md` comes from `references/orchestrator.md` with every placeholder filled; preserve its roles, ratchet loop, guardrails, and evaluation format.
- Run Optimizer and Evaluator only in their isolated roles. Give the Optimizer only `optimizer.md`, `learnings.md`, and the repository; give each fresh Evaluator only `evaluator.md`, both refs, and the diff.
- If the repository is not git-backed with a clean committed baseline at run time, ask how to proceed and change nothing.

### Final summary Template

```text
Ready to run Automake.

Optimizer: <Goal, candidate scope, and constraints in plain language>
Evaluator: <BETTER rule and end-to-end evidence in plain language>
Orchestrator: <max iterations, max consecutive failures, and success condition>
Loop: Each Optimizer proposes one candidate; a fresh Evaluator tests it; BETTER advances the baseline and NOT_BETTER restores it.

1. Run
2. No — tell me what to change
```

### Frontmatter

- `disable-model-invocation: true` keeps this skill user-invoked only; where unsupported, the narrow description discourages spurious invocation.
