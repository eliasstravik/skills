---
name: skill-issue
description: Reference for designing and testing predictable agent skills from observed behavior.
disable-model-invocation: true
---

# Build Skills That Change Behavior

A skill earns its load by making an agent's process predictable, even when outputs vary.

## 1. Establish need

- Run representative no-skill baselines enough times to expose relevant variance; preserve each distinct failure verbatim.
- Name the behavioral delta and mark severe or contractual failures as critical.
- If representative no-skill baselines pass every required assertion, do not build the skill. Otherwise continue only when material observed failures establish a required behavioral delta.
- Put cross-task rules in always-loaded project context; handle non-repeatable work directly.
- Keep one cohesive job per skill; split when a distinct job needs independent invocation. Disclose branch-only context unless observed premature completion requires a real context boundary.

Completion: record the baseline evidence, required delta, critical assertions, and skill-versus-context placement.

## 2. Match form to work

Choose the content form first:

- `Steps`: ordered actions when sequence changes behavior.
- `Reference`: co-located rules, definitions, examples, or parameters consulted on demand.
- `Combined`: steps in the main path with reference at its point of use or behind conditional pointers.

Add only behavior patterns that earn their load:

- `Branch`: when behavior varies by condition, map each condition to instructions and define precedence where conditions overlap.
- `Exhaustive review`: when omissions matter, define the complete item set and require an outcome or not-applicable reason for every item.
- `Template`: when output shape matters, define required fields and order; require exact text only when exactness changes behavior.
- `Candidate selection`: when first-answer anchoring hurts quality, generate divergent candidates, then apply a rubric, deduplicate, and select.
- `Verification`: when correctness or unsupported claims are the risk, inventory claims, define evidence, disposition each claim, and skeptically review; unresolved material claims block approval or become explicit risks.
- `Decomposition`: when items are separable, give each the same contract and merge them against an exhaustive criterion.
- `Ratchet`: when measurable iteration should improve a result, preserve best-known state and invariants, then stop on an observable condition.

Compose the fewest patterns covering required behavior. Use a script or tool for exact transformation, a real context boundary for isolation, and parallel workers only when concurrency earns its coordination cost.

Completion: selected forms cover the required behavior without unused machinery.

## 3. Design invocation and context

- Use model invocation when the agent must discover the skill; use user invocation when the human can be the index.
- Treat discovery, loading, and authority to act as separate decisions; invocation never grants extra authority.
- For model invocation, treat name and description as the complete trigger before the body loads.
- Write model-facing descriptions in third person; front-load decisive terms and concrete phrases users actually say for each genuine branch; add near-misses only to sharpen a tested boundary.
- Keep workflow summaries out of model-facing descriptions; make user-facing descriptions short index lines.
- Start with one `SKILL.md` and keep common guidance inline; add a linked resource only when a distinct branch needs depth most runs do not, and state when to read it and what to apply.
- Keep each meaning in one place and beside its rules and caveats.
- Bundle a script when work must be deterministic or agents repeatedly recreate it; state when to run it, its output, and acceptance evidence. Execution does not load source.
- Use assets as output ingredients and keep selection logic in `SKILL.md`.

This package uses `disable-model-invocation: true` to stay user-invoked in supporting clients. Where ignored, install it only when unintended model discovery is acceptable.

Completion: routing results match the intended boundary, and branch-only resources load under their named conditions.

## 4. Write operational instructions

For each ordered step, make `input -> action -> output or state -> completion criterion` unambiguous.

- Use imperative, second-person prose and a stable sequence.
- Constrain genuine judgment with named criteria.
- Make criteria checkable and exhaustive when omissions matter.
- Sharpen a vague criterion first; split across a real context boundary only when it remains fuzzy and observed runs rush ahead.
- Use positive instructions for shaping; for discipline failure, pair a prohibition with the intended action and counter the baseline rationalization.
- Use a pretrained leading word when it collapses repeated guidance, then reuse it consistently.
- State each output contract once, where the agent uses it.
- Add one example only when it changes behavior.

Completion: the named artifact or state exists and satisfies its output contract and evidence criteria.

## 5. Test and refine

- Run the same real task with and without the full skill text; include the prior version when one exists.
- Hold controllable prompt, tool, file, model, and context variables constant; record unavoidable differences, isolate runs from other installed skills, and repeat when variance matters.
- Test routing separately with substantive triggers and close near-misses; test body quality under direct invocation.
- For reference or technique skills, score artifacts against every applicable rule and record omissions or violations.
- Test each selected pattern against its promised property: sequence, coverage, branch choice, evidence disposition, merge completeness, or stopping.
- For discipline skills, combine at least three realistic pressures without easy escape; preserve the rationalization, correct its smallest cause, and rerun the identical scenario.
- Rerun every affected case after an edit and confirm the correction still beats no guidance.

Completion: across predefined representative runs, treatment outperforms control and every critical assertion passes.

## 6. Compress and ship

- Apply the 80/20 rule: freeze the comparison suite before compression and mark critical assertions. Treat 500 body lines and 1,024 description characters as maximum full-version budgets, not padding targets.
- The 5-20% compact version targets 20-100 body lines and 40-200 description characters; require 100% of critical assertions and 80-100% of all prior passing assertions. For a new skill, compare with its first behaviorally passing full draft. Never pad to reach a lower bound.
- Delete sentences that do not change behavior; remove duplication, sediment, sprawl, and branch-only material from the main path.
- Retain a sentence only when deleting it regresses a predefined assertion or routing case; record that regression.
- Use portable frontmatter: required `name` and `description`; optional `license`, `compatibility`, `metadata`, and experimental `allowed-tools`. Put client-specific data under `metadata` when possible.
- Match `name` to its directory; use 1-64 lowercase letters, numbers, or single hyphens with no leading or trailing hyphen; quote frontmatter values containing a colon.
- Treat `disable-model-invocation`, `context: fork`, `$ARGUMENTS`, and dynamic shell injection as extensions; document effect and fallback, and keep load-bearing behavior in Markdown.
- Prefer `.agents/skills/` for cross-client discovery; keep resources beside `SKILL.md` and link them relatively.
- Run `agentskills validate <skill-directory>` from `skills-ref`; fix every error except a deliberately documented extension failure, then verify every claimed client.
- Rerun the no-skill baseline as models improve; retire skills whose behavioral delta disappears.

Ship when behavior comparisons and package validation pass, plus routing tests for model-invoked skills and client checks for every claimed client.
