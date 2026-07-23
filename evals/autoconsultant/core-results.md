# autoconsultant — bare-core results

Bare core: 12 body lines, H1 plus one `## Recipe`, with no `## Details`.

Executors: eight fresh GPT-5.6 Sol contexts. Independent assertion grader:
GPT-5.6 Terra. Blind pairwise comparator: GPT-5.6 Luna. No Claude or Fable
model was invoked.

## Result

- Treatment: **67/72 (93.06%)**
- Control: **23/72 (31.94%)**
- Blind pairwise: **treatment won 4/4**

Anonymous placement varied:

| Eval | Treatment | Luna winner |
| --- | --- | --- |
| 1 — fresh full chain with blocker | A | A |
| 2 — named resume and custom values | B | B |
| 3 — artifact revision | A | A |
| 4 — fence safety | B | B |

## Details earned by treatment failures

- **A2:** the named-resume treatment used
  `mktemp -d /tmp/autoconsultant-check.XXXXXX` for a fence check; all scratch
  and fence analysis must stay run-local or in memory.
- **A15:** every handoff named real absolute repository and plan paths but
  failed to direct the fresh agent to read every explicit reference named by
  the plan.

No treatment failure existed outside A2 or A15. No other Details line is
earned by the bare-core evidence.
