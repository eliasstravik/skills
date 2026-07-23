# demo — description optimization

Date: 2026-07-23. Process: skill-creator's seeded 60/40 trigger ratchet,
adapted from its Claude-only runner to Codex CLI to honor the client model
restriction. The self-reviewed 20-query set used three runs per query.

## Outcome

`best_description` = **the existing description, unchanged**:

> User-invoked workflow for realistic local artifact demos.

The text is already present verbatim in `SKILL.md`. All three GPT-5.6 Luna
passes scored train 12/12 and held-out test 8/8: every explicit activation
selected `demo`, while ordinary demo-page, prototype, browser, HTML, video,
UI, serving, and review requests avoided it, for 60/60 correct decisions.

The ratchet stopped at iteration 1 because training had no failures, so GPT-5.6
Sol was not called for a rewrite. GPT-5.6 Terra independently scored 20/20.

No Claude Code, Claude model, or Fable 5 was used.

## Manual shipping check

`agentskills validate` is unavailable on this machine, so the recorded
frontmatter check is limited to name and format:

- `name: demo` matches the directory and naming grammar. PASS
- `description` is present, is a single string, and matches
  `best_description` verbatim. PASS
- `disable-model-invocation: true` preserves the user-invoked contract. PASS
- YAML parses successfully. The body has 15 lines; the Recipe core has 11
  lines before Details, and Details has 3 lines. PASS
- The body has one H1, one primitive H2 (`## Recipe`), and one earned
  `## Details` section. PASS
