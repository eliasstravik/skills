# voice-mode — iteration 2 results

Executor: GPT-5.6 Sol. Grader: GPT-5.6 Terra. Analyst: GPT-5.6 Luna.
The standard viewer was generated at `runs/iteration-2/review.html` with
iteration 1 supplied as previous context before output review.

## Benchmark

- Mean pass rate: 79.7% with skill, 60.0% without; delta +0.20.
- Treatment results: 5/6, 4/5, 6/7, and 7/10.
- Baseline results: 4/6, 4/5, 3/7, and 5/10.

## Review

A4 still fails in every treatment before the skill can affect behavior. Each
executor emits a platform-required notice that it is about to read the skill,
then loads `SKILL.md`; the skill's notice rule is unavailable when that first
message is written. This is a treatment-harness ordering defect.

Eval 4 also merged the review URL suffix `rc-12` into an unsupported release
name. The core already prohibits invented or merged facts, and iteration 1
passed the same A3/A7 checks, so no new Details line is earned from this
single-run variance.

Iteration 3 will preload the current skill text into treatment context instead
of asking the executor to announce and read a path. This better represents
actual skill invocation and lets the skill govern the first user-facing reply.
The no-skill arms and every task variable remain unchanged.
