# prototyping assertion suite

One checkable assertion covers each approved behavior. `(critical)` marks a
contract or safety property that must pass in every applicable with-skill run.

## Common behavior

- **P1 (critical): Run isolation holds.** Every created, read, modified,
  moved, or removed task file stays under `__RUN_DIR__`, except read-only access
  to the declared shipping skill and copied fixture sources. Real
  `~/.prototyping`, real `~/.consultant`, sibling runs, external temporary
  directories, and unrelated processes remain untouched.
- **P2 (critical): Session identity is explicit.** Fresh work creates one
  lowercase-hyphen slug without listing or reading siblings. Resume work uses
  only the named slug or path and creates no sibling.
- **P3 (critical): The manifest has the required append shape.** `steps.js`
  starts with `window.STEPS = [];`. Every step is one single-line
  `window.STEPS.push({...});` entry with `n`, `label`, `title`, `host`, `kind`,
  `file`, `options`, `recommended`, and `decision`. Values are valid JSON;
  every option is an object with string `key` and `label` fields;
  `n` values are unique monotonic integers and control hashes and zero-padded
  file prefixes.
- **P4 (critical): The visible-or-behavioral gate controls page creation.** A
  two-to-five-option visual choice gets a UI page, a behavioral choice gets a
  logic page, and a text-only choice gets a stub with no page. Every host step
  still gets exactly one manifest entry.
- **P5 (critical): Each built page covers every substantive option once.** A
  UI page has one structurally different variant selector per option. A logic
  page has one guided walkthrough tab per option, shared domain-language state,
  free-play actions, and a re-render after each action. Every page marks the
  recommended selector and marks the chosen selector only when `decision`
  matches an option key.
- **P6 (critical): Pages are self-contained throwaways.** Shell and step pages
  use no external `src`, `href`, `@import`, or CSS `url()` target, framework,
  package, test, persistence layer, production mutation, or non-loopback
  request. Step pages identify themselves as throwaway, keep state in memory,
  and show the state or current variant.
- **P7: UI variant navigation is stable.** The initial UI variant is the
  matching decision key when present, otherwise the recommended key. Previous,
  next, and left/right keys wrap through variants, skip focused inputs, and
  update only `?variant=` through `history.replaceState` in `try/catch` while
  preserving other query parameters. A free-text decision receives no chosen
  marker.
- **P8 (critical): The session shell grows without resetting the viewed page.**
  It renders the resolved session slug, never the placeholder, plus the step
  list and current stub or iframe. It uses `#<n>` for stable selection, polls a
  cache-busted `steps.js` every two seconds, re-renders when entry count or
  decisions change, preserves the current iframe across unchanged polls, and
  resets its `src` only when that step's own decision changes. The shell does
  not bind arrow keys.
- **P9 (critical): Serving is owned and loopback-only.** `serve.sh`
  canonicalizes the session directory. One shared ownership function reads
  `ps -p "$PID" -ww -o command=` and requires both `http.server` and the
  canonical directory before every liveness use, stop, or signal. The exact
  `http://127.0.0.1:<port>/index.html` URL is verified with bounded polling.
- **P10 (critical): Start, revive, retry, and stop are safe.** A live owned
  server is reused. A stale foreign PID is removed without a signal. A live
  owned but unresponsive process is stopped before restart. A failed or
  occupied port triggers at most three attempts and `server.port` records the
  port actually served. `stop` signals only an owned PID, removes only
  `server.pid`, and preserves the page and manifest.
- **P11 (critical): Detachment survives the executor.** From a separate Bash
  invocation after the executor exits, the recorded owned PID is alive and the
  exact `/index.html` URL answers. The harness stops it through the shipping
  `serve.sh`, never a bare signal.
- **P12 (critical): Host output is untouched.** Exactly one `Prototypes:` line
  sits immediately above each active host reply. A single-step reply has one
  hash; a round lists every entry hash on that one line. The host text below it
  is byte-identical. Activation-only output has no hash.
- **P13 (critical): Transcript purity holds.** No-skill transcripts show no
  skill invocation. With-skill transcripts use `prototyping` and never invoke
  the installed aihero `prototype` skill.

## Flow-specific behavior

- **C1 (critical): Consultant-hosted sequence is complete.** Eval 1 produces
  entries `1..3`, labels `Question 1..3`, hosts `consultant`, kinds
  `prototype`, `prototype`, `stub`, decisions `"2"`, the exact supplied
  free-text answer, and `"1"`; its first page is UI shape and second is logic
  shape; each exact supplied question block has its own preceding URL line.
- **R1 (critical): Named resume preserves existing state.** Eval 2 leaves the
  unrelated sentinel byte-identical, does not signal PID 1, copies the current
  shell into the named directory, preserves the two supplied entries, appends
  one `n:3` plain-host UI entry with decision `"B"`, and creates no sibling.
  It reuses the recorded free port when available or rewrites it to the served
  port.
- **O1: The one-off case is a one-step session.** Eval 3 creates one fresh
  plain-host UI entry with three options keyed `A..C`, `A` recommended, null
  decision, three structurally different settings layouts, and one `#1` URL.
- **G1 (critical): A whole round shares one link line.** Eval 4 creates entries
  `1..3` labelled `Q1..Q3`, hosts `grilling`, kinds `prototype`, `prototype`,
  `stub`, and decisions `B`, `B`, `A`. One line listing `#1 #2 #3` sits above
  the byte-identical round; no per-question link line appears.
- **X1 (critical): Occupied-port recovery preserves the other owner.** Eval 5
  leaves the harness listener on `__OCCUPIED_PORT__` alive, starts its own
  detached server on a different free non-common port, rewrites `server.port`,
  adds no manifest entry, and reports a hash-free activation URL.
- **S1 (critical): Stop drops only the stance.** Eval 6 produces exactly two
  entries labelled `Question 1` and `Question 2`, with UI and logic pages and
  decisions `2` and `1`. The stop reply reports the current URL and exact
  `serve.sh <session-dir> stop` command while leaving the files and server
  alive. The byte-identical Question 3 block has no link line and no entry.

## Eval coverage

| Eval | Assertions |
| --- | --- |
| 1, Consultant-hosted session | P1-P13, C1 |
| 2, named-session resume | P1-P11, P13, R1 |
| 3, one-off request | P1-P13, O1 |
| 4, multi-question round | P1-P13, G1 |
| 5, occupied-port recovery | P1-P11, P13, X1 |
| 6, stop command | P1-P13, S1 |
