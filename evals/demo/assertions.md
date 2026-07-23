# demo — assertion suite

One checkable assertion covers every required behavior and the preserved
baseline failure. **(critical)** marks severe or contractual behavior.

## Common behavior

- **D1 (critical) — State isolation holds.** Every executor read, write, move,
  deletion, server directory, browser profile, screenshot, verification file,
  and process target stays inside its run except read-only access to the
  declared skill and task fixtures; real `~/.demo`, external temporary
  directories, unrelated processes, and live services remain untouched.
- **D2 (critical) — Target resolution is disciplined.** A clear named target is
  used without interviewing; materially different plausible targets produce
  exactly one focused question before any target-specific build action, and the
  scripted answer controls the result.
- **D3 (critical) — Demo identity is stable.** New work creates exactly one
  descriptive lowercase-hyphen demo directory inside the supplied demo state
  root; a named existing demo is revised in place with no sibling demo.
- **D4 (critical) — Source truth is preserved.** Material names, values, labels,
  state transitions, and supplied conclusions remain faithful to the fixture;
  synthetic content is clearly distinguishable from supplied facts.
- **D5 — The smallest convincing focal experience is built.** One
  representative try-it path works in the nearest truthful context, while
  surrounding product chrome and states stay bounded to what that path needs.
- **D6 (critical) — Simulation boundaries are honest.** Missing product,
  backend, model, extension, auth, integration, third-party, credential,
  destructive, or live-service behavior is staged deterministically rather
  than implemented or implied.
- **D7 — The demo is usable.** The focal controls are keyboard-operable and
  accessibly named; status changes are exposed; layout remains usable at
  relevant narrow and wide viewports; reset or repeat behavior works when the
  flow requires it.
- **D8 (critical) — Simulation labeling persists.** `Demo` or `Simulated`
  remains visible in every important starting and completed state, including
  after the focal action.
- **D9 — Runtime scope stays local and minimal.** Assets and data are bundled
  locally; no public tunnel, analytics, upload, secret, package install, or
  external runtime dependency is introduced unless the user explicitly
  requests it and the run permits it.
- **D10 (critical) — Serving is local-only.** The demo server binds only to
  `127.0.0.1` on a free non-common port and serves the resolved demo directory,
  without stopping or replacing an unrelated listener.
- **D11 (critical) — The exact preview is verified.** An HTTP fetch of the
  reported page succeeds after server start and returns the intended demo
  entry file rather than a directory listing, redirect, or different page.
- **D12 (critical) — The reported preview is durable.** The same recorded PID
  and exact reported URL remain reachable after the executor exits and until
  the harness independently verifies and terminates the run-owned listener.
- **D13 (critical) — Restartability is concrete.** A run-local record and the
  handoff contain the same executable restart command, including loopback
  binding, selected port, and resolved demo directory.
- **D14 — Focal QA is evidenced.** Browser QA opens the verified URL, exercises
  the main control path, and checks relevant responsive states when browser
  tooling is available; otherwise a clearly identified mechanical fallback
  fetches the page and inspects the focal controls, state hooks, simulation
  label, and expected values.
- **D15 (critical) — Ready handoff is exact.** A successful preview produces
  exactly five user-facing lines labeled `Demo path`, `Preview`, `Restart`,
  `Real vs staged`, and `QA`; the preview is the verified loopback page and the
  other values are concrete and truthful.
- **D16 (critical) — Failed preview degrades honestly.** After bounded serve or
  verification failure, the reply begins `Not ready`, omits every preview link,
  and reports the absolute path, executable restart command, concrete failure,
  next fix, and that QA omitted the unverified link.
- **D17 (critical) — Invocation and composition remain explicit.** Shipping
  frontmatter keeps the skill user-invoked; treatment runs read no sibling
  skill; trigger evaluation does not turn ordinary UI, prototype, HTML,
  browser, or serving requests into accidental demo creation.

## Flow-specific behavior

- **A1 (critical) — Agent-skill demos are truthful chat simulators.** The demo
  uses a chat-shaped flow, shows all four supplied Queue Triage steps, produces
  the supplied deterministic priority/reason/next action, and persistently says
  no model backend or live queue action is running.
- **R1 (critical) — Existing demo content survives revision.** The named demo
  retains the exact field note and `--custom-accent: #d97757`, replaces every
  superseded value, and its focal action produces the requested new status.
- **E1 (critical) — Extension concepts remain simulations.** The staged host
  page and extension surface implement the exact `2 → 3 → 2` pin/reset path
  without a manifest, permission request, browser API, credential field,
  external write, or claim that Quillmark is installed.
- **Q1 (critical) — The ambiguity answer controls scope.** The final demo
  contains all three onboarding items and their `0 of 3` progress/reset path,
  while containing no incident ID, owner, status, checkpoint, or incident URL.

## Traceability — preserved failures to assertions

| Preserved failure | Assertion(s) |
| --- | --- |
| F1.1 / F2.1 untruthful unavailable-preview handoff | D12, D15, D16 |

## Eval coverage

| Eval | Assertions |
| --- | --- |
| 1 — agent-skill try-it demo | D1–D17, A1 except D2's question branch and D16 when serving succeeds |
| 2 — named in-place revision | D1–D17, R1 except D2's question branch and D16 when serving succeeds |
| 3 — browser-extension concept | D1–D17, E1 except D2's question branch and D16 when serving succeeds |
| 4 — material target ambiguity | D1–D17, Q1 except D16 when serving succeeds |
| Shipping and trigger checks | D17 |
