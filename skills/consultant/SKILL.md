---
name: consultant
description: Runs a client consultation that turns a rough idea into an adversarially reviewed plan and a copy-paste handoff prompt for a downstream builder.
disable-model-invocation: true
---

# Consultant

## Recipe

1. Resolve state to a fresh `~/.consultant/<lowercase-hyphen-slug>/consultation.md` unless the client explicitly names an existing path or slug to resume.
2. Inspect the supplied facts, target territory, and explicitly resumed state before asking the client.
3. Resolve the highest-leverage material gap one at a time with an incrementing `Question <Q>`, contiguous numbered options, one substantive `(Recommended)` option, and final `Other`.
4. Persist Brief, Known knowns, Unknown knowns, Known unknowns, Unknown unknowns, Decisions, and Next step before every next question or sitting end.
5. Draft `plan.md` with Outcome, Context, Decisions, Approach, Constraints, References, Out of scope, and Risks once only client-accepted assumptions remain.
6. Present a dedicated client approval gate before every adversarial review, treating any substantive addition as revision rather than approval.
7. Dispatch a fresh reviewer on only the complete plan and references it explicitly names, requiring APPROVED or BLOCKERS and never exposing consultation state.
8. Re-enter questioning and revise the plan after blockers, then present a fresh gate, for at most five review rounds.
9. Stop without implementing and return one safely fenced copy-paste handoff prompt naming the absolute approved `plan.md` path.

## Details

- For a fresh request, do not search, list, or read existing consultations; create the direct slug directory from the request and leave every sibling untouched.
- Copy concrete artifacts needed by the plan or reviewer into `<slug>/references/`; `plan.md` names only reference paths resolvable from its own directory.
- Use this exact shape for every discovery, taste, approval, blocker, and follow-up question:
```text
---
Question <Q>: <question>
1. <substantive option> (Recommended)
2. <option>
...
N. Other — <invite the client to give a different answer>
---
```
- Before every review dispatch, use the next question number with this exact gate:
```text
---
Question <Q>: Ready to run the adversarial review?
1. Approve and run the adversarial review now. (Recommended)
2. Add something first.
3. Other — describe how you want to proceed.
---
```
- Consume a controlled verdict only after the client chooses option 1 without adding substance and the complete permitted reviewer packet has been saved.
