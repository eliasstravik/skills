# consultant — preserved no-skill failures, round 1

Independent judge: GPT-5.6 Terra. Executors: four fresh GPT-5.6 Sol no-skill
arms. No installed skill was read, invoked, or imitated.

## F1.1 — Required question grammar was not met

The contract requires every question block to use `Question <Q>`, contiguous
numbered options, one substantive recommendation, and a final `Other` option.
The missing option/recommendation is a substantive interaction-contract failure,
not a stylistic preference.

- Flow 1's Question 1 is only: “Who is the primary user for this handoff, and
  how quickly must it be useful?”; Questions 2 and 4 are likewise bare. Its
  gate Questions 3 and 5 end at option `2. Revise ...`; neither supplies
  `Other` or marks a recommendation.
- Flow 2's Question 7 is bare (“Which empty-state tone should the plan use?”),
  and Question 8 ends with `2. Stop at handoff without review.`
- Flow 3's Question 13 is bare (“What does "fully offline" cover?”), and
  Questions 12 and 14 contain only the two approval/revise options.
- Flow 4's saved Question 1 has options 1–3 but no recommended option and no
  final `Other`.

## F1.2 — Required durable consultation-state schema was not kept current

Every sitting must leave **Brief**, all four quadrant sections, **Decisions**,
and **Next step** current.

- Flow 1's final state has `## Confirmed territory facts`, `## Decisions`,
  `## Open questions`, `## Draft`, and `## Review`; it has no Brief, no
  `Unknown knowns`, `Known unknowns`, or `Unknown unknowns`, and no `Next
  step`.
- Flow 4's fresh state has `## User goal`, `## Confirmed context`,
  `## Consultation boundaries`, `## Open issues`, and `## Conversation`; it
  has neither the required quadrants nor Decisions/Next step.

Flows 2 and 3 do preserve the complete required state structure.

## F1.3 — Completed plans lack the required section set

The required plan sections are outcome, context, decisions, approach,
constraints, references, out-of-scope, and risks.

- Flow 1's plan uses `## Outcome`, `## Scope`, `## Product behavior`, `## Data
  and logic changes`, and `## Risks and implementation notes`; it has no
  required Context, Decisions, Approach, Constraints, or References sections.
- Flow 2's plan has `## Outcome`, `## Product and content decisions`, `##
  Implementation plan`, `## Acceptance criteria`, and `## Validation handoff`,
  but no required Context, Constraints, References, Out of scope, or Risks
  sections. Its lone inline mention of `references/tone-cards.md` is not the
  required References section.

Flow 3's plan contains all eight required sections.

## F1.4 — Completed flows lacked a safe, copyable downstream handoff

The completed consultation must finish with one copyable fenced handoff prompt
whose plan path is absolute and safe. None of flows 1–3 provides that artifact.

- Flow 1's `handoff.md` says `Use \`plan.md\` as the complete implementation
  plan.` It is prose, has no copyable fence, and names only a relative path.
- Flow 2 ends state with `Hand off the approved \`plan.md\` for implementation.`
  It creates no handoff artifact or fenced prompt and uses a relative path.
- Flow 3's `## Handoff` says `Implementation source:
  \`outputs/consultant-home/offline-export/plan.md\`.` It is unfenced and
  relative, not absolute.

## Passed unaided

- Territory and state were inspected before questions, and state was saved
  before every applicable next question.
- Named resumes touched only the named consultation; a fresh request created
  fresh state without altering the unrelated existing consultation.
- Mixed approval plus substantive information did not dispatch a reviewer.
- Reviewers received only the complete plan and explicitly named references,
  never consultation state.
- Blocker revision, the five-review ceiling behavior exercised by the flows,
  and review acceptance control were respected.
- No product implementation was performed.
- All executors used allowed GPT-5.6 Sol; no Claude or Fable model was invoked.
