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

The client controls the initial adversarial-review dispatch and every dispatch
after a new client decision through a dedicated gate. Substantive information
supplied with an approval response is incorporated and resolved before review
rather than being treated as approval. A fresh reviewer sees only the plan and
its explicit references, returns an anchored score, verdict, and counted
findings, and human-owned decisions interrupt before score evaluation.
Self-resolvable corrections continue automatically only inside the configured
target and positive review bound. Consultant stops at a target-satisfying,
approved, or explicitly risk-accepted plan and returns one safely fenced,
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
- Require `RATING: X/5`, `VERDICT`, and a matching actionable-comment count,
  using stable anchors from unsafe or incoherent at 1/5 through handoff-ready
  at 5/5.
- Persist the target, positive automatic-review limit, completed count, latest
  result, findings, pending decision, stop reason, and final-correction state.
- Reserve BLOCKERS for issues that genuinely require a client decision.
  Human authority beats the score, including at 5/5 or zero comments.
- Use REVISE for concrete plan corrections required for safe or correct
  implementation that follow from existing facts and approved constraints.
  Apply those corrections and automatically dispatch a fresh isolated review
  without another user question or review gate only while the target is unmet
  and capacity remains.
- Let APPROVED include optional non-blocking notes. Preserve and show those
  notes, then hand off without another question, revision, or review.
- Default to a 5/5 target and five automatic reviews; accept a supplied 1/5
  through 5/5 target, zero-comments target, or positive maximum without an
  extra discovery question.
- When a target is met, apply remaining self-resolvable comments once and
  record that the final correction was intentionally not re-reviewed.
- At the automatic limit, ask one five-route decision question and never run
  another reviewer without explicit client authority.
- After a true blocker, ask only the smallest decision question needed, revise
  the plan, and obtain approval for a fresh review. End review on APPROVED, a
  met target, explicit client exit, or explicit acceptance of remaining risks.
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
6. **Default target and final correction** — A 4/5 correction is applied and
   re-reviewed automatically; a later 5/5 REVISE reaches the target and gets
   one final correction pass without another review.
7. **Custom 4/5 target** — A supplied threshold stops after one 4/5 REVISE and
   one unreviewed final correction.
8. **Zero-comments target** — A 5/5 result with a comment continues, while a
   later 4/5 result with zero comments stops.
9. **Five-review safety bound** — Five below-target reviews end at the complete
   client decision question with no sixth dispatch.
10. **Resumed review state** — A named consultation preserves its target,
    maximum, count, latest blocker, and pending decision before review three.

These flows cover persistence, new-versus-resume identity, exact question
shape, pre-question saves, plan completeness, scored review gating and
isolation, human authority, every stop policy, the hard bound, durable resume,
safe handoff, and the no-build boundary.
