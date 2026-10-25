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
  or copy it from here, as with any question." during pending questions (step 9), and the dashed
  "Reviewer is reading the handoff…" box at the gate and while a round runs (mock 08). The sidebar shows the
  mock's short labels (`Run it`, `Change`; `That's it`, `Change it`) and no `Other` row.

## Judgement calls (neither shown nor in the plan)

- The whole-thing view drops today's per-step embeds: the prototype already holds every answer.
- Captions live in the manifest (`steps[].caption`, `pending.caption`), not in the step page, so a
  prototype snapshot holds only the thing itself.
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

## 2026-10-25 — page fixes from the HOME-14 consultation (SKLS-8)

Scoped retrofit of seven changes the client asked for during the HOME-14 consultation (herdr orchestration
GUI), which had been patched only into that consultation's page copy. No evals run; same basis as above.

1. One page, one scroll: the shell's frames take their content's height, nothing scrolls inside, nothing is
   pinned on narrow screens; the desktop sidebar sticks only while it fits the window. Prototypes may not
   use window-height units or vertical `overflow: auto|scroll` (`check-step.sh` enforces it); device mocks
   grow to their content.
2. Options always stack one per line, right under the question.
3. The step caption is gone from the shell and from the manifest contract.
4. No visible gaps: undecided parts are left out; open nodes live only in the design tree.
5. The recommended option is always option 1: `check-step.sh` takes key 1 only, `serve.sh` refuses an
   open step or `pending` whose `recommended` is not `"1"` (answered steps keep their old key).
6. Screens follow the /ui design guidelines, applied by hand in inline CSS.
7. The reviewer brief carries the /midwit stance in its own words.

Checked: `check-step.sh` on good and bad pages and on the HOME-14 prototype; `serve.sh` manifest refusals;
the shell in agent-browser at 390×844, 768×1024 and 1280×800 with the HOME-14 page and a test consultation
(frame grows and shrinks with the option, no element scrolls but the page, no horizontal scroll, options
under the question, no caption, whole-thing view with a pending question, a cross-origin `live` frame at
80% of the window, a sidebar taller than the window ending flush with its bottom).

Manual frontmatter check: `name` and `description` unchanged. Body: 100 lines, about 2032 words, nine
ordered sections. PASS.
