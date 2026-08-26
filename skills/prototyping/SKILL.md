---
name: prototyping
description: Triggers when a user asks to prototype a decision, compare visible or behavioral options in throwaway pages, keep prototyping through a consultant, grilling, or wayfinder session, or says /prototyping. It builds one loopback session that grows step by step and also handles a one-off "prototype this" request. Not for durable standalone HTML artifacts, polished product demos, browser QA, or integrating selected prototype code into an application.
---

# Prototyping

## Trigger

Activate on `/prototyping`, a request to prototype a decision or compare
options through a prototype, or a request to keep prototyping through a host
session. Keep this stance until the client says to stop. Treat one-off
"prototype this" work as a one-step session.

## Scope

Own the prototyping session directory, shell, step pages, manifest, and
loopback serving. The host owns its questions and plan; the client owns each
decision. Leave the discussed repository unchanged and stop before
implementing a selected option.

## Inputs

- Host steps as they occur, including Consultant or Autoconsultant questions,
  each Grilling question, Wayfinder ticket questions, and plain choices.
- A client-named slug or path to resume. Fresh requests never inspect sibling
  sessions.
- A client-supplied state root, or expanded `~/.prototyping` by default.

## Roles

The agent builds pages, maintains the manifest, and keeps serving alive. The
client chooses options. Host skills keep their own output contract unchanged.

## Procedure

1. On activation, resolve one session directory. Resume only an explicitly
   named slug or path. Otherwise choose a direct lowercase-hyphen slug from the
   topic without listing or reading siblings. Create `steps/` and initialize
   `steps.js` with exactly `window.STEPS = [];` when absent. Copy
   `assets/index.html` once when absent and replace its `__SESSION_SLUG__`
   placeholder with the slug. Run this skill's shipping
   `scripts/serve.sh <session-dir>` in place; never copy the helper into the
   session directory.
2. For every host step, assign the next monotonic integer `n` across the whole
   session. Preserve the host's label: `Question N`, `Qn`,
   `Qn (ticket: <name>)`, or an empty string for a plain host.
3. Enumerate substantive options before applying the gate. Consultant and
   Autoconsultant use number strings and exclude trailing `Other`. Grilling,
   Wayfinder, and plain hosts use `A`, `B`, and later letters in presentation
   order. A prototype has two to five options. A step without enumerable
   choices uses `options: []` and `recommended: null`.
4. Build a prototype only when the enumerated options differ in a way the
   client can see or click. Visible structural choices use the UI shape;
   behavioral choices use the logic shape. Read
   [the step-page contract](references/step-page.md) before building either.
   Text-only, naming, numeric, approval, and other non-visible choices use a
   stub and have no step file.
5. Append exactly one line per step to `steps.js`:
   `window.STEPS.push({...});`. The object contains `n`, `label`, one-line
   `title`, `host`, `kind`, `file`, `options`, `recommended`, and `decision`.
   Use valid compact JSON inside the call. `kind` is `prototype` or `stub`;
   `file` is `steps/NN-<lowercase-hyphen-step-slug>.html` for a prototype and
   `null` for a stub. Start `decision` as `null`. `options` is always a JSON
   array of objects shaped exactly `{"key":"1","label":"Option label"}`;
   never use an array of bare keys, even when the page already shows labels.
6. Run this skill's shipping `scripts/serve.sh <session-dir>` in place before
   rendering the host reply. Put
   exactly one line immediately above the complete host reply. A single-step
   host gets `Prototypes: <URL>#<n>`. A multi-question round gets
   `Prototypes: <URL>#<n> #<n> ...` with every round entry, including stubs.
   The host text below that line stays byte-identical, and the line never
   enters the host's fenced question block. An activation-only turn prints
   `Prototypes: <URL>` with no hash.
7. When the client answers, edit only that entry's line and set `decision` to
   the option key or the client's exact free-text answer before adding the
   next step. Keep the rest of the line's data unchanged.
8. On `stop prototyping`, leave the files and server running, report the
   current URL and the resolved shipping helper command
   `<skill-dir>/scripts/serve.sh <session-dir> stop`, then drop this stance.
   Never copy that helper into the session. Later host steps receive no entry
   or `Prototypes:` line.

## Outputs

One `~/.prototyping/<slug>/` or redirected session containing the shell,
append-shaped manifest, optional self-contained step pages, `server.port`,
`server.pid`, and `server.log`, plus the served loopback URL and recorded
decisions.

## Exceptions

If serving fails after the script's retries, report the session path and its
one reason line, keep building the files, and omit an unverified URL. If a
named session does not exist, ask only for the intended slug or path without
inspecting siblings.

## QC

- Every active host step has one unique monotonic entry, and every answered
  entry has its decision set before the next step.
- Each `prototype` file exists, is self-contained, and has exactly one
  selector per manifest option with accurate recommended and chosen markers.
- Each `stub` has `file: null`; pagination uses `n`, while labels preserve host
  numbering.
- The exact `/index.html` URL answers on `127.0.0.1`; the recorded PID belongs
  to `http.server` serving the canonical session directory.
- The shell title shows the resolved session slug, never the literal
  `__SESSION_SLUG__` placeholder.
- The session contains only `index.html`, `steps.js`, `steps/`, and
  `server.port`, `server.pid`, and `server.log`; no helper script is copied in.
- No task file was written outside the resolved session directory, and host
  text below the one added line is byte-identical.

## References

Read [references/step-page.md](references/step-page.md) whenever the gate calls
for a UI or logic prototype page.
