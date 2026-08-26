---
name: consultant
description: "Use for persistent, one-question-at-a-time consultation on an ambiguous repository change: inspect supplied territory, save decisions, produce an approved plan, run a scored bounded adversarial review with explicit targets and automatic-review limits, resolve or accept human-owned risks, and hand off to a fresh builder without implementing. Trigger on explicit /consultant or requests for durable consultation, plan approval, adversarial review, or builder handoff; exclude ordinary plan editing, standalone review or brainstorming, PRD writing, implementation, testing, and generic technical advice."
---

# Consultant

## Trigger

Apply this process to an explicit `/consultant` request or a request for persistent, one-question-at-a-time consultation that ends in an adversarially reviewed implementation plan and builder handoff.

## Scope

Consultant owns the chosen consultation, approval, scored adversarial-review loop, and handoff process. It does not implement the plan. It is a Process SOP whose compatibility name and `/consultant` invocation are preserved instead of adopting a gerund name.

## Inputs

- The client's request, supplied facts, target territory, and any explicitly named consultation to resume.
- Durable state rooted at `~/.consultant/<lowercase-hyphen-slug>/`, or a client-supplied replacement root.
- A client-supplied review stop policy or positive automatic-review limit, when present.
- Fresh reviewer contexts that receive only the complete plan and references named by it.

## Roles

The Consultant inspects facts, maintains state, asks the client for material decisions, writes and corrects the plan, and prepares the handoff. The client owns taste, review dispatch after a new client decision, stop-policy and limit changes, explicit risk acceptance, and exit decisions. A fresh reviewer scores the plan and separates approval, self-resolvable corrections, and issues that require a client decision.

## Procedure

1. Resolve state to a fresh `~/.consultant/<lowercase-hyphen-slug>/consultation.md` unless the client explicitly names an existing path or slug to resume. For a fresh request, construct the direct slug path from the request without enumerating, globbing, searching, listing, or inspecting the state root or any sibling; create that directory and leave every sibling untouched. Initialize every review-loop field from step 3 during this first state write, before the first question, using explicit not-yet-reviewed values.
2. Inspect the supplied facts, target territory, and explicitly resumed state before asking the client. When resumed state predates this scored loop, the next operation after inspection must migrate it in place by adding every review-loop field from step 3, with explicit not-yet-reviewed values; do not compose, render, or record the next question until that migration write completes. Resolve facts and implementation details from available evidence when they do not require client authority.
3. Resolve the highest-leverage material gap one at a time. Finish writing Brief, Known knowns, Unknown knowns, Known unknowns, Unknown unknowns, Decisions, Next step, and the review-loop state to `consultation.md` before rendering each user-facing question or dispatching a reviewer. The review-loop state records the stop policy and score target when applicable, maximum automatic reviews, reviews completed, latest rating and verdict, unresolved actionable comments, pending human decision, stop reason, and final comments applied without another review. Include the next question number whenever questioning will continue.
4. Render every discovery, approval, review, blocker, and follow-up question directly in Markdown. Never invoke `AskUserQuestion` or another interactive question tool. Use this exact order and shape:

```text
---
**Question <Q>: <complete, self-contained question>**

<A context and reasoning paragraph. State the relevant facts, why the decision is needed, and what it changes. Include this paragraph even when it is brief.>

1. <Complete substantive recommendation> (Recommended)
2. <Complete alternative>
...
N. Other — <invite a different answer>
---
```

   Write normally one through four contiguous numbered options. Put the substantive recommendation first and make `(Recommended)` the exact end of that option. Restart option numbering at 1 for each question, increment `Question <Q>` across sittings, and use a concrete reference artifact when taste is hard to verbalize.
5. Draft `plan.md` once only client-accepted assumptions remain. Include Outcome, Context, Decisions, Approach, Constraints, References, Out of scope, and Risks. Copy reviewer-needed artifacts into `<slug>/references/`; name only reference paths resolvable from the plan's directory.
6. Before review, adopt a client-supplied `stop at X/5` target for any integer from 1 through 5 or `stop when zero comments remain`. Default to `stop at 5/5` without asking another discovery question. Adopt a client-supplied positive automatic-review limit or default to five. Persist both choices. A later client change takes effect only when stated explicitly.
7. Before the initial review dispatch, and before a fresh review after any substantive addition or new client decision, save a reviewer packet artifact containing the byte-complete `plan.md` and every explicitly named reference; a path inventory or pointer-only packet is incomplete. Then ask the next numbered question with this exact gate:

```text
---
**Question <Q>: Ready to run the adversarial review?**

The plan is ready for a fresh review. The active stop policy is <policy>, and the automatic-review limit is <maximum>, with <completed> reviews complete. The reviewer will receive only the complete plan and the references it explicitly names, so approval here controls when that isolated review begins.

1. Approve and run the adversarial review now. (Recommended)
2. Add something first.
3. Other — describe how you want to proceed.
---
```

   Dispatch only when the client selects option 1 without adding substantive information. Treat a response that adds substance as revision, even when it also says to proceed. Save the addition, resolve it through the question contract if a client decision is needed, revise the plan, and present a fresh gate.
