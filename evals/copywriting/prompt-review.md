# copywriting - prompt approval packet

This packet is the plan-required prompt approval gate for the first
skill-creator stage. Approval authorizes no-skill baseline runs only; it does
not approve building or shipping the skill.

## Decision requested

Approve the `evals/copywriting/evals.json` prompt corpus, scripted replies, and
frozen fictional fixtures for saturated no-skill baseline execution on
[ELI-252](/ELI/issues/ELI-252).

If approved, the next stage runs GPT-5.6 Sol no-skill baselines with every
installed skill forbidden, saves `transcript.md` for every arm, and uses
GPT-5.6 Terra to check contamination and model-policy compliance. If rejected,
revise the eval corpus before any baseline execution.

## Eval set

| ID | Name | Gate covered |
| --- | --- | --- |
| 1 | evidence-rich-landing-page | Sufficient context, landing-page depth, proof-linked drafting |
| 2 | vague-page-material-gaps-no-browse | Vague input, material-gap branch, no-browse compliance |
| 3 | weak-positioning-rejected-correction | Weak positioning, missing proof, scripted rejection, provisional draft |
| 4 | paid-ads-integrity-traps | Ads, fabricated urgency/scarcity/testimonial/result traps, integrity |
| 5 | regulated-lifecycle-email | Email/lifecycle, regulated or health-adjacent claim handling |
| 6 | social-content-voice-conflict | Social/content voice, contradictory evidence, no living-writer imitation |
| 7 | fast-provisional-launch-campaign | Fast provisional path, launch/campaign, proof placeholders, strategic alternatives |
| 8 | b2b-sales-collateral-frozen-research | Sales collateral, frozen research, no-browse, procurement facts |

The corpus is intentionally landing-page-weighted but broad enough to test the
approved candidate surfaces. Later shipping scope must narrow to formats with
preserved baseline failures and treatment benefit.

## Scripted interaction cases

- Eval 3 tests weak positioning and rejected correction. The scripted reply in
  the fixture tells the executor to proceed while keeping unresolved risks
  visible instead of fabricating support.
- Other interaction branches are tested by prompt/fixture constraints:
  material gaps, no-browse, fast/provisional behavior, and integrity refusal or
  safe reframing.

## Fixture policy

- Every fixture is fictional and marked as invented.
- Every fixture is committed only under `evals/copywriting/fixtures/`.
- Future runs must copy fixtures into `__RUN_DIR__/workspace/` before reading
  or mutating anything.
- No fixture contains real customer data, credentials, private community
  material, live URLs that must be fetched, or references to production state.

## Baseline execution notes

- Baseline arms must forbid every installed skill, including `/copywriting`.
- Each executor must be GPT-5.6 Sol.
- Terra must later check transcripts for skill contamination and model-policy
  violations before a baseline counts.
- Each run must save the complete user-facing transcript as `transcript.md`.
- No Claude Code, Claude model, Fable, `claude`, `claude -p`, or transitive
  prohibited wrapper may be invoked.

## Approval checklist

- [ ] Prompt categories match the approved plan and [ELI-251](/ELI/issues/ELI-251) acceptance criteria.
- [ ] Scripted replies and prompt constraints are acceptable evaluation truth.
- [ ] Fictional fixtures are safe to use in run-local no-skill baselines.
- [ ] The next ticket may start saturated no-skill baseline execution.
