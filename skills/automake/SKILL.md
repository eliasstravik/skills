---
name: automake
description: Use when the user wants automake, autoresearch-style product improvement, iterative agent improvement, git-backed candidate loops, LLM-as-judge evaluation, repeated candidate commits, or a program.md/headless scaffold for keeping better changes and reverting rejected ones.
argument-hint: "Start interactive setup. Default to current-agent program.md unless the user explicitly asks for script/headless automake.sh. Ask only for missing user inputs: prompt and judge. Use max_iterations=5 and max_consecutive_failures=3 unless the user specifies otherwise. In current-agent mode also ask judge_type."
---

# Automake

Automake creates a git-backed improvement loop: build one focused candidate, commit it, judge it against the previous kept version, keep `BETTER`, and revert `NOT_BETTER`.

The keep rule is invariant: `BETTER` means the candidate is closer than the baseline to the automake prompt and judge criteria. If any generated prompt or judge wording conflicts with that rule, this skill wins.

## Load References

Load only the relevant files:

- Current-agent default: `references/current-agent-program.md`
- Optional headless/script mode: `references/headless-script.md`
- Judge wording or subagent/headless judge setup: `references/judge-contract.md`
- Multiple judge roles, personas, or perspectives: `references/panel-judging.md`
- Run folder files, logging, and storage layout: `references/run-folder-layout.md`
- Iteration limits or subjective/adversarial judge tuning: `references/tuning.md`

## Default Mode

Use current-agent mode unless the user explicitly asks for script, headless, shell, or `automake.sh`.

Current-agent mode writes only:

```text
~/.automake/<slug>/program.md
```

Headless-script mode writes only:

```text
~/.automake/<slug>/automake.sh
~/.automake/<slug>/prompt.md
~/.automake/<slug>/judge.md
```

Never write those files into the target repo.

## Interview

Begin by interviewing the user. Do not create files until all required answers are collected.

Ask only missing direct inputs, one at a time:

```text
1. What is your goal for this loop? This becomes the automake prompt.
2. What should the judge use to reject or accept candidates?
```

For current-agent mode, also ask:

```text
3. Should the judge be a subagent or a headless agent?
```

Use defaults unless the user specifies otherwise:

```text
max_iterations=5
max_consecutive_failures=3
```

Infer `judge_strategy=panel` without asking when the judge criteria clearly name multiple judge roles, personas, or perspectives. Examples: "technical judge and user judge", "one judge for implementation, one for UX, one for research", or a bullet list of distinct judges. Otherwise use `judge_strategy=single`.

Do not ask discovery, quality, or extra configuration questions. If the user provides multiple answers up front, parse and reuse them. Skip any question whose answer is already available from the request, previous turns, or the defaults above.

Use `AskUserQuestion`, `Question`, `request_user_input`, or the closest available structured-question tool when available. If no structured-question tool is available, ask one concise question in chat and wait for the answer.

## Core Contract

- Require a committed, clean target repo baseline before running. The loop may use `git reset --hard` and `git clean -fd` in the target repo after user approval.
- Store every automake artifact under `RUN_DIR=~/.automake/<slug>/`.
- Do not add `.automake/`, `program.md`, `automake.sh`, `prompt.md`, `judge.md`, results, judgments, logs, or run metadata to the target repo.
- Append durable results. Do not overwrite previous run history inside the run folder.
- The builder reads `$RUN_DIR/results.tsv`, `$RUN_DIR/learnings.md`, and recent `$RUN_DIR/runs/*/judgments/*.md` to avoid repeating failures.
- The judge gets fresh context. Do not pass prior judgments or builder logs as persuasive evidence.
- For panel judging, each panel judge gets independent fresh context and returns its own verdict before aggregation.
- REQUIRED FREEZE: while the judge is running, the main agent or script must do no work except polling for judge completion.
- The judge may inspect the repo and run checks, but must not mutate the candidate. If it does, reject and clean the mutation.
- Judge output must include evidence, not just rationale.
- Panel final verdict is `BETTER` only if every required panel judge returns `BETTER`; otherwise it is `NOT_BETTER`.
- Keep every candidate judged `BETTER`; revert every candidate judged `NOT_BETTER`.
- Stop when `iteration >= max_iterations` or `failures >= max_consecutive_failures`.

For exact judge wording, load `references/judge-contract.md`.
For panel judging, load `references/panel-judging.md`.

## Setup Workflow

After answers are complete:

1. Generate a three-random-word lowercase slug.
2. Create `~/.automake/<slug>/`.
3. Set `RUN_DIR` to that absolute run folder path.
4. Set `REPO_DIR` to the absolute path of the current working repo.
5. Verify `REPO_DIR` is a git repo.
6. Verify the target repo has a clean committed baseline, or ask the user to commit/stash before running.
7. Load `references/run-folder-layout.md` and initialize the required run folder scaffolding.
8. For current-agent mode, load `references/current-agent-program.md` and write `program.md`.
9. For headless-script mode only, load `references/headless-script.md` and write `automake.sh`, `prompt.md`, and `judge.md`.
10. Ask the user for explicit approval before running.

When final CLI flags are uncertain, inspect local help before writing commands:

```bash
claude --help
codex exec --help
cursor --help
opencode --help
```

Preserve the contract even when flags differ: non-interactive operation for headless calls, full tool access, no sandbox, skipped approvals, and fresh judge context.

## Completion Checklist

Setup is complete only when:

- `RUN_DIR` exists under `~/.automake/<slug>/`.
- All generated automake files exist in `RUN_DIR`, not `REPO_DIR`.
- `REPO_DIR` is absolute and points at the target git repo.
- The target repo is clean and committed, or the user has been told exactly what must be committed/stashed before running.
- The chosen mode matches the user's request: current-agent by default, headless-script only when explicit.
- The chosen judge strategy matches the judge criteria: single by default, panel when multiple roles or perspectives are explicit.
- The generated files contain the prompt, judge criteria, iteration limits, consecutive failure limit, and keep/revert rule.
- The user has been asked whether to run now.

Ask for approval with this shape:

```text
All done - ready to run?
1. Yes, run automake now
2. No, I want to change something first
```

If the user says yes:

- Current-agent mode: read and execute `~/.automake/<slug>/program.md`.
- Headless-script mode: run `~/.automake/<slug>/automake.sh`.

If the user says no, ask what they want changed, update the files in `RUN_DIR`, then ask again.
