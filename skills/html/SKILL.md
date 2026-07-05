---
name: html
description: Create a durable single-file HTML artifact in `~/.html/<slug>`.
disable-model-invocation: true
---

Create one durable HTML artifact.

Use HTML when the user explicitly invokes this skill and wants a visual, spatial, comparative, interactive, or presentable artifact. Do not make fancy Markdown; make the artifact help the next decision.

Generate a three-random-word lowercase slug. Set `ARTIFACT_DIR` to the expanded absolute path for `~/.html/<slug>/` - never return or store a literal `~` path. If the user names an existing slug or path, revise that artifact instead. Write exactly `ARTIFACT_DIR/index.html` unless the user asks otherwise.

Build a complete single-file page: `<!doctype html>`, UTF-8, viewport meta, useful title, inline CSS/JS/SVG only. Avoid external CDNs, framework bundles, and build steps unless the user asks or the artifact truly needs them.

Design the content as an interface: semantic HTML, responsive layout, accessible controls and focus states, coherent type/color/spacing, and structure that fits the job - tables, grids, timelines, canvases, tabs, forms, copy/export actions, or plain sections. Ground content in supplied or inspected facts; mark assumptions and generated inferences.

Before returning, start or reuse a simple static server bound to `127.0.0.1` from `ARTIFACT_DIR`:

```bash
python3 -m http.server "$PORT" --bind 127.0.0.1 --directory "$ARTIFACT_DIR"
```

Choose a free non-common port. Verify the exact page:

```bash
curl -fsS "http://127.0.0.1:$PORT/index.html" >/dev/null
```

If serving fails, say why and return the absolute file path.

Keep the reply short:

```markdown
HTML file: `<absolute ARTIFACT_DIR>/index.html`
HTML: [Open locally](http://127.0.0.1:<PORT>/index.html)
```
