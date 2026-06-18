---
name: html
description: Create complete single-file HTML artifacts for visual specs, decks, diagrams, illustrations, interactive reports, prototypes, explainers, custom editors, and locally served alternatives to Markdown. Use when the user asks for an HTML artifact or when a spatial, visual, comparative, interactive, or dense artifact would make the next decision easier.
---

# HTML

Use HTML when the work product needs to be read, compared, inspected, presented, or manipulated visually. The goal is not "Markdown with CSS"; it is a purpose-built artifact that makes the user's next decision easier.

## Load References

Load only the relevant files:

- Exploration, options, planning, or implementation handoff: `references/exploration-planning.md`
- Code review, PR explanation, diffs, or codebase understanding: `references/code-review-understanding.md`
- Design systems, tokens, or component variant sheets: `references/design.md`
- Interaction, motion, or clickable prototypes: `references/prototyping.md`
- Decks or presentations: `references/decks.md`
- SVG figures, header art, icon-like visual explanations, or copyable artwork: `references/illustrations.md`
- Flowcharts, architecture maps, pipelines, state machines, sequence diagrams, dependency graphs, or other inspectable systems: `references/diagrams.md`
- Research explainers, learning artifacts, feature explanations, or concept teaching: `references/research-learning.md`
- Status reports, incident reports, postmortems, weekly updates, or recurring summaries: `references/reports.md`
- Throwaway editing interfaces, triage boards, config editors, prompt tuners, or review workbenches: `references/custom-editing-interfaces.md`
- Any designed artifact: `references/general-style-guide.md`

## Choose HTML When

- The artifact is spatial, visual, comparative, interactive, or dense.
- A reader needs tables, tabs, filters, annotations, flow diagrams, charts, SVG, side-by-side alternatives, or live controls.
- The user wants a spec, plan, report, PR explanation, prototype, deck, diagram, illustration, or custom editor.
- The output should be shared or revisited as a reference during implementation or verification.

Use Markdown for short notes, simple changelogs, plain checklists, and content where structure matters more than visual inspection.

## Artifact Standard

- Create complete single-file HTML by default: inline CSS, inline JavaScript, inline SVG, no build step.
- Include `<!doctype html>`, `<meta charset="utf-8">`, viewport meta, and a useful `<title>`.
- Make the page responsive and usable on desktop and phone.
- Use semantic sections, accessible controls, keyboard states, and clear visual hierarchy.
- Prefer real structure over decoration: tables for tabular data, SVG for diagrams, buttons for controls, sections for slides, forms for editing.
- For flowcharts and diagrams, load `references/diagrams.md` and follow its strict layout contract. Never return a diagram with disconnected arrows, overlapping nodes, or hidden connector paths.
- Avoid external CDNs, framework bundles, and build tools unless the user explicitly asks or the artifact truly needs them.
- For two-way artifacts, include a copy/export action that turns user edits back into Markdown, JSON, prompt text, SVG, or a diff.

## Creation Workflow

1. Identify the current project root:
   - Prefer `git rev-parse --show-toplevel`.
   - If not in a git repo, use the current working directory.
2. Create or reuse the project artifact root:
   - `/tmp/html/projects/<project-slug>-<8-char-sha1-of-absolute-project-root>/`
3. Maintain this layout:
   - `index.html` for the project landing page
   - `.html-skill.json` for metadata
   - `.server.json` for server metadata
   - `pages/<page-slug>/v001.html`, `v002.html`, etc.
   - `pages/<page-slug>/latest.html` copied from the newest active version
   - `.trash/` for deleted pages or versions
4. Generate or update the requested page.
5. Regenerate `index.html` so it links to every page and version.
6. Start or reuse a local static server bound to `127.0.0.1`.
7. Verify the exact localhost URL with `curl` before returning it.

Slug rule: lowercase ASCII, replace non-alphanumeric runs with `-`, trim leading/trailing `-`.

## Metadata

Record enough metadata in `.html-skill.json` to rebuild the landing page:

```json
{
  "project": { "name": "example", "root": "/abs/path", "slug": "example" },
  "pages": {
    "implementation-plan": {
      "title": "Implementation Plan",
      "kind": "plan",
      "latest": "v002",
      "versions": [
        { "version": "v001", "file": "pages/implementation-plan/v001.html", "created_at": "..." },
        { "version": "v002", "file": "pages/implementation-plan/v002.html", "created_at": "..." }
      ]
    }
  }
}
```

## Local Serving Contract

Always return a clickable localhost link after creating, updating, serving, listing, deleting, stopping, or repairing HTML artifacts. Link to the relevant `latest.html` page for page work, or to `index.html` for listing and project-level work.

- Serve from the artifact root with a static file server, usually:

```bash
python3 -m http.server "$PORT" --bind 127.0.0.1 --directory "$ARTIFACT_ROOT"
```

- Bind only to `127.0.0.1`.
- Choose a free port from `20000-60999`; avoid common app ports such as `3000`, `5173`, `8000`, and `8080`.
- Reuse an existing healthy server for the same artifact root when possible.
- Use an OS-managed supervisor when the link should survive after the agent session:
  - macOS: `launchctl` LaunchAgent with `KeepAlive`.
  - Linux: `systemd-run --user` with restart policy when user systemd works.
  - Fallback background processes are allowed only when no supervisor exists; warn that the localhost URL may not survive the session.
- Write `.server.json` after serving starts:

```json
{
  "port": 23456,
  "bind": "127.0.0.1",
  "method": "launchd",
  "local_url": "http://127.0.0.1:23456/pages/example/latest.html",
  "started_at": "2026-05-27T12:00:00Z"
}
```

Verify the exact page before returning it:

```bash
curl -fsS "http://127.0.0.1:$PORT/<path>" >/dev/null
```

If the server cannot be started, report the blocker and provide the local file path as a fallback, but do not present it as a served link.

## Output Contract

After creating, updating, serving, listing, deleting, stopping, or repairing HTML artifacts, keep the reply short and include the verified clickable localhost URL:

```markdown
HTML: [Open locally](http://127.0.0.1:23456/pages/example/latest.html)
```

If serving fails:

```markdown
HTML file: `/tmp/html/projects/example/pages/example/latest.html`
Local server could not be started: <short reason>.
```
