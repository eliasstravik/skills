---
name: skill-issue
description: Triggers when an agent authors, reviews, names, or decides whether to create an agent skill, including requests to write SKILL.md, choose a skill type, evaluate skill-worthy content, or split material into references/scripts. Not for running skill evaluations or description optimization, which belong to skill-creator.
---

# Skill Issue

## Trigger

Apply this library standard when authoring, reviewing, naming, or deciding admission for an agent skill.

## Scope

This SOP governs skill form in this library; `skill-creator` owns evaluation, iteration, and description optimization.
Existing skills predate this standard and stay unchanged unless the client explicitly places them in scope.

## Inputs

The form decision accepts the proposed skill's purpose and candidate content; evaluation evidence belongs to `skill-creator`.

## Roles

The authoring agent applies this standard; the client decides admission disputes and taste calls.

## Procedure

1. Reject the skill unless its candidate content contains at least one survivor category in [the litmus](references/litmus.md).
2. Classify the admitted skill as exactly one of the five types in [the typology](references/sop-types.md).
3. Name the skill by its type's rule.
4. Write all nine sections in this order: Trigger, Scope, Inputs, Roles, Procedure, Outputs, Exceptions, QC, References; write `None.` in an inapplicable section.
5. Reduce the skill to: “When [trigger] occurs, [role] performs [procedure] using [inputs] to produce [output], while satisfying [controls].”
6. Delete every body line an agent with perfect reasoning and perfect public-world knowledge could derive.
7. Move bulky non-derivable material to `references/`, deterministic operations to `scripts/`, and write the frontmatter description by [the description canon](references/description-canon.md).

## Outputs

Record compliance as one conforming skill directory containing `SKILL.md` and only required attachments; this Policy SOP produces no domain work product.

## Exceptions

A failed admission gate yields a rejection, not a thinner skill.
Escalate admission disputes to the client; never waive the gate silently.

## QC

- Confirm a survivor category earned admission and every retained body line passes the litmus.
- Confirm the type is singular, the name follows its type, and all nine ordered sections are present.
- Confirm the name matches its directory, uses lowercase hyphens, and is at most 64 characters.
- Confirm the body is under 500 lines and 5,000 tokens; each reference over 100 lines has a table of contents.
- Confirm the non-empty third-person description is at most 1,024 characters, contains no XML, and states positive and negative triggers.
- Confirm the trigger-eval optimizer's final description is applied verbatim.

## References

Read [SOP types](references/sop-types.md) for classification or naming, [the litmus](references/litmus.md) for admission or line review, and [the description canon](references/description-canon.md) when writing frontmatter.
