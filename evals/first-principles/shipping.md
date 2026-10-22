# first-principles — shipping record

Date: 2026-10-22. Built from work-board task skills/2 (SKLS-2). The client's
words: "start completely from scratch from first principles with no care about
backwards compatibility, sunk cost, or anything else. Anything else you can
find should only be viewed as reference."

## skill-issue conformance

- Admission: passes the litmus via three survivor categories. Taste bar: one
  right answer, not a compatible compromise or a menu. Authority: the client
  waives compatibility, migration cost, sunk cost and existing decisions, owns
  the goal, and the waiver grants no authority to act. Chosen convention: the
  answer is followed by a plain list of differences from today, and an unclear
  goal is asked for rather than read off existing material. An agent's
  default rightly weighs compatibility and existing decisions, so none of this
  is derivable.
- Type: Policy/standards SOP (constraints on how the answer is reached; no
  separate work product). Name: bare plural noun `first-principles`, as the
  client specified.
- Reduction: "When the client invokes /first-principles on a question or
  design, the agent derives the answer as if nothing existed, using the
  client's goal, fundamental truths and existing material as reference only,
  to produce one answer and a plain list of its differences from today, while
  never letting compatibility, migration cost, sunk cost or existing decisions
  constrain it."
- All nine sections in order; `References: None.` No references or scripts.

## Manual frontmatter check

`agentskills validate` is not on npm, so checked by hand:

- [x] YAML-delimited frontmatter parses; only `name` and `description`.
- [x] `name` is `first-principles`, matches the directory, lowercase hyphens,
  16 characters.
- [x] `description` is one third-person string, 697 characters, no XML, with
  positive triggers (`/first-principles`, "start from scratch", "clean-slate
  design", …) and `Not for…` exclusions (incremental or compatible changes,
  midwit, consulting, consultant).
- [x] Body 51 lines, about 470 words; under 500 lines and 5,000 tokens.
- [x] Shipping surface is `skills/first-principles/SKILL.md` only.

## Iteration 1

Three evals in `evals.json`, one run per arm, same user message in both arms.
The baseline was forbidden any skill; transcripts show no skill use in either
arm, and the with-skill arm read only the skill file. The evaluated file is
byte-identical to the shipped `SKILL.md`.

| Eval | With skill | Without skill |
| --- | --- | --- |
| 0 legacy-config-compat | 6/6 | 1/6 |
| 1 homegrown-queue-sunk-cost | 6/6 | 4/6 |
| 2 unclear-goal-asks-first | 5/5 | 4/5 |
| Total | 17/17 (100%) | 9/17 (53%) |

- The baseline kept the INI file, `ST_` prefix and old key names "because you
  promised" (eval 0), kept Postgres only because it was "the same database"
  (eval 1), and listed no differences from today in any eval. The skill fixed
  all of these.
- `asks-for-goal`, `derived-from-stated-goal` and `fixture-untouched` passed
  in both arms: the baseline also asked for the goal when the prompt carried a
  scripted reply. They stay as no-regression checks.
- With-skill runs took longer (mean 103 s against 55 s).
- n=1 per arm; variance unknown.

## Description optimizer — deferred

The trigger-eval loop needs the client to review the query set before it
runs, which this unattended board session cannot get. The description is the
hand-written draft by the description canon. Run the optimizer with client
sign-off and apply `best_description` verbatim. This is a recorded deferral,
not a waiver of the repo rule.
