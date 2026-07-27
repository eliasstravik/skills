# copywriting — model-invoked description optimization

Date: 2026-07-26. Ticket: [ELI-258](/ELI/issues/ELI-258).

Process: GPT-only Codex CLI trigger optimization, adapted from skill-creator's
train/test ratchet because the stock runner shells out to `claude -p`. The
accepted model-invoked query set is committed at
`evals/copywriting/trigger-eval.json`.

## Invocation-mode change

The accepted landingpage-readme composition preflight proved that a
repository-local copywriting skill is visible but unavailable for mid-recipe
invocation while `disable-model-invocation: true` is present, and becomes
invocable when that line alone is removed. Elias accepted the aligned semantic
preflight verifier on 2026-07-26. The source skill now omits the extension; its
behavioral body is byte-unchanged.

## Eval set

- 20 realistic implicit-trigger queries: 12 train and 8 held-out test.
- Positives cover homepage, landing-page, ad, lifecycle-email, social,
  newsletter, launch-campaign, and B2B sales-copy requests without naming the
  skill.
- Negatives cover internal editing, research, release notes, journalist
  pitching, brand strategy, HTML implementation, academic editing, content
  planning, API docs, and personal writing.

## Optimizer result

GPT-5.6 Luna read the frozen skill body, accepted corpus, and skill-issue form
authority, then proposed three model-invoked candidates. It recommended
candidate A:

> Triggers when a request asks for customer- or audience-facing commercial copy
> for a product, service, or organization, including homepage, landing-page,
> sales, advertising, launch, social, newsletter, or marketing email copy;
> excludes internal, personal, editorial, research, strategy, planning,
> journalist-pitch, and implementation requests.

Three fresh, label-blind GPT-5.6 Luna evaluator passes classified all 20
queries from the candidate metadata alone:

| Pass | Train | Held-out test | Total |
| --- | ---: | ---: | ---: |
| 1 | 12/12 | 8/8 | 20/20 |
| 2 | 12/12 | 8/8 | 20/20 |
| 3 | 12/12 | 8/8 | 20/20 |

`best_description` is the optimizer's candidate A, applied verbatim to
`skills/copywriting/SKILL.md`.

## Manual frontmatter check

- `name: copywriting` matches the directory and naming grammar. PASS.
- `description` starts with `Triggers when`, states observable model-invoked
  conditions and exclusions, and equals `best_description` verbatim. PASS.
- Frontmatter has paired delimiters and unique required keys. PASS.
- `disable-model-invocation` is absent. PASS.

No Claude Code, Claude model, Fable, `claude`, `claude -p`, browsing, or
non-Codex model was used.
