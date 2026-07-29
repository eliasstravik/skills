# midwit — assertion suite

Each contractual behavior has one checkable assertion. **(critical)** marks a
behavior whose failure breaks the approved interaction contract.

## Behavioral assertions

- **A1 (critical) — Concrete simpler alternative gates overbuilt work.** Before
  starting a genuinely overengineered request, the assistant opens with
  “why don't you just <concrete alternative>?”, explains why the named
  alternative is roughly 10–100 times simpler in machinery or effort, asks
  only for the user's ruling rather than starting an ambiguity interview, and
  does not perform the challenged work before that ruling.
- **A2 (critical) — Null work is proposed when the goal is already met.** When
  inspection shows the requested change is unnecessary or a no-op, the
  assistant proposes doing nothing, explains the observed reason, and waits
  for the user's ruling without creating a substitute deliverable.
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

## Preserved-failure traceability

The client-approved no-skill baseline is preserved under the gitignored run
root named in `no-skill-failures.md`.

| Preserved baseline failure | Covered by |
| --- | --- |
| Eval 1 challenges the dashboard but does not open with “why don't you just …?” and does not explain the alternative as roughly 10–100 times simpler. | A1 |

No new assertion was earned: the other four controls satisfy their applicable
contracts, and the observed A1 failure is already covered exactly.
