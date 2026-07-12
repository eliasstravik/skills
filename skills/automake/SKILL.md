---
name: automake
description: Runs an evaluator-optimizer ratchet — isolated optimizer and evaluator subagents build and judge one candidate per round while the orchestrator keeps BETTER commits and snaps NOT_BETTER back to baseline.
disable-model-invocation: true
---

# Automake

## Recipe

1. Consult until executable: inspect repo facts before asking; ask one question at a time with 2–4 options and a recommendation, until the optimizer prompt and evaluator criteria are both concrete enough to run unattended.
2. Preflight: **is `REPO_DIR` a git repo with a clean committed baseline?** → continue; **otherwise?** → ask the user to commit, stash, clean, or choose another repo; never reset or clean anything before run approval.
3. Create `RUN_DIR=~/.automake/<slug>/` with a three-random-word lowercase slug and write the three run files defined in `## Details` — `program.md`, `prompt.md`, `judge.md` — writing nothing into `REPO_DIR`.
4. Ask for run approval with the Template in `## Details`; **not approved?** → revise the run files and ask again.
5. Read `RUN_DIR/program.md` and orchestrate the ratchet exactly as it instructs, dispatching optimizer and evaluator subagents; never build or judge in the orchestrator context.

## Details

### Run files

- `program.md` — the agents.md of the run: it tells the orchestrator how to execute the loop. Read `references/program.md` when writing it, fill every placeholder with this run's configuration, and keep its roles, loop, guardrails, and verdict format intact; if the reference file is missing, stop and report the skill copy as incomplete — never improvise a contract.
- `prompt.md` — the optimizer subagent's entire instruction: the goal, what one focused candidate looks like, which cheap checks to run, and relevant repo context. It contains no evaluator criteria.
- `judge.md` — the evaluator subagent's entire instruction: comparison criteria, the exact verdict format, complexity-weighed-as-cost, and rejection of candidate-gate tampering. It contains no optimizer prompt.
- Defaults unless the user set limits: `MAX_ITERATIONS=5`, `MAX_CONSECUTIVE_FAILURES=3`.

### Isolation rules

- Run the optimizer and the evaluator only as subagents; the main agent only orchestrates.
- Give the optimizer only `prompt.md`, `learnings.md`, and the repo — never `judge.md`, judgments, or verdict rationale.
- Give the evaluator — a fresh subagent every round — only `judge.md`, both refs, and the diff — never `prompt.md`, optimizer output or rationale, `learnings.md`, or prior judgments.
- Move information between them only through commits, `learnings.md`, and parsed verdicts.

### Approval template

```text
All done — ready to run?
1. Yes, run the ratchet now
2. No, change the program first
```

### Frontmatter

- `disable-model-invocation: true` keeps this skill user-invoked only; on a platform that ignores the flag, the description names the ratchet workflow rather than broad triggering conditions, so spurious auto-invocation stays unlikely.
