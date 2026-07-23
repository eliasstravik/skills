# autoconsultant — preserved no-skill failures, round 1

Independent judge: GPT-5.6 Terra. Executors: four fresh GPT-5.6 Sol no-skill
arms. No installed skill was read, invoked, or imitated.

## F1.1 — Session-wide Consultant question grammar was not followed

Every question must use `Question <Q>`, contiguous options, one substantive
recommendation, and final `Other`.

- Flow 1's Question 1 is only “Who is the primary user...?” and Question 3
  ends at option 3 with no `Other`; Questions 5–7 offer only Approve/Revise.
- Flow 2 Questions 9–12 have only bare prompts or two options.
- Flow 3 Questions 14–17 have two options and no recommendation/`Other`.
- Flow 4's Question 21 option 3 is “Stop without review,” not final `Other`;
  the same defect recurs in Questions 22–23.

## F1.2 — Consultant verdicts were consumed without a valid dispatch gate

- In Flow 1, Question 3 asks the client to “Choose the implementation-plan
  direction,” then the transcript immediately enters “Consultant review round
  1”; it never asks the client to dispatch the reviewer.
- In Flow 2, Question 10 says, “The Consultant reviewer returned `APPROVED
  ...`,” proving the verdict was consumed before the first review-related
  client question.

Flows 3 and 4 did ask for dispatch and do not fail this class.

## F1.3 — Reviewer packets exceeded plan plus plan-named references

Flow 3's packet includes:

> `## Saved consultation state`

> `## Repository snapshot`

and a reviewer role/objective in addition to the plan/reference.

Flow 4's packet includes:

> `## Consultation state`

> `## Repository snapshot`

> `## Consultation transcript through dispatch`

Flows 1 and 2 passed packet purity.

## F1.4 — Resumed Consultant state did not record completion

Flow 3's final consultation still says:

> `## Next step`
>
> `Ask Question 14 using the exact Consultant adversarial-review gate.`

Flow 4 likewise still says to ask Question 21 after its claimed approval.

## F1.5 — Automake roles were not presented and approved separately

- Flow 2 asks one Question 11 to approve both “Builder and Reviewer
  instructions.”
- Flow 3 presents and approves an Optimizer but never presents an independent
  Evaluator; Question 17 is only an Orchestrator gate.
- Flow 4 saves an Optimizer and Orchestrator without separately presenting and
  approving a complete Optimizer followed by a complete independent Evaluator.

Flow 3 did fully reprint its rejected Optimizer revision before Question 16.

## F1.6 — Optimizer and Evaluator responsibilities were not independent

Flow 4's Optimizer contains:

> `## Success criteria`

including:

> `Existing and new focused tests pass`

Flow 3's revised Optimizer says:

> `The candidate is complete only when ... all tests pass.`

Flows 3 and 4 provide no independent Evaluator at all.

## F1.7 — Complete default Orchestrator values were not resolved

Flow 3 records only:

> `Orchestrator configuration: defaults`

Flow 4 substitutes:

> `Candidate count: 1`

rather than the required defaults. Flow 1 correctly records 5 / 3 / none and
Flow 2 correctly preserves the supplied 2 / 1 / success condition.

## F1.8 — No flow emitted the complete fresh-agent handoff

The handoff must be one dynamically safe fenced payload containing absolute
repository and plan paths, both complete approved role instructions, all
resolved values, run-now/pre-approved/no-repeat instructions, and preservation
of plan decisions, constraints, scope, and risks.

- Flow 1 is unfenced and points only to relative artifact paths.
- Flow 2 is unfenced, uses `workspace/repo`, has no absolute plan path, and
  says “Do not infer that an Automake run has been authorized.”
- Flow 3 lacks an Evaluator, a fence, absolute paths, and the plan/value
  payload.
- Flow 4 uses a safe five-backtick fence, but names only relative
  `workspace/repo`, omits an absolute plan path and Evaluator, and says “Do not
  execute ... without separate explicit run authorization,” the opposite of
  run-now/pre-approved/no-repeat.

## F1.9 — Preparation crossed into Automake state creation

Flow 3 creates:

> `outputs/automake-home/beacon-reminder/optimizer.md`

Storing an approved role instruction under the redirected Automake home is
state creation even though no repository mutation or child process occurred.

## Passed unaided

- All copied repositories remained unchanged; no Git action, child launch,
  ratchet, product implementation, live-state access, or external temporary
  directory was evidenced.
- Flow 1 completed blocker revision and had pure reviewer packets.
- Flow 2 resumed only the named state and preserved supplied custom values.
- Flow 3 fully reprinted its rejected Optimizer revision.
- Flow 4 preserved the four-backtick snippet and used a safe five-backtick
  outer fence.
- All executors used allowed GPT-5.6 Sol; no Claude or Fable model was invoked.
