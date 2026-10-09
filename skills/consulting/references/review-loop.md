# Review loop and handoff

## Contents

- [State that mirrors the loop](#state-that-mirrors-the-loop)
- [1. Stop policy and limit](#1-stop-policy-and-limit)
- [2. Reviewer packet and review gate](#2-reviewer-packet-and-review-gate)
- [3. Dispatching a reviewer](#3-dispatching-a-reviewer)
- [4. After each review](#4-after-each-review)
- [5. Target met or not](#5-target-met-or-not)
- [6. Bounded stop](#6-bounded-stop)
- [7. Handoff](#7-handoff)

Every question in this loop is chat-only: unnumbered (`**Question: …**`), no step, no page of its own. Its
`Page:` line is `Page: <URL>#plan`, because the page shows the plan throughout. A reviewer-raised choice
whose options the client could see or try is the one exception: ask it as an ordinary numbered discovery
step.

## State that mirrors the loop

The review-loop state in `consultation.md` records: stop policy and score target, maximum automatic
reviews, reviews completed, latest rating and verdict, unresolved actionable comments, pending human
decision, stop reason, and final comments applied without another review. Save it before every question
and every dispatch.

After every change to that state, rewrite `reviewStatus` in `session.json` in the same operation (and bump
`rev`). It is one display sentence restating the state, for example:

- `Not yet reviewed · stop at 5/5 · up to 5 reviews`
- `Review 2 of 5 · 4/5 REVISE · stop at 5/5`
- `Review 3 of 5 · waiting for your decision`
- `Review 5 of 5 · 3/5 REVISE · limit reached`
- `Approved at 5/5 after 2 reviews` / `Risk accepted at 3/5 after 6 reviews`

Every edit to `plan.md` during the loop is copied to `page/plan.md` in the same operation.

## 1. Stop policy and limit

Before review, adopt a client-supplied `stop at X/5` target for any integer from 1 through 5, or
`stop when zero comments remain`. Default to `stop at 5/5` without asking. Adopt a client-supplied positive
automatic-review limit, or default to five. Persist both. A later client change takes effect only when
stated explicitly. Reject a non-integer target, a score outside 1 through 5, or a non-positive limit with a
question in the usual shape.

## 2. Reviewer packet and review gate

Before the first dispatch, and before a fresh review after any substantive addition or new client decision,
save a reviewer packet in `references/`: one text file containing the byte-complete `plan.md` and the full
text of every text reference it names, including the named step pages; and, for each named binary file,
one line giving its path, media type and a one-line description. A path inventory or pointer-only packet is
incomplete. Nothing the plan does not name goes in.

Then ask this exact gate:

```text
Page: <URL>#plan

---
**Question: Ready to run the adversarial review?**

The plan is ready for a fresh review. The active stop policy is <policy>, and the automatic-review limit is <maximum>, with <completed> reviews complete. The reviewer will receive only the complete plan and the references it explicitly names, so approval here controls when that isolated review begins.

1. Approve and run the adversarial review now. (Recommended)
2. Add something first.
3. Other — describe how you want to proceed.
---
```

Dispatch only when the client selects option 1 without adding substantive information ("1", "1 go", the
option's own words). A reply that adds substance is a revision even when it also says to proceed, and so is
a pasted `Plan feedback` block: save the addition, resolve it through a question if a client decision is
needed, revise the plan, save a new packet, and present a fresh gate.

## 3. Dispatching a reviewer

Give each fresh reviewer only the current packet. Never `consultation.md`, `session.json`, hidden client
context, prior scores, previous reviewer rationale, or unlisted references. Require this response shape:

```text
RATING: X/5
VERDICT: APPROVED | REVISE | BLOCKERS
ACTIONABLE COMMENTS: N
<N enumerated findings, each with evidence and a correction or needed decision>
```

Optional informational notes follow the findings and do not count as actionable comments. Rating anchors:
`5/5` ready for handoff with no material uncertainty and at most bounded self-resolvable refinements;
`4/5` sound and buildable after the listed corrections, with no unresolved product, taste, scope, authority
or risk decision; `3/5` material gaps or correctness risks remain; `2/5` major decisions, contradictions or
missing constraints prevent a reliable build; `1/5` unsafe, incoherent, or does not solve the outcome.
`APPROVED` has no required correction, `REVISE` contains only self-resolvable corrections, and `BLOCKERS`
contains a decision the client owns. A score never overrides that authority boundary.

## 4. After each review

Increment the completed count and persist iteration, rating, verdict, findings, optional notes and packet
provenance before acting. Inspect every finding for a product choice, taste call, scope boundary, authority
decision or accepted-risk decision before checking the stop policy. If any finding needs client input,
persist it as the pending human decision and treat the review as `BLOCKERS` regardless of its rating or
declared verdict.

Ask only the smallest complete decision question. Its numbered options must include all four routes:
resolve the decision, explicitly accept the remaining risk, exit without handoff, and give another answer.
Record the answer under the design-tree node it settles in `consultation.md`, in the list
"Decided outside a step", with the client's words. After a resolution, revise the plan. Present a fresh
review gate when the completed count is below the maximum; at the limit, go to the bounded stop before any
gate. Keep the stop policy and limit unless the client explicitly changes them.

## 5. Target met or not

With no pending human decision:

- `APPROVED` → stop immediately; preserve and show optional notes.
- Target met (rating at least the score target; or, for the zero-comments policy, no actionable comments) →
  stop dispatching; apply every remaining self-resolvable comment to `plan.md` once; do not review that
  correction pass. Persist and show the rating, stop reason, applied comments, and that they were not
  re-reviewed.
- Target unmet and completed count below the maximum → apply the self-resolvable comments, save a new
  packet, and dispatch a fresh isolated reviewer automatically. No question, no gate.

## 6. Bounded stop

If the target is unmet at the automatic-review limit, dispatch nothing. Persist the stop reason and ask one
recommendation-first question offering all five choices: accept the current plan and remaining risk; lower
or change the target; authorize another positive bounded batch; exit without handoff; give another answer.

A changed target is checked against the latest persisted review. If it is now met, do the final correction
and summary without another review. Otherwise persist the new policy, or increase the maximum by the
authorized batch size, state the changed values at a fresh review gate, and wait for approval before
dispatch.

## 7. Handoff

Stop without implementing. Show a final summary, then one safely fenced, copy-paste handoff prompt naming
the absolute path of the approved or explicitly risk-accepted `plan.md`. Both the summary and the fenced
handoff carry five facts: achieved rating, configured target, stop reason, final comments applied, and
whether the final correction pass was intentionally not re-reviewed.

After the fence, give the page URL, the exact stop command
`<skill-dir>/scripts/serve.sh <page-dir> stop`, and a reminder to remove any private share created for the
page. The server stays running. A client-directed exit preserves state and produces no handoff.
