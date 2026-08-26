# Consultant issue #52 results

## Outcome

The final treatment passed 168/168 mapped assertions across ten flows. The
frozen old skill passed 100/168. The 40.4 percentage-point benchmark gain
covers the scored response contract, human-authority ordering, default and
custom targets, zero-comments stopping, final unreviewed corrections, the
five-review bound, and durable review-loop resume state.

## Iteration findings

The first complete run passed 162/168 treatment assertions and 101/168 frozen
baseline assertions. Grader findings exposed legacy-state migration ordering,
incomplete final status, and a missing risk-acceptance route. Later targeted
runs also caught cross-iteration inspection that an earlier grade had missed.
The final raw-command scan found no external temporary paths, Git actions, or
cross-iteration reads, and every treatment assertion passed.

The ten committed evals include the original consultation contracts plus all
issue-required scored-loop cases: 5/5 with a blocker, default 5/5, custom 4/5,
zero comments, target-reaching final correction, the five-review safety bound,
and resumed bounded-loop state.

## Benchmark and viewer review

The stock skill-creator aggregator reports 100.0% treatment versus 59.6%
frozen baseline. Treatment averaged 138.9 seconds per eval versus 96.2 seconds
for the baseline. The benchmark's token field is an output-character proxy:
6,683 treatment characters versus 3,667 baseline characters on average.

The static skill-creator viewer was generated with the first iteration as
previous context. Review of every treatment grade, transcript, state file,
reviewer packet, and raw command trace found no remaining feedback.

## Models and isolation

GPT-5.6 Sol executed each arm and GPT-5.6 Terra graded every mapped assertion.
No-skill arms used a frozen pre-change `SKILL.md` with installed skills and
plugins disabled. Every run used its own redirected state root; generated
evidence and viewers remain under gitignored `evals/consultant/runs/`.

Description optimization used three label-blind GPT-5.6 Luna passes over 12
train and 8 held-out queries. The selected truthful candidate scored 36/36
train and 24/24 held-out; GPT-5.6 Terra independently scored it 20/20. No
Claude Code, Claude model, or Fable model ran.
