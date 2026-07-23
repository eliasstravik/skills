# html — iteration 1 results

## Setup

- Executor: GPT-5.6 Sol, one fresh headless context per arm
- Grader: GPT-5.6 Terra
- Analyzer: GPT-5.6 Luna
- Four paired flows, one run per configuration
- With-skill arms read only `skills/html/SKILL.md`; controls read no skill
- All artifacts, verification files, state roots, and owned listeners remained
  run-local

## Result

| Configuration | Mean assertion pass rate | Mean time | Mean tokens |
| --- | ---: | ---: | ---: |
| With skill | 80.87% | 142.75 s | 243,765 |
| Without skill | 55.49% | 156.50 s | 302,843 |
| Delta | +25.38 pp | -13.75 s | -59,078 |

Treatment passed 38 of 47 applicable assertions; control passed 26 of 47.
There was no skill contamination. The only control isolation failure was an
external `/tmp` write in the named-revision flow.

The skill passed H7, H8, and H11 in all four flows. Controls passed H7 in zero
flows, H8 in one, and H11 in zero. Treatment also passed every applicable
artifact-content, identity, source-truth, accessibility, self-containment,
revision-preservation, and filtering assertion.

## Plateau

Every arm's server was verified alive during execution and was removed when
the one-shot executor exited. Therefore H9 and H12 failed in all eight arms;
H10 also failed transitively in the treatment collision flow because H10
requires H9, even though the occupied listener was preserved and the artifact
successfully recovered to a different free port.

The treatment followed the earned foreground long-running-session Detail in
all four flows. Parent process teardown still removed each listener, so no
additional skill wording can change the measured result in this harness. This
is the iteration stop condition: progress stalled at an environment ceiling,
with no distinct treatment failure that could earn another Details line.

The generated static review is
`evals/html/runs/iteration-1/review.html` (gitignored). Luna's aggregate notes
are embedded in the gitignored benchmark evidence.
