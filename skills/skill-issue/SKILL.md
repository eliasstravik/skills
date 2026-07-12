---
name: skill-issue
description: Workflow for designing and testing predictable agent skills from observed behavior.
disable-model-invocation: true
---

# Build Skills That Change Behavior

A skill earns its load by making an agent's process predictable, even when outputs vary. For an existing skill, rerun the section 1 baseline against the current version and re-enter at the earliest section whose completion no longer holds.

## 1. Establish need

- Run representative no-skill baselines until an additional run surfaces no new distinct failure; preserve each distinct failure verbatim.
- Write one checkable assertion per required behavior and preserved failure; mark severe or contractual ones critical — later gates measure against this suite.
- If representative no-skill baselines pass every required assertion, do not build the skill; otherwise name the behavioral delta the material observed failures require.
- Put cross-task rules in always-loaded project context; handle non-repeatable work directly.
- Keep one cohesive job per skill; split when a distinct job needs independent invocation. Keep branch-only context in linked files read on demand; use a real context boundary (a separate agent context, e.g. a forked subagent) only when observed premature completion requires it.

Completion: record the baseline evidence, the assertion suite with critical markings, the required delta, and skill-versus-context placement.

## 2. Match form to work

Choose the content form first:

- `Steps`: ordered actions when sequence changes behavior; render as a numbered list, one action per number.
- `Reference`: co-located rules, definitions, examples, or parameters consulted on demand; render as one heading or table row per lookup term.
- `Combined`: steps in the main path with reference at its point of use or behind conditional pointers.

Add only behavior patterns that earn their load:

- `Branch`: when behavior varies by condition, map each condition to instructions and define precedence where conditions overlap; render as condition -> action rows.
- `Exhaustive review`: when omissions matter, define the complete item set and require an outcome or not-applicable reason for every item; render as a checkbox list over the complete set.
- `Template`: when output shape matters, define required fields and order; require exact text only when exactness changes behavior; render as a fenced skeleton with placeholder fields.
- `Candidate selection`: when first-answer anchoring hurts quality, generate divergent candidates to an explicit minimum count, then apply a rubric, deduplicate, and select; render generation and rubric as separate numbered steps.
- `Tournament`: when absolute scores stop discriminating or self-preference inflates them, judge candidate pairs with a forced, reasoned winner; keep one absolute floor; render as pair -> winner -> reason rows.
- `Verification`: when correctness or unsupported claims are the risk, inventory claims, define evidence, disposition each claim — self-produced output across a real context boundary — and skeptically review; unresolved material claims block approval or become explicit risks. Render as a claim -> evidence -> disposition table with a closed disposition set.
- `Decomposition`: when items are separable, give each the same contract and merge them against an exhaustive criterion; render the per-item contract once as a fenced template.
- `Ratchet`: when measurable iteration should improve a result, preserve best-known state, restate invariants inside the loop body, cap iterations, and stop on an observable condition; render as `Repeat until <condition>, max N:` over a numbered body.

Compose the fewest patterns covering required behavior. Render each selected pattern as structure the agent must fill — per-item outcomes, decision rows, output skeletons — not prose describing coverage. Use a script or tool for exact transformation, a real context boundary for isolation, and parallel workers only when concurrency earns its coordination cost.

Completion: selected forms cover the required behavior without unused machinery.

## 3. Design invocation and context

- Use model invocation when the agent must discover the skill; use user invocation when the human can be the index.
- Treat discovery, loading, and authority to act as separate decisions; invocation never grants extra authority.
- For model invocation, treat name and description as the complete trigger before the body loads.
- Write model-facing descriptions in third person; front-load decisive terms and concrete phrases users actually say for each genuine branch; add near-misses only to sharpen a tested boundary.
- Keep workflow summaries out of model-facing descriptions; make user-facing descriptions short index lines.
- Start with one `SKILL.md` and keep common guidance inline; add a linked resource only when a distinct branch needs depth most runs do not, and state when to read it and what to apply. Keep each meaning in one place and beside its rules and caveats.
- Bundle a script when work must be deterministic or agents repeatedly recreate it; state when to run it, its output, acceptance evidence, and the fallback when the script or its runtime is unavailable. Execution does not load the script's source into context; keep instructions the agent must follow in `SKILL.md`.
- Use assets as output ingredients and keep selection logic in `SKILL.md`.

