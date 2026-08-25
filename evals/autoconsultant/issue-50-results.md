# Autoconsultant issue #50 results

## Outcome

The revised composed skill passed 72/72 assertions across four iteration-2
flows. The frozen old skill passed 63/72. Every revised question carried the
complete Consultant question, mandatory context and reasoning paragraph, and
written-out recommended-first options.

## Iterations

Iteration 1 scored 93.0% for the revised skill and 84.8% for the frozen skill.
The grader found mismatched outer fences in three revised handoffs despite
contradictory proof files. The skill now requires identical opening and closing
backtick counts, both longer than every internal run. Iteration 2 checked the
actual payload and scored 100.0% versus 87.5%. The nested-fence flow preserved
its four-backtick snippet inside matching five-backtick delimiters.

All revised flows left the copied repository byte-identical, kept the Automake
state directory empty, embedded approved role artifacts completely, and
stopped before Git preflight, the Run gate, child launch, or implementation.

## Viewer review

The skill-creator viewer was generated and opened after iteration 1. The client
then authorized continued work with no specific output feedback. Iteration 2's
viewer was generated with the prior outputs embedded and opened before
finalization.

## Models and limits

GPT-5.6 Sol executed each arm and GPT-5.6 Terra graded every assertion.
Generated evidence stayed under `evals/autoconsultant/runs/` and is gitignored.
The runner exposed no duration or token notifications, so benchmark time is
zero and output characters are the size proxy. Each configuration ran once per
flow.

Three label-blind GPT-5.6 Luna routing passes scored every candidate 36/36
train and 24/24 held-out. GPT-5.6 Terra independently scored the retained
current description 20/20. No Claude Code, Claude model, or Fable model ran.
