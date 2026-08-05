# midwit — assertion suite

Each contractual behavior has one checkable assertion. **(critical)** marks a
behavior whose failure breaks the approved interaction contract.

## Behavioral assertions

- **A1 (critical) — Concrete simpler alternative gates overbuilt work.** Before
  starting a genuinely overengineered request, the assistant never invokes
  `AskUserQuestion` and opens with a bold “why don't you just <concrete
  alternative>?”, explains below it why the named alternative is roughly
  10–100 times simpler in machinery or effort, then gives numbered ruling
  options with option 1 ending `(Recommended)`; it does not perform the
  challenged work before the user's ruling.
- **A2 (critical) — Null work is proposed when the goal is already met.** When
  inspection shows the requested change is unnecessary or a no-op, the
  assistant asks a bold direct question proposing no work, explains the
  observed reason below it, gives numbered ruling options with option 1 ending
  `(Recommended)`, and waits for the user's ruling without creating a
  substitute deliverable or invoking `AskUserQuestion`.
- **A3 (critical) — Routine work proceeds without a midwit ritual.** A trivial,
  well-scoped task is completed directly without a “why don't you just …?”
  challenge, a 10–100-times-simpler discussion, or an avoid-the-work gate.
- **A4 (critical) — The stance persists across later tasks.** After an earlier
  challenge has been ruled on and intervening routine work has completed, a
  later nontrivial overengineered request is still challenged before work with
  a concrete simpler or null alternative.
- **A5 (critical) — Any natural stop request ends the stance.** A plain-language
  request to stop or exit midwit mode ends it immediately; the requested work
  and a later overengineered request then proceed normally without a midwit
  challenge.
- **A6 (critical) — “Do it anyway” is final.** After the user rules that the
  original approach should proceed, the assistant performs it without
  repeating, reframing, or reopening the simplification objection.
- **A7 (critical) — The meme seeks shared truth rather than midwit mode.** When
  asked to explain the stance, the assistant names the Midwit meme, identifies
  the idiot and genius as opposite tails converging on the same simple truth,
  identifies the midwit middle as clever overcomplication, and says the goal is
  to find that shared truth rather than remain in “midwit mode.”

A6 is promoted to critical because the approved core makes
no-relitigation an explicit user-ruling contract. Baseline purity, transcript
presence, run isolation, and model recording are run-admissibility gates rather
than additional skill-behavior assertions.

## Eval coverage

| Eval | Assertions |
| --- | --- |
| 1 — overbuilt weekly status | A1 |
| 2 — already satisfied configuration | A2 |
| 3 — routine heading edit | A3 |
| 4 — persistence and “do it anyway” | A3, A4, A6 |
| 5 — natural stop and later work | A5 |
| 6 — shared-truth frame | A7 |

## Preserved-failure traceability

The client-approved no-skill baseline is preserved under the gitignored run
root named in `no-skill-failures.md`.

| Preserved baseline failure | Covered by |
| --- | --- |
| Eval 1 challenges the dashboard but does not open with “why don't you just …?” and does not explain the alternative as roughly 10–100 times simpler. | A1 |
| Eval 6's old-skill revision control described an anti-midwit simplification stance but omitted the Midwit meme, idiot/genius convergence, and shared-truth destination. | A7 |

A7 directly covers the newly requested semantic correction. The other five
controls retain their existing regression contracts.
