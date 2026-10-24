# Review and handoff

## Contents

- [`plan.md` and `open.md`](#planmd-and-openmd)
- [`reviewStatus`](#reviewstatus)
- [1. The review gate](#1-the-review-gate)
- [2. A review round](#2-a-review-round)
- [3. After each round](#after-each-round)
- [4. The round cap](#4-the-round-cap)
- [5. The final check](#5-the-final-check)
- [6. Freeze and hand off](#6-freeze-and-hand-off)

The review finds every guess a builder would have to make, so the build holds nothing the client did not
see. It gives no score. The client sets the bar and the rounds, plays the final prototype, and has the last
word. Every question here is chat-only (`**Question: …**`, no number, no step) and sets `pending`, except a
finding the client must settle, which becomes an ordinary numbered discovery question on the prototype.

Save the review state in `consultation.md` (bar, round cap, rounds run, open findings with ids, stop
reason) and the matching `reviewStatus` and `pending` in `session.json`, in one operation, before every
question and every dispatch.

## `plan.md` and `open.md`

`plan.md` covers only what the prototype cannot show. Sections, in order:

- **Outcome** — what is being built and for whom, in two or three sentences.
- **Prototype** — `page/prototype/` (or the scratch app's README), how to open it, and what each part shows.
- **Decisions** — one line per decision, each linking its step and option
  (`[step 2](page/steps/02-tick-off.html#option=2)`), with the client's notes where they shaped it.
- **What the prototype can't show** — data rules, limits, speed, platforms, what is stored.
- **Constraints**
- **Out of scope**

Where a prototype snippet is more precise than prose, quote it. Never describe in words what the
prototype already shows.

`open.md` lists every gap left, one per line, each marked for the builder:

```text
# Open

- ask — <what is not decided, and why it needs the client>
- your call — <what the builder chooses; any sensible choice is fine>
```

`ask` means stop and ask the client before building that part; `your call` means the builder decides.

## `reviewStatus`

Exactly one of these strings (`<bar>` is `critical`, `major`, `minor` or `trivial`; `<n>` the round cap;
`round` for a count of 1):

- `Not yet reviewed · must fix <bar>+ · up to <n> rounds`
- `Round <r> of <n> running · must fix <bar>+`
- `Round <r> of <n> · <k> open at <bar>+`
- `Passed after <r> rounds`
- `Risk accepted after <r> rounds`

## 1. The review gate

When the draft `plan.md` and `open.md` exist, recommend the bar and the rounds; the default is must fix
major and worse, up to 3 rounds. Set `reviewStatus` to `Not yet reviewed · must fix major+ · up to 3 rounds`
and `pending` to:

```json
{"label": "Review", "question": "Ready for the review?", "recommended": "1",
 "caption": "Everything decided so far, built in. A fresh reviewer now gets only the handoff and lists every guess it would have to make.",
 "options": [{"key": "1", "label": "Run it", "tradeoff": "Must fix: major and worse. Up to 3 rounds. Then you decide."},
             {"key": "2", "label": "Change", "tradeoff": "Set a different bar or number of rounds."}]}
```

Then send exactly:

```text
**Question: Ready for the review?**
I suggest: must fix major and worse, up to 3 rounds.

1. Run it like that. (Recommended)
2. Change the bar or rounds.
3. Other
```

Put the recommended bar and rounds in place of `major` and `3` everywhere. Option 1 runs round 1. A reply
that names a different bar or rounds adopts them and runs round 1; option 2 alone asks for them.

## 2. A review round

Set `pending` to `null` and `reviewStatus` to `Round <r> of <n> running · must fix <bar>+`. Save the
packet as `references/review-packet-<r>.txt`: the full text of every file in `page/prototype/`, a line per
media file it names (path, type, one-line description), the draft `plan.md` and `open.md`, and, for a
scratch app, the screenshots of every screen it shows from `page/media/`. From round 2 on, add the earlier
findings with their ids and what was done about each. Nothing else: never `consultation.md`,
`session.json`, the chat, or the agent's own reasoning.

Give a fresh agent the packet (or its path) and this brief, and nothing more:

```text
You are reviewing a handoff before a builder gets it. The prototype is the spec; plan.md covers only what
the prototype can't show; open.md lists what is left open, each "ask" or "your call". Read them all.
First say in 5 to 8 lines what you would build. Then list every guess you would have to make.
Severity: critical — a guess about something the client would notice in ordinary use, or plan and
prototype contradict each other; major — a guess in an unusual case (error, empty, offline, limits), or a
claim in the plan the prototype does not back; minor — correct but unclear wording or naming, you would
probably not go wrong; trivial — a note.
Each finding quotes, in proof, the place in the prototype or plan that leaves the gap. settle is "client"
for taste, scope or product calls and "agent" for wording or consistency. Give no score.
<from round 2: Earlier findings are listed with their ids. Check each is fixed. Add a new finding only if
it is critical.>
Reply with JSON only: {"meets": bool, "text": "...", "findings": [{"id", "severity", "subject", "where",
"proof", "settle": "client|agent"}]}
```

Save the reply as `references/review-<r>.json`. A critical finding with no proof counts as major. `meets`
is true when no finding at or above the bar is left.

## After each round

Findings at or above the bar must be dealt with:

- `settle: client` becomes a new numbered discovery question: the prototype shows a gap where the finding
  is, and the step page offers the options there, captioned `Found by the review: the builder would have
  had to guess this.` and what to try. Findings one answer settles together share one question. The agent
  never settles a client finding itself or re-marks it as its own, however obvious the answer looks.
- `settle: agent` the agent fixes in the prototype, `plan.md` or `open.md`.

Findings below the bar are optional: fix one only if it is quick and safe; each one left unfixed goes into
`open.md` as `your call`.

Set `reviewStatus` to `Round <r> of <n> · <k> open at <bar>+` while client questions are open. The first
message after the round opens with one line naming every finding and what happened to it, then a blank
line, for example:

```text
Review round 1: 1 critical (empty day: the builder would guess). 1 minor, below the bar, fixed because it was quick: "habit" vs "routine" wording.
```

When every finding at or above the bar is dealt with, the next round runs on its own (no gate) while
rounds are left; at the cap with findings still open, ask the round-cap question. When a round leaves
nothing at or above the bar, the review has passed: set `reviewStatus` to `Passed after <r> rounds` and go
to the final check.

## 4. The round cap

At the cap with findings at or above the bar still open, set `pending` (`label` `Review limit`, the options
below with short labels) and ask:

```text
Review round <r>: <k> open at <bar> or worse: <subjects>.

Page: <URL>#plan
**Question: The review limit is reached. What now?**

1. Answer them. They become questions, and one more round runs. (Recommended)
2. Accept the risk. The open findings go into open.md as "ask".
3. Allow <m> more rounds.
4. Exit without handoff.
5. Other
```

- 1: the findings become questions as usual, and one more round runs past the cap because this reply
  authorises it.
- 2: the open findings go into `open.md` as `ask`; set `reviewStatus` to `Risk accepted after <r> rounds`
  and go to the final check.
- 3: raise the cap by `<m>` and go on.
- 4: keep all state, give no handoff, and stop.

## 5. The final check

The client plays the final whole prototype and has the last word. Set `pending` to:

```json
{"label": "Final check", "question": "Is this the thing?", "recommended": "1",
 "caption": "Review round <r>: nothing at <bar> or worse. Play the whole thing: <what to try>.",
 "options": [{"key": "1", "label": "That's it", "tradeoff": "Freeze it and write the handoff."},
             {"key": "2", "label": "Change it", "tradeoff": "Say what to change; it gets built in, reviewed and asked again."}]}
```

Then send exactly (after a risk acceptance, the first line names the accepted findings instead):

```text
Review round <r>: nothing at <bar> or worse left.

Page: <URL>#plan
**Question: Is this the thing?**
Play the whole prototype.

1. That's it. Freeze it and write the handoff. (Recommended)
2. Change it. Say what to change.
3. Other
```

Only option 1 freezes. Any other answer is a change: record it under "Decided outside a step", build it
into the prototype (a change that needs a choice between options becomes a numbered discovery question),
and update `plan.md` and `open.md`. If the change adds or changes a decision, one more review round runs and
counts toward the cap; if the cap is already used up, the round-cap question comes first. Then ask "Is this
the thing?" again.

## 6. Freeze and hand off

After "That's it":

1. Never write `page/prototype/` again. Add a footer `## Frozen prototype` to `open.md`: one fenced block
   of `sha256sum` lines (`<sha256>  page/prototype/index.html`, then each media file it names), paths
   relative to the consultation directory, so `sha256sum -c` verifies it there. For a scratch app, also
   commit `<slug>/app/` and record the commit hash.
2. Finalise `plan.md` and `open.md` and copy them into `page/`. Set `pending` to `null`, `frozen` to
   `true`, and bump `rev`.
3. Send exactly this, with paths starting `~/` when under the home directory:

````text
All decided and frozen.
```text
Build <thing> so it matches the prototype exactly. Where plan and prototype disagree, the prototype wins.

Spec: <dir>/page/prototype/   (frozen; open index.html)
Plan: <dir>/plan.md   (only what the prototype can't show)
Open: <dir>/open.md   (<n> items, each "ask" or "your call")
Anything neither shown nor listed: stop and ask.
The prototype is throwaway: rebuild it properly; never ship its code.

Done means: a reviewer opens the build and the prototype side by side, goes through every screen and case, and lists each difference as a finding. Differences are fixed, not explained.

Review: passed after <r> rounds at must fix <bar>+.
```
Consulting has ended. Page: <URL>
Stop the page: <skill-dir>/scripts/serve.sh <page-dir> stop
````

- For a scratch app the Spec line reads `(frozen; open the run command in its README.md, commit <hash>)`,
  and a last line `Stop the app: <command>` follows.
- After a risk acceptance the Review line reads
  `Review: risk accepted after <r> rounds with <k> open findings, listed in open.md.`

Consulting has ended. The page server keeps running; nothing is implemented.
