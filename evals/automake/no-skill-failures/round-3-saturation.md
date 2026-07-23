# automake — no-skill baseline saturation, round 3

Independent judge: GPT-5.6 Terra. Executors: four fresh GPT-5.6 Sol no-skill
arms, with GPT-5.6 Sol/Terra children where execution required them. No
installed skill was read, invoked, or imitated.

## Result

Genuinely new failure classes: **0**.

Round three repeated:

- F1.3: Evaluator acceptance criteria leaked into Optimizer input.
- F1.4: approval gates showed summaries rather than complete, separate role
  instructions.
- F2.1: a failed child launch was preserved outside terminal run state but
  omitted from the state needed to reconstruct all launches and retries.

It did not repeat:

- F1.1: every completed child used a bounded `workspace-write` or `read-only`
  sandbox.
- F1.2: every completed evaluation had one final recorded verdict; rejection
  was recorded, learned from, and restored.

## Passed unaided

- Sparse consultation honored the no-run answer without mutation.
- Accepted and run-now flows retained correct minimal changes and ended clean.
- Rejected flow restored exact baseline ref, tree, bytes, and status.
- Run-now preflight safely excluded `.env.local` without reading or committing
  it.
- All executors and children used allowed GPT-5.6 Sol/Terra models; no Claude,
  Fable, or installed skill was used.

The no-skill failure inventory is therefore saturated after three rounds.
