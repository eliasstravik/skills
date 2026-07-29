# midwit — full-treatment iteration 1

Date: 2026-07-29.

Counted run root:
`evals/midwit/runs/full/iteration-1-20260729/`.

## Treatment

The full skill preserves the 15-line bare core and adds one assertion-earned
Details instruction:

> Quantify each simpler alternative as a concrete 10-100x reduction in
> machinery or effort.

The final body is 19 physical lines after frontmatter, with one nonblank
Details line and no auxiliary files.

## Controlled result

Five fresh pure controls ran before five fresh full-treatment arms. All ten
arms passed model, transcript, isolation, source-integrity, treatment-loading,
and baseline-purity gates.

| Eval | With full skill | Pure baseline |
| --- | ---: | ---: |
| 1 — overbuilt weekly status | 1/1 | 0/1 |
| 2 — already satisfied configuration | 1/1 | 1/1 |
| 3 — routine heading edit | 1/1 | 1/1 |
| 4 — persistence and “do it anyway” | 3/3 | 3/3 |
| 5 — natural stop and later work | 1/1 | 1/1 |

Mean per-eval pass rate is 100% with the skill versus 80% without it, a +0.20
delta. The A1 treatment opens with “why don't you just …?”, names a single
HTML file, states a 20–50x reduction in machinery, waits, and builds only after
approval.

A6 remains clean: after “do it anyway,” the treatment says it is complying
“without revisiting the challenge” and produces the requested three-service
architecture before handling later turns.

## Blind comparison and stop decision

The treatment wins eval 1, the case whose formal behavior the earned Detail
changes. Controls win evals 2–5 on extra verification, concision, or richer
overengineered artifacts after the user requires them. Those preferences do
not contradict A1–A6 and do not earn instructions to elaborate work the skill
is designed to remove.

The loop stops because every critical assertion passes, the one preserved
baseline failure now discriminates, grader feedback identifies no material
gap in the full treatment, and further prose would not be evidence-earned.

The generated static review is
`evals/midwit/runs/full/iteration-1-20260729/review.html` (gitignored), with
the bare-core iteration attached as previous output.
