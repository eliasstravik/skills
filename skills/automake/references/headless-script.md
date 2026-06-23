# Headless Script

Use this mode only when the user explicitly asks for script, headless, shell, or `automake.sh`.

Write only these files:

```text
~/.automake/<slug>/automake.sh
~/.automake/<slug>/prompt.md
~/.automake/<slug>/judge.md
```

Do not write them into the target repo.

Before writing final CLI commands, inspect local help when flags are uncertain:

```bash
claude --help
codex exec --help
cursor --help
opencode --help
```

Preserve the contract even when flags differ: non-interactive builder and judge calls, full tools, no sandbox, skipped approvals, fresh judge context, and all automake files in `RUN_DIR`.

## Defaults

Use the current strongest generally available coding model for serious builder and judge work.

Avoid ultra-expensive Pro-tier variants unless the user explicitly asks.

Suggested roles:

```text
builder_agent=claude
builder_effort=high
judge_agent=codex
judge_effort=high
permissions=full-access/no-sandbox/skip-approvals
```

## `prompt.md`

The file must start with `# Prompt`, then the user's prompt, then `## Rules`.

````markdown
# Prompt

[prompt]

## Rules

You are the builder agent in an automake loop.

Context:

```text
RUN_DIR=[/Users/name/.automake/three-word-slug]
REPO_DIR=[current working repo absolute path]
```

Before editing, inspect:

```bash
git -C "$REPO_DIR" log -1
cat "$RUN_DIR/results.tsv" 2>/dev/null || true
cat "$RUN_DIR/learnings.md" 2>/dev/null || true
find "$RUN_DIR/runs" -path '*/judgments/*.md' -type f 2>/dev/null | tail -5 | xargs -r sed -n '1,180p'
```

Use prior learnings to avoid repeating failed attempts. Make exactly one focused candidate improvement toward the prompt.

- Edit project files in `REPO_DIR`.
- Do not commit.
- Do not write automake files into `REPO_DIR`.
- Write temporary automake artifacts only under `RUN_DIR` or `/tmp`.
- Prefer a small, testable product improvement over a broad rewrite.
- Run obvious cheap repo checks when useful.
- End with `HYPOTHESIS: ...` describing why this candidate should beat the baseline.
````

## `judge.md`

The file must start with `# Judge`, then the user's judge content, then `## Rules`.

````markdown
# Judge

[judge]

## Rules

You are the adversarial judge in an automake loop.

Context:

```text
RUN_DIR=[/Users/name/.automake/three-word-slug]
REPO_DIR=[current working repo absolute path]
```

The candidate is `HEAD` in `REPO_DIR`. The baseline is `HEAD~1` in `REPO_DIR`. Default to `NOT_BETTER`.

Try to prove the candidate is not worth keeping. Reject marginal, risky, noisy, unproven, off-goal, or hard-to-maintain changes.

Return `BETTER` if and only if the candidate is closer than the baseline to the automake prompt and judge criteria. This definition overrides any conflicting wording in the prompt or judge text. If the candidate is `BETTER`, it must be kept.

Inspect whatever is needed:

```bash
git -C "$REPO_DIR" diff HEAD~1..HEAD
git -C "$REPO_DIR" status --short
```

Run obvious cheap repo checks. If comparison needs the baseline, use `git worktree` or temporary directories so you can compare before/after evidence. Do not treat builder logs or prior judgments as proof.

Do not modify the candidate. Write temporary artifacts only under `RUN_DIR` or `/tmp`, never into `REPO_DIR`.

Return exactly:

```text
VERDICT: BETTER | NOT_BETTER
SUMMARY: one-line reason

RATIONALE:
why the candidate does or does not beat the baseline

EVIDENCE:
commands run, files inspected, screenshots/endpoints checked, or why a check was skipped

LEARNINGS:
what the next builder attempt should try or avoid
```

Do not include a numeric score.
````

## `automake.sh`

Generate `automake.sh` from this contract. Keep the script in `RUN_DIR` and make it executable before asking to run.

Minimum behavior:

1. `set -euo pipefail`.
2. Set `REPO_DIR`, `RUN_DIR`, prompt/judge file paths, iteration limits, run id, and judgment dir.
3. Verify `REPO_DIR` is a git repo.
4. Verify `prompt.md` and `judge.md` exist.
5. Verify the repo is clean before starting.
6. Create `results.tsv` only if missing.
7. Touch `learnings.md`.
8. Loop while under iteration and consecutive failure limits.
9. Record `baseline`.
10. Run the builder non-interactively from `REPO_DIR`.
11. Reject if the builder fails or produces no diff.
12. Commit the candidate before judging.
13. Block while the judge runs; do no other work.
14. Parse `VERDICT` and `SUMMARY`.
15. Reject invalid judge output.
16. Reject judge mutations.
17. Write the full judgment artifact under `RUN_DIR`.
18. Append `results.tsv` and `learnings.md`.
19. Keep `BETTER`; reset and clean `NOT_BETTER`.
20. Report final commit, iteration count, failure count, and run folder paths.

After writing:

```bash
chmod +x "$RUN_DIR/automake.sh"
shellcheck "$RUN_DIR/automake.sh" 2>/dev/null || true
```
