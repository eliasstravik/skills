# Current-Agent Program

Use this default mode when the current agent should execute the loop itself. Write only:

```text
~/.automake/<slug>/program.md
```

Do not write `program.md` into the target repo.

## Program Requirements

The generated `program.md` must include:

- `RUN_DIR=~/.automake/<slug>`.
- `REPO_DIR=<current working repo absolute path>`.
- Constants for max iterations and max consecutive failures.
- The user's builder prompt.
- The user's judge criteria.
- `judge_type`: `subagent` or `headless`.
- `judge_strategy`: `single` or `panel`.
- Panel judge names and role-specific criteria when `judge_strategy=panel`.
- Judge model, effort, tools, and permissions.
- The full flowchart below.
- Exact setup, logging, commit, judge, reset, and stop rules.

Use the current strongest generally available coding model for judge work. If using a headless judge and CLI flags are uncertain, inspect local help before finalizing commands.

## Flowchart

Always include this complete flowchart in generated `program.md`.

```text
+-----------------------------------------------------------------+
|                         USER INPUTS                             |
|                                                                 |
|   mode                      current-agent by default; script    |
|                             only when explicitly requested      |
|   prompt                    builder goal                        |
|   judge                     adversarial judge criteria          |
|   max_iterations            hard cap on loop runs               |
|   max_consecutive_failures  stop after N rejected candidates    |
|                                                                 |
|   current-agent input:                                          |
|     judge_type = subagent | headless                            |
|     judge_strategy = single | panel                             |
|     panel judges inferred from explicit judge roles             |
|     model / effort / tools / permissions use defaults           |
+--------------------------------+--------------------------------+
                                 |
                                 v
+-----------------------------------------------------------------+
|                         SETUP                                   |
|                                                                 |
|   generate three-word slug                                      |
|   RUN_DIR = ~/.automake/<slug>/                                 |
|   REPO_DIR = current working repo absolute path                 |
|                                                                 |
|   write only into RUN_DIR:                                      |
|     program.md                                                  |
|                                                                 |
|   require clean committed baseline in REPO_DIR                  |
|                                                                 |
|   logs in RUN_DIR:                                              |
|     results.tsv                    append-only scan log         |
|     state.md                       current run state            |
|     learnings.md                   rolling lessons              |
|     runs/<run>/judgments/          full judge outputs           |
|                                                                 |
|   no automake files are written into REPO_DIR                   |
|                                                                 |
|   iteration = 0                                                 |
|   failures = 0                                                  |
+--------------------------------+--------------------------------+
                                 |
                                 v
       +-----------------------------------------------------+
       |                                                     |
       v                                                     |
  +---------------------- MAIN AGENT ---------------------+  |
  |                                                       |  |
  |  1. EXAMINE                                          |  |
  |       git -C "$REPO_DIR" log -1                      |  |
  |       "$RUN_DIR/results.tsv"                         |  |
  |       "$RUN_DIR/learnings.md"                        |  |
  |       recent "$RUN_DIR/runs/*/judgments/*.md"        |  |
  |       relevant project files in REPO_DIR             |  |
  |                                                       |  |
  |  2. BUILD ONE CANDIDATE                              |  |
  |       apply one focused product/code improvement      |  |
  |       edit files in REPO_DIR only                     |  |
  |       run cheap checks                               |  |
  |       do not commit until the candidate is ready      |  |
  |                                                       |  |
  |  3. COMMIT CANDIDATE                                 |  |
  |       baseline = git -C "$REPO_DIR" rev-parse HEAD   |  |
  |       git -C "$REPO_DIR" add -A                      |  |
  |       git -C "$REPO_DIR" commit -m "automake: ..."   |  |
  |       candidate = git -C "$REPO_DIR" rev-parse HEAD  |  |
  |                                                       |  |
  +-------------------------+-----------------------------+  |
                            |                                |
                    CALL / SPAWN JUDGE(S)                   |
                            |                                |
                            | single: pass judge prompt      |
                            | panel: pass each role prompt   |
                            | RUN_DIR, REPO_DIR,             |
                            | baseline/candidate refs        |
                            |                                |
                            | REQUIRED MAIN FREEZE:          |
                            | poll only for judge status;    |
                            | no other work until return     |
                            v                                |
  +-------------- JUDGE SUBAGENT(S) / HEADLESS AGENT(S) ---+ |
  |                                                        | |
  |  4. ADVERSARIAL COMPARISON                            | |
  |                                                        | |
  |     Fresh isolated context per judge.                 | |
  |     Default verdict: NOT_BETTER.                      | |
  |     Try to prove candidate is not worth keeping.      | |
  |     BETTER means closer to prompt/judge than baseline. | |
  |     Compare candidate against baseline in REPO_DIR.   | |
  |     Run obvious cheap repo checks.                    | |
  |     Write temporary artifacts only to RUN_DIR or /tmp. | |
  |                                                        | |
  |     each judge returns:                               | |
  |       VERDICT: BETTER | NOT_BETTER                    | |
  |       SUMMARY: one-line reason                        | |
  |       RATIONALE: why                                  | |
  |       EVIDENCE: commands/artifacts checked            | |
  |       LEARNINGS: what to try/avoid next               | |
  |                                                        | |
  +-------------------------+------------------------------+ |
                            |                                |
                          RETURN                            |
                            | single verdict OR panel        |
                            | aggregate verdict + evidence   |
                            v                                |
  +---------------------- MAIN AGENT ---------------------+  |
  |                                                       |  |
  |  5. LOG TO RUN_DIR                                   |  |
  |       append "$RUN_DIR/results.tsv"                  |  |
  |       append "$RUN_DIR/learnings.md"                 |  |
  |       write "$RUN_DIR/runs/<run>/judgments/<id>.md"  |  |
  |                                                       |  |
  |  6. DECIDE                                           |  |
  |       BETTER: keep commit, failures = 0              |  |
  |       NOT_BETTER:                                    |  |
  |         git -C "$REPO_DIR" reset --hard <baseline>   |  |
  |         git -C "$REPO_DIR" clean -fd                 |  |
  |         failures += 1                                |  |
  |                                                       |  |
  |  7. CONTINUE WHILE                                   |  |
  |       iteration < max_iterations                     |  |
  |       and failures < max_consecutive_failures        |  |
  |                                                       |  |
  +-------------------------+-----------------------------+  |
                            |                                |
                            +--------------------------------+
```

