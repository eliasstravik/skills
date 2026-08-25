# midwit — description optimization

Date: 2026-08-25. Issue: #48.

## Model-invocation update

The frozen corpus contains 20 routing queries: 12 train and 8 held-out.
Positive queries cover implicit requests for a persistent anti-overengineering
stance and explicit `/midwit` use. Negatives cover one-off review, refactoring,
architecture, implementation, explanation, humor, and image requests.

GPT-5.6 Luna proposed three model-facing descriptions and ran three independent
label-blind routing passes. Selected conforming candidate B scored 36/36 train
and 24/24 held-out. Its `best_description` is applied verbatim in
`skills/midwit/SKILL.md`.

## Manual frontmatter check

- `name: midwit` matches the directory and naming grammar. PASS.
- The description is third person, states positive and negative triggers, has
  no XML, and stays under 1,024 characters. PASS.
- Frontmatter has paired delimiters and unique required keys. PASS.
- `disable-model-invocation` is absent. PASS.

No Claude Code, Claude model, Fable, `claude`, `claude -p`, browser, or
non-Codex model was used.
