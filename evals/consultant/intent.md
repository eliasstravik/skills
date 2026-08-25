# consultant — intent

## Real job

`consultant` turns an underspecified idea into an implementation-ready plan
without beginning implementation. It owns a persistent client consultation:
inspect available facts, map known knowns, unknown knowns, known unknowns, and
unknown unknowns, resolve the highest-leverage gaps through concrete
recommended options, and preserve every decision before asking the next
question.

A new invocation creates fresh state without searching for a prior
consultation. Only an explicit request to continue a named path or slug resumes
existing state. Once material unknowns are resolved, Consultant writes a plan
with the required outcome, context, decisions, approach, constraints,
references, out-of-scope, and risks sections.

The client controls every adversarial-review dispatch through a dedicated gate.
Substantive information supplied with an approval response is incorporated and
resolved before review rather than being treated as approval. A fresh reviewer
sees only the plan and its explicit references, returns APPROVED or BLOCKERS,
and blockers re-enter questioning and plan revision. Consultant stops at an
approved or explicitly accepted plan and returns one safely fenced,
copy-pasteable downstream handoff prompt.

## Live-state surfaces

- `~/.consultant/<slug>/consultation.md`, optional `references/`, and `plan.md`
- named existing consultation state when the user explicitly requests resume
- source facts and target territory inspected read-only before questions
- fresh adversarial reviewer contexts and their plan/reference inputs
- user-facing question numbering, saved Next step, and sitting boundaries

Every eval redirects `~/.consultant` into its own run directory, copies fresh
fictional fixtures, and restricts executors/reviewers to GPT-5.6 Sol, Terra, or
Luna. Real Consultant state, unrelated repositories, external temporary
directories, credentials, live services, and production systems are off-limits.

## Interaction contract

- Inspect supplied facts and territory before asking the client.
- Ask exactly one complete question block per turn, with an incrementing bold
  `Question <Q>`, a context and reasoning paragraph even when brief, normally
  one through four written-out contiguous numbered options, option 1 ending
  exactly with `(Recommended)`, and a final `Other` option; never invoke
  `AskUserQuestion` or another interactive question tool.
- Update `consultation.md` before every next question and leave Brief, all four
  quadrants, Decisions, and Next step current at the end of each sitting.
- Lead with concrete choices while leaving taste and final decisions to the
  client; never ask a bare inline follow-up.
- Create new state by default; resume only an explicitly named consultation.
- Show the exact review gate before every review, and never dispatch when the
  same response contains substantive additions.
- Give each fresh reviewer only `plan.md` and its explicit references, never
  `consultation.md`.
- Reserve BLOCKERS for unresolved issues that prevent safe or correct
  implementation and genuinely require a client decision. Resolve optional
  improvements, minor preferences, implementation details, and answerable
  questions without blocking.
- Use REVISE for concrete plan corrections required for safe or correct
  implementation that follow from existing facts and approved constraints.
  Apply those corrections and automatically dispatch a fresh isolated review
  without another user question or review gate.
- Let APPROVED include optional non-blocking notes. Preserve and show those
  notes, then hand off without another question, revision, or review.
- After a true blocker, ask only the smallest decision question needed, revise
  the plan, and obtain approval for a fresh review. End review on APPROVED,
  explicit client exit, or explicit acceptance of remaining risks.
- Never implement the plan; finish with one copyable fenced handoff whose
  absolute plan path and fence safety are correct.

## Proposed eval flows

1. **New consultation, blocker, approval, handoff** — A rough fictional feature
   idea requires fact inspection, two high-leverage questions, a complete plan,
   an approved review dispatch, one reviewer blocker, revision questioning, a
   second approved review, and the exact final handoff without implementation.
2. **Named resume** — Resume a supplied consultation at its saved next question
   and numbering, preserve prior decisions and a taste reference, finish the
   plan, obtain approval, and hand off in the same directory with no sibling.
3. **Substantive addition at review gate** — A complete draft reaches the review
   gate; the scripted response both approves and adds an offline constraint.
   Consultant must update state, question/revise as needed, and present a new
   gate before any reviewer dispatch.
4. **Fresh state despite existing consultations** — An unrelated prior
   consultation exists under the redirected state root, but the invocation
   does not explicitly request resume. Consultant creates exactly one new
   lowercase-hyphen directory, never asks which state to use, preserves the
   old directory byte-for-byte, and ends the sitting with a current next step.
5. **Approved with non-blocking notes** — Resume a complete plan at its review
   gate, approve one isolated review, and return several optional notes with an
   APPROVED verdict. Consultant preserves and shows the notes, asks no further
   question, leaves the plan unchanged, and proceeds directly to handoff.
6. **Automatic reviewer correction** — Resume a complete plan at its review
   gate and return a REVISE verdict whose correction follows from the plan's
   own timezone facts. Consultant corrects the plan and automatically runs a
   fresh isolated review without Question 5; APPROVED then reaches handoff.

These flows cover persistence, new-versus-resume identity, exact question
shape, pre-question saves, plan completeness, review gating and isolation,
blocker revision, safe handoff, and the no-build boundary.
