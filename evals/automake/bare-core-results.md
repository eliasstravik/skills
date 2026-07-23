# automake — bare-core paired results

## Setup

- Eight fresh GPT-5.6 Sol arms: four with the 14-body-line bare core and four
  with no skill
- Independent assertion grader: GPT-5.6 Terra
- Blind pairwise comparator: GPT-5.6 Luna
- Treatment placement alternated between anonymous A/B packets
- No treatment read a sibling skill; no control read an installed skill

## Assertion result

| Eval | With bare core | Without skill |
| --- | ---: | ---: |
| Normal consultation, no run | 8/11 | 4/11 |
| Accepted candidate ratchet | 13/24 | 8/24 |
| Rejected candidate rollback | 17/24 | 11/24 |
| Run-now dirty/no-HEAD | 14/22 | 10/22 |
| **Total** | **52/81 (64.20%)** | **33/81 (40.74%)** |

The bare core improved complete role artifacts and role separation. Its failed
treatment assertions were A2, A4, A8, A9, A12, A13, A16, A17, A18, A21, A22,
A23, A24, and B1.

## Blind comparison

| Eval | A | B | Luna winner |
| --- | --- | --- | --- |
| 1 | with bare core | without skill | A |
| 2 | without skill | with bare core | B |
| 3 | with bare core | without skill | B |
| 4 | without skill | with bare core | A |

After unblinding, the bare core wins two pairs and control wins two. Treatment
won consultation and accepted-candidate completeness. Control won the rejection
pair by materializing and evaluating a concrete invalid candidate instead of
treatment's unnecessary no-diff evaluation, and won run-now because treatment
used its Automake home as a tool home and left unrelated databases and runtime
assets there.

## Details earned

- A2 earns explicit process/state-root isolation and ephemeral scratch cleanup.
- A4 earns the exact missing-input question shape.
- A8 and A9 earn exact defaults and final-summary framing.
- A12, A13, A16–A18, A21–A24, and B1 earn one linked execution protocol
  defining canonical state, strict role ownership, conservative transitions,
  parseable verdicts, and terminal reporting.
