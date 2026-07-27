# landingpage-readme — description optimization

Date: 2026-07-26. Ticket: [ELI-262](/ELI/issues/ELI-262).

Process: GPT-only Codex CLI trigger optimization, adapted from skill-creator's
train/test ratchet because the stock runner shells out to `claude -p`. The
accepted user-invoked query set is committed at
`evals/landingpage-readme/trigger-eval.json`.

## Optimizer result

GPT-5.6 Luna read the frozen skill body, accepted corpus, skill-issue form
authority, and repository conventions. It proposed three user-invoked index
lines and recommended candidate A:

> User-invoked workflow for truthful README-led GitHub repository landing surfaces.

The optimizer predicted candidate A at train 12/12 and held-out test 8/8. It
preferred the README-led wording because it preserves the full GitHub landing
surface while excluding standalone README edits, metadata-only changes,
social-preview generation, and marketing-site work.

Three fresh, label-blind GPT-5.6 Luna passes classified all 20 queries from
candidate A's metadata alone:

| Pass | Train | Held-out test | Total |
| --- | ---: | ---: | ---: |
| 1 | 12/12 | 8/8 | 20/20 |
| 2 | 12/12 | 8/8 | 20/20 |
| 3 | 12/12 | 8/8 | 20/20 |

An independent label-blind GPT-5.6 Terra check also scored 12/12 train and 8/8
held-out test.

`best_description` is the optimizer's candidate A, applied verbatim to
`skills/landingpage-readme/SKILL.md`.

## Manual frontmatter check

- `name: landingpage-readme` matches the directory and naming grammar. PASS.
- `description` is a short third-person user-invoked index line and equals
  `best_description` verbatim. PASS.
- `disable-model-invocation: true` preserves explicit invocation. PASS.
- Frontmatter has paired delimiters and unique required keys. PASS.

No Claude Code, Claude model, Fable, `claude`, `claude -p`, browsing, or
non-Codex model was used.
