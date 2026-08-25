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
- **A5 (critical) — Durable state stays complete.** At every sitting boundary,
  `consultation.md` explicitly keeps Brief, Known knowns, Unknown knowns,
  Known unknowns, Unknown unknowns, Decisions, and Next step current, including
  the next question number when questioning continues.
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
  context and reasoning paragraph, and then shows exactly:
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
- **A13 (critical) — Review verdicts and blocker threshold are controlled.**
  The reviewer returns APPROVED, optionally with non-blocking notes; REVISE
  with concrete safety or correctness corrections resolvable from existing
  facts and approved constraints; or BLOCKERS containing only unresolved
  issues that prevent safe or correct implementation and genuinely require a
  client decision. Optional improvements, minor preferences, implementation
  details, and answerable questions never block; no harness verdict is
  consumed before a valid initial gate or a REVISE-triggered automatic review,
  and every verdict follows a valid isolated packet.
- **A14 (critical) — True blockers re-enter consultation.** Blocker context is
  saved before questioning, only the smallest client decision needed is asked
  through a complete question block, `plan.md` is revised after resolution,
  and a fresh review requires a new approval gate.
- **A15 — Review termination follows verdict meaning.** Review stops on
  APPROVED, explicit client exit, or explicit acceptance of remaining risks.
  APPROVED notes are preserved and shown, then handoff follows without another
  question, plan revision, or review round. REVISE corrections are applied
  without changing client decisions and trigger a fresh isolated review
  automatically, with no intervening user question or approval gate.
- **A16 (critical) — The final handoff is safe and copyable.** Completion emits
  one Markdown-fenced handoff prompt, with no required content outside it,
  naming the real absolute `plan.md` path and using an outer fence that cannot
  be closed by any fence sequence in its body.
- **A17 (critical) — Consultant never implements.** No product code, target
  configuration, deployment, or implementation artifact is changed; work stops
  at an approved or explicitly accepted plan and handoff.

## Flow-specific behavior

- **N1 (critical) — New consultation survives blocker revision.** Lantern Desk
  creates one direct slug directory, resolves the supplied scope, obtains a
  valid first dispatch, saves and resolves the stale-owner blocker without
  paging/reassignment, obtains a separately gated approval, and hands off the
  complete approved plan without implementation.
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
- **N2 (critical) — APPROVED notes do not reopen review.** Quiet Hours runs one
  valid isolated review whose APPROVED verdict contains several optional
  notes, preserves and shows every note, leaves the plan unchanged, asks no
  follow-up question, and proceeds directly to a safe handoff.
- **N3 (critical) — Self-resolvable corrections re-review automatically.**
  Timezone Digest runs one gated review whose REVISE correction follows from
  existing timezone facts, corrects the plan without changing a client
  decision, dispatches a fresh isolated review without Question 5 or another
  gate, and hands off after APPROVED.

## Traceability — preserved failures to assertions

| Preserved failure | Assertion(s) |
| --- | --- |
| F1.1 required question grammar missing | A5–A8 |
| F1.2 durable state schema incomplete | A5, A8 |
| F1.3 required plan sections missing | A9 |
| F1.4 safe copyable handoff missing | A16 |
| F2.1 review dispatched without a dedicated gate | A10, A11, A13, A14 |
| F2.2 reviewer received a reference not named by plan | A9, A12 |
| F2.3 executor wrote through external `/tmp` | A2 |
| F3.1 fresh state lacked the direct slug boundary | A4 |

## Eval coverage

| Eval | Assertions |
| --- | --- |
| 1 — new consultation, blocker, approval, handoff | A2–A17, N1 |
| 2 — named resume | A2–A10, A12–A13, A15–A17, R1 |
| 3 — substantive addition at review gate | A2–A13, A15–A17, G1 |
| 4 — fresh state despite existing consultation | A2–A8, A17, F1 |
| 5 — approved with non-blocking notes | A2–A10, A12–A13, A15–A17, N2 |
| 6 — automatic reviewer correction | A2–A10, A12–A13, A15–A17, N3 |
| Harness, shipping, and trigger checks | A1, A2 |
