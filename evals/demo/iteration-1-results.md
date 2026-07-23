# demo — iteration 1 results

## Setup

- Executor: GPT-5.6 Sol, one fresh headless context per arm
- Grader: GPT-5.6 Terra
- Analyzer: GPT-5.6 Luna
- Four paired flows, one run per configuration
- With-skill arms read only `skills/demo/SKILL.md`; controls read no skill
- State roots, artifacts, browser profiles, QA evidence, and owned listeners
  were run-local

## Result

| Configuration | Mean assertion pass rate | Mean time | Mean tokens |
| --- | ---: | ---: | ---: |
| With skill | 88.24% | 175.00 s | 373,572 |
| Without skill | 73.53% | 291.75 s | 529,101 |
| Delta | +14.71 pp | -116.75 s | -155,529 |

Treatment passed 60 of 68 assertions; control passed 50 of 68. No arm read a
forbidden skill. One control wrote verification files through `/tmp`; no
treatment breached isolation.

Treatment passed exact five-line handoff D15 in 4/4 flows versus 0/4 controls,
restartability D13 in 4/4 versus 1/4, demo identity D3 in 4/4 versus 2/4, and
isolation D1 in 4/4 versus 3/4. No assertion passed in a control while failing
in its paired treatment.

## Plateau

All eight servers were verified during their executor run and were unreachable
after the one-shot executor exited. Therefore D12 and D16 failed in all eight
arms. Treatment followed the earned Detail by running the server as the
foreground command of a long-running tool session, but the outer executor
still removed that session at teardown.

Every other treatment assertion passed in every applicable flow, including
source truth, safe simulation, persistent labeling, accessibility, focal
interaction, browser QA, revision preservation, extension boundaries, and the
one-question ambiguity gate. No further Details line is earned. The stop
condition is progress stalled at the executor-lifecycle ceiling.

The generated static review is
`evals/demo/runs/iteration-1/review.html` (gitignored). Luna's aggregate notes
are embedded in the gitignored benchmark evidence.
