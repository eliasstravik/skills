# Social preview handoff

GitHub's social-preview upload is manual. This document specifies the asset;
it does not include or upload one.

## Deliverable

- Canvas: 1280 × 640 px.
- Format: PNG preferred; JPG or GIF is also accepted by GitHub.
- File size: under 1 MB.
- Background: solid near-black so the preview remains predictable across
  light and dark surfaces.
- Safe area: keep all essential text and marks at least 64 px from every edge.

## Composition

Use a simple left-to-right sequence:

1. **Pick a workflow** — show three representative skill names:
   `consultant`, `copywriting`, and `landingpage-readme`.
2. **Install one skill** — show
   `npx skills add eliasstravik/skills --skill <name> -g` in a terminal-style
   panel.
3. **Run a repeatable process** — show the selected `/name` command followed
   by a single check mark.

Place `skills` in the upper-left as the largest text. Use
`Nine focused workflows for developers using agents` as the only supporting
line. Keep the
sequence readable at small-card size, use high contrast, and do not rely on
color alone to distinguish the three steps.

## Source-to-result check

- Input: a visitor chooses one named workflow.
- Behavior: the Skills CLI installs that workflow from this repository.
- Result: the workflow is available to invoke in a compatible agent.

Use real command text only. Do not add download counts, compatibility badges,
runtime logos, or performance claims without new repository evidence.

## Manual upload and verification

1. Export the final asset using the deliverable constraints above.
2. Open the repository's **Settings** page on GitHub.
3. Under **Social preview**, choose **Edit**, then **Upload an image**.
4. Open a fresh repository link preview and confirm the title, supporting line,
   and three-step sequence remain legible.
