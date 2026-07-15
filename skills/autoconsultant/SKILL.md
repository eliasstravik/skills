---
name: autoconsultant
description: Chains Consultant into an approved Automake setup and a copy-paste handoff for a fresh agent.
disable-model-invocation: true
---

# Autoconsultant

## Recipe

1. Run [`/consultant`](../consultant/SKILL.md) to completion on the user's request, retaining its approved `plan.md` and explicit references.
2. Run [`/automake`](../automake/SKILL.md) with that approved output as its original brief and source of truth through approval of both artifacts and resolution of every Orchestrator value, ending before Automake asks to run or starts Git preflight.
3. Print the handoff Template from `## Details` as one copyable Markdown code block for a fresh agent, containing the absolute repo and plan paths, the full approved `optimizer.md` and `evaluator.md`, every resolved Orchestrator value, and an instruction to read the plan and references, invoke `/automake` in run-now mode, treat the setup as already approved, execute without repeating consultation, and preserve the plan's decisions, constraints, scope, and risks.
4. Stop after the handoff prompt; do not run the ratchet in the current conversation.

## Details

### Handoff template

Print exactly one Markdown fenced code block. Put no required handoff content outside the block. Before printing, inspect the complete handoff body, including the full approved `optimizer.md` and `evaluator.md`; choose an outer fence that is longer than any consecutive backtick run in that body, or another valid Markdown fence with the same safety property. If the approved artifacts contain triple-backtick Markdown fences, use at least four backticks for the outer fence; if they contain four-backtick fences, use at least five, and so on.

The final output must have this shape, with the fence length adjusted as needed:

````markdown
```text
You are the implementation agent for the approved Consultant and Automake setup.

Repository: `<absolute repo path>`
Plan: `<absolute path to plan.md>`

Read `plan.md` and every explicit reference it names. Invoke `/automake` in run-now mode from the repository above. Treat the Automake setup below as already approved: do not repeat consultation, do not re-approve the artifacts, and do not start a new setup. Execute the ratchet while preserving the plan's decisions, constraints, scope, and risks.

---APPROVED OPTIMIZER.MD START---
<full approved optimizer.md>
---APPROVED OPTIMIZER.MD END---

---APPROVED EVALUATOR.MD START---
<full approved evaluator.md>
---APPROVED EVALUATOR.MD END---

---RESOLVED ORCHESTRATOR VALUES START---
<every resolved Orchestrator value, including MAX_ITERATIONS, MAX_CONSECUTIVE_FAILURES, and SUCCESS_CONDITION>
---RESOLVED ORCHESTRATOR VALUES END---
```
````
