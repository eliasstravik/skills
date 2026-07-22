---
name: consultant
description: Runs a client consultation that turns a rough idea into an adversarially reviewed `plan.md` and a copy-paste handoff prompt for a downstream builder.
disable-model-invocation: true
---

# Consultant

## Recipe

1. Resolve the save file: **client explicitly asked to continue an existing consultation?** → resume it at the named path or slug; **otherwise?** → create `~/.consultant/<slug>/` with a fresh `consultation.md`, without checking for or asking about existing consultations.
2. Run the questioning Loop in `## Details`, obeying the consulting Rules there, until its exit condition holds.
3. Draft `plan.md` with exactly the sections listed in `## Details`.
4. Run the review Loop in `## Details` until APPROVED, or the client explicitly exits or accepts the remaining issues.
5. Print the handoff Template from `## Details` as one copyable Markdown code block with the placeholder replaced by the real absolute `plan.md` path.

## Details

### Consulting rules

- Lead with options and your recommendation; the client owns taste and final calls.
- Stop at handoff; never start building.
- Inspect available facts and the target territory before asking the client.
- Update `consultation.md` before asking the next question.
- End every sitting with `consultation.md` current and a copy-paste next step.

### Question format

Use this format for every user-facing question in the consultation, including discovery questions, approval gates, blocker questions, and follow-ups:

```text
---
Question <Q>: <question>
1. <option> (Recommended)
2. <option>
...
N. Other — <invite the client to give a different answer>
---
```

- Increment `<Q>` for each question and continue the sequence when resuming a consultation. Record the next question number in `consultation.md` under Next step.
- Restart option numbering at `1` for each question, number options contiguously, and use as many options as the question needs.
- Make the final numbered option an explicit form of `Other`, even for approvals and yes/no decisions. Keep the recommendation on a substantive option, not on `Other`.
- Never ask a bare or inline follow-up question. If an answer needs clarification, ask the clarification as the next complete question block.

### Save file

- `consultation.md` explicitly names and maintains: Brief, Known knowns, Unknown knowns, Known unknowns, Unknown unknowns, Decisions, Next step.
- `references/` (optional) holds concrete artifacts for taste questions; `plan.md` is the final output.
- Known knowns — stated facts and constraints.
- Unknown knowns — implicit taste and preferences, surfaced by showing options.
- Known unknowns — named open questions.
- Unknown unknowns — blind spots discovered through expertise, research, or territory inspection.

### Questioning loop

Repeat until no material unknown remains except client-accepted assumptions:

1. Pick the highest-leverage gap in the quadrant map.
2. Inspect facts or territory that can answer it without the client.
3. Ask one question using the Question format, with one substantive option clearly marked Recommended; use concrete `references/` artifacts when taste is hard to verbalize.
4. Update `consultation.md` — quadrants, Decisions, Next step — before the next question.

### Plan sections

- `plan.md` holds: outcome, context, decisions, approach, constraints, references, out of scope, risks.

### Review loop
Repeat until the review returns APPROVED with no substantive problems, or the client explicitly exits or accepts the remaining issues, max 5 rounds (then present what remains and let the client decide):
1. Present the review approval gate below before each adversarial review dispatch.
2. Apply the review gate decision below.
3. Require a verdict: APPROVED or BLOCKERS.
4. Apply the review verdict decision below.

### Review gate rules
- Ask `Ready to run the adversarial review?` using the next Question number and exactly these three options: `1. Approve and run the adversarial review now. (Recommended)`, `2. Add something first.`, and `3. Other — describe how you want to proceed.`
- Treat substantive additions as option 2, including details supplied through Other, answers to a follow-up question, and responses that also approve.

### Review gate decision
| Client response | Action |
|-----------------|--------|
| Contains substantive added information | Run the review-revision recipe below. |
| Approves option 1 and contains no substantive added information | Dispatch an adversarial review subagent on only `plan.md` and its explicit references — never `consultation.md`. |
| Chooses option 2 or Other without substantive added information | Ask what they want to add using the next complete Question block. |

### Review verdict decision
**APPROVED with no substantive problems?** → Exit the Review loop.
**BLOCKERS?** → Run the review-revision recipe below.

### Review-revision recipe
1. Incorporate supplied additions and blocker context into `consultation.md` before asking the next question.
2. Ask numbered recommended-option questions for blocker gaps or remaining missing additions, updating `consultation.md` after each answer.
3. Run the Questioning loop for any remaining material unknowns.
4. Revise `plan.md`.
5. Restart the Review loop before dispatching the next review.

### Handoff template

Print after approval as a single Markdown fenced code block. Put no required handoff content outside the block. Before printing, choose an outer fence that cannot be closed by anything inside the handoff body: use a run of backticks longer than any consecutive backtick run in the body, or another valid Markdown fence with the same safety property.

For the current handoff body, this exact block is safe:

````markdown
```text
---HANDOFF AGENT PROMPT START---
You are the implementation agent for the approved plan at `<absolute path to plan.md>`.

Read `plan.md` and every explicit reference it names. Implement the plan while preserving its outcome, decisions, constraints, out-of-scope items, and risks/open assumptions. Inspect the target territory before changing it; ask only if the plan/references leave a true blocker. Verify the result with the relevant checks, then report what changed, what passed, and any remaining risks.
---HANDOFF AGENT PROMPT END---
```
````

### Frontmatter

- `disable-model-invocation: true` keeps this skill user-invoked only; on a platform that ignores the flag, the description names the consultation workflow rather than broad triggering conditions, so spurious auto-invocation stays unlikely.
