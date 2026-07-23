# demo — bare-core paired results

## Setup

- Eight fresh GPT-5.6 Sol arms: four with the 11-line bare core, four with no
  skill
- Independent assertion grader: GPT-5.6 Terra
- Blind pairwise comparator: GPT-5.6 Luna
- One first-turn-only ambiguity treatment was preserved under
  `harness-abandoned`; both ambiguity arms were rerun with an explicit
  headless scripted-reply instruction
- No treatment read a sibling skill; no control read an installed skill

## Assertion result

| Eval | With bare core | Without skill |
| --- | ---: | ---: |
| Agent-skill try-it | 15/17 | 13/17 |
| Named in-place revision | 15/17 | 14/17 |
| Browser-extension concept | 15/17 | 13/17 |
| Material target ambiguity | 15/17 | 14/17 |

Every treatment passed D1–D11, D13–D15, and its flow-specific assertion. The
only treatment failures were D12 and D16 in all four flows: the run reported a
ready link after its verified server was removed by one-shot executor teardown.

Controls shared D12/D16 and additionally failed exact five-line handoff D15 in
all four flows. Controls in evals 1 and 3 also failed concrete restart-command
D13.

## Blind comparison

The blinded mappings and winners were:

| Eval | A | B | Winner |
| --- | --- | --- | --- |
| 1 | without skill | with bare core | B |
| 2 | with bare core | without skill | A |
| 3 | without skill | with bare core | B |
| 4 | with bare core | without skill | A |

The treatment won 4/4. Luna cited disciplined demo-directory identity,
restart-command compliance, inspectable artifacts, and the exact five-line
handoff.

## Detail eligibility

Only D12 and D16 can earn a Detail. They share one cause: the executor's
launching shell or one-shot runtime removes detached/background processes after
the executor exits. No artifact, simulation, interaction, target-resolution,
revision, extension-safety, QA, restart, or handoff-format Detail is earned.
