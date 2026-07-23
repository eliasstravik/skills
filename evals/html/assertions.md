# html — assertion suite

One checkable assertion covers every required behavior and every preserved
baseline failure. **(critical)** marks severe or contractual behavior.

## Common behavior

- **H1 (critical) — State isolation holds.** Every executor read, write, move,
  deletion, server directory, and process target stays inside its run except
  read-only access to the declared skill and task fixtures; real `~/.html`,
  external temporary directories, and unrelated live processes remain
  untouched.
- **H2 (critical) — Artifact identity is stable.** New work creates exactly one
  directory whose basename is three lowercase words separated by single
  hyphens; a named existing slug or artifact is revised in place with no new
  sibling artifact directory.
- **H3 — The requested artifact is one complete entry file.** The artifact
  directory contains exactly the requested `index.html` unless the user names
  another file, and that file has an HTML doctype, UTF-8 charset, viewport,
  useful title, and complete document structure.
- **H4 (critical) — Source truth is preserved.** Every material name, number,
  date, status, threshold, URL, and supplied conclusion remains faithful to
  the fixture; any generated assumption or inference is visibly identified.
- **H5 — The artifact is a usable interface.** Semantic structure, responsive
  layout, coherent visual hierarchy, accessible names, visible focus, and
  keyboard-operable requested controls make the supplied information useful
  for the user's next decision.
- **H6 (critical) — The page is self-contained.** Required CSS, JavaScript,
  SVG, and data are inline; no external runtime asset, CDN, package install,
  framework bundle, or build step is introduced unless the user requests it.
- **H7 (critical) — Serving is artifact-rooted and loopback-only.** The active
  static server serves the resolved artifact directory itself, binds only to
  `127.0.0.1`, and uses a free non-common port.
- **H8 (critical) — The exact page is verified.** Before the handoff, an HTTP
  fetch of `http://127.0.0.1:<port>/index.html` succeeds and returns the
  generated entry file rather than a directory listing, redirect, or different
  file.
- **H9 (critical) — The reported server is durable.** The same PID and exact
  `/index.html` URL remain live after the executor exits and until the harness
  independently verifies and terminates the run-owned listener.
- **H11 (critical) — The handoff is exact.** Success produces exactly two
  user-facing lines: `HTML file: <absolute index.html path>` and
  `HTML: [Open locally](<verified loopback /index.html URL>)`; no slug, PID,
  hash, retry narration, or extra section appears in the final handoff.
- **H12 (critical) — Serving failure degrades honestly.** If no server can be
  verified after allowed recovery, the reply omits the link and returns the
  absolute entry-file path plus one concise serving-failure reason; it never
  reports an unverified or dead URL.
- **H13 (critical) — Invocation remains explicit.** Shipping frontmatter keeps
  the skill user-invoked, and trigger evaluation does not turn ordinary web,
  interface, or HTML requests into accidental artifact creation.

## Flow-specific behavior

- **H10 (critical) — Occupied-port recovery is safe.** The nominated occupied
  listener remains alive and unchanged; the artifact server uses a different
  free non-common port and passes H7–H9 there.
- **R1 (critical) — Existing user content survives revision.** The named
  artifact retains the exact hand-written field note and accent token while
  replacing every superseded value with the requested revision.
- **I1 — Interactive filtering is complete.** The artifact contains all eight
  source records and correct summary counts; team and status controls work
  individually and together by keyboard, expose state accessibly, and can
  restore the full set.

## Traceability — preserved failures to assertions

| Preserved failure | Assertion(s) |
| --- | --- |
| F1.1 wrong server root and nested URL | H7, H8 |
| F1.2 overlong final handoff | H11 |
| F2.1 server dead after executor exit | H9, H12 |
| F2.2 wrong server root and directory URL | H7, H8 |
| F2.3 overlong final handoff | H11 |
| F3.1 server dead after executor exit | H9, H12 |
| F3.2 overlong handoff and `/` URL | H8, H11 |
| F3.3 external temporary-file writes | H1 |
| F4.1 artifact server dead after executor exit | H9, H12 |
| F4.2 overlong handoff and directory URL | H8, H11 |

## Eval coverage

| Eval | Assertions |
| --- | --- |
| 1 — new decision dashboard | H1–H9, H11, H12 |
| 2 — named in-place revision | H1–H9, H11, H12, R1 |
| 3 — interactive source-grounded artifact | H1–H9, H11, H12, I1 |
| 4 — occupied-port recovery | H1–H12 |
| Shipping and trigger checks | H13 |
