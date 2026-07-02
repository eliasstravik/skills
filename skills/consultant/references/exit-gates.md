# Exit gates

Run in order once `plan.md` is drafted. The gates defend against the one failure that matters: a plan that *reads* complete but only makes sense with you in the room.

## 1. Plan review

Present the draft plan to the client section by section. When the plan is dense, visual, or full of linked references, render it as an HTML report (html skill if available) so the client reviews the whole shape at once instead of scrolling prose. Fold their edits in before moving on — the cold read must run against the plan they'll actually sign.

## 2. Cold read

Spawn a fresh subagent with **no conversation context** — only the workspace path:

> You are a coding agent handed this plan cold. Read `~/.consultant/<idea-slug>/plan.md` and every file it references. Do not build anything. Return the list of everything you would have to *guess* to implement this — decisions the plan doesn't make, ambiguities between plan and references, missing facts about the environment. For each guess, state what you'd probably do and rate it: **blocking** (a plausible guess could ruin the result) or **minor** (any reasonable guess is fine).

Triage the list with the client:

- **Blocking** → a ticket; reopen the loop; re-run the cold read after it resolves.
- **Minor** → record in plan.md's "Open questions for the builder" with the client's default answer.

The gate passes when a cold read returns no blocking guesses.

## 3. Handoff

Set Status to `handed off`, create an empty `implementation-notes.md`, and print the handoff block — the engagement's final output. It is a prompt the client will copy-paste into another agent, so wrap it in `"""` delimiters — one on its own line directly above the prompt and one directly below, with nothing else on those lines — so it is unambiguous exactly what to copy. Fill in the slug and target:

"""
Read ~/.consultant/<idea-slug>/plan.md and every reference it links, then implement it in <target repo/directory>.

The plan is the map; the codebase is the territory. When the territory contradicts the plan, or forces a decision the plan doesn't cover, append a dated entry to ~/.consultant/<idea-slug>/implementation-notes.md — what you hit, what you chose, why — and continue with your best judgment. Check "Open questions for the builder" in the plan before deciding anything it already covers.
"""

Offer the client one closing note: after the build, they can bring `implementation-notes.md` back to a `/consultant` session for a debrief — every logged deviation is a lesson for the next engagement.
