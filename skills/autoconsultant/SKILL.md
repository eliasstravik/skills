---
name: autoconsultant
description: Runs a client consultation that turns a rough improvement idea into an adversarially reviewed `plan.md` carrying every automake input, then hands off to a builder agent instructed to run the automake ratchet.
disable-model-invocation: true
---

# Autoconsultant

## Recipe

1. Resolve the save file: **explicit path given?** → resume it; **idea similar to an existing slug?** → ask continue or new; **otherwise?** → create `~/.autoconsultant/<slug>/` with a fresh `consultation.md` whose Known unknowns start seeded with every item in the Automake inputs list in `## Details`.
2. Run the questioning Loop in `## Details`, obeying the consulting Rules there, until its exit condition holds.
3. Draft `plan.md` with exactly the sections listed in `## Details`, including the Automake run inputs section.
4. Run the review Loop in `## Details` until APPROVED, or the client explicitly exits or accepts the remaining issues.
5. Print the handoff Template from `## Details` with the placeholder replaced by the real absolute `plan.md` path.

## Details

### Consulting rules

- Lead with options and your recommendation; the client owns taste and final calls.
- Stop at handoff; never start building and never run automake yourself.
- Inspect available facts and the target territory before asking the client.
- Update `consultation.md` before asking the next question.
- End every sitting with `consultation.md` current and a copy-paste next step.

### Save file

- `consultation.md` explicitly names and maintains: Brief, Known knowns, Unknown knowns, Known unknowns, Unknown unknowns, Decisions, Next step.
- `references/` (optional) holds concrete artifacts for taste questions; `plan.md` is the final output.
- Known knowns — stated facts and constraints. Unknown knowns — implicit taste surfaced by showing options. Known unknowns — named open questions. Unknown unknowns — blind spots found through expertise, research, or territory inspection.

### Automake inputs

The handoff agent answers automake's consultation from these, so resolve each to a level executable without the client present:

- `REPO_DIR` — absolute path to the target git repo, and what reaching a clean committed baseline there requires.
- Optimizer prompt material — the goal, what one focused candidate looks like, and the cheap checks every candidate must pass.
- Judge criteria — the run goal restated, plus comparison criteria a cold evaluator can apply from the baseline-to-candidate diff alone, with added complexity weighed as cost.
- Limits — `MAX_ITERATIONS` and `MAX_CONSECUTIVE_FAILURES`; defaults 5 and 3 unless the client chooses otherwise.
- `SUCCESS_CONDITION` — an observable done-condition for early stop, or explicitly none.

### Questioning loop

Repeat until no material unknown remains except client-accepted assumptions and every Automake input is resolved, max 15 per sitting (then end the sitting per the Rules):

1. Pick the highest-leverage gap in the quadrant map.
2. Inspect facts or territory that can answer it without the client.
3. Ask one numbered question, then 2–4 options with one clearly marked Recommended and an "other" option; use concrete `references/` artifacts when taste is hard to verbalize.
4. Update `consultation.md` — quadrants, Decisions, Next step — before the next question.

### Plan sections

- `plan.md` holds: outcome, context, decisions, approach, constraints, references, out of scope, risks, and Automake run inputs — the resolved value of every item in the Automake inputs list.

### Review loop

Repeat until the review returns APPROVED with no substantive problems, or the client explicitly exits or accepts the remaining issues, max 5 rounds (then present what remains and let the client decide):

1. Dispatch an adversarial review subagent on only `plan.md` and its explicit references — never `consultation.md` — instructed to also attack the Automake run inputs: whether a cold evaluator could apply the judge criteria consistently from a diff alone, and whether the optimizer prompt can run unattended.
2. Require a verdict: APPROVED or BLOCKERS.
3. On substantive BLOCKERS, never revise silently: bring each gap back to the client as a numbered question with recommended options.
4. Update `consultation.md` from the answers, revise `plan.md`, and dispatch the next review.

### Handoff template

Print after approval, delimited exactly:

```text
---HANDOFF AGENT PROMPT START---
You are the implementation agent for the approved plan at `<absolute path to plan.md>`.

Read `plan.md` and every explicit reference it names. Implement the plan by running the automake skill against the repo named in the plan's Automake run inputs section. Answer automake's consultation directly from that section — the optimizer prompt material, judge criteria, iteration limits, and success condition are already decided there; confirm repo preflight facts, but do not re-litigate the decisions. Preserve the plan's outcome, decisions, constraints, out-of-scope items, and risks/open assumptions; ask only if the plan and references leave a true blocker. When the ratchet stops, verify the kept result against the plan's success condition, then report the final kept commit, the BETTER/NOT_BETTER counts, the run-folder paths, and any remaining risks.
---HANDOFF AGENT PROMPT END---
```

### Frontmatter

- `disable-model-invocation: true` keeps this skill user-invoked only; on a platform that ignores the flag, the description names the consultation workflow rather than broad triggering conditions, so spurious auto-invocation stays unlikely.
