# voice-mode — assertion suite

One checkable assertion covers every required behavior and every preserved
baseline failure. **(critical)** marks severe or contractual behavior.

## Common behavior

- **A1 (critical) — Spoken surface stays non-visual.** While the mode is active,
  every simulated user-facing turn is plain prose with no heading, list syntax,
  code span, code fence, table, emoji, path, URL, or long machine identifier.
- **A2 (critical) — Visual material is routed, not recited.** Code, paths, URLs,
  diffs, tables, and exact technical detail requested for viewing are kept in a
  file or tool output; speech uses a human-facing artifact name and preserves
  the useful conclusion.
- **A3 (critical) — Rigor and truth survive compression.** Tool use, source
  checking, permissions, safety, and verification remain normal; every stated
  fact is supported by the fixture, with no merged facts or invented
  attribution.
- **A4 — Work announcements match latency.** A required skill-use notice is at
  most “Voice mode is on” and is attached to the useful response; quick reads
  or inspections get no narration, while a genuinely slow check gets one brief
  orientation message and an accurate result when it completes.
- **A5 (critical) — One question per active-mode turn.** No simulated assistant
  reply contains more than one question or bundles independent asks.
- **A6 — Spoken length fits the ask.** A quick answer uses at most two sentences;
  a longer walkthrough remains conversational and contains no filler or staged
  enthusiasm.
- **A7 — Important literals remain exact.** Material names, dates, counts,
  percentages, and decisions retain their source meaning and values.
- **A8 (critical) — Invocation remains explicit.** Shipping frontmatter keeps
  the skill user-invoked, and trigger evaluation does not turn ordinary text
  requests into accidental voice-mode activation.
- **A11 (critical) — Run isolation holds.** The executor writes, moves, or
  deletes only inside its run directory and leaves live user state and external
  temporary directories untouched; read-only access to the declared skill and
  task inputs is allowed.
- **A12 — Scripted turns stay ordered.** A reply is consumed only after the
  assistant turn that precedes it; no later request is handled early.

## Flow-specific behavior

- **A9 (critical) — Persistence and exit are explicit.** Refresh, show, and
  write requests leave the mode active; only the explicit exit switches the
  next response back to ordinary formatting.
- **A10 (critical) — Consequential action is confirmed aloud.** The assistant
  states the human consequence and receives explicit approval before changing
  the copied target.
- **L1 — Complete lists remain complete.** When the user requests the full
  list, every source item appears once in source order with verbal numbering.

## Traceability — preserved failures to assertions

| Preserved failure | Assertion(s) |
| --- | --- |
| F1.1 quick note read announced | A4 |
| F2.1 quick checklist read announced | A4 |
| F3.1 quick inspection announced | A4 |
| F3.2 filesystem syntax spoken | A1, A2 |
| F3.3 run boundary crossed through `/tmp` | A11 |
| F4.1 quick read and directory notation spoken | A1, A4 |
| F4.2 later scripted reply handled early | A12 |
| F4.3 path and URL recited | A1, A2 |
| F4.4 artifact path recited before exit | A1, A2, A9 |
| F5.2 four-sentence quick answer | A6 |
| F7.2 unsupported attribution added | A3, A7 |

## Eval coverage

| Eval | Assertions |
| --- | --- |
| 1 — artifact-heavy update | A1, A2, A3, A4, A6, A7 |
| 2 — complete verbal list | A1, A3, A4, A7, L1 |
| 3 — consequential cleanup | A1, A2, A3, A4, A5, A10, A11 |
| 4 — persistence and exit | A1, A2, A3, A4, A5, A6, A7, A9, A11, A12 |
| Shipping and trigger checks | A8 |
