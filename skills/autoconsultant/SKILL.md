---
name: autoconsultant
description: Chains Consultant into an approved Automake setup and a copy-paste handoff for a fresh agent.
disable-model-invocation: true
---

# Autoconsultant

## Recipe

1. Run [`/consultant`](../consultant/SKILL.md) to completion on the user's request, retaining its approved `plan.md` and explicit references.
2. Run [`/automake`](../automake/SKILL.md) with that approved output as its original brief and source of truth through approval of both artifacts and resolution of every Orchestrator value, ending before Automake asks to run or starts Git preflight.
3. Print one copy-paste prompt for a fresh agent containing the absolute repo and plan paths, the full approved `optimizer.md` and `evaluator.md`, every resolved Orchestrator value, and an instruction to read the plan and references, invoke `/automake` in run-now mode, treat the setup as already approved, execute without repeating consultation, and preserve the plan's decisions, constraints, scope, and risks.
4. Stop after the handoff prompt; do not run the ratchet in the current conversation.
