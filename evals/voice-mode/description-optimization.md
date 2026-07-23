# voice-mode — description optimization

Date: 2026-07-23. Process: skill-creator's seeded 60/40 trigger ratchet,
adapted from its Claude-only runner to Codex CLI to honor the client model
restriction. The self-reviewed 20-query set used three runs per query.

## Outcome

`best_description` = **the existing description, unchanged**:

> User-invoked spoken-response mode for live calls.

The text is already present verbatim in `SKILL.md`. All three GPT-5.6 Luna
passes scored train 12/12 and held-out test 8/8: every explicit activation
selected `voice-mode`, and every ordinary or adjacent request avoided it,
for 60/60 correct decisions.

The ratchet stopped at iteration 1 because the training set had no failures,
so GPT-5.6 Sol was not called for a rewrite. An independent GPT-5.6 Terra
check scored 19/20. Its only differing decision selected `voice-mode` for an
isolated “Exit voice mode” request; all ordinary near-misses still avoided
the skill. Runtime frontmatter keeps model invocation disabled, so this
explicit exit wording cannot accidentally activate the mode.

No Claude Code, Claude model, or Fable 5 was used.

## Manual shipping check

`agentskills validate` is unavailable on this machine, so the recorded
frontmatter check is limited to name and format:

- `name: voice-mode` matches the directory and naming grammar. PASS
- `description` is present, is a single string, and matches
  `best_description` verbatim. PASS
- `disable-model-invocation: true` is a Boolean extension and preserves the
  user-invoked contract. PASS
- YAML parses successfully. The body has 18 lines; the Rules core occupies
  15 lines before Details, and Details occupies 3 lines. PASS
