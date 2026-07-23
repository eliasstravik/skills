# automake — description optimization

Date: 2026-07-23. Process: skill-creator's seeded 60/40 trigger ratchet,
adapted from its Claude-only runner to Codex CLI to honor the client model
restriction. The autopilot-approved 20-query set used three runs per query.

## Outcome

`best_description` = **the existing description, unchanged**:

> User-invoked workflow for a Git-backed Evaluator-Optimizer ratchet.

The text is already present verbatim in `SKILL.md`. All three GPT-5.6 Luna
passes scored train 12/12 and held-out test 8/8: every explicit Automake
activation selected the skill, while GNU Automake, Makefile, ordinary
implementation, review, explanation, Git recovery, diagnosis, other-loop, and
explicit do-not-invoke requests avoided it, for 60/60 correct decisions.

The ratchet stopped at iteration 1 because training had no failures, so GPT-5.6
Sol was not called for a rewrite. GPT-5.6 Terra independently scored 20/20.

No Claude Code, Claude model, or Fable 5 was used.

## Manual shipping check

`agentskills validate` is unavailable on this machine, so the recorded
frontmatter check is limited to name and format:

- `name: automake` matches the directory and naming grammar. PASS
- `description` is present, is a single string, and matches
  `best_description` verbatim. PASS
- `disable-model-invocation: true` preserves the user-invoked contract. PASS
- Frontmatter has paired delimiters and unique required keys. PASS
- The body has 22 lines; the Recipe core has 14 lines before Details, and
  Details has 7 lines including its heading and blank separator. PASS
- The body has one H1, one primitive H2 (`## Recipe`), and one earned
  `## Details` section. PASS
- The execution reference exists at the linked path and is not nested through
  another reference. PASS
