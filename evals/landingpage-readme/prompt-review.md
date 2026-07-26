# landingpage-readme — prompt and preflight approval packet

This packet is the plan-required sign-off gate before any executor, baseline,
grader, comparator, analyzer, or optimizer run. Approval authorizes only the
run-local composition preflight. Graded baseline execution remains blocked
until the preflight passes; a preflight failure returns to Elias.

## Decision requested

Approve this exact committed evaluation contract:

- `evals/landingpage-readme/evals.json` — four executor prompts;
- `evals/landingpage-readme/fixtures/` — three pristine synthetic repositories;
- `evals/landingpage-readme/ground-truth/` — evaluator-only fact/gap keys;
- `evals/landingpage-readme/assertions.md` — critical contract checks;
- `evals/landingpage-readme/preflight.md` — two-case composition mechanism
  check;
- `evals/landingpage-readme/trigger-eval.json` — user-invoked trigger queries;
- `evals/copywriting/trigger-eval.json` — revised implicit, model-invoked
  trigger queries.

## Eval set and reply scripts

| ID | Case | Scripted gates |
| --- | --- | --- |
| 1 | New Python CLI with no README | Stability description; optional visual-format preference; whole-surface approval |
| 2 | Node library with a badge wall | Copywriting positioning correction; stability/support; defensive no-proof reply; optional visual-format preference; whole-surface approval |
| 3 | Web app with suitable light/dark assets | Defensive copywriting reply only if it redundantly asks; whole-surface approval |
| 4 | Tracefold with masked `/copywriting` failure | No replies; fail closed with install/restore guidance |

The exact prompt and reply text is in `evals.json`; this table is only an
index. Approval covers the replies as evaluation truth, including the fact that
some defensive replies allow a composed branch to finish while the redundant
question still fails grading.

## Masked-dependency fiction

Eval 4 explicitly instructs the executor to treat `/copywriting` as
`skill not found` even if an installed copy is technically visible. This is
not evidence about the runtime. It tests only whether landingpage-readme
attempts the hard dependency, stops, avoids fallback audience copy and all
mutations, and gives a useful install/restore instruction.

## Ground-truth boundary

- Keys live outside fixture directories and are never copied into run
  workspaces.
- Executor prompts forbid reading or discovering them.
- Graders compare questions against the keys only after execution.
- The first-iteration manual spot-check scans every executor transcript for
  ground-truth reads as well as baseline skill contamination.

## Preflight boundary

The preflight stages run-local copies only. Its enabled copywriting specimen
differs from the disabled specimen solely by removal of
`disable-model-invocation: true`. It must prove the exact composed mechanism on
GPT-5.6 Sol before the source or installed copywriting skill changes. If the
runtime cannot honor the planned semantics, the builder stops with the
transcripts and launch configuration.

## Isolation and model policy

- Fixtures are copied into `evals/landingpage-readme/runs/`; committed sources
  stay pristine and contain no nested `.git`.
- Git initializes only inside a copied run repository.
- Eval runs save full turn-by-turn `transcript.md`.
- No eval run executes `gh`; approved exact commands are saved as output.
- Every build-time model is GPT-5.6 Sol, Terra, or Luna.
- Claude Code, every Claude model, Fable, `claude`, and `claude -p` are
  prohibited directly and transitively.

## Approval checklist

- [ ] The four exact executor prompts are acceptable.
- [ ] The ordered and conditional reply scripts are acceptable evaluation truth.
- [ ] The three ground-truth classifications are acceptable.
- [ ] The masked-dependency fiction is acceptable.
- [ ] The two-case preflight prompt and pass criteria are acceptable.
- [ ] The landingpage-readme and revised copywriting trigger queries are acceptable.
- [ ] On acceptance, ELI-259 may run the ungraded preflight and stop for Elias if it fails.

## Approval record

Pending a Paperclip `request_confirmation` bound to the commit containing this
packet. No model-backed run has started.
