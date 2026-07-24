# copywriting - full iteration results

Date: 2026-07-24. Ticket: [ELI-254](/ELI/issues/ELI-254).

## Skill revision

The bare core earned one `## Details` section from the C10/C11 treatment
failure recorded in [ELI-253](/ELI/issues/ELI-253): distinctive customer
language was still copied into public social/content copy.

Added Details scope:

- Treat distinctive customer phrases as evidence, not reusable public copy.
- Translate customer language into brand-owned phrasing for social, content,
  newsletter, and voice-led copy.
- Avoid close variants or swapped-noun jokes that preserve an unapproved
  customer metaphor.
- Prefer brand evidence for public tone when brand samples and customer
  language conflict.

No `## Calls` were added. C13 allowed-public-research provenance remains in the
assertion suite but did not earn a Details line because the approved bare-core
run did not contain an allowed-browse treatment failure.

## Full paired benchmark

Raw ignored evidence root:
`evals/copywriting/runs/full/`.

All executor arms used GPT-5.6 Sol through Codex CLI. All grading used GPT-5.6
Terra through Codex CLI. No Claude Code, Claude model, Fable, `claude`,
`claude -p`, browsing, network access, credentials, real customer data, or live
service access was used.

### Iteration 1 no-ship result

Raw root: `evals/copywriting/runs/full/iteration-1/`.

Terra graded the first full skill run at 80/86 assertions passing, but the
shipping candidate did not pass critical assertions:

- With-skill eval 6 failed C10 by using a close public-copy variant of an
  unapproved customer metaphor.
- With-skill eval 8 failed C1 because a child run discovered parent repository
  state with `git status --short`.
- Both weak-positioning arms failed C6 in that pass by drafting before
  evidencing the challenge.

Decision: no ship. The C10 Details line was sharpened to ban close variants,
and the full-run harness set `GIT_CEILING_DIRECTORIES` so child `git` checks
cannot climb into the parent repo.

### Iteration 2 passing result

Raw root: `evals/copywriting/runs/full/iteration-2/`.

Terra summary:

| Configuration | Passed | Failed | Pass rate |
| --- | ---: | ---: | ---: |
| With skill | 43 | 0 | 100% |
| Without skill | 41 | 2 | 95.3% |
| Overall | 84 | 2 | 97.7% |

All 16 C1 checks passed. Every with-skill run read only its run-local
`skill/SKILL.md`; every without-skill run read no skill. Every with-skill
critical assertion passed across the eight approved evals.

The remaining failures were both in the no-skill eval 6 control:

- C10: copied distinctive customer language into public-facing copy.
- C11: used that customer language as public voice material.

This preserves the need signal while the full skill treatment passes.

The stock benchmark aggregation over iteration 2 reported:

- With skill: 100% pass rate.
- Without skill: 96% pass rate.
- Delta: +0.04 pass rate.

## Static viewer and feedback

The standard skill-creator static viewer was generated at
`evals/copywriting/runs/full/iteration-2/review.html`.

The blocking bare-core viewer feedback captured in [ELI-253](/ELI/issues/ELI-253)
identified the same C10/C11 customer-language failure. The full iteration
addressed that feedback through the earned Details section. Terra's iteration 2
with-skill `eval_feedback` fields contain no remaining suggestions or review
needs.

## Form and scope check

- Frontmatter keeps `name: copywriting`.
- `disable-model-invocation: true` preserves the user-invoked contract.
- Body has 19 lines after frontmatter, within the 100-line skill-issue budget.
- One primitive remains: `## Switch`.
- One `## Details` section exists.
- Details are 4 lines, within the 80-line Details budget.
- Shipping scope stays limited to evidence-backed commercial copy surfaces in
  the approved eval corpus: landing/page rewrite, ads, lifecycle email,
  social/content voice, launch campaign, and B2B sales collateral.
