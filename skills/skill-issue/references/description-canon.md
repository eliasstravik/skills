# Description canon

The description is this library's routing rule. Its final wording belongs to the trigger-eval optimizer.

## Required form

- Write in third person.
- State both what the skill does and when it should trigger.
- Include literal user phrasings, concrete nouns, extensions, or keywords that distinguish the owned territory.
- Include `Not for…` exclusions that separate adjacent skills.
- Keep triggers distinctive and non-overlapping across the library.
- Use no XML and stay within 1,024 characters.
- Apply the optimizer's `best_description` verbatim; never hand-edit it afterward.

## Positive and negative trigger example

Weak:

> Helps with skills.

Conforming:

> Triggers when an agent authors, reviews, or names an agent skill, including requests to write SKILL.md or decide whether a skill should exist. Not for running skill evaluations or optimizing trigger descriptions.

The positive half covers owned user intent; the negative half prevents collision with the process authority.
