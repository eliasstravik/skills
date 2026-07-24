# copywriting - bare-core paired results

Date: 2026-07-24. Ticket: [ELI-253](/ELI/issues/ELI-253).

## Bare core

- Primitive: `Switch`, chosen because the agent must choose among mutually
  exclusive copywriting branches while retaining ownership of the action.
- Form: one H1 plus one `## Switch`; no `## Details`.
- Size: 13 body lines after frontmatter, within the 20-line bare-core limit.
- Description: user-invoked; `disable-model-invocation: true`.

## Setup

- Counted run root:
  `evals/copywriting/runs/bare-core/iteration-1-counted/`.
- One earlier sandbox-only launch wrote only failed initialization evidence
  under `evals/copywriting/runs/bare-core/iteration-1/`; it is discarded.
- Sixteen fresh GPT-5.6 Sol arms ran in one paired batch: eight with a run-local
  copy of the bare core and eight no-skill controls.
- Control prompts forbade every installed, project, plugin, slash, and
  model-invoked skill and treated `/copywriting` as plain shorthand.
- Every counted arm wrote `prompt.md`, `timing.json`, `transcript.md`,
  `codex-events.jsonl`, `workspace/source-packet.md`, and
  `workspace/outputs/final.md`.
- GPT-5.6 Terra wrote per-run `grading.json` files and
  `terra-grading-summary.{json,md}`.
- GPT-5.6 Luna judged blinded A/B copies from `blind-comparison-inputs/`.
- The standard skill-creator static viewer was generated at
  `review.html`, and pre-revision feedback was captured in `feedback.json`
  before any Details line or skill revision existed.

## Terra assertion results

| Eval | With bare core | Without skill |
| --- | ---: | ---: |
| 1 - evidence-rich landing page | 5/5 | 5/5 |
| 2 - vague page material gaps no-browse | 5/5 | 5/5 |
| 3 - weak positioning rejected correction | 6/6 | 5/6 |
| 4 - paid ads integrity traps | 5/5 | 5/5 |
| 5 - regulated lifecycle email | 5/5 | 5/5 |
| 6 - social content voice conflict | 4/6 | 4/6 |
| 7 - fast provisional launch campaign | 5/5 | 5/5 |
| 8 - B2B sales collateral frozen research | 6/6 | 6/6 |

Benchmark aggregation:

- With bare core: 95.8% pass rate.
- Without skill: 93.8% pass rate.
- Delta: +0.02 pass rate, +11.1s, +20 tokens.

Terra found C1 passed in all 16 runs: counted treatment arms read only their
run-local bare skill copy, no counted control arm read a skill, every counted
executor used GPT-5.6 Sol, and no prohibited Claude, Fable, browse, live-state,
credential, service, unrelated-repo, or external-temp evidence appeared.

## Luna blind comparison

Unblinded after Luna wrote the blind comparison:

| Eval | Luna result |
| --- | --- |
| 1 - evidence-rich landing page | Control wins |
| 2 - vague page material gaps no-browse | Treatment wins |
| 3 - weak positioning rejected correction | Treatment wins |
| 4 - paid ads integrity traps | Control wins |
| 5 - regulated lifecycle email | Control wins |
| 6 - social content voice conflict | Tie |
| 7 - fast provisional launch campaign | Treatment wins |
| 8 - B2B sales collateral frozen research | Treatment wins |

Overall: treatment wins 4, control wins 3, and 1 pair ties.

## Viewer feedback

The static viewer was generated before any revision. Feedback was then captured
in `feedback.json` with 16 review records. The important feedback is that both
eval-6 arms still reuse distinctive customer language in public copy, so the
preserved F1 failure remains unsolved by the bare core.

## Review resolution

Final code review identified one assertion-coverage gap from the parent intent:
allowed public research must carry provenance when consequential public facts
are used. C13 was added after viewer feedback was captured. The approved
eight-eval bare-core run still grades C1-C12 because the approved corpus has
no allowed-browse fixture; the allowed-research fixture and paired grading
belong in the next iteration before shipping.

## Detail eligibility

One future Details instruction is earned by treatment failures C10 and C11:
customer language must be translated into brand-owned phrasing, with direct
reuse allowed only when the source packet explicitly authorizes quotation or
direct reuse. No revision was made in this ticket after viewer feedback.
