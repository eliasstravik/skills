# grilling-fix — iteration 1 results

Date: 2026-08-13. Arms: `with_skill` = grilling + grilling-fix;
`without_skill` = grilling alone (declared baseline deviation — grilling-fix
is a modifier of grilling and a pure no-skill run would be meaningless, so
the baseline forbids grilling-fix and every other installed skill but keeps
grilling itself). One run per arm per eval.

## Benchmark

| Metric | With Skill | Without (grilling alone) | Delta |
|--------|------------|--------------------------|-------|
| Pass rate | 100% (9/9) | 22% (2/9) | +0.78 |
| Time | 185.6s | 174.0s | +11.6s |

- eval-0 lettered-options-migration-plan: with 5/5, baseline 1/5.
- eval-1 confirmation-questions-forced-options: with 4/4, baseline 1/4.

## Analyst notes

- The baseline is not option-free: grilling alone volunteered inline
  lowercase `(a)/(b)/(c)` choices inside question prose on eval-1, but not
  as explicit option lists, not consistently on every question, and its
  eval-0 run largely asked open questions. The fix's value is making
  options mandatory, explicit, and letter-labeled — not inventing the idea
  of options.
- `grilling-format-preserved` passed in both arms; it is non-discriminating
  for prove-need but retained deliberately as a no-regression check that
  grilling-fix does not distort the host skill's round/frontier format.
- n=1 per arm per eval; the benchmark header's "3 runs each" is the
  aggregator's stock label, not the actual run count. Variance is unknown;
  acceptable for a two-constraint formatting policy, rerun at larger n if
  the skill grows.
- Contamination check: graders confirmed no arm invoked any installed
  skill beyond its assigned ones.

## Disposition

Done-gate satisfied for iteration 1 (with-skill perfect, large delta,
client viewer review pending at `skills/grilling-fix-workspace/iteration-1/review.html`).
Description optimizer deferred — see `frontmatter-check.md`.
