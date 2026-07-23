# consultant — description optimization

Date: 2026-07-23. Process: skill-creator's seeded 60/40 trigger ratchet,
adapted from its Claude-only runner to Codex CLI to honor the client model
restriction. The autopilot-approved 20-query set used three runs per query.

## Outcome

`best_description` = **the existing description, unchanged**:

> Runs a client consultation that turns a rough idea into an adversarially
> reviewed plan and a copy-paste handoff prompt for a downstream builder.

The text is already present verbatim in `SKILL.md`. All three GPT-5.6 Luna
passes scored train 12/12 and held-out test 8/8: every explicit Consultant
activation selected the skill, while ordinary planning/implementation, plan
review, general consulting language, direct plan editing, PRD creation, another
named workflow, explanation, explicit do-not-invoke, and consulting-business
requests avoided it, for 60/60 correct decisions.

The ratchet stopped at iteration 1 because training had no failures, so GPT-5.6
Sol was not called for a rewrite. GPT-5.6 Terra independently scored 20/20.

No Claude Code, Claude model, or Fable 5 was used.

## Manual frontmatter check

`agentskills validate` is unavailable on this machine, so the recorded
frontmatter check is limited to name and format:

- `name: consultant` matches the directory and naming grammar. PASS
- `description` is present, is a single string, and matches
  `best_description` verbatim. PASS
- `disable-model-invocation: true` preserves the user-invoked contract. PASS
- Frontmatter has paired delimiters and unique required keys. PASS

## Manual skill-issue form check

- The body has 39 lines; the Recipe core has 14 lines before Details, and
  Details has 24 lines including its heading. PASS
- The body has one H1, one primitive H2 (`## Recipe`), and one earned
  `## Details` section. PASS
- Every Details line traces to A4, A6, A9, A10, A13, A14, or N1 from the
  bare-core grade. PASS
- The body is within the 100-line ceiling and needs no overflow reference or
  script. PASS
