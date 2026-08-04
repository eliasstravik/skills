# midwit — frontmatter check and description-optimizer disposition

Date: 2026-07-29.

## Manual frontmatter check

The candidate `skills/midwit/SKILL.md` was checked manually because
`agentskills validate` is not available on npm:

- [x] The frontmatter is bounded by YAML delimiters.
- [x] `name` is exactly `midwit` and matches the skill directory.
- [x] `description` is a short third-person index line for a user-invoked skill.
- [x] `disable-model-invocation` is the boolean `true`.
- [x] No unsupported frontmatter fields are present.

Repeat this check at the final done-gate if the shipping file changes.

## Description optimizer — N/A

The repo rule being deviated from says:

> “the description field is owned by the trigger-eval optimizer and is never
> rewritten by hand”

This per-skill step is **N/A** because `disable-model-invocation: true` makes
`midwit` manual-only: the description is an index line and is never evaluated
as an automatic invocation trigger. Running trigger-query optimization could
not improve invocation behavior and could falsely imply that automatic
activation is supported. The approved plan therefore requires the description
to be written once by hand and kept outside the optimizer loop.

This is a recorded per-skill N/A, not a new repository-wide process deviation.

## Final done-gate repeat

Repeated after the assertion-earned Details line was added:

- [x] `name`, description, boolean extension, and YAML delimiters remain valid.
- [x] The shipping surface contains only `SKILL.md`.
- [x] The body has 19 physical lines after frontmatter, within 100.
- [x] The core remains one H1 plus one ten-imperative Rules primitive.
- [x] `## Details` has one nonblank instruction, traceable only to failed A1.
- [x] No description optimizer ran; the manual-only N/A above remains binding.

## 2026-08-04 revision repeat

Repeated after the meme/shared-truth revision:

- [x] `name`, description, boolean extension, and YAML delimiters remain valid.
- [x] The shipping surface still contains only `SKILL.md`.
- [x] The body has 19 physical lines after frontmatter, within 100.
- [x] The core remains one H1 plus one ten-imperative Rules primitive.
- [x] `## Details` has two nonblank instructions, traceable only to failed A7
  and the preserved A1 bare-core failure.
- [x] No description optimizer ran; the manual-only N/A above remains binding.
