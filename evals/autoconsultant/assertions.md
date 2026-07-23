# autoconsultant — assertion suite

One checkable assertion covers every required behavior and every preserved
baseline failure. **(critical)** marks severe or contractual behavior.

## Composition and interaction

- **A1 (critical) — Invocation stays explicit.** Shipping frontmatter keeps
  Autoconsultant user-invoked, and ordinary Consultant, Automake, planning,
  implementation, review, or consulting requests do not trigger the composed
  preparation workflow.
- **A2 (critical) — State, repository, and model isolation hold.** Every read,
  write, reviewer, and process stays inside the copied repository and redirected
  preparation state; live state, unrelated repositories, external temporary
  directories, credentials, and services are untouched, and every executor or
  reviewer uses only GPT-5.6 Sol, Terra, or Luna.
- **A3 (critical) — Phase order is exact.** Consultant reaches an approved or
  explicitly accepted plan before Automake preparation begins; Automake role
  approvals and run values finish before the handoff, with no phase skipped or
  pre-authorized by the Autoconsultant invocation.
- **A4 (critical) — Consultant identity and state remain correct.** A new
  request creates one direct fresh slug without searching existing state; an
  explicit resume touches only the named consultation; every sitting leaves
  Brief, all four known/unknown quadrants, Decisions, and Next step current.
- **A5 (critical) — One exact question sequence spans both skills.** Every
  discovery, review, blocker, role approval, revision, and value question uses
  the complete Consultant `Question <Q>` block with continuous session-wide
  numbering, contiguous options, one substantive recommendation, and final
  `Other`; no inherited bare or option-only prompt is printed.
- **A6 (critical) — Consultant review remains gated and isolated.** Every
  controlled verdict follows the exact Consultant review gate and a saved
  packet containing only the complete plan plus references explicitly named by
  it; substantive additions re-enter revision before a fresh gate.
- **A7 (critical) — The approved plan is the Automake source of truth.** The
  complete plan has Outcome, Context, Decisions, Approach, Constraints,
  References, Out of scope, and Risks; its explicit references are preserved,
  and all Automake preparation derives from this approved material plus the
  inspected repository.

## Automake preparation

- **A8 (critical) — The complete Optimizer is separately approved.** Before
  approval, the full instruction is printed with Goal, smallest candidate
  scope, constraints, cheap checks, and repository context, without evaluation
  criteria.
- **A9 (critical) — Optimizer revision reprints the whole artifact.** A request
  for changes is incorporated, then the complete revised Optimizer is printed
  before a new numbered approval; rejected text is not treated as approved.
- **A10 (critical) — The complete Evaluator is separately approved.** After
  Optimizer approval, the full independent instruction is printed with Goal,
  BETTER rule, task-shaped baseline/candidate evidence, exact verdict format,
  complexity cost, and candidate-gate policy before its own numbered approval.
- **A11 (critical) — Role responsibilities remain independent.** Optimizer
  receives no Evaluator acceptance rule, verdict, or output; Evaluator receives
  no Optimizer instruction, rationale, learnings, or prior evaluation.
- **A12 (critical) — Every Orchestrator value is exact.** Supplied values are
  preserved; otherwise the resolved handoff explicitly records maximum
  iterations `5`, consecutive-failure limit `3`, and success condition `none`.
- **A13 (critical) — Preparation stops before execution.** The current
  conversation never shows or consumes Automake's final Run gate, performs Git
  preflight/action, mutates the repository, writes redirected Automake state,
  launches a child, runs a ratchet, or implements the plan.

## Terminal handoff

- **A14 (critical) — Exactly one safe fenced payload is emitted.** All required
  handoff content is inside one Markdown code block whose outer fence is longer
  than every consecutive backtick run in the complete body; no required
  content appears outside it.
- **A15 (critical) — Paths and reference reads are explicit.** The handoff
  names the copied target repository and approved `plan.md` by their real
  absolute paths and directs the fresh agent to read every explicit plan
  reference.
- **A16 (critical) — Approved artifacts are embedded completely.** The handoff
  contains byte-complete approved `optimizer.md` and `evaluator.md` bodies
  inside unambiguous start/end markers, not relative links or summaries.
- **A17 (critical) — Run values and control transfer are complete.** The
  handoff embeds every resolved Orchestrator value and directs a fresh agent to
  invoke `/automake` in run-now mode, treat the setup as already approved, skip
  repeated consultation/approval/setup, and execute from the named repository.
- **A18 (critical) — Plan authority survives transfer.** The fresh agent is
  explicitly required to preserve the approved plan's decisions, constraints,
  scope/out-of-scope boundary, risks, and explicit references while running the
  ratchet.

## Flow-specific behavior

- **N1 (critical) — Fresh blocker chain completes preparation only.** Mica
  Queue creates one direct fresh consultation, resolves the invalid-timestamp
  blocker through a separately gated second review, separately approves both
  complete roles, resolves 5/3/none, and hands off without changing repository
  or Automake state.
- **R1 (critical) — Named resume preserves continuity and values.** Parcel
  Latency resumes at Question 9 without a sibling, preserves the latency
  reference and decisions, continues numbering across phases, carries exact
  2/1/test-pass values, and embeds the complete approved setup.
- **V1 (critical) — Rejected Optimizer is not smuggled through.** Beacon
  Reminder requires the Consultant gate, rejects the first complete Optimizer,
  fully reprints the dependency-free `notifier.py`-plus-tests revision, then
  separately approves the Evaluator and embeds only the approved revision.
- **F1 (critical) — Nested fences remain copy-safe.** Fenced Checks preserves
  the exact four-backtick verification snippet inside the approved Optimizer
  and final handoff, chooses a strictly longer outer fence, and creates no
  Automake state or later Run gate.

## Traceability — preserved failures to assertions

| Preserved failure | Assertion(s) |
| --- | --- |
| F1.1 session-wide question grammar missing | A5 |
| F1.2 Consultant verdict consumed before gate | A3, A6 |
| F1.3 reviewer packet contained hidden context | A6 |
| F1.4 resumed Consultant state remained stale | A4 |
| F1.5 complete roles not separately approved | A8–A10 |
| F1.6 Optimizer/Evaluator responsibilities blended | A8, A10, A11 |
| F1.7 default Orchestrator values incomplete | A12 |
| F1.8 complete self-contained handoff missing | A14–A18 |
| F1.9 preparation created Automake state | A2, A13 |

## Eval coverage

| Eval | Assertions |
| --- | --- |
| 1 — fresh full chain with blocker | A2–A18, N1 |
| 2 — named resume and custom values | A2–A18, R1 |
| 3 — artifact revision without pre-authorization | A2–A18, V1 |
| 4 — fence safety and no-run boundary | A2–A18, F1 |
| Harness, shipping, and trigger checks | A1, A2 |
