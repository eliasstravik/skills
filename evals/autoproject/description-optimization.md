# autoproject — description optimization

Date: 2026-09-24. Stock skill-creator `run_loop.py`, model `claude-opus-5-5`,
frozen 20-query set (`trigger-eval.json`: 10 positive, 10 near-miss
negatives), 12 train / 8 held-out, 3 runs per query.

## Harness fixes (environment only; the stock scripts were not edited)

- The user's herdr-projects progress hook made every `claude -p` session run
  a `Bash` report first, and the runner scores any first tool other than
  `Skill`/`Read` as not triggered: every query scored 0. Runs now unset the
  `HERDR_*` variables (this also stopped test sessions writing to the live
  progress pane).
- Parallel workers each write their own `autoproject-skill-<uuid>` command
  into one shared directory, so the model picked another worker's copy.
  Runs now use `--num-workers 1 --timeout 150`.
- A bare `/autoproject` query cannot trigger under the runner's renamed
  command, so that query became a plain-language equivalent.

Three invalid runs (0% everywhere) were discarded.

## Result

The client stopped the valid run during iteration 2 to ship. Only the current
description was scored: train 23/36 (precision 73%, recall 44%), held-out
13/24 (precision 100%, recall 8%). No candidate was scored above it, so the
current description is kept unchanged as the best scored description. Low
recall is partly the runner's first-tool rule: several positives opened with
an exploratory `Bash` call before invoking the skill.
