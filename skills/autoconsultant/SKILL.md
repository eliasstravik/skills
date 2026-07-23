---
name: autoconsultant
description: Chains Consultant into an approved Automake setup and a copy-paste handoff for a fresh agent.
disable-model-invocation: true
---

# Autoconsultant

## Recipe

1. Run [Consultant](../consultant/SKILL.md) to an approved or explicitly accepted `plan.md`, preserving its explicit references and implementation boundary.
2. Keep one session-wide Consultant `Question <Q>` sequence across both phases, wrapping every inherited discovery, review, blocker, artifact approval, and revision prompt in the complete recommended-option format with final `Other`.
3. Use the approved plan and inspected repository as [Automake](../automake/SKILL.md)'s source of truth, then print and obtain client approval for the complete Optimizer instruction without evaluation criteria.
4. Print and obtain separate client approval for the complete independent Evaluator instruction without Optimizer rationale or prior evaluation material.
5. Resolve maximum iterations, consecutive-failure limit, and observable success condition from supplied values or Automake defaults.
6. Emit one dynamically safe fenced handoff containing absolute repository and plan paths, complete approved role instructions, every resolved value, the plan-preservation contract, and directions for a fresh agent to invoke Automake run-now as already approved without repeating setup.
7. Stop after the handoff without showing Automake's Run gate, performing Git preflight, mutating the repository, creating Automake state, launching a child, running the ratchet, or implementing.

## Details

- Keep every scratch artifact and fence check inside the declared run directory or in memory; never use an external temporary directory.
- Direct the fresh agent to read `plan.md` and every explicit reference it names before invoking Automake.
