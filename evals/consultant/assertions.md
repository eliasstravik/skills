# consultant — assertion suite

One checkable assertion covers every required behavior and every preserved
baseline failure. **(critical)** marks severe or contractual behavior.

## Invocation, state, and consultation

- **A1 (critical) — Invocation is precise.** Shipping frontmatter permits
  model invocation; implicit requests for the persistent, adversarially
  reviewed consultation and explicit `/consultant` requests trigger it, while
  near-miss requests for ordinary planning, implementation, review, or advice
  do not.
- **A2 (critical) — State and model isolation hold.** Every read, write,
  process, reviewer context, and artifact stays inside the declared territory
  and redirected Consultant home; real `~/.consultant`, unrelated
  repositories, external temporary directories, credentials, and live systems
  are untouched, and every executor or reviewer uses only GPT-5.6 Sol, Terra,
  or Luna.
- **A3 — Available facts are inspected first.** The agent inspects supplied
  territory, source facts, and an explicitly named consultation before asking,
  resolves inferable gaps itself, and never asks the client to repeat a
  supplied fact.
- **A4 (critical) — New versus resume identity is exact.** A new request
  creates one fresh `~/.consultant/<lowercase-hyphen-slug>/consultation.md`
  without searching for, asking about, reading, or modifying existing
  consultations; only an explicit named path or slug resumes state, and a
  resume creates no sibling consultation.
- **A5 (critical) — Durable state stays complete.** Before every question,
  review dispatch, and sitting boundary, `consultation.md` explicitly keeps
  Brief, Known knowns, Unknown knowns, Known unknowns, Unknown unknowns,
  Decisions, Next step, stop policy, score target when applicable, maximum
  automatic reviews, reviews completed, latest rating and verdict, unresolved
  actionable comments, pending human decision, stop reason, and final comments
  applied without another review current, including the next question number
  when questioning continues.
- **A6 (critical) — Every question uses the exact block grammar.** Each
  user-facing discovery, taste, approval, review, blocker, or follow-up turn
  contains exactly one direct-Markdown `Question <Q>` block and never invokes
  `AskUserQuestion` or another interactive question tool; the question is
  complete, self-contained, and bold; a context and reasoning paragraph
  follows even when brief; normally one through four written-out options
  restart at 1 and remain contiguous; the substantive recommendation is first
  and ends exactly with `(Recommended)`; and the final numbered option is
  explicit `Other`.
- **A7 — Questions resolve the highest-leverage gap.** The agent chooses the
  most material unresolved quadrant, offers concrete choices rather than a
  bare inline follow-up, uses reference artifacts when taste is hard to
  verbalize, and leaves taste and final decisions to the client.
- **A8 (critical) — State is saved before continuing.** Every reply, inferred
  fact, decision, quadrant change, reviewer blocker, and Next step is persisted
  before the next question, plan revision, reviewer dispatch, or sitting end.

## Plan, review, and handoff

- **A9 (critical) — The plan section set is complete.** Final `plan.md`
  explicitly contains Outcome, Context, Decisions, Approach, Constraints,
  References, Out of scope, and Risks, with client-accepted assumptions visible
  and every named reference resolvable from the consultation directory.
- **A10 (critical) — Every review has the exact dedicated gate.** After the
  client can inspect the current plan and before the initial dispatch or a
  dispatch after substantive additions or a new client decision, the next
  Question asks `Ready to run the adversarial review?`, includes the required
  context and reasoning paragraph stating the active stop policy, automatic
  review maximum, and completed count, and then shows exactly:
  `1. Approve and run the adversarial review now. (Recommended)`,
  `2. Add something first.`, and
  `3. Other — describe how you want to proceed.`
- **A11 (critical) — Substantive additions never authorize dispatch.** A reply
  that contains new substantive information is treated as option 2 even when
  it also approves; the addition is saved, clarified if needed, incorporated
  into the plan, and followed by a fresh gate before any reviewer runs.
- **A12 (critical) — Reviewer input is minimal and explicit.** Each review uses
  a fresh allowed-model context that receives only the complete current
  `plan.md` and complete references explicitly named by that plan—never
  `consultation.md`, hidden client context, prior reviewer rationale, or an
  unlisted reference.
- **A13 (critical) — Scored reviewer output is controlled.** Every valid review
  returns `RATING: X/5`, `VERDICT: APPROVED | REVISE | BLOCKERS`,
  `ACTIONABLE COMMENTS: N`, and exactly N enumerated findings with evidence and
  a correction or needed decision. Ratings use the stable 1/5 through 5/5
  anchors; optional informational notes are preserved but excluded from N;
  APPROVED has no required correction, REVISE has only self-resolvable
  corrections, and BLOCKERS has a client-owned decision.
- **A14 (critical) — Human authority beats every score.** After every review,
  the rating, verdict, findings, count, and iteration are saved before action.
  Any product, taste, scope, authority, or accepted-risk decision interrupts
  before target evaluation, even at 5/5 or zero comments. The smallest client
  decision is asked through a complete question block with options to resolve,
  accept risk, exit, or answer another way; resolution revises the plan and a
  fresh review requires a new approval gate and available review capacity.
- **A15 (critical) — Stop policies and final corrections are exact.** An
  invocation-supplied score target from 1/5 through 5/5 or zero-comments target
  is persisted without another discovery question; otherwise 5/5 is the
  default. A score target is met at or above its rating and zero comments is met
  only at zero actionable comments. APPROVED always stops. A met target applies
  every remaining self-resolvable comment exactly once, never reviews that
  correction pass, and records and shows what changed and that it was not
  re-reviewed. An unmet target applies corrections and re-reviews automatically
  with no user gate only while capacity remains.
