# automake — iteration 1 paired results

## Setup

- Eight fresh GPT-5.6 Sol arms: four with the 22-body-line skill and its earned
  execution reference, four with no skill
- Independent assertion grader: GPT-5.6 Terra
- Blind pairwise comparator: GPT-5.6 Luna
- Treatment placement alternated between anonymous A/B packets
- Treatment read no sibling skill; control read no installed skill

## Assertion result

| Eval | With skill | Without skill |
| --- | ---: | ---: |
| Normal consultation, no run | 11/11 | 4/11 |
| Accepted candidate ratchet | 24/24 | 8/24 |
| Rejected candidate rollback | 24/24 | 11/24 |
| Run-now dirty/no-HEAD | 22/22 | 10/22 |
| **Total** | **81/81 (100.00%)** | **33/81 (40.74%)** |

No critical treatment assertion failed. Relative to the bare core, treatment
gained 29 assertions and 35.80 percentage points.

## Blind comparison

| Eval | A | B | Luna winner |
| --- | --- | --- | --- |
| 1 | without skill | with skill | B |
| 2 | with skill | without skill | A |
| 3 | without skill | with skill | B |
| 4 | with skill | without skill | A |

After unblinding, the skill wins 4/4. Luna cited complete consultation,
canonical terminal state, exact evidence-backed verdicts, concrete conservative
rollback, clean target-local preflight, and reconstructable launch records.

## Verified safety and behavior

- Executing treatments read the earned orchestration reference before mutation.
- Every child model was GPT-5.6 Sol or Terra; no Claude or Fable model ran.
- Accepted flows ended clean with only the evaluated source change.
- Rejected flow restored exact baseline commit, tree, bytes, and status.
- Run-now preflight never read or committed `.env.local`.
- Terminal state contained only canonical ratchet files and no launch scratch,
  databases, caches, locks, copied credentials, or tool-home artifacts.

## Decision

SHIP. The behavior loop is complete; proceed to description optimization and
shipping checks.
