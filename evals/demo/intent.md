# demo — intent

## Real job

`demo` turns an artifact, concept, or existing local demo into the smallest
convincing local try-it experience. Its job is not to implement the surrounding
product. It stages enough interface, data, state, and deterministic responses
to make one focal action feel real while labeling the boundary between real and
simulated behavior.

The durable output is a descriptive directory under `~/.demo/`, normally a
self-contained page with local assets only when needed. A named demo is revised
in place. A named artifact is demonstrated. When several plausible targets
would produce materially different demos, the workflow asks one focused
question before choosing.

## Live-state surfaces

- `~/.demo/<descriptive-slug>/` for durable demos
- an existing named demo path when revision is requested
- a loopback-only static server and its selected port/PID
- optional browser state and screenshots used for focal-path and responsive QA
- local source artifacts and assets, read-only unless they are already inside
  the chosen demo directory

Every eval redirects the demo home, server files, browser evidence, and any
verification artifacts into its own run directory. Real `~/.demo`, unrelated
processes, credentials, third-party systems, public tunnels, and live services
are off-limits.

## Interaction contract

- Invocation remains explicit.
- Resolve a clear target without interviewing; ask exactly one focused question
  only when target ambiguity would materially change the result.
- Build one representative interaction in the nearest truthful context.
- Label staged behavior persistently and never imply a real model, backend,
  extension, authentication flow, integration, or destructive action.
- Prefer a self-contained local page and synthetic deterministic data.
- Serve only on `127.0.0.1`, verify the exact page and focal interaction, and
  record a usable restart command.
- A ready handoff reports the absolute path, verified preview, restart command,
  real-versus-staged boundary, and QA evidence. A failed preview is reported as
  not ready with no link.

## Composition decision

Do not compose with `html`. The rebuilt `html` skill owns a different artifact
identity and exact two-line handoff. Reusing it would obscure demo-specific
staging, restart, and QA obligations. `demo` should use host tools directly and
remain independently invokable.

## Proposed eval flows

1. **Agent-skill try-it demo** — Turn a fictional agent skill into a chat-shaped
   simulator with visible skill steps, deterministic staged replies, and a
   persistent no-model boundary.
2. **Named in-place revision** — Update an existing demo under the isolated
   demo home, preserve a hand-authored note and custom visual token, and avoid a
   sibling demo directory.
3. **Browser-extension concept** — Stage a host page plus extension surface and
   focal interaction without creating a manifest, requesting permissions, or
   implying a live browser API.
4. **Material target ambiguity** — Present two plausible artifacts, require one
   focused target question, then follow the scripted answer and build only the
   selected demo.

These flows cover creation, revision, safe simulation, interaction gating,
state isolation, serving, verification, restartability, and honest handoff.
