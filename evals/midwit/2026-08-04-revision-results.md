# midwit — meme/shared-truth revision

Date: 2026-08-04.

## Intent

The revision replaces “stay in midwit mode” with the named Midwit meme and its
actual destination: find the simple truth shared by the idiot and genius at
opposite tails of the bell curve instead of getting stuck in the clever,
overcomplicated middle.

## Bare-core result

The old shipping skill was hash-pinned as the control. Six fresh GPT-5.6 Sol
pairs tested the five existing regression cases plus the client-approved
shared-truth framing case. The revised bare core retained one H1, one Rules
primitive, ten imperatives, 15 body lines, and no Details.

Both configurations passed four of six evals (66.7%). A1 failed because the
bare core did not force an explicit 10–100x comparison. A7 failed because the
revised response paraphrased the intended frame without saying “Midwit meme,”
“idiot,” or “genius.” Those failures earned exactly two Details instructions.
All other critical assertions passed. The blind comparator preferred the
revision on the A7 framing case.

The static review is generated outside the shipping surface at
`evals/midwit/runs/bare-core/iteration-2-20260804/review.html`.

## Full-treatment result

Six fresh old-skill controls and six fresh treatments reran the complete suite.
All arms passed model, transcript, isolation, source-integrity, and declared
control-loading gates. Independent grading produced:

| Configuration | Passed evals | Run-level pass rate |
| --- | ---: | ---: |
| Revised skill | 6/6 | 100% |
| Old skill | 5/6 | 83.3% |

A1–A6 passed in both configurations. A7 discriminated: the revised response
explicitly named the Midwit meme, the idiot/genius convergence on shared
truth, and the overcomplicated middle; the old skill omitted that model. The
revised skill won all six blind forced comparisons. No further instruction was
earned.

The static review is generated outside the shipping surface at
`evals/midwit/runs/full/iteration-2-20260804/review.html`.

## Done-gate

- [x] A1–A7 cover every required behavior and preserved failure; all are
  critical.
- [x] Rules remains the only core primitive.
- [x] The bare core was tested before any revision Details existed.
- [x] The one Details section contains only the two lines earned by A1 and A7.
- [x] The full treatment passes every critical assertion.
- [x] Manual frontmatter, extension, form, JSON, shell, and whitespace checks
  are recorded or reproducible from committed sources.
- [x] Description optimization remains N/A because the skill is manual-only.
- [x] Generated evidence remains under the gitignored run root.
