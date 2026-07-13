# Automake consultation assertions

## Preserved baseline failures

Bare invocation with the previous skill:

> What Goal should Automake improve?
>
> 1. Improve an existing skill’s reliability and instruction quality (Recommended)
> 2. Improve the repository’s automated validation or tests
> 3. Improve documentation and contributor usability
> 4. Specify a different concrete outcome

Partial invocation with a concrete accessibility Goal:

> Before starting the ratchet, please provide the missing inputs:
>
> 1. Evaluator instructions: how should the result be judged?
> 2. Orchestrator instructions: what constraints or priorities should govern the improvement?

Fully specified invocation:

> I’m using the automake skill to run a 4-iteration accessibility ratchet, judged by Playwright keyboard-only E2E checks and screenshots. It will stop after 2 consecutive failed iterations, or succeed early once every settings control is keyboard reachable and has visible focus.

These responses failed to draft and approve the Optimizer first, staged multiple missing phases together, or moved toward running without artifact approval.

## Assertion suite

- **Critical:** The agent inspects the original invocation and does not ask for facts already supplied there.
- **Critical:** The Optimizer is the first artifact; once draftable, the complete `optimizer.md` is printed inline before any Evaluator or Orchestrator question.
- **Critical:** Every Optimizer and Evaluator draft receives the numbered `Approved` / `No` prompt and is revised and reprinted after feedback until approved.
- **Critical:** The Evaluator phase follows Optimizer approval and asks how to judge improvement only when the conversation does not already supply a concrete verdict rule and evidence plan.
- **Critical:** App evaluation defaults to a real end-to-end user flow, screenshots at important multi-step states when available, and video when recording is available.
- **Critical:** Missing Orchestrator values are asked one per turn in the order max iterations, max consecutive failures, success condition; supplied values are skipped.
- **Critical:** Before a normal run, the agent presents a compact Optimizer, Evaluator, Orchestrator, and ratchet summary with `Run` / `No` choices.
- **Critical:** A request to go or run with what is available at any phase defaults all remaining inputs and starts without more questions or approvals.
- The approval flow accepts numbered choices and free-form feedback.
- The run files preserve Optimizer/Evaluator isolation, the exact evaluation format, clean-baseline preflight, and the git-backed keep-or-revert ratchet.

## Behavioral probes

1. Bare invocation: expect one Optimizer Goal question and no Evaluator or Orchestrator question.
2. Goal supplied: expect a complete inline `optimizer.md` and its approval prompt.
3. Goal and evaluation supplied: expect the Optimizer draft first; after approval, expect the complete Evaluator draft without asking how to evaluate.
4. App Goal with no evaluation supplied: after Optimizer approval, expect a repository-specific E2E recommendation; the Evaluator draft must require screenshots and video when available.
5. Orchestrator values partly supplied: after artifact approvals, expect only the first missing value to be asked.
6. `Use automake and just go with what you have`: expect no consultation question or approval request before execution.

## Validation record — 2026-07-13

- Previous-skill baselines preserved above from three fresh contexts: bare, partially specified, and fully specified.
- Rewritten-skill fresh probes passed the bare-invocation, supplied-Goal, missing-Evaluator, partially supplied Orchestrator, and run-now override cases.
- Pairwise result: the rewritten skill is preferred because it uniquely prints the Optimizer first, asks only the current phase's question, recommends E2E evidence, and honors immediate execution.
- Manual frontmatter check passed: valid delimiters, directory-matching lowercase `name`, nonempty third-person `description`, and supported `disable-model-invocation` extension.
- Structure check passed: one Recipe primitive in a 15-body-line core, 79 total body lines, and a present `references/orchestrator.md` call target.
- `git diff --check` passed. `agentskills validate` was unavailable because the named npm package returned 404, so the skill-issue manual-validation fallback was used.
