---
name: autoconsultant
description: "Autoconsultant owns the approval-gated workflow that takes an ambiguous repository change through a persistent Consultant consultation and adversarial plan review, then prepares separately approved, independent Optimizer and Evaluator instructions plus one copy-paste-safe handoff for a fresh agent. It triggers when a request asks to combine consultation or plan approval with Automake or an evaluator-optimizer setup, preserve plan references, resolve ratchet limits or success conditions, or transfer execution to a new context; explicit `/autoconsultant` also triggers it. It does not own Consultant-only planning, Automake execution, prompt drafting without invocation, plan review without setup, implementation, testing, TDD, Git preflight, or generic workflow explanation."
---

# Autoconsultant

## Recipe

1. Run [Consultant](../consultant/SKILL.md) to an approved or explicitly accepted `plan.md`, preserving its explicit references and implementation boundary.
   Preserve Consultant's stop policy, review count and limit, latest score, pending decision, and final-correction state. Human-owned decisions interrupt regardless of score. A met target applies the remaining self-resolvable comments once without another review; an unmet target re-reviews only inside the active bound, and only an explicit client decision can extend it.
2. Keep one session-wide Consultant `Question <Q>` sequence across both phases. Never invoke `AskUserQuestion` or another interactive question tool. Render every inherited discovery, review, blocker, artifact approval, revision, and follow-up prompt as a complete bold question, a context and reasoning paragraph even when brief, then normally one through four written-out numbered options. The substantive recommendation comes first and ends exactly with `(Recommended)`; the final option invites `Other`. An Optimizer or Evaluator approval with only approve and change options is invalid. Finish emitting and durably recording each question and consumed reply before starting the next phase step; never backfill, reorder, or reconstruct the interaction record after producing the handoff.
3. Present the Optimizer approval question with the complete instruction as its context, using the approved plan and inspected repository as [Automake](../automake/SKILL.md)'s source of truth and excluding evaluation criteria.
4. Present a separate Evaluator approval question with the complete independent instruction as its context, excluding Optimizer rationale and prior evaluation material.
   Save role drafts and approved bodies inside the declared preparation run directory but outside the redirected Automake state root; that state root remains empty until the fresh execution agent invokes Automake.
5. Resolve maximum iterations, consecutive-failure limit, and observable success condition from supplied values or Automake defaults.
6. Emit one dynamically safe fenced handoff containing absolute repository and plan paths, Consultant's achieved rating, target, stop reason, final-correction review status, every resolved value, and directions for a fresh agent to invoke Automake run-now as already approved without repeating setup. Embed the byte-complete approved Optimizer and Evaluator bodies between unambiguous start and end markers by direct byte-for-byte concatenation from the approved files; never re-render, reformat, quote, or regenerate either body. The plan-preservation contract explicitly keeps its Decisions, Constraints, References, Out of scope, Risks, and implementation boundary intact.
7. Stop after the handoff without showing Automake's Run gate, executing any Git command (including read-only status, log, or repository-root checks), mutating the repository, creating the redirected Automake state root or anything inside it, launching a child, running the ratchet, or implementing.

## Details

- Keep every scratch artifact and fence check inside the declared run directory or in memory; never use `/tmp`, another external temporary directory, or a file outside that run directory, even when the file would be removed afterward.
- Direct the fresh agent to read `plan.md` and every explicit reference it names before invoking Automake.
- Before emitting the final handoff, find the longest consecutive backtick run in its complete body and choose a longer outer fence. The opening and closing fence lines use exactly the same number of backticks so the payload remains one copyable block.
- Verify each body between its handoff markers is byte-for-byte identical to its approved file before returning the handoff.
