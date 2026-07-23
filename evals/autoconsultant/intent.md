# autoconsultant — intent

## Real job

`autoconsultant` composes the completed Consultant and Automake workflows into
one preparation-only engagement. It turns a rough request into an approved
Consultant `plan.md`, then uses that plan and its explicit references as
Automake's source of truth while resolving and obtaining client approval for
the complete Optimizer and Evaluator instructions plus every Orchestrator
value.

The current conversation must stop before Automake's final Run gate, Git
preflight, repository mutation, child launch, or ratchet state creation. Its
only terminal product is one copyable, fence-safe prompt for a fresh agent. The
prompt carries the absolute repository and plan paths, both complete approved
role instructions, all resolved run values, and an instruction to invoke
Automake in run-now mode without repeating consultation or approvals.

Autoconsultant owns the cross-skill interaction contract: every client question
from first Consultant discovery through Automake artifact approval uses
Consultant's complete question block and one session-wide sequence. The
Autoconsultant invocation never pre-authorizes Consultant review or Automake
artifact approvals.

## Live-state surfaces

- redirected `~/.consultant/<slug>/consultation.md`, `references/`, and
  approved `plan.md`
- the target repository, inspected read-only while preparing Automake
- complete proposed and approved Optimizer/Evaluator instructions
- resolved `REPO_DIR`, maximum iterations, consecutive-failure limit, and
  observable success condition
- fresh Consultant adversarial-review contexts and their plan/reference inputs
- the final handoff body and its dynamically safe outer Markdown fence

Every eval redirects Consultant and Automake state into its own run directory,
copies fresh fictional fixtures, and restricts executors/reviewers to GPT-5.6
Sol, Terra, or Luna. Real Consultant/Automake state, unrelated repositories,
external temporary directories, credentials, live services, and production
systems are off-limits. Because the current conversation never runs Automake,
the target repository and redirected Automake home must remain byte-for-byte
unchanged.

## Interaction contract

- Complete Consultant first, including explicit review gates, approved plan,
  references, durable saves, and no implementation.
- Continue one incrementing `Question <Q>` sequence across both phases; every
  question has contiguous options, one substantive recommendation, and final
  `Other`.
- Preserve each Automake question or approval's meaning while wrapping it in
  the Consultant question shape; never print inherited bare or option-only
  prompts.
- Show and approve the complete Optimizer instruction, then the complete
  independent Evaluator instruction; revisions reprint the whole artifact.
- Keep Evaluator acceptance criteria out of the Optimizer and Optimizer
  rationale/context out of the Evaluator.
- Resolve all Orchestrator values from supplied inputs or Automake defaults,
  but do not show or consume the Automake Run gate.
- Emit exactly one safe fenced handoff containing absolute repo/plan paths,
  full approved role artifacts, every resolved value, run-now/pre-approved
  instructions, and the plan-preservation contract.
- Stop after handoff without Git preflight, repository mutation, child launch,
  ratchet state, or product implementation.

## Proposed eval flows

1. **Fresh full chain with Consultant blocker** — Inspect a fictional
   repository, create fresh Consultant state, resolve the product brief, obtain
   a gated BLOCKERS verdict, revise and obtain approval, then prepare and
   separately approve complete Automake role artifacts with defaults. Finish
   with the fresh-agent handoff and prove repository/Automake state unchanged.
2. **Named resume and custom run values** — Resume a supplied consultation at
   its saved question number, preserve decisions and an explicit reference,
   complete review, continue numbering into Automake, resolve user-supplied
   iteration/failure/success values, and hand off in the same consultation
   directory without a sibling.
3. **Artifact revision without pre-authorization** — Start from a nearly
   complete Consultant state, require the Consultant review gate despite the
   `/autoconsultant` invocation, then reject and revise the first complete
   Optimizer instruction before approving it and the Evaluator. Verify every
   approval uses the cross-skill question grammar and the full artifact is
   reprinted.
4. **Fence safety and no-run boundary** — Role instructions and plan
   references contain nested backtick fences. Produce an outer fence longer
   than every internal run, include all terminal fields exactly once, and
   prove no final Run question, Git action, Automake state, child process, or
   implementation occurred.

These flows cover composition order, review and artifact gates, global question
numbering, role independence, default/custom Orchestrator values, complete
handoff containment, dynamic fence safety, and the strict preparation-only
boundary.
