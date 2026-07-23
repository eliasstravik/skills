# skill-issue — iteration 3 paired results

## Setup

- Eight fresh GPT-5.6 Sol arms: four with the 38-body-line skill and four with
  no skill
- Independent assertion grader: GPT-5.6 Terra
- Blind pairwise comparator: GPT-5.6 Luna
- Treatment placement alternated between anonymous A/B packets
- Treatment read only the frozen Skill Issue snapshot; control read no skill

## Assertion result

| Eval | With skill | Without skill |
| --- | ---: | ---: |
| New sequential skill from evidence | 10/10 | 5/10 |
| Bloated existing skill audit | 10/10 | 5/10 |
| Router versus Switch boundary | 10/10 | 5/10 |
| Overflow and frontmatter discipline | 10/10 | 4/10 |
| **Total** | **40/40 (100.00%)** | **19/40 (47.50%)** |

No critical treatment assertion failed. The full loop progressed from 38/40 in
iteration 1 and 36/40 in iteration 2 to 40/40 after two A5/A10 wording
refinements, without adding an unearned behavior.

## Blind comparison

| Eval | A | B | Luna winner |
| --- | --- | --- | --- |
| 1 | with skill | without skill | A |
| 2 | without skill | with skill | B |
| 3 | with skill | without skill | A |
| 4 | without skill | with skill | B |

After unblinding, the skill wins 4/4. Luna selected the evidence-governed
primitive form in every pair: exact Recipe/Router headings, flat Recipe
actions, literal Router headers and fallbacks, failure-earned Details, linked
overflow Call, and invocation-mode descriptions.

## Verified safety and behavior

- All executor reads, writes, and checks stayed inside isolated run
  directories.
- Every executor was GPT-5.6 Sol; judges were GPT-5.6 Terra and Luna.
- No Claude Code, Claude model, Fable 5, installed skill, live state, external
  temporary directory, credential, or service was used.
- Treatment artifacts remained compact at 19–22 total lines, kept eval evidence
  outside shipping skills, and recorded manual frontmatter checks.

## Viewer review

The skill-creator static viewer contains all eight final artifacts, assertion
grades, and the paired benchmark. Under the client's authorized autopilot gate,
review feedback is empty and no further behavioral iteration is earned.

## Decision

SHIP. Proceed to trigger-description optimization and shipping checks.
