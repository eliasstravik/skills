# copywriting - description optimization

Date: 2026-07-24. Ticket: [ELI-254](/ELI/issues/ELI-254).

Process: GPT-only Codex CLI trigger optimization, adapted from
skill-creator's train/test ratchet because the stock runner shells out to
`claude -p`. The query set is committed at
`evals/copywriting/trigger-eval.json`.

## Eval set

- 20 realistic queries.
- Train split: 12 queries.
- Held-out test split: 8 queries.
- Positives require explicit `/copywriting` or copywriting-skill activation
  for approved commercial-copy surfaces.
- Negatives cover near misses: internal editing, research, release notes,
  journalist pitching, brand strategy, `/html`, academic editing, content
  planning, API docs, and personal writing.

## Candidates

A:

> User-invoked workflow for truthful audience-facing commercial copy.

B:

> User-invoked workflow for truthful commercial copy across landing pages, ads,
> email, social/content launches, and B2B sales collateral.

## GPT-only result

GPT-5.6 Luna scored both candidates perfectly:

| Candidate | Train | Test |
| --- | ---: | ---: |
| A | 12/12 | 8/8 |
| B | 12/12 | 8/8 |

Selection rule: choose `best_description` by held-out test score, use train as
the tiebreaker, then prefer the shorter existing description only if both
scores tie.

`best_description`:

> User-invoked workflow for truthful audience-facing commercial copy.

The frontmatter in `skills/copywriting/SKILL.md` already contains
`best_description` verbatim, so no description rewrite was needed.

## Manual frontmatter check

- `name: copywriting` matches the directory and naming grammar. PASS.
- `description` is present and equals `best_description` verbatim. PASS.
- `disable-model-invocation: true` is a Boolean extension and preserves the
  user-invoked contract. PASS.
- Frontmatter has paired delimiters and unique required keys. PASS.

No Claude Code, Claude model, Fable, `claude`, `claude -p`, browsing, network,
or non-Codex optimizer path was used.
