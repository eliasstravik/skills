# voice-mode — iteration 3 results

Executor: GPT-5.6 Sol. Grader: GPT-5.6 Terra. Analyst: GPT-5.6 Luna.
The standard viewer was generated at `runs/iteration-3/review.html` with
iteration 2 supplied as previous context before output review.

## Benchmark

- Mean pass rate: 90.8% with skill, 68.5% without; delta +0.22.
- Treatment results: 5/6, 4/5, 7/7, and 10/10.
- Baseline results: 4/6, 4/5, 4/7, and 7/10.
- All critical treatment assertions passed.
- No assertion passed without the skill while failing with it.

## Review

Preloading the skill removed the treatment-harness ordering defect. The skill
now governs the first reply and passes every assertion in the consequential
cleanup and persistence/exit flows.

A4 remains the only treatment failure, in the two immediate-read flows. The
platform requires a skill-use notice before task actions, while A4 requires
quick work to remain silent or attach that notice to the useful result. The
same A4 failure appears in both no-skill controls, and the skill cannot
override the platform's earlier instruction. Another Details line is not
earned.

The viewer review found no new behavioral failure. Progress has stalled only
at the platform-notice boundary, so the iteration loop exits with the current
18-line body unchanged.