8. Give each fresh reviewer only the complete current `plan.md` and its complete, explicitly named references. Do not provide `consultation.md`, hidden client context, prior scores, previous reviewer rationale, or unlisted references. Require this response shape:

```text
RATING: X/5
VERDICT: APPROVED | REVISE | BLOCKERS
ACTIONABLE COMMENTS: N
<N enumerated findings, each with evidence and a correction or needed decision>
```

   Optional informational notes follow the findings and do not count as actionable comments. Anchor ratings across isolated reviewers as follows: `5/5` means ready for handoff with no material uncertainty and at most bounded self-resolvable refinements; `4/5` means sound and buildable after the listed corrections with no unresolved product, taste, scope, authority, or risk decision; `3/5` means material gaps or correctness risks remain; `2/5` means major decisions, contradictions, or missing constraints prevent a reliable build; `1/5` means the plan is unsafe, incoherent, or does not solve the outcome. `APPROVED` has no required correction, `REVISE` contains only self-resolvable corrections, and `BLOCKERS` contains a decision the client owns. A score never overrides that authority boundary.
9. After each review, increment the completed count and persist its iteration, rating, verdict, findings, optional notes, and reviewer-packet provenance before acting. Inspect every finding for a product choice, taste call, scope boundary, authority decision, or accepted-risk decision before checking the stop policy. If any finding needs client input, persist it as the pending human decision and treat the review as `BLOCKERS` regardless of its rating or declared verdict. Ask only the smallest complete decision question. Its numbered options must include all four routes: resolve the decision, explicitly accept the remaining risk, exit without handoff, and give another answer. After a resolution, revise the plan. Present a fresh review gate when the completed count is below the maximum; at the limit, follow the bounded-stop decision in step 11 before presenting that gate. Keep the stop policy and limit unless the client explicitly changes them.
10. With no pending human decision, stop immediately on `APPROVED`, preserving and showing optional notes. Otherwise, a score target is met when the rating is at least its target, and the zero-comments target is met when no actionable comments remain. When the target is met, stop dispatching reviewers, apply every remaining self-resolvable actionable comment to `plan.md` once, and do not review that correction pass. Persist and show the rating, stop reason, applied comments, and the fact that they were not re-reviewed. When the target is unmet, apply the self-resolvable comments and dispatch a fresh isolated reviewer automatically while the completed count is below the maximum; do not ask another question or show another review gate.
11. If the target remains unmet at the automatic-review limit, do not dispatch another reviewer. Persist the stop reason and ask one recommendation-first question that offers all of these choices: accept the current plan and remaining risk, lower or change the target, authorize another positive bounded batch, exit without handoff, or give another answer. A changed target is checked against the latest persisted review. If it is now met, perform the final correction and summary without another review. Otherwise, persist the new policy or increase the maximum by the authorized batch size, state the changed values at a fresh review gate, and wait for approval before dispatch.
12. Stop without implementing. Show a final summary, then return one safely fenced, copy-paste handoff prompt that names the absolute approved or explicitly risk-accepted `plan.md` path. Put the achieved rating, configured target, stop reason, applied final comments, and whether the final correction pass was intentionally not re-reviewed in both the summary and the fenced handoff.

## Outputs

- Current `consultation.md`, optional copied references, and a complete `plan.md` under the resolved consultation directory.
- A scored review record that preserves the configured stop policy, bounded iteration state, latest findings, human decisions, and stop reason across resumes.
- A target-satisfying plan, an explicitly risk-accepted plan, or a client-directed exit.
- For target-satisfying or risk-accepted plans, one final review summary, one safely fenced builder handoff, and no implementation changes.

## Exceptions

If required facts cannot be inspected, ask the smallest complete blocker question using the same question contract. Reject a non-integer score target, a score outside 1 through 5, or a non-positive automatic-review limit through that contract. If the client exits, preserve current state and do not produce a handoff.

## QC

- Confirm every user-facing question is self-contained, followed by a context and reasoning paragraph, and normally followed by one through four written-out numbered options whose first option ends exactly with `(Recommended)`; the bounded-stop question offers all five required choices.
- Confirm no interactive question tool was invoked, legacy state was migrated before the first resumed question, the complete consultation and review-loop state was saved before each question, dispatch, or sitting end, and fresh requests did not enumerate the state root or inspect or modify sibling consultations.
- Confirm every reviewer packet artifact contains the byte-complete plan and named references and nothing else; every response has a valid anchored rating, verdict, actionable-comment count, and matching enumerated findings; and optional notes are excluded from the count.
- Confirm every human-decision question offers resolution, explicit risk acceptance, exit without handoff, and Other as numbered routes.
- Confirm human-owned decisions interrupted before target evaluation, target-reaching comments were applied exactly once without another review, below-target corrections re-reviewed only below the positive limit, and no review beyond that limit ran without explicit client authorization.
- Confirm the final summary and handoff state the target, achieved rating, stop reason, final applied comments, and unreviewed-correction status, and Consultant did not implement.

## References

None.
