---
name: demo
description: Creates a realistic local demo for an artifact and returns a verified localhost preview.
disable-model-invocation: true
---

# Demo

## Recipe

1. Resolve the target: named existing demo/path means revise it in place; named artifact means demo it; otherwise inspect conversation and workspace, asking one focused question only when plausible targets would materially change the demo.
2. Inspect the artifact, audience, intended use, focal action, local facts/assets, available real seams, and public reference territory when recognizable context matters.
3. Choose the smallest convincing focal experience, staging surrounding UI/data/state/responses, and explicitly reject building missing product, backend, model, extension, auth, integration, or destructive behavior.
4. Build into the expanded absolute path `~/.demo/<descriptive-slug>/` (or the existing demo path) with bundled local assets where practical, synthetic data, accessible controls, useful states, and a subtle persistent `Demo` or `Simulated` indicator.
5. Match context to artifact: content/feed gets narrow feed chrome; agent skills get a chat simulator; extension/browser ideas get a simulated host page/browser frame; other artifacts get the nearest setting that makes the focal action tryable.
6. Start or reuse the smallest local server bound only to `127.0.0.1` on a free non-common port, and record the exact restart command.
7. Verify the exact served URL: use browser tools for the focal path and relevant viewports when available; otherwise `curl` the page, check expected structure/hooks, and mark QA confidence reduced.
8. Reply with the absolute path, verified localhost link, restart command, real-vs-staged note, and QA evidence; after bounded serve/verify failure, omit any link and return `Not ready`, the path, restart command, concrete failure, and next fix.

## Details

- Minimum illusion: make the artifact and one representative try-it path feel real; keep surrounding product to the one screen or state the artifact needs.
- Stage gaps with inert but responsive UI, synthetic data, deterministic state changes, and labeled simulated responses; never collect real credentials or imply a live third-party or AI system.
- Use a real seam only when it already exists, is local or test-scoped, needs no new secrets, is cheap to call, and makes the demo materially more truthful; otherwise fake it.
- Do not invoke or require sibling skills; use host tools directly and fall back to mechanical checks when optional capabilities are absent.
- Expand `~` before writing paths; derive slugs from the target in lowercase words, append a numeric suffix on collision, and never overwrite unrelated demos.
- Prefer a single `index.html` with inline CSS/JS and local assets; add files, dependencies, or a project runtime only when the focal interaction cannot work without them.
- For LinkedIn-like posts, include desktop/tablet/mobile frame controls and make the post container width/content actually change; staged feed actions should visibly affect counts, comments, or saved state.
- For agent skills, use a chat-shaped flow with sample user turns, visible skill steps, staged assistant responses, and a clear note that no model backend is running unless an existing local one is deliberately used.
- For browser or extension ideas, simulate the host page, toolbar/popup/sidebar, permissions copy, and focal action; do not create an extension manifest or browser API unless the user explicitly asked for implementation.
- Browser QA means open the verified URL, exercise the main control path, inspect important responsive states, and capture screenshots only when the visual result or transition needs evidence.
- Mechanical fallback means `curl -fsS` the exact URL and inspect saved HTML/JS for the demo indicator, focal controls, expected state hooks, and viewport controls when applicable.
- Treat a ready link as invalid unless the exact URL was verified after the server started; retry a bounded set of free non-common ports before degrading.
- Keep the server local-only; never use public tunnels, production deployment, analytics, auth, or uploads for private/local source material.
- Handoff template:
```markdown
Demo path: `<absolute path>`
Preview: [Open locally](http://127.0.0.1:<port>/<page>)
Restart: `<exact command>`
Real vs staged: <one concise sentence>
QA: <browser evidence or mechanical fallback limitation>
```
- Degraded handoff template:
```markdown
Not ready: <concrete failure>
Demo path: `<absolute path>`
Restart: `<exact command>`
Next fix: <short actionable step>
QA: link omitted because the served page was not verified
```
