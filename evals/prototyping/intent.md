# prototyping intent

Date: 2026-08-26. Approved behavioral plan:
`/Users/eliasstravik/.consultant/prototyping-skill/plan.md`, with the final
review notes in the same directory.

## Real job

`prototyping` keeps a throwaway decision page active throughout a host session.
It records every host step in one append-only manifest, builds a page only when
the choices differ visibly or behaviorally, and gives text-only choices a stub.
One loopback URL exposes the growing session. A one-off request is the same
process with one step.

The skill owns the run-local session directory, shell, step pages, manifest,
and detached server. It does not own the host's questions or decisions, edit
the repository under discussion, or implement the selected option.

## Live-state surfaces

- Production state: `~/.prototyping/<slug>/`, including `index.html`,
  `steps.js`, `steps/`, `server.port`, `server.pid`, and `server.log`.
- Hosted Consultant state: `~/.consultant/<slug>/` in Consultant-hosted cases.
- Process state: one detached loopback-only server per resumed or fresh
  prototyping session.
- Run state: the chosen or named slug, monotonic step number, host label,
  decision marker, selected port, owned PID, and exact served URL.

Every eval replaces the prototyping root with its own
`__PROTOTYPING_STATE_ROOT__`. Cases 1 and 6 also replace the Consultant root
with `__CONSULTANT_STATE_ROOT__`. Runs may read the declared skill and copied
fixtures, but they may not touch real `~/.prototyping`, real `~/.consultant`,
an external temporary directory, a sibling run, or an unrelated process. The
harness stops run-owned servers through `scripts/serve.sh <session-dir> stop`.

## Interaction contract

- Fresh work creates one lowercase-hyphen session slug without inspecting
  siblings. Resume happens only from a slug or path named by the client.
- Every host step gets one manifest entry with a unique monotonic integer `n`
  and the host's exact label. Host numbering never supplies manifest identity.
- A step gets a prototype only when its two to five substantive options differ
  in structure or behavior. Every other step gets a stub.
- UI pages expose one structurally distinct variant per option. Logic pages
  expose one guided walkthrough per option over a shared in-memory model.
- The recommended selector is marked. Once answered, the chosen selector is
  marked when the answer matches an option key; free-text answers remain exact
  in the manifest and produce no false chosen marker.
- One `Prototypes:` line sits immediately above the host reply. It contains
  one hash for a single question and every hash for a multi-question round.
  The host's text below it remains byte-identical.
- An activation-only reply has no hash. Stopping drops the stance but leaves
  the files and server intact, and reports both the URL and ownership-checked
  stop command.
- Serving uses `127.0.0.1`, an exact `/index.html` URL, PID ownership checks
  before every signal, bounded verification, and at most three port attempts.
  A separate shell verifies the recorded PID and URL after the executor exits.

## Proposed eval flows

1. **Consultant-hosted session.** Ask three fixed Consultant questions: one
   visual, one behavioral, and one text-only naming choice. Record numeric and
   free-text decisions, produce two pages plus one stub, and preserve each
   exact question block below its URL line.
2. **Named-session resume.** Resume a supplied two-step session with a stale
   foreign PID, a recorded free port, and no shell. Copy the current shell,
   leave the foreign PID unsignalled, append step 3, and create no sibling.
3. **One-off request.** Compare three settings-page layouts as one fresh UI
   step and report its served hash URL.
4. **Multi-question round.** Render three fixed questions in one round, build
   visual and behavioral pages plus one stub, and place one URL line listing
   all three hashes above the untouched round.
5. **Occupied-port recovery.** Resume an activation-only session whose
   recorded port is held by a run-local listener. Preserve that listener,
   rewrite `server.port`, and report a verified hash-free URL on another port.
6. **Stop command.** Run two fixed Consultant questions, stop prototyping,
   then continue the host with a third question. Only the first two questions
   receive entries and URL lines; the server and files survive the stop.

The six prompt pairs and every scripted reply require client sign-off before
any no-skill baseline runs.
