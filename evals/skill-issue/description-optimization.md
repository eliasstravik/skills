# skill-issue — description optimization

Date: 2026-07-23. Process: skill-creator's seeded 60/40 trigger ratchet,
adapted from its Claude-only runner to Codex CLI to honor the client model
restriction. The autopilot-approved 20-query set used three runs per query.

## Outcome

`best_description` = **the existing description, unchanged**:

> Governs the form of compact, evidence-earned agent skills.

The text is already present verbatim in `SKILL.md`. All three GPT-5.6 Luna
passes scored 20/20: every explicit Skill Issue activation selected the skill,
while skill-creator evaluation, GitHub issues, ordinary Markdown editing,
finished-skill use, explanations, generic skill creation, source-code
identifiers, explicit do-not-invoke language, and the colloquial phrase
`skill issue` avoided it, for 60/60 correct decisions.

The ratchet stopped at iteration 1 because the first candidate had no failures,
so GPT-5.6 Sol was not called for a rewrite. GPT-5.6 Terra independently scored
20/20.

No Claude Code, Claude model, or Fable 5 was used.

## Manual frontmatter check

`agentskills validate` is unavailable on this machine, so the recorded
frontmatter check is limited to name and format:

- `name: skill-issue` matches the directory and naming grammar. PASS
- `description` is present, third person, a short user-invoked index line, and
  matches `best_description` verbatim. PASS
- `disable-model-invocation: true` makes invocation explicit. If a host ignores
  that extension, the short description still provides no implicit trigger and
  the skill requires a named `/skill-issue` request. PASS
- Frontmatter has paired delimiters and unique required keys. PASS

## Manual skill-issue form check

- The bare core snapshot has 15 body lines; the final body has 38. PASS
- The body has one H1, one primitive H2 (`## Checklist`), and one earned
  `## Details` section of 22 lines including its heading. PASS
- Every Details line traces to A4, A5, A9, or A10 from the bare-core grade.
  PASS
- Details is within 80 lines, the body is within 100, and no overflow reference
  or script is needed. PASS
