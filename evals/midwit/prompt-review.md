# midwit — eval prompt approval packet

This is the hard pre-run gate from the approved consultation plan. No
executor, baseline, grader, comparator, analyzer, or viewer run may begin until
the client accepts the exact corpus.

## Decision requested

Approve:

- all five exact task prompts in `evals/midwit/evals.json`;
- every ordered `SCRIPTED USER REPLIES` block and the matching structured
  `user_replies` values;
- the reusable executor conventions in `evals.json`;
- the five pristine fictional fixture sets under `evals/midwit/fixtures/`;
- the A1–A6 critical assertion contract in
  `evals/midwit/assertions.md`.

Approval authorizes only the controlled evaluation loop. It does not approve
shipping, committing, pushing, opening a PR, or installing the skill.

## Eval set

| ID | Case | Scripted gates |
| --- | --- | --- |
| 1 | Overbuilt weekly status dashboard | Accept the concrete simpler alternative after the assistant waits |
| 2 | Current configuration already equals desired state | Approve skipping all work after inspection and a wait |
| 3 | One-line routine heading edit | No replies; the task should proceed directly |
| 4 | Persistence plus “do it anyway” | Original-work ruling; routine follow-up; later overbuilt request; simpler-path ruling |
| 5 | Natural stop plus later overbuilt work | Stop mode and do original; then issue a later request after completion |

## Treatment and baseline distinction

- No-skill arms must not read, invoke, recommend, or rely on any installed
  skill. `/midwit` is treated as ordinary user wording.
- Bare-core arms explicitly read and apply the staged candidate
  `skills/midwit/SKILL.md`, because a headless one-shot executor cannot type
  the manual slash command.
- Both arms receive otherwise identical approved task text, fixture copies,
  isolation rules, scripted-turn semantics, and transcript requirement.
- Every arm records its exact model and launch configuration.

## Post-approval order

1. Run and preserve pure no-skill baselines.
2. Map every observed failure to A1–A6 or add a newly earned assertion.
3. Decide from baseline evidence whether “never build the framework in the
   middle” is earned; cut or split it if not.
4. Run fresh bare-core treatment arms.
5. Blindly force-compare each treatment/baseline pair, grade assertions, and
   generate the standard viewer before interpreting or revising the core.

## Approval checklist

- [x] The five exact prompts are acceptable.
- [x] Every scripted reply is acceptable evaluation truth.
- [x] The baseline/treatment distinction and transcript contract are acceptable.
- [x] The fixtures and A1–A6 coverage are acceptable.
- [x] Controlled eval execution may begin.

## Approval record

Accepted on 2026-07-29 through Paperclip `request_confirmation`
`bde35498-a64c-462b-842a-5077b4de5d32`, bound to revision
`83ea3be4-6ea5-464d-ab74-0443b0cd6f12` of the eval-prompt packet. The accepted
interaction authorizes the controlled eval loop only.
