---
name: autoconsultant
description: "Autoconsultant owns the approval-gated workflow that takes an ambiguous repository change through a persistent Consultant consultation and adversarial plan review, then prepares separately approved, independent Optimizer and Evaluator instructions plus one copy-paste-safe handoff for a fresh agent. It triggers when a request asks to combine consultation or plan approval with Automake or an evaluator-optimizer setup, preserve plan references, resolve ratchet limits or success conditions, or transfer execution to a new context; explicit `/autoconsultant` also triggers it. It does not own Consultant-only planning, Automake execution, prompt drafting without invocation, plan review without setup, implementation, testing, TDD, Git preflight, or generic workflow explanation."
---

# Autoconsultant

## Recipe

1. Run [Consultant](../consultant/SKILL.md) to an approved or explicitly accepted `plan.md`, preserving its explicit references and implementation boundary.
2. Keep one session-wide Consultant `Question <Q>` sequence across both phases, never invoking `AskUserQuestion` and rendering every inherited discovery, review, blocker, artifact approval, and revision prompt as a clear bold question, necessary context below it, then numbered options with option 1 ending `(Recommended)` and final `Other`.
3. Present the Optimizer approval question with the complete instruction as its context, using the approved plan and inspected repository as [Automake](../automake/SKILL.md)'s source of truth and excluding evaluation criteria.
4. Present a separate Evaluator approval question with the complete independent instruction as its context, excluding Optimizer rationale and prior evaluation material.
5. Resolve maximum iterations, consecutive-failure limit, and observable success condition from supplied values or Automake defaults.
6. Emit one dynamically safe fenced handoff containing absolute repository and plan paths, complete approved role instructions, every resolved value, the plan-preservation contract, and directions for a fresh agent to invoke Automake run-now as already approved without repeating setup.
7. Stop after the handoff without showing Automake's Run gate, performing Git preflight, mutating the repository, creating Automake state, launching a child, running the ratchet, or implementing.

## Details

- Keep every scratch artifact and fence check inside the declared run directory or in memory; never use an external temporary directory.
- Direct the fresh agent to read `plan.md` and every explicit reference it names before invoking Automake.
