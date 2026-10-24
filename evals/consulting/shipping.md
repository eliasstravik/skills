# consulting — shipping record

Date: 2026-10-24. Rewritten under work-board task SKLS-7 from the handoff of consultation
`consulting-zero-surprises` (SKLS-6): its `plan.md` and the session mock (`page/steps/08-new-session.html`,
`09-page-during-chat-questions.html`; frozen, hashes verified against `references/frozen.sha256`). Where plan
and mock disagree, the mock wins.

## Client instruction that overrode the process

Mid-build the client wrote: "skip evals btw". So the skill-creator loop was **not run**: no `evals.json`,
assertions or fixtures, no with-skill / no-skill runs, no eval viewer review, and no trigger-eval
description optimization. The description is a hand-written draft by the description canon, not an
optimizer `best_description`; run the optimizer later and apply its result verbatim.

## What was checked instead

- A full test session (`claude -p`, Opus 5.5, headless, scripted replies all "1", state root in the task's
  temporary folder): "/consulting a small habit app for my phone". It ran destination line, six discovery
  questions on one living prototype with visible gaps and captions, the review gate, two real review rounds
  with fresh subagents (round 1: 17 findings; one became question 7), the final check and the fenced
  handoff, with `open.md` and a frozen-file footer. Two skill gaps it exposed were fixed: the agent settled
  three client-owned findings itself (now forbidden explicitly), and the frozen hashes were not
  `sha256sum -c` checkable (now a fixed format).
- A fresh reviewer compared that session and the skill with the mock stage by stage; its differences were
  fixed.
- The shell in a real browser (agent-browser) at 1280×800 and 390×844: open step with caption and
  `<label> · Recommended. <tradeoff>`; review gate and final check in the sidebar with status line and
  hint; whole-thing view with caption, `Whole thing` badge, prototype, `plan.md`, `open.md`; handoff with
  `Handoff` and `● Frozen · the spec`; no horizontal scroll on a phone; Agentation copy of a pending
  question gives `Question: Is this the thing?` / `Answer: 2. Change it`; an open `live` step loads
  `?variant=<key>` and switches with the option.
- `serve.sh` refuses `pending` while a step is open and a non-loopback `http://` `live`, accepts `https://`
  and `http://127.0.0.1`. `check-step.sh` passes a prototype without a key and still fails a wrong key.

## Where the mock overrode the plan

- Chat message: no context paragraph, no `---` rules, a bare `Other`, and no first-sitting comment-tool
  sentence — the mock's question messages are exactly `Page:`, the bold question, the options.
- The review gate message carries no `Page:` line; the final check does.
- The handoff's last lines are `Consulting has ended. Page: <URL>` and `Stop the page: …`, with no reminder
  to remove the private share; paths start `~/` under the home directory.
- The page: a caption line above the prototype at every stage, the explanation without the option number,
  `Handoff` and `● Frozen · the spec` after the freeze, a `Whole thing` badge and the hint "Answer in chat,
  or copy it from here, as with any question." during pending questions (step 9). The sidebar shows the
  mock's short labels (`Run it`, `Change`; `That's it`, `Change it`) and no `Other` row.

## Judgement calls (neither shown nor in the plan)

- The whole-thing view drops today's per-step embeds: the prototype already holds every answer.
- Captions live in the manifest (`steps[].caption`, `pending.caption`), not in the step page, so a
  prototype snapshot holds only the thing itself.
- `reviewStatus` says `round` for a count of 1.
- A reopened step gets a fresh snapshot of the current prototype when it is asked again.
- A change at the final check that needs a choice between options becomes a numbered question.
- The round-cap question carries `Page: <URL>#plan` like the final check.

## Manual frontmatter check

- `name: consulting` equals the directory, lowercase, under 64 characters. PASS.
- `description`: one third-person string, positive and negative triggers, no XML, 943 characters. PASS.
- Body: 99 lines, about 1,950 words, nine ordered sections. PASS.

## Shipping surface

`SKILL.md`, `assets/index.html`, `assets/vendor/agentation.js`, `assets/vendor/LICENSES.txt`,
`assets/fonts/InterVariable.woff2.b64`, `assets/fonts/INTER-LICENSE.txt`, `scripts/serve.sh`,
`scripts/check-step.sh`, `references/page-contract.md`, `references/review-and-handoff.md`.
`references/review-loop.md` is deleted.
