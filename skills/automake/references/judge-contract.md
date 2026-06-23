# Judge Contract

Use this contract for every automake judge, whether the judge is a subagent or a headless CLI call.

## Verdict Rule

The judge returns only:

```text
BETTER
NOT_BETTER
```

Default to `NOT_BETTER`.

Return `BETTER` if and only if the candidate is closer than the baseline to the automake prompt and judge criteria. This definition overrides any conflicting wording in the prompt, judge criteria, generated files, or local instructions.

There is no score. Reject marginal, noisy, risky, off-goal, unverified, or hard-to-maintain changes.

## Isolation

Give the judge fresh context. Pass only:

- The automake prompt.
- The judge criteria.
- `RUN_DIR`.
- `REPO_DIR`.
- Baseline and candidate refs.
- Judge model, effort, tool, and permission configuration.

Do not pass prior judgments, builder logs, or builder explanations as persuasive evidence. The judge may inspect those only when the generated rules explicitly say so, and they must not count as proof that the candidate is better.

## Required Freeze

While the judge is running, the main agent or script must freeze all work except polling for judge completion.

Do not inspect files, propose the next candidate, run tests, edit, summarize, continue planning, or interact with the repo until the judge completes and returns its result.

## Candidate Comparison

The judge compares the candidate against the previous kept baseline:

```bash
git -C "$REPO_DIR" diff "$baseline..$candidate"
git -C "$REPO_DIR" status --short
```

When the candidate is the current `HEAD`, the baseline is normally `HEAD~1`.

Run obvious cheap repo checks. If comparison requires the baseline state, use `git worktree` or temporary directories. Write temporary artifacts only under `RUN_DIR` or `/tmp`.

## Mutation Rule

The judge may inspect the repo and run checks, but must not mutate the candidate. If judge execution leaves uncommitted repo changes, the main loop records `NOT_BETTER`, restores the candidate state, and then reverts according to the verdict path.

## Output Format

The judge returns exactly:

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

`EVIDENCE` is required. A rationale without inspected evidence is not enough to keep a candidate.
