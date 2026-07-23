# consultant — iteration 1 paired results

## Setup

- Eight fresh GPT-5.6 Sol arms: four with the 39-body-line skill, four with no
  skill
- Independent assertion grader: GPT-5.6 Terra
- Blind pairwise comparator: GPT-5.6 Luna
- Treatment placement alternated between anonymous A/B packets
- Treatment read no sibling skill; control read no installed skill

## Assertion result

| Eval | With skill | Without skill |
| --- | ---: | ---: |
| New consultation, blocker, approval, handoff | 17/17 | 7/17 |
| Named resume | 17/17 | 11/17 |
| Substantive addition at review gate | 17/17 | 10/17 |
| Fresh state despite existing consultation | 9/9 | 5/9 |
| **Total** | **60/60 (100.00%)** | **33/60 (55.00%)** |

No critical treatment assertion failed. Relative to the bare core, treatment
gained 17 assertions and 32.81 percentage points.

## Blind comparison

| Eval | A | B | Luna winner |
| --- | --- | --- | --- |
| 1 | without skill | with skill | B |
| 2 | with skill | without skill | A |
| 3 | without skill | with skill | B |
| 4 | with skill | without skill | A |

After unblinding, the skill wins 4/4. Luna cited exact question and review-gate
grammar, complete durable state and plan sections, direct slug placement,
controlled blocker/addition revision, minimal reviewer packets, and safe
absolute-path handoffs.

## Verified safety and behavior

- All executor commands and state stayed in their isolated run directories.
- Every executor was GPT-5.6 Sol; judges were GPT-5.6 Terra and Luna.
- No Claude Code, Claude model, Fable 5, live Consultant state, external
  temporary directory, credential, or product implementation was used.
- Named resumes touched only their named state; fresh requests preserved
  unrelated consultations.
- Reviewer packets contained only complete plans and plan-named references.

## Viewer review

The skill-creator static viewer was generated with all eight transcripts and
their assertion grades. Under the client's authorized autopilot gate, review
feedback is empty and no further behavioral iteration is earned.

## Decision

SHIP. Proceed to trigger-description optimization and shipping checks.
