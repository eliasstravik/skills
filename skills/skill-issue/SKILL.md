---
name: skill-issue
description: Governs the form of compact, evidence-earned agent skills.
disable-model-invocation: true
---

# Skill Issue

## Checklist

- [ ] Every box is checked or marked not applicable with a reason.
- [ ] Requirements, assertions, preserved failures, and existing skill text were read; at least one preserved baseline failure proves need.
- [ ] One checkable assertion covers every required behavior and preserved failure; contractual ones are critical.
- [ ] Exactly one core primitive was chosen by what the agent must do.
- [ ] The bare core is an H1 plus that primitive's H2 in its mandated form, with at most 20 body lines.
- [ ] Fresh controlled with/without runs and a blind forced comparison tested the bare core before any Details line existed.
- [ ] One Details section contains only lines traceable to assertions the bare core failed, within 80 Details lines and 100 total body lines.
- [ ] Necessary overflow is externalized through one-level Calls whose triggers, outputs, and fallbacks are explicit.
- [ ] Frontmatter name and description fit the invocation mode; extensions and validator or manual-check results are recorded.
- [ ] Full treatment passes every critical assertion, applies the optimized description verbatim, and keeps eval evidence outside the shipping skill.

## Details

| Primitive | Choose it for | Required shape |
| --- | --- | --- |
| Checklist | Independent conditions must all pass | `- [ ]` passing-state conditions; check each or mark it inapplicable with a reason |
| Recipe | Outcome depends on action order | Flat ordered list with one imperative per item and no nested bullets |
| Loop | A sequence repeats toward a bound | `Repeat until <observable exit>, max N:` followed by an ordered body that carries its invariants |
| Switch | This skill retains ownership after choosing a branch | Two or three branches as bold question-and-arrow lines in one Recipe item; otherwise `Condition | Action`, with observable exclusive rows and first match winning |
| Router | Classification transfers ownership | `Request | Skill`; link one reachable specialist per match, include overlap, uncertainty, and no-match rows, invoke or recommend it, then stop |
| Handler | An expected failure interrupts the normal path | `Failure | Recovery`; recover only by retrying, aborting, compensating, or asking the user |
| Call | Execution or depth belongs in one auxiliary file | `read [file](path) when <trigger>` or `run [script](path) to <outcome>`; state the expected output and what to do when reading or running is unavailable |
| Rules | The same constraints govern every action | Unordered imperatives, one rule per bullet; prohibit only a rationalization observed in evidence |
| Reference | The agent looks up facts | Unordered facts or `Term | Meaning`; no commands |
| Template | Output must conform to a type | One fenced skeleton with placeholders; keep literal text only where exactness changes behavior |
| Example | One concrete pair is necessary to convey style or detail | One filled input/output pair; use only alongside a Template |
| Rubric | The agent must judge quality | `Criterion | Standard`, with checkable standards and one non-negotiable floor |

- Router ends after handoff; Switch performs the chosen action itself.
- In a Recipe, count coordinated verbs, `then`, and conditional commands separately: split `write and save`, `write, then report`, and `if <condition>, stop and ask` into distinct numbered actions.
- Prefer one observable outcome verb for recovery: `Escalate missing or conflicting facts to the user`; never keep `stop and ask` as one Recipe item.
- Descriptions are third person. A user-invoked skill gets a short index line; a model-invoked skill states only observable triggering conditions and exclusions.
- Start model-invoked descriptions with `Triggers when`; never lead with capability verbs such as `Routes`, `Classifies`, `Researches`, or `Creates`.
