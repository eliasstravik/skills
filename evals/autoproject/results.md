# autoproject — eval results

Date: 2026-09-24. Executor: Claude Opus 5.5 (`claude-opus-5-5`), one fresh
general-purpose subagent per arm and eval, one run each. Baseline arms were
forbidden from invoking or reading any skill; every baseline transcript ends
`Skills invoked: none` and `grade.py` found no contamination.

## Harness

- `fixtures/common/` is a herdr-projects project (`tally`) plus a tiny Python
  repo. Its `AGENTS.md` points the command prefix at `bin/hp`, a logging
  stand-in that records every call with its standard input and answers from
  `canned/`. It starts no agents and never touches git remotes, GitHub, live
  `~/.herdr-projects`, or `~/.config/herdr-projects`.
- `fixtures/scenarios/<name>/` overlays one ratchet step: TASKS.md line,
  scratch file, thread reports, canned `hp context` digest and start answers.
  `gen_fixtures.py` writes both; `gen_evals.py` writes `evals.json`.
- `prepare_iteration.py` copies each snapshot into
  `runs/iteration-N/eval-<id>-<name>/<arm>/run/` and writes the executor
  prompt. `collect.py` runs `grade.py`, which checks every assertion
  programmatically from the call log, TASKS.md, scratch file, changed-file
  list, and chat reply.
- The coordinator instructions in `fixtures/common/share/coordinator-skill.md`
  are the `herdr-projects skill` output captured for the plan.

## Iteration 1

| Arm | Pass rate | Mean time | Mean tokens |
| --- | --- | --- | --- |
| with skill | 108/108 (100%) | 49.2 s | 66.2k |
| without skill | 69% | 52.1 s | 59.6k |

Largest baseline gaps: the setup gate (2/10), start-failure classification
(2/6), malformed verdict (3/8), landing prompts (3/7, 3/6), resume
announcement (3/5). Without the skill, coordinators asked the user before
landing, re-prompted reviewers on malformed verdicts, used
`hp thread restart`, and saved run rules to memory.

Found and fixed before iteration 2:

- Fixtures: eval-10 began at streak 0/3 after a NOT_BETTER iteration; evals
  16–19 showed two NOT_BETTER lines at streak 1/3; the shim counted
  `thread start --help` as a start.
- Protocol gaps: an iteration merged by herdr before a `LANDING:` line, a
  BETTER candidate whose landing FAILED, standing versus one-time user
  guidance, and an iteration cut short by stop.

The client gave no viewer feedback and accepted the 19 prompts as written.

## Iteration 2

| Arm | Pass rate |
| --- | --- |
| with skill | 108/108 (100%) |
| without skill | 68.3% |

Every new protocol line was exercised: `MERGED <PR URL>` (eval-8),
`BETTER · FAILED` (eval-10), standing guidance written into the maker brief
(eval-17), and the stop-cut iteration kept out of `## Iterations` (eval-19).
No result changed behaviour outside the plan, so no further viewer round ran.

Non-discriminating evals: `new-run-refused`, `resume-missing-scratch`, and
`steering-no-memory` pass in both arms; a careful coordinator already refuses,
asks, and keeps run notes in the run's own file. They stay as regression
checks.

## Environment note

The first iteration-1 launch was stopped by the API safety filter
(`reasoning_extraction`) because the executor prompt asked agents to log
their reasoning. The prompt now asks only for a plain action log.
