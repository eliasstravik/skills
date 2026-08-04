# landingpage-readme — 2026-08-04 learnings synthesis

## Inputs synthesized

- The locked landing-page README formulas and section rules
- Paul Graham-derived principles for simple, useful, accurate writing
- Approved Rowbound, Wedge, Stockpile, Mold, Greenware, and Codebound iterations and user corrections
- The current shipping skill, intent, assertions, fixtures, and historical eval records

## Change

The Recipe remains the single core primitive and stays at the 20-line core
limit. One shipping reference now carries the exact reusable page anatomy,
formulas, GitHub formatting, ten-variant paginator, docs handoff, and production
artifact boundary.

The synthesis preserves the locked structure while incorporating the live
corrections:

- use the short outcome headline when a forced pain clause makes it worse;
- carry immediate product behavior through to the reader's downstream result;
- keep hero visuals simple and product-specific;
- make the primary CTA name the first useful result or actual button action;
- replace “Say yes to” and “Say no to” behavior headings with direct workflow language;
- describe the user's role concretely rather than as “judgment”;
- frame paid help around setup, configuration, rollout, training, maintenance, upgrades, and Slack support;
- link every primary CTA to a repository-grounded `docs/getting-started.md`;
- keep all ten variants structurally identical, propagate feedback across them, and keep preview scaffolding outside the target repository;
- use the eyebrow pitch as the approved About description without the project name or trailing period.

## Contract updates

- L17 covers the exact page anatomy.
- L18 covers the ten-variant paginator and feedback propagation.
- L19 covers formula-equivalent, outcome-led copy and the behavior-heading correction.
- L20 covers the CTA-to-docs first-success path.
- L21 covers preview/production separation and About-description equivalence.

The historical benchmark predates L17-L21, so this revision added a focused
preview-and-docs fixture and paired old-skill/new-skill run. The old skill met
7 of 12 expectations; the updated skill met 11 of 12. A blind comparison chose
the updated result with 0.97 confidence because it preserved the exact page
anatomy, produced the required numbered fragment paginator, and delivered the
approved repository artifacts in the right places.

The sole updated-run failure exposed a broken relative issue link from the
getting-started guide. The shipping reference now requires an absolute
repository Issues URL, and the fixture now supplies repository metadata from
which that URL can be derived. The focused corrective rerun met all 12
expectations. Grader feedback also earned a runtime check for initial deep links
and browser back/forward behavior. No other skill changes were made from this
single focused evaluation. A full historical-suite rerun and real-repository
dogfood remain separate shipping gates.

The skill remains explicitly invoked and its trigger scope did not change, so
description optimization was not rerun. The focused harness used GPT-5.6 Sol
for execution and GPT-5.6 Terra for grading, comparison, and analysis because
the preferred Luna comparator was unavailable. Wall-clock duration was
captured, but the runner did not expose reliable token telemetry.
