# landingpage-readme — bare-core paired results

Date: 2026-07-26. Ticket: [ELI-260](/ELI/issues/ELI-260).

## Bare core

- Primitive: `Recipe`, because the landing-surface outcome depends on action
  order.
- Form: one H1 plus one flat `## Recipe`; no `## Details`.
- Size: 20 physical body lines after frontmatter, within the 20-line limit.
- Description: user-invoked; `disable-model-invocation: true`.

## Controlled batch

- Counted root:
  `evals/landingpage-readme/runs/bare-core/iteration-1-20260726/`.
- Eight fresh GPT-5.6 Sol arms ran as one paired batch: four with a run-local
  copy of the bare core and enabled copywriting dependency, four pure
  no-skill controls.
- Control prompts forbade every installed, user, project, plugin, slash, and
  model-invoked skill. No control event read a skill file.
- Every arm saved its prompt, model command record, Codex event transcript,
  user-facing transcript, timing, copied workspace, and review outputs.
- The deterministic contamination scan passed model, path, skill-loading,
  masked-dependency, ground-truth, `gh`, and source-integrity checks.
- GPT-5.6 Terra produced per-run formal `grading.json` files.
- GPT-5.6 Luna judged four blinded pairs and performed the benchmark analyst
  pass.
- Skill Creator generated the 214,482-byte static `review.html` with all eight
  outputs, formal grades, and the analyzed benchmark.

## Formal assertion results

| Eval | With bare core | Pure baseline |
| --- | ---: | ---: |
| 1 — Tracefold CLI, no README | 14/14 | 11/14 |
| 2 — Redact Config badge wall | 12/14 | 13/14 |
| 3 — Driftboard existing visuals | 12/14 | 13/14 |
| 4 — Masked copywriting missing | 6/7 | 5/7 |

Benchmark aggregation:

- With bare core: 89.3% mean pass rate.
- Pure baseline: 83.9% mean pass rate.
- Delta: +0.05 pass rate, +22.5 seconds, and +54,400 tokens.

The pure baselines preserve the recurring contractual failure required to
prove need: L5, copywriting ownership of audience-facing copy, fails in all
three normal controls. The Tracefold control additionally fails actor
legibility and the continuous first-success path; the masked control omits the
concrete dependency-install action.

All eight arms pass state/model isolation, approval gating, non-mutating
GitHub behavior, ground-truth secrecy, and baseline purity. Every applicable
arm also passes claim discipline, visual evidence, invisible methodology, and
its fixture-specific assertion.

## Blind forced comparison

Labels alternated before judgment:

| Eval | A | B | Luna winner after unblinding |
| --- | --- | --- | --- |
| 1 | pure baseline | bare core | Bare core |
| 2 | bare core | pure baseline | Pure baseline |
| 3 | pure baseline | bare core | Bare core |
| 4 | bare core | pure baseline | Bare core |

The bare core wins three pairs. The Redact Config control wins on richer API
boundary documentation even though it fails the hard copywriting-composition
assertion.

## Failure evidence and Detail eligibility

The bare treatment failures are preserved without revision:

- Eval 2 fails L4 because it asks about proof and visual availability already
  answered by repository evidence.
- Eval 2 fails L7 because the Node.js service-maintainer actor is not legible
  near the README top.
- Eval 3 fails L3 and L5 because copywriting is read before repository
  inspection, so the invocation cannot be shown to carry inspected evidence.
- Eval 4 fails L3 because the missing-dependency stop occurs before repository
  inspection.

The first three failure classes can earn narrowly traceable Details in the
full-treatment ticket: do not load copywriting before inspection, suppress
questions answered by inspected evidence, and make the evidence-derived actor
legible near the top. Eval 4 instead exposes a contract tension: L3 requires
inspection before a dependency call while the approved Recipe and masked
fiction make dependency absence terminal before inspection. That assertion's
applicability must be resolved explicitly; it does not earn a contradictory
skill instruction.

## Final-review bare-core rerun

The branch-wide standards/spec review materially corrected the core and
therefore ran a new controlled gate rather than relying on the historical
snapshot above. The authoritative evidence root is
`evals/landingpage-readme/runs/bare-core/iteration-5-20260727/`.

- The current bare core is one 17-step Recipe with 19 body lines and no
  Details.
- The Driftboard implementation now matches the accepted local-storage ground
  truth, and every arm is its own Git root.
- The deterministic scan rejects external temporary paths and passes model,
  skill, ground-truth, GitHub, baseline, and source-integrity boundaries.
- Fresh grades report 87.5% for the bare core versus 76.3% for pure baselines;
  preserved L3/L4/L5/L9/L11 failures earn exactly the five shipping Details.
- L6 now passes the explicit `skill_not_found` branch with the portable install
  command.
- Four blind forced comparisons completed; the baselines won all four on
  qualitative preference, which does not override the bare core's formal
  contract improvement or critical failure evidence.
- The analyzed benchmark and 350,190-byte static viewer pass the final bare
  verifier.
