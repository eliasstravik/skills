# Panel Judging

Use panel judging when the judge criteria explicitly name multiple judge roles, personas, perspectives, or evaluators.

Examples:

```text
- I want one judge that is a technical judge.
- I want another that is a user judge.
- I want another that is a researcher judge.
```

```text
Have one judge evaluate correctness, one evaluate UX, and one evaluate market/research fit.
```

If the judge criteria do not clearly define multiple roles, use a single judge.

## Strategy

Set:

```text
JUDGE_STRATEGY=panel
PANEL_CONVERGENCE=unanimous_better_required
```

Each panel judge is independent. Spawn or run one fresh judge per role, each with:

- The automake prompt.
- The full judge criteria.
- That judge's role-specific criteria.
- `RUN_DIR`.
- `REPO_DIR`.
- Baseline and candidate refs.
- The standard judge contract.

Do not let panel judges see each other's verdicts before they return their own verdict. Do not run debate, deliberation, or revision between judges.

## Parallelism

Run panel judges in parallel when the runtime supports safe parallel subagents.

If parallel subagents are unavailable, run them sequentially. Sequential execution is still panel judging as long as each judge receives fresh isolated context and does not see the other panel outputs before returning.

The main agent freeze rule applies either way: while any panel judge is running, the main agent does no candidate work and only waits or polls for judge completion.

## Convergence Rule

The final verdict is deterministic:

```text
final_verdict = BETTER only if every required panel judge returns BETTER
otherwise final_verdict = NOT_BETTER
```

Treat failures conservatively:

- If any panel judge returns `NOT_BETTER`, final verdict is `NOT_BETTER`.
- If any panel judge crashes, times out, mutates the repo, or returns malformed output, that judge counts as `NOT_BETTER`.
- If a role is ambiguous, preserve the role name from the user's judge criteria and make its judging scope explicit in the generated panel prompt.

Do not use numeric scoring, weighted voting, majority vote, or judge debate unless the user explicitly asks for a different convergence rule.

## Panel Artifact

Write one aggregate judgment artifact per candidate:

```text
$RUN_DIR/runs/<run>/judgments/<candidate>.md
```

Use this structure:

```markdown
# Panel Judgment for <candidate>

- run: <run_id>
- repo: <REPO_DIR>
- baseline: <baseline>
- candidate: <candidate>
- final verdict: BETTER | NOT_BETTER
- convergence rule: unanimous BETTER required

## Panel Results

| Judge | Verdict | Summary |
| --- | --- | --- |
| Technical | BETTER | ... |
| User | NOT_BETTER | ... |
| Researcher | BETTER | ... |

## Final Rationale

Explain why the aggregate verdict follows from the panel results.

## Combined Evidence

Condense evidence from each judge. Keep concrete commands, files, screenshots, endpoints, or checked artifacts.

## Combined Learnings

Deduplicate next-attempt guidance. Preserve conflicts when judges disagree.

## Individual Judgments

### <Judge Name>

<full judge output>
```

Append one `results.tsv` row for the aggregate final verdict, not one row per panel judge.

Append combined learnings to `learnings.md`, including which panel role rejected the candidate when final verdict is `NOT_BETTER`.

## Generated Panel Prompt

Each panel judge receives the normal judge contract plus a role block:

```text
You are the <judge name> in an automake judging panel.

Your role-specific criteria:
<criteria inferred from the user's judge text>

Return your independent verdict before any aggregation. Do not consider what other panel judges might say. Your output must use the standard judge format.
```

The main agent performs aggregation after all panel judges return.