This package uses `disable-model-invocation: true` to stay user-invoked; in clients that ignore that flag, install it only when unintended model discovery is acceptable.

Completion: the intended trigger boundary and each resource's load condition are written down as routing cases for section 5.

## 4. Write operational instructions

For each ordered step, make `input -> action -> output or state -> completion criterion` unambiguous.

- Use imperative, second-person prose and a stable sequence.
- Constrain genuine judgment with named criteria.
- Make criteria checkable and exhaustive when omissions matter.
- Sharpen a vague criterion first; split across a real context boundary only when it remains fuzzy and observed runs rush ahead.
- Use positive instructions for shaping; for discipline failure, pair a prohibition with the intended action and counter the baseline rationalization.
- Use a pretrained leading word (e.g. `ratchet`, `triage`) when it collapses repeated guidance, then reuse it consistently.
- State each output contract once, where the agent uses it.
- Add one example only when it changes behavior.

Completion: every step in the drafted skill names its input, action, output or state, and a checkable completion criterion.

## 5. Test and refine

- Run the same real task with and without the full skill text, each in a fresh context that has not otherwise seen the skill; include the prior version when one exists.
- Hold controllable prompt, tool, file, model, and context variables constant; record unavoidable differences, isolate runs from other installed skills, and repeat when variance matters.
- Judge treatment against control pairwise with a forced, reasoned winner, from a context that produced neither run.
- Test routing separately with substantive triggers and close near-misses; test body quality under direct invocation.
- For reference or technique skills, score artifacts against every applicable rule and record omissions or violations.
- Test each selected pattern against the property its section 2 when-clause promises; test a `Steps` form for sequence.
- For discipline skills, combine at least three realistic pressures (urgency, sunk cost, authority endorsing the shortcut) without easy escape; preserve the rationalization, correct its smallest cause, and rerun the identical scenario.
- Rerun every affected case after an edit and confirm the correction still beats no guidance.

Completion: across predefined representative runs, treatment beats control in pairwise judgment and every critical assertion passes.

## 6. Compress and ship

- Freeze the comparison suite and its critical markings before compression. Treat 500 body lines and 1,024 description characters as maximum full-version budgets, not padding targets.
- The compact version targets 5-20% of the passing full draft's body lines (typically 20-100) and 40-200 description characters; require 100% of critical assertions and at least 80% of all prior passing assertions. For a new skill, compare with its first behaviorally passing full draft. Never pad to reach a lower bound.
- Delete sentences that do not change behavior; remove duplication, sediment, sprawl, and branch-only material from the main path.
- Retain a sentence only when deleting it regresses a predefined assertion or routing case; record that regression.
- Use portable frontmatter: required `name` and `description`; optional `license`, `compatibility`, `metadata`, and experimental `allowed-tools`. Put client-specific data under `metadata` when possible.
- Match `name` to its directory; use 1-64 lowercase letters, numbers, or single hyphens with no leading or trailing hyphen; quote frontmatter values containing a colon.
- Treat `disable-model-invocation`, `context: fork`, `$ARGUMENTS`, and dynamic shell injection as extensions; document effect and fallback, and keep load-bearing behavior in Markdown.
- Prefer `.agents/skills/` for cross-client discovery; keep resources beside `SKILL.md` and link them relatively.
- Run `agentskills validate <skill-directory>` from `skills-ref`, the Agent Skills spec's reference implementation (agentskills.io); if it is unavailable, check frontmatter and naming against the rules above and record that validation was manual. Fix every error except a deliberately documented extension failure, then verify every claimed client.
- Rerun the no-skill baseline as models improve; retire skills whose behavioral delta disappears.

Completion: ship the compact version when all pass — behavior comparisons; package validation (or a recorded manual check); routing tests for model-invoked skills; client checks for every claimed client.
