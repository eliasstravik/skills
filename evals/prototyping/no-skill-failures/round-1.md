# prototyping no-skill failures, round 1

Executor: GPT-5.6 Sol with medium reasoning. All six arms ran in fresh
no-skill contexts with user configuration and installed skills disabled.
Transcript review found no skill invocation or live-state write.

## Eval 1, Consultant-hosted session

### F1.1, no session contract

The run created one monolithic `index.html`. It created no slug directory,
`steps.js`, step files, port file, PID file, or detached server record.

### F1.2, wrong reply line and anchors

The required line was replaced with a Markdown link and non-contract anchor:

```text
[Open Step 1 — Crew and job layout](http://127.0.0.1:8765/#question-1)
```

It repeated that form once per question rather than using
`Prototypes: <exact /index.html URL>#<n>`.

### F1.3, dead reported server

After the executor exited, a separate shell could not connect to port 8765.
The final response still said the page "remains available."

## Eval 2, named-session resume

### F2.1, wrong host identity

The new entry preserved most of the supplied schema but recorded
`"host":"consultant"` for a plain-host step.

### F2.2, dead reported server

The run recorded PID 65142 and port 60956, then reported successful serving.
A separate shell found no listener and no response after executor exit.

### F2.3, non-contract handoff

The transcript reported the session through a prose summary and root URL:

```text
Resumed `quiet-dashboard` successfully at http://127.0.0.1:60956/.
```

It omitted the `Prototypes:` prefix, exact `/index.html` URL, and `#3` anchor.

## Eval 3, one-off request

### F3.1, monolithic artifact instead of a session

The run produced `outputs/prototyping-home/index.html` only. It created no
slug, manifest, step page, server metadata, or stable hash selection.

### F3.2, common foreground port and dead server

It chose common port 4173 and ran `python3 -m http.server` through a foreground
tool session. The separate-shell check found the reported URL dead after exit.

### F3.3, wrong handoff

The result used "Open exactly" instead of the required `Prototypes:` line and
had no `#1` anchor.

## Eval 4, multi-question round

### F4.1, no manifest or page split

The run created one `index.html` and a private `decisions.json`. It created no
`steps.js`, per-step page, PID file, or port file. The three decisions therefore
cannot append to or resume the approved session format.

### F4.2, wrong shared line

The line above the round was:

```text
[Step 1](http://127.0.0.1:4317/#step-1) · [Step 2](http://127.0.0.1:4317/#step-2) · [Step 3](http://127.0.0.1:4317/#step-3)
```

It omitted `Prototypes:`, `/index.html`, and the manifest-number hashes.

### F4.3, dead reported server

Port 4317 did not answer after executor exit.

## Eval 5, occupied-port recovery

### F5.1, successful detachment but no reusable ownership operation

This arm correctly preserved the occupied listener, selected port 61286,
recorded PID 65561, served the exact page on loopback, and remained live after
executor exit. It improvised the process inline. There was no reusable
ownership-checked start, revive, retry, or stop script.

### F5.2, wrong activation line

The complete transcript output was the bare URL:

```text
http://127.0.0.1:61286/index.html
```

It omitted the required `Prototypes:` prefix.

The harness confirmed the recorded command contained both `http.server` and
the canonical run directory before stopping this run-owned process.

## Eval 6, stop command

### F6.1, incompatible state layout

The run invented `comparisons.json`, `server.json`, and `serve.py` directly in
the state root. It created no slug, `steps.js`, `steps/`, `server.port`, or
`server.pid`.

### F6.2, non-contract reply lines and stop command

It used `Local comparison page:` instead of `Prototypes:`. Its stop command was
an inline `lsof`, current-working-directory, and `kill` expression rather than
`scripts/serve.sh <session-dir> stop`.

### F6.3, server did not outlive the executor

The executor verified port 18765 while still running and claimed the server
would remain intact. A separate shell found the port dead after exit.

## Distinct preserved failure classes

1. No fresh or resumable slug session with the approved manifest and step-file
   layout.
2. No consistent visible-or-behavioral gate that emits one entry per host step
   while separating UI pages, logic pages, and stubs.
3. No exact `Prototypes:` line, `/index.html` URL, manifest-number hash, or
   one-line multi-question handoff.
4. No deterministic ownership-checked start, revive, retry, and stop operation.
5. Five of six reported servers died with the executor; the sole detached run
   still lacked the reusable serving operation and reply contract.
6. Resume and stop runs invented incompatible state formats that cannot compose
   with later steps.

The baseline is saturated for the skill's core purpose: another no-skill round
would vary the improvised file names and server commands without supplying the
chosen session contract.