## Program Skeleton

Use this skeleton for the generated `program.md`.

````markdown
# Automake Program

You are the MAIN AGENT running an automake loop.

## Configuration

```text
RUN_DIR=[/Users/name/.automake/three-word-slug]
REPO_DIR=[current working repo absolute path]
MAX_ITERATIONS=[max_iterations]
MAX_CONSECUTIVE_FAILURES=[max_consecutive_failures]
JUDGE_TYPE=[subagent|headless]
JUDGE_STRATEGY=[single|panel]
PANEL_CONVERGENCE=unanimous_better_required
PANEL_JUDGES=[single: empty | panel: judge names and role-specific criteria]
JUDGE_AGENT=[headless only: claude|codex|cursor|opencode]
JUDGE_MODEL=[current strongest generally available coding model]
JUDGE_EFFORT=high
JUDGE_TOOLS=full
JUDGE_PERMISSIONS=full-access/no-sandbox/skip-approvals
```

## Flowchart

[Paste the complete flowchart from this reference before saving.]

## Prompt

[prompt]

## Judge

[judge]

## Rules

1. Work on project files only in `REPO_DIR`.
2. Write all automake state only in `RUN_DIR`.
3. Require a clean committed baseline before starting:

   ```bash
   git -C "$REPO_DIR" status --porcelain --untracked-files=all
   ```

4. Create:

   ```text
   $RUN_DIR/results.tsv
   $RUN_DIR/state.md
   $RUN_DIR/learnings.md
   $RUN_DIR/runs/<run>/judgments/
   ```

5. Create `results.tsv` only if missing:

   ```bash
   printf 'run\titeration\tcandidate\tbaseline\tverdict\tsummary\n' > "$RUN_DIR/results.tsv"
   ```

6. Loop while `iteration < MAX_ITERATIONS && failures < MAX_CONSECUTIVE_FAILURES`.
7. Before each candidate, read `RUN_DIR/results.tsv`, `RUN_DIR/learnings.md`, recent judgments, and relevant repo files.
8. Build one focused candidate in `REPO_DIR`.
9. Commit before judging.
10. Judge with fresh isolated context:
    - Subagent: spawn a fresh judge subagent with only the judge prompt, `RUN_DIR`, `REPO_DIR`, baseline/candidate refs, model/effort/tool config, and permission to inspect/run checks.
    - Headless: call the chosen CLI non-interactively from `REPO_DIR` with full access/no sandbox/skip approvals.
    - Single strategy: run one judge.
    - Panel strategy: run one independent judge per role in `PANEL_JUDGES`; run them in parallel when safe parallel subagents are available, otherwise run sequentially with fresh context.
11. REQUIRED FREEZE: while judging is in progress, the main agent must stop all work except polling for judge status/completion.
12. Each judge returns exactly:

    ```text
    VERDICT: BETTER | NOT_BETTER
    SUMMARY: one-line reason

    RATIONALE:
    ...

    EVIDENCE:
    ...

    LEARNINGS:
    ...
    ```

13. For panel strategy, aggregate only after every panel judge returns:
    - Final verdict is `BETTER` only if every required panel judge returns `BETTER`.
    - Any `NOT_BETTER`, crash, timeout, malformed output, or judge mutation makes the final verdict `NOT_BETTER`.
    - Do not use majority vote, numeric scoring, weighted voting, or judge debate unless the user explicitly configured it.
14. Append aggregate results and learnings to files in `RUN_DIR`.
15. Write the single or aggregate panel judgment artifact under `RUN_DIR/runs/<run>/judgments/`.
16. Echo the judge result for the user immediately after judging returns and before deciding keep/revert. Include final verdict, summary, candidate, baseline, and judgment artifact path. For panel strategy, include each panel judge's verdict.
17. Keep `BETTER`; reset `NOT_BETTER` with `git -C "$REPO_DIR" reset --hard "$baseline"` and `git -C "$REPO_DIR" clean -fd`. The keep rule overrides conflicting prompt/judge wording.
18. On crash, invalid output, no diff, judge mutation, or panel aggregation failure, record a `NOT_BETTER` judgment and increment failures.
19. At stop, report current commit, iteration count, failure count, and paths to the run folder files.
````

When writing the actual `program.md`, replace the flowchart placeholder with the complete flowchart text.

For panel strategy, also include the aggregate artifact format and role prompt rules from `references/panel-judging.md`.
