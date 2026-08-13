# grilling-fix — frontmatter check and description-optimizer disposition

Date: 2026-08-13.

## Manual frontmatter check

The candidate `skills/grilling-fix/SKILL.md` was checked manually because
`agentskills validate` is not available on npm:

- [x] The frontmatter is bounded by YAML delimiters.
- [x] `name` is exactly `grilling-fix` and matches the skill directory,
  uses lowercase hyphens, and is under 64 characters.
- [x] `description` is third person, under 1,024 characters, contains no
  XML, and states positive triggers (invoked alongside grilling, e.g.
  `/grilling /grilling-fix`) and negative triggers (not standalone, not a
  grilling replacement).
- [x] No unsupported frontmatter fields are present.
- [x] The shipping surface contains only `SKILL.md` (no eval material in
  `skills/grilling-fix/`).

Repeat this check at the final done-gate if the shipping file changes.

## Description optimizer — deferred

Trigger-eval description optimization has not yet run for this skill. The
optimizer loop requires the client to review and export the trigger-eval
query set before `run_loop.py` runs; this skill was authored in a
non-interactive session where that sign-off was impossible. The current
description is the hand-written pre-optimizer draft, conforming to the
description canon.

Disposition: run the optimizer with client sign-off of the query set
before or shortly after install, and apply `best_description` verbatim.
This is a recorded deferral, not a waiver of the repo rule.

## skill-issue conformance record

- Admission: passes the bitter-lesson litmus via the
  chosen-among-equals-conventions survivor category (lettered-not-numbered
  option labels to avoid colliding with Q1/Q2 question numbering; options
  mandatory on every question including confirmations). Neither constraint
  is derivable from grilling itself or public knowledge.
- Type: Policy/standards SOP (declarative formatting constraints on
  grilling's output; produces no domain work product). Name is a bare noun
  compound chosen by the client.
- All nine ordered sections present; inapplicable sections read `None.`
- Body is well under 500 lines / 5,000 tokens; no references or scripts
  needed, so no table-of-contents obligations apply.
