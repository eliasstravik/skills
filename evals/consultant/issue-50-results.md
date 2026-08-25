# Consultant issue #50 results

## Outcome

The revised skill passed every mapped assertion in iteration 2: 87/87 across
six flows. The frozen old skill passed 68/87. The new automatic-correction flow
was the clearest separator: the revised skill applied a reviewer correction
from approved timezone facts, ran a fresh isolated review without another user
question, and handed off after approval; the old skill stopped on the unknown
`REVISE` verdict.

## Iterations

Iteration 1 scored 90.3% for the revised skill and 60.0% for the frozen skill.
It exposed missing state-save evidence and over-broad assertion mapping rather
than a shipping-skill failure. Iteration 2 added run provenance, chronological
state snapshots, and flow-specific coverage. It scored 100.0% versus 77.6%.

The approved-with-notes flow preserves and shows all three optional notes,
leaves the plan byte-identical, asks no follow-up question, and proceeds to
handoff. The real-blocker flow still asks the smallest client decision,
revises the plan, and requires a fresh review approval gate.

## Viewer review

The skill-creator viewer was generated and opened after iteration 1. The client
then authorized continued work with no specific output feedback. Iteration 2's
viewer was generated with iteration 1 embedded as previous output and opened
before finalization.

## Models and limits

GPT-5.6 Sol executed each arm and GPT-5.6 Terra graded every assertion.
Generated run evidence stayed under `evals/consultant/runs/` and is gitignored.
The runner did not expose duration or token notifications, so benchmarks show
zero time and use output characters as the size proxy. Each configuration ran
once per flow.

Description optimization used three label-blind GPT-5.6 Luna passes over 12
train and 8 held-out queries. All three candidates scored 36/36 train and 24/24
held-out; GPT-5.6 Terra independently scored the retained current description
20/20. No Claude Code, Claude model, or Fable model ran.
