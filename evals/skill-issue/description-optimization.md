# skill-issue — description optimization

Process: Codex-only substitute for skill-creator's stock Claude runner, using a frozen 20-query corpus, fixed 12/8 train/held-out split, three fresh label-blind evaluator passes, and held-out-first selection. The exact allowed optimizer and evaluator model was GPT-5.6 Luna.

## Corpus

Ten positives cover agent-skill authoring, review, admission, five-type naming, nine-section conformance, bitter-lesson line review, description conformance, and references/scripts overflow. Ten near-miss negatives cover skill-creator evaluation and optimization, skill installation, ordinary agent work, AGENTS.md editing, GitHub issues, use of an existing skill, public documentation, and SOPs for human operators.

## Result

The optimizer proposed three candidates and recommended A. The existing description plus candidates A, B, and C each scored train 36/36 and held-out 24/24 across three passes; every description scored 12/12 train and 8/8 held out in every pass.

The run-loop-compatible first-best tie rule therefore selected the existing description:

> Triggers when an agent authors, reviews, names, or decides whether to create an agent skill, including requests to write SKILL.md, choose a skill type, evaluate skill-worthy content, or split material into references/scripts. Not for running skill evaluations or description optimization, which belong to skill-creator.

This exact `best_description` remains in `skills/skill-issue/SKILL.md` verbatim. No Claude Code, Claude model, browser, or non-Codex model was used.
