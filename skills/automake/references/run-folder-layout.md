# Run Folder Layout

All automake scaffolding, prompts, logs, judgments, history, state, and run metadata live under:

```text
~/.automake/<three-random-words>/
```

Examples:

```text
~/.automake/pretty-lanterns-focusing/
~/.automake/brisk-rivers-building/
~/.automake/silver-gardens-testing/
```

The target repo is only where product or code changes happen.

## Required Paths

Current-agent mode:

```text
$RUN_DIR/program.md
$RUN_DIR/results.tsv
$RUN_DIR/state.md
$RUN_DIR/learnings.md
$RUN_DIR/runs/<run>/judgments/   created when a run starts
```

Headless-script mode:

```text
$RUN_DIR/automake.sh
$RUN_DIR/prompt.md
$RUN_DIR/judge.md
$RUN_DIR/results.tsv
$RUN_DIR/state.md
$RUN_DIR/learnings.md
$RUN_DIR/runs/<run>/judgments/   created when a run starts
$RUN_DIR/runs/<run>/builder-<iteration>.log   created during execution
```

## Results File

During setup, create `results.tsv` only if missing:

```bash
printf 'run\titeration\tcandidate\tbaseline\tverdict\tsummary\n' > "$RUN_DIR/results.tsv"
```

Append one row per judged candidate:

```text
run_id<TAB>iteration<TAB>candidate<TAB>baseline<TAB>verdict<TAB>summary
```

Never rewrite old rows.

## Learnings File

During setup, create `learnings.md` if missing. Append judge learnings after each candidate. The builder reads this before each new candidate to avoid repeating rejected attempts.

## State File

Update `state.md` at the start of each iteration:

```text
run=<run_id>
iteration=<n>
failures=<consecutive_not_better_count>
baseline=<sha>
repo=<absolute repo path>
```

## Judgment Artifacts

Write one full judgment artifact per candidate under:

```text
$RUN_DIR/runs/<run>/judgments/<candidate>.md
```

Each artifact includes:

- Run id.
- Repo path.
- Baseline ref.
- Candidate ref.
- Verdict.
- Summary.
- Full raw judge output.

## Storage Checks

Before asking to run, verify:

```bash
test "${RUN_DIR#"$HOME/.automake/"}" != "$RUN_DIR"
test "$RUN_DIR" != "$REPO_DIR"
find "$REPO_DIR" -maxdepth 2 \( -name program.md -o -name automake.sh -o -name prompt.md -o -name judge.md -o -name .automake \) -print
```

The final `find` command should print nothing unless the repo already had unrelated files with those names. If it prints newly generated automake files, move them to `RUN_DIR` before continuing.