- **A16 (critical) — The final handoff is safe and copyable.** Completion emits
  one Markdown-fenced handoff prompt, with no required content outside it,
  naming the real absolute `plan.md` path and using an outer fence that cannot
  be closed by any fence sequence in its body. The preceding final summary and
  the handoff state the achieved rating, configured target, stop reason, final
  comments applied, and whether the correction pass was intentionally not
  re-reviewed.
- **A17 (critical) — Consultant never implements.** No product code, target
  configuration, deployment, or implementation artifact is changed; work stops
  at a target-satisfying or explicitly accepted plan and handoff.
- **A18 (critical) — The hard bound needs client authority.** The default is at
  most five isolated reviews after initial approval, or the client's supplied
  positive maximum. If the target remains unmet at the limit, no next reviewer
  runs. One recommendation-first question offers accepting current risk,
  changing the target, authorizing another positive bounded batch, exiting
  without handoff, and Other. Only explicit authorization increases the maximum
  and a changed limit appears at a fresh review gate before dispatch.
- **A19 (critical) — Resume preserves review continuity.** A named resume keeps
  its stop policy, maximum, completed count, latest rating and verdict,
  unresolved comments, pending human decision, and stop reason without reset,
  sibling creation, or an invented fresh review.

## Flow-specific behavior

- **N1 (critical) — A perfect score cannot bypass a blocker.** Lantern Desk
  creates one direct slug directory, defaults to 5/5 and five reviews, obtains
  a valid first dispatch, saves a 5/5 BLOCKERS result and resolves its
  stale-owner decision without paging or reassignment, obtains a separately
  gated 5/5 approval, and hands off without implementation.
- **R1 (critical) — Named resume preserves continuity.** Harbor Kiosk resumes
  at Question 7, preserves all prior decisions and `references/tone-cards.md`,
  creates no sibling, completes all required plan sections, sends only
  plan-named reviewer material, and hands off in the same directory.
- **G1 (critical) — Mixed approval and addition re-gates.** Offline Export
  records the Question 12 offline addition as non-dispatch, clarifies it at the
  next number, revises the complete plan, shows a fresh gate, dispatches exactly
  once, and finishes with a safe handoff.
- **F1 (critical) — Fresh state ignores unrelated consultations.** Approval
  Inbox creates exactly one direct `approval-inbox` state directory, leaves
  `archive-migration` byte-for-byte unchanged, asks no resume-choice question,
  saves the complete schema before Question 1, and creates no plan, review
  packet, handoff, or implementation in the incomplete sitting.
- **N2 (critical) — APPROVED notes do not count or reopen review.** Quiet Hours
  records 5/5 APPROVED with zero actionable comments, preserves and shows all
  three optional notes without counting them, leaves the plan unchanged, asks
  no follow-up question, and proceeds directly to a safe handoff.
- **N3 (critical) — The default target gets one final correction pass.**
  Timezone Digest applies a 4/5 correction and re-reviews automatically, then
  stops on a 5/5 REVISE, applies that bounded comment once, and hands off
  without a third review.
- **N4 (critical) — A custom score target stops at its threshold.** A supplied
  4/5 target appears at the gate; a 4/5 REVISE applies its one correction and
  hands off without a second review.
- **N5 (critical) — Zero comments is independent of score.** A 5/5 result with
  one actionable comment continues, while the later 4/5 result with zero
  actionable comments stops and preserves its optional note.
- **N6 (critical) — Five below-target reviews stop.** Exactly five 4/5 reviews
  run under the default 5/5 policy, no sixth reviewer runs, all completed state
  is saved, and the sitting ends at the complete five-choice bounded-stop
  question without handoff.
- **N7 (critical) — Review state resumes in place.** Review Cursor resumes with
  target 5/5, maximum five, count two, latest 4/5 BLOCKERS, and its pending
  buffer decision; after resolution, the next gated review is number three and
  the same state reaches handoff without a sibling.

## Traceability — preserved failures to assertions

| Preserved failure | Assertion(s) |
| --- | --- |
| F1.1 required question grammar missing | A5–A8 |
| F1.2 durable state schema incomplete | A5, A8 |
| F1.3 required plan sections missing | A9 |
| F1.4 safe copyable handoff missing | A16 |
| F2.1 review dispatched without a dedicated gate | A10, A11, A13, A14, A18 |
| F2.2 reviewer received a reference not named by plan | A9, A12 |
| F2.3 executor wrote through external `/tmp` | A2 |
| F3.1 fresh state lacked the direct slug boundary | A4 |

## Eval coverage

| Eval | Assertions |
| --- | --- |
| 1 — new consultation, 5/5 blocker, approval, handoff | A2–A18, N1 |
| 2 — named resume | A2–A10, A12–A17, A19, R1 |
| 3 — substantive addition at review gate | A2–A17, G1 |
| 4 — fresh state despite existing consultation | A2–A8, A17, F1 |
| 5 — approved with non-blocking notes | A2–A10, A12–A17, N2 |
| 6 — default target and final correction | A2–A18, N3 |
| 7 — custom 4/5 target | A2–A18, N4 |
| 8 — zero-comments target | A2–A18, N5 |
| 9 — five-review safety bound | A2–A15, A17–A18, N6 |
| 10 — resumed review-loop state | A2–A19, N7 |
| Harness, shipping, and trigger checks | A1, A2 |
