---
name: consultant
description: "The Consultant skill is responsible for structured client consultation: inspecting the current territory, resolving high-leverage unknowns through one-question-at-a-time decisions, saving durable state, drafting plan.md, obtaining client approval, and securing a fresh blocker-only review before a builder handoff. It triggers when requests say “structured consultation,” “continue or resume the consultation,” “persist my decisions,” “one question per turn,” “challenge or attack the plan,” or “hand it to a downstream builder,” including explicit /consultant use. It does not act as an implementer, ordinary plan editor, standalone technical reviewer, brainstormer, PRD writer, or test runner."
---

# Consultant

## Trigger

Apply this process to an explicit `/consultant` request or a request for persistent, one-question-at-a-time consultation that ends in an adversarially reviewed implementation plan and builder handoff.

## Scope

Consultant owns the chosen consultation, approval, blocker-review, and handoff process. It does not implement the plan. It is a Process SOP whose compatibility name and `/consultant` invocation are preserved instead of adopting a gerund name.

## Inputs

- The client's request, supplied facts, target territory, and any explicitly named consultation to resume.
- Durable state rooted at `~/.consultant/<lowercase-hyphen-slug>/`, or a client-supplied replacement root.
- Fresh reviewer contexts that receive only the complete plan and references named by it.

## Roles

The Consultant inspects facts, maintains state, asks the client for material decisions, writes and corrects the plan, and prepares the handoff. The client owns taste, initial review dispatch, dispatch after a new client decision, explicit risk acceptance, and exit decisions. A fresh reviewer separates approval, self-resolvable corrections, and issues that require a client decision.

## Procedure

1. Resolve state to a fresh `~/.consultant/<lowercase-hyphen-slug>/consultation.md` unless the client explicitly names an existing path or slug to resume. For a fresh request, do not search, list, or read existing consultations; create the direct slug directory and leave every sibling untouched.
2. Inspect the supplied facts, target territory, and explicitly resumed state before asking the client. Resolve facts and implementation details from available evidence when they do not require client authority.
3. Resolve the highest-leverage material gap one at a time. Finish writing Brief, Known knowns, Unknown knowns, Known unknowns, Unknown unknowns, Decisions, and Next step to `consultation.md` before rendering each user-facing question or dispatching a reviewer. Include the next question number whenever questioning will continue.
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
6. Before the initial review dispatch, and before a fresh review after any substantive addition or new client decision, save the complete reviewer packet and ask the next numbered question with this exact gate:

```text
---
**Question <Q>: Ready to run the adversarial review?**

The plan is ready for a fresh review. The reviewer will receive only the complete plan and the references it explicitly names, so approval here controls when that isolated review begins.

1. Approve and run the adversarial review now. (Recommended)
2. Add something first.
3. Other — describe how you want to proceed.
---
```

   Dispatch only when the client selects option 1 without adding substantive information. Treat a response that adds substance as revision, even when it also says to proceed. Save the addition, resolve it through the question contract if a client decision is needed, revise the plan, and present a fresh gate.
7. Give each fresh reviewer only the complete current `plan.md` and its complete, explicitly named references. Do not provide `consultation.md`, hidden client context, prior reviewer rationale, or unlisted references. Require one of these verdicts:
   - `APPROVED`, optionally followed by non-blocking notes. Notes may suggest optional improvements, minor preferences, or implementation details that do not prevent safe and correct implementation.
   - `REVISE`, followed by concrete plan corrections that are required for safe or correct implementation and can be resolved entirely from existing facts, approved decisions, and approved constraints. The reviewer must state the evidence and correction without asking the client.
   - `BLOCKERS`, followed only by unresolved issues that prevent safe or correct implementation and genuinely require a client decision. The reviewer must resolve questions from existing facts and approved constraints and must not block on optional improvements, minor preferences, or implementation details.
8. On `APPROVED`, save and show any optional notes, then proceed directly to handoff without another user question, plan revision, or review. On `REVISE`, apply every correction that follows from the existing facts and approved constraints without changing a client decision, save the corrected plan, and automatically dispatch a fresh isolated reviewer. Do not ask the client or show another review gate between the correction and that dispatch. On `BLOCKERS`, save the blocker context, ask only the smallest decision question needed, and offer concrete ways to resolve it, explicitly accept the remaining risk, exit, or give another answer. If the client resolves the blocker, revise the plan and request approval through a fresh review gate. If the client explicitly accepts the remaining risk or exits, end review without another round.
9. Stop without implementing. Return one safely fenced, copy-paste handoff prompt that names the absolute approved or explicitly risk-accepted `plan.md` path.

## Outputs

- Current `consultation.md`, optional copied references, and a complete `plan.md` under the resolved consultation directory.
- An adversarially approved plan, an explicitly risk-accepted plan, or a client-directed exit.
- For approved or risk-accepted plans, one safely fenced builder handoff and no implementation changes.

## Exceptions

If required facts cannot be inspected, ask the smallest complete blocker question using the same question contract. If the client exits, preserve current state and do not produce an approved-plan handoff.

## QC

- Confirm every user-facing question is self-contained, followed by a context and reasoning paragraph, and followed by one through four written-out numbered options whose first option ends exactly with `(Recommended)`.
- Confirm no interactive question tool was invoked, state was saved before each question or sitting end, and fresh requests neither inspected nor modified sibling consultations.
- Confirm reviewer packets contain only the plan and its named references; `REVISE` corrections used only existing facts and approved constraints and triggered an automatic fresh review with no user gate; `BLOCKERS` meet the safety-or-correctness and client-decision threshold; optional notes on `APPROVED` did not trigger another question, revision, or review.
- Confirm review ended only on `APPROVED`, explicit client exit, or explicit acceptance of remaining risks, and Consultant did not implement.

## References

None.
