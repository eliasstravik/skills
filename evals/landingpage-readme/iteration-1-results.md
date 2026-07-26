# landingpage-readme — full-treatment iteration 1

Date: 2026-07-26. Ticket: [ELI-261](/ELI/issues/ELI-261).

## Earned treatment

The bare-core failures in `bare-core-results.md` earned exactly three
`## Details` lines and no reference:

| Added guidance | Preserved bare-core failure |
| --- | --- |
| Delay reading or invoking `/copywriting` until normal-flow inspection and gap resolution are complete, then pass the evidence and replies. | Eval 3 L3 and L5: copywriting loaded before repository inspection, so the invocation could not carry inspected evidence. |
| Ask only when inspected repository evidence leaves a consequential fact unresolved. | Eval 2 L4: proof and visual availability questions repeated facts already established by repository evidence. |
| State the evidence-derived actor in the one-liner or opening paragraph near the title. | Eval 2 L7: the Node.js service-maintainer actor was not legible near the README top. |

The masked-dependency L3 result did not earn guidance. It exposed an
applicability conflict between normal-flow inspection and the approved
terminal missing-dependency branch. L3 now applies to normal treatment arms;
the masked branch is graded by L6 instead.

## Fresh paired iteration

Raw ignored evidence root:
`evals/landingpage-readme/runs/full/iteration-1-20260726/`.

The shared harness selects this phase explicitly:

```bash
LANDINGPAGE_RUN_KIND=full evals/landingpage-readme/run-bare-core.sh \
  "$PWD/evals/landingpage-readme/runs/full/<new-iteration>"
```

- Eight fresh GPT-5.6 Sol arms ran as one paired batch: four with the full
  treatment and four pure no-skill controls.
- The deterministic contamination scan passed executor count, model, baseline
  purity, staged skill loading, masked-dependency isolation, ground-truth
  secrecy, GitHub safety, and source integrity.
- GPT-5.6 Terra produced all eight formal grades.
- GPT-5.6 Luna performed four blinded comparisons and the analyst pass.
- Skill Creator generated a 311,689-byte static viewer with current outputs,
  previous bare-core outputs, formal grades, benchmark data, and analyst notes.

## Formal grades

| Eval | Full treatment | Pure baseline |
| --- | ---: | ---: |
| 1 — Tracefold CLI, no README | 13/14 | 13/14 |
| 2 — Redact Config badge wall | 14/14 | 11/14 |
| 3 — Driftboard existing visuals | 14/14 | 13/14 |
| 4 — Masked copywriting missing | 6/6 | 4/6 |

Every applicable critical treatment assertion passes. The full treatment
passes 47/48 assertions overall; the baseline passes 41/48. Skill Creator's
per-eval mean reports 98.2% versus 82.8%, a +0.15 pass-rate delta. Mean runtime
is effectively equal (307.8s versus 306.2s), while the treatment uses 14,866
fewer mean tokens.

The one treatment failure is non-critical L10 in Tracefold: the missing visual
is truthfully marked and specified, but the run renders its production brief
as public prose rather than an HTML comment. L10 passed the bare core, so this
variance cannot earn another Detail or reference line.

The need signal remains discriminating: all three normal controls fail L5
because they draft audience-facing copy without `/copywriting`. The treatment
passes L5 in all three.

## Blind comparison and analyst pass

Treatment placement alternated between A and B. After unblinding:

| Eval | Winner |
| --- | --- |
| 1 — Tracefold CLI, no README | Full treatment |
| 2 — Redact Config badge wall | Pure baseline |
| 3 — Driftboard existing visuals | Pure baseline |
| 4 — Masked copywriting missing | Full treatment |

The baseline's eval-2 completeness preference does not override its critical
L4/L5/L7 failures. The eval-3 preference concerns social-preview asset choice;
both arms pass the required README visual assertion. Neither comparison
provides a bare-core failure that can earn more shipping guidance.

The analyst identifies L5 as the strongest differentiator, eval 2 as the
largest quality separation, and eval 3 as nearly saturated. Resource variance
is high and eval-specific; aggregate timing or token direction should not be
treated as a stable performance claim.

## Form and disposition

- One primitive remains: the 15-step `## Recipe`.
- The full body is 26 physical lines, within the 100-line limit.
- One `## Details` section contains three guidance lines, within the 80-line
  Details limit.
- No reference or Call was added.
- Final review hardened the result verifier to require every applicable
  critical assertion exactly once and to reject unknown run kinds; the
  preserved full and bare-core iterations both pass the tightened gate.
- No further skill revision is evidence-earned from this iteration.
- Elias accepted the static-viewer review on 2026-07-26, completing the
  human-feedback gate without further skill changes.
