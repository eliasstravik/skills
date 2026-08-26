# prototyping — description optimization

Date: 2026-08-26. Process: Codex-only substitute for skill-creator's stock
runner, using a frozen 20-query corpus, fixed 12/8 train/held-out split, and
three fresh label-blind routing passes. GPT-5.6 Luna was the only optimizer and
evaluator model.

## Corpus

Ten positives cover explicit `/prototyping`, implicit one-off comparisons,
session-long Consultant, Grilling, and Wayfinder work, named resume, visual
variants, and behavioral state-model comparisons. Ten near-miss negatives
cover durable HTML artifacts, polished product demos, app implementation,
browser QA, explanation-only work, Figma systems, image mockups, and bug fixes.

The competitor set explicitly included the installed aihero `prototype`
description, not only library siblings. Held-out query 15 mirrors its
"sanity-check whether a state model feels right" language and correctly routes
to `prototyping` in all three passes.

## Result

The optimizer proposed three candidates and recommended B. The current
description and candidates A, B, and C each scored train 36/36 and held-out
24/24 across three passes. The run-loop-compatible first-best tie rule selected
the current description:

> Triggers when a user asks to prototype a decision, compare visible or behavioral options in throwaway pages, keep prototyping through a consultant, grilling, or wayfinder session, or says /prototyping. It builds one loopback session that grows step by step and also handles a one-off "prototype this" request. Not for durable standalone HTML artifacts, polished product demos, browser QA, or integrating selected prototype code into an application.

That exact `best_description` is present verbatim in
`skills/prototyping/SKILL.md`. No Claude Code, Claude model, browser, or
non-Codex evaluator was used.
