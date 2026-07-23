# skill-issue — bare-core results

Bare core: 15 body lines, H1 plus one `## Checklist`, with no
`## Details`.

Executors: eight fresh GPT-5.6 Sol contexts. Independent assertion grader:
GPT-5.6 Terra. Blind pairwise comparator: GPT-5.6 Luna. No Claude Code, Claude
model, or Fable 5 was invoked.

## Result

- Treatment: **24/40 (60.00%)**
- Control: **17/40 (42.50%)**
- Blind pairwise: **treatment won 3/4**

Anonymous placement varied:

| Eval | Treatment | Luna winner |
| --- | --- | --- |
| 1 — new sequential skill | A | A |
| 2 — bloated audit | B | B |
| 3 — Router boundary | A | A |
| 4 — overflow/frontmatter | B | A |

## Details earned by treatment failures

- **A4:** all four treatments invented topic-shaped core headings
  (`Main path`, `Workflow`, `Ownership transfer`, and `Procedure`) rather than
  selecting the exact action-shaped primitive name. Details may define the
  primitive vocabulary and selection boundary.
- **A5:** Recipe treatments bundled multiple imperatives, and the Router used
  non-mandated headers. Details may define each primitive's exact grammar.
- **A9:** the overflow treatment used inline code for
  `references/source-policy.md` instead of a linked Call. Details may define
  the linked disposition, expected output, and fallback.
- **A10:** user-invoked descriptions were imperative and the Router description
  summarized capability. Details may distinguish third-person user index lines
  from model-invoked trigger/exclusion conditions.

The outer paired test itself satisfies A7. No treatment failure earns more line
budget guidance, writing philosophy, examples, or process restatement.
