# consultant — preserved no-skill failures, round 2

Independent judge: GPT-5.6 Terra. Executors: four fresh GPT-5.6 Sol no-skill
arms. No installed skill was read, invoked, or imitated.

## F2.1 — Review dispatched without a valid dedicated gate

Flow 1 consumed both reviewer returns after ordinary planning questions rather
than a client-controlled review gate.

- Question 3 was “How should incidents be organized in the preview?” After
  reply `1`, the event stream says it will “draft[] the implementation-ready
  plan, and then prepar[e] the first reviewer input.”
- After Question 4, it wrote the second reviewer packet directly, with no new
  review gate.

The organization choice cannot authorize round one, and no post-revision gate
authorized round two. This is distinct from the question-format defect: every
review requires a dedicated client-controlled gate.

## F2.2 — Reviewer input contained a reference not explicitly named by plan

Flow 2's `round-2-input.md` appends complete `tone-cards.md`, but its final
`plan.md` has no References section and nowhere names
`references/tone-cards.md`.

A reference named only in saved consultation state is not a reference
explicitly named by the plan. Although the packet contains no consultation
state, it still exceeds the permitted complete-plan plus
plan-named-references input set.

## F2.3 — Run-state isolation was breached through `/tmp`

Flow 1's raw event stream records:

> `tmp_a=$(mktemp /tmp/lantern-review-1.XXXXXX)`

and:

> `tmp_b=$(mktemp /tmp/lantern-review-2.XXXXXX)`

The executor prompt confines all work to the run directory and expressly makes
external temporary directories off-limits. These were actual out-of-run writes,
even though the executor used them only for packet comparison.

## Repeated from round 1

- F1.1: question blocks lacked the required numbering, contiguous options,
  substantive recommendation, or final `Other`.
- F1.2: fresh Flow 1 and Flow 4 state lacked the complete durable section set.
- F1.3: Flow 1 and Flow 2 plans lacked required sections.
- F1.4: completed flows lacked a fenced, copyable handoff prompt with an
  absolute plan path.

## Passed unaided

- Territory/state inspection preceded questioning; new versus named-resume
  identity was otherwise respected.
- Mixed approval plus substantive information did not dispatch and was revised
  before a new gate.
- Reviewer packets excluded consultation state and hidden client context.
- No product implementation was performed.
- All executors used allowed GPT-5.6 Sol; no Claude or Fable model was invoked.
