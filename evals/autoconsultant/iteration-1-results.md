# autoconsultant — iteration 1 paired results

## Setup

- Eight fresh GPT-5.6 Sol arms: four with the 17-body-line skill and four with
  no skill
- Independent assertion grader: GPT-5.6 Terra
- Blind pairwise comparator: GPT-5.6 Luna
- Treatment placement alternated between anonymous A/B packets
- Treatment read only frozen Autoconsultant, Consultant, and Automake sources;
  control invoked no installed skill

## Assertion result

| Eval | With skill | Without skill |
| --- | ---: | ---: |
| Fresh full chain with blocker | 18/18 | 5/18 |
| Named resume with custom run values | 18/18 | 7/18 |
| Artifact revision without pre-authorization | 18/18 | 4/18 |
| Fence safety and no-run boundary | 18/18 | 5/18 |
| **Total** | **72/72 (100.00%)** | **21/72 (29.17%)** |

No critical treatment assertion failed. Relative to the bare core, treatment
gained five assertions and 6.94 percentage points.

## Blind comparison

| Eval | A | B | Luna winner |
| --- | --- | --- | --- |
| 1 | with skill | without skill | A |
| 2 | without skill | with skill | B |
| 3 | with skill | without skill | A |
| 4 | without skill | with skill | B |

After unblinding, the skill wins 4/4. Luna cited exact cross-skill question
continuity, separately approved independent roles, complete plan authority,
exact run values, strict preparation-only boundaries, and self-contained
copy-safe handoffs.

## Verified safety and behavior

- All executor reads, writes, scratch checks, and state stayed inside isolated
  run directories.
- Every executor was GPT-5.6 Sol; judges were GPT-5.6 Terra and Luna.
- No Claude Code, Claude model, Fable 5, live Consultant or Automake state,
  external temporary directory, credential, service, or product implementation
  was used.
- Repositories stayed byte-identical; Autoconsultant created no Automake state
  and never crossed the final Run gate.
- Every terminal handoff embedded complete approved roles, absolute paths,
  exact values, plan authority, explicit reference reads, and safe outer fences.

## Viewer review

The skill-creator static viewer contains all eight transcripts, assertion
grades, and the paired benchmark. Under the client's authorized autopilot gate,
review feedback is empty and no further behavioral iteration is earned.

## Decision

SHIP. Proceed to trigger-description optimization and shipping checks.
