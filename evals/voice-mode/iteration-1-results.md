# voice-mode — iteration 1 results

Executor: GPT-5.6 Sol. Grader: GPT-5.6 Terra. Analyst: GPT-5.6 Luna.
The standard skill-creator viewer was generated at
`runs/iteration-1/review.html` before output review.

## Benchmark

- Mean pass rate: 84.8% with skill, 60.9% without; delta +0.24.
- Weighted assertions: 24/28 with skill, 16/28 without.
- No assertion passed without the skill and failed with it.
- The largest gain was persistence/exit: 9/10 with skill versus 4/10 without.
- The skill cost an average 12.2 seconds and 27,295 captured tokens per eval.

## Review

Every critical assertion passed in the skill arm. The sole treatment failure in
all four evals was A4: each run announced skill loading, mode entry, or a quick
read/inspection before the useful response. Eval 4's raw events contained the
correct slow-work orientation, but the final transcript omitted it.

The existing earned detail did not resolve the higher-priority platform rule
that requires a skill-use notice. Iteration 2 will:

1. permit one minimal activation notice attached to the useful response;
2. continue to forbid narration of instruction loading and quick work;
3. require the executor transcript to preserve every raw assistant message.

No new Details topic is introduced: the wording change remains traceable only
to the A4 bare-core failure.
