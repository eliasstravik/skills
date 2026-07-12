---
name: html
description: Builds a durable single-file HTML artifact in `~/.html/<slug>`, serves it locally on 127.0.0.1, and replies with the verified link.
disable-model-invocation: true
---

# HTML

## Recipe

1. Resolve the target: **existing slug or path named?** → revise that artifact in place; **new artifact?** → generate a three-random-word lowercase slug and set `ARTIFACT_DIR` to the expanded absolute path of `~/.html/<slug>/`, never a literal `~`.
2. Write exactly `ARTIFACT_DIR/index.html` — one complete single-file page meeting every rule in `## Details` — unless the user names a different file.
3. Start or reuse a static server for `ARTIFACT_DIR` bound to `127.0.0.1` on a free non-common port, using the serve command in `## Details`.
4. Verify the exact page with the verify command in `## Details` before replying.
5. Reply with the filled Template in `## Details`, and nothing longer.

## Details

### Artifact rules

- Build a complete single-file page: `<!doctype html>`, UTF-8 charset, viewport meta, a useful title, inline CSS/JS/SVG only.
- Avoid external CDNs, framework bundles, and build steps unless the user asks or the artifact truly needs them.
- Design the content as an interface: semantic HTML, responsive layout, accessible controls and focus states, coherent type, color, and spacing.
- Pick the structure that fits the job — tables, grids, timelines, canvases, tabs, forms, copy or export actions, or plain sections.
- Ground content in supplied or inspected facts; mark assumptions and generated inferences as such.
- Make the artifact help the next decision; never answer with fancy Markdown in place of the artifact.

### Serve and verify commands

Serve (step 3):

```bash
python3 -m http.server "$PORT" --bind 127.0.0.1 --directory "$ARTIFACT_DIR"
```

Verify (step 4):

```bash
curl -fsS "http://127.0.0.1:$PORT/index.html" >/dev/null
```

### Failure handling

| Failure | Recovery |
|---------|----------|
| Chosen port already in use | Retry: pick another free non-common port. |
| Server will not start or verify fails | Compensate: omit the link line, say why serving failed, and still return the absolute `index.html` path. |

### Template

```markdown
HTML file: `<absolute ARTIFACT_DIR>/index.html`
HTML: [Open locally](http://127.0.0.1:<PORT>/index.html)
```

### Frontmatter

- `disable-model-invocation: true` keeps this skill user-invoked only; on a platform that ignores the flag, the description names the artifact workflow rather than broad triggering conditions, so spurious auto-invocation stays unlikely.
