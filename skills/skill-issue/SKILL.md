---
name: skill-issue
description: Workflow for designing, formatting, and testing agent skills around a strict-format core section and hard line budgets.
disable-model-invocation: true
---

# skill-issue

## Checklist

- [ ] **Baseline captured:** the task ran in fresh no-skill contexts until one more run surfaced nothing new; every distinct failure preserved verbatim. An existing skill baselined against its current version.
- [ ] **Need proven:** at least one preserved failure demands the skill; with zero failures, nothing built.
- [ ] **Assertion suite written:** one checkable assertion per required behavior and preserved failure; severe or contractual assertions marked **critical**.
- [ ] **Core primitive chosen:** exactly one row from the primitives table, picked by what the agent must *do*, not by topic.
- [ ] **Core written:** an H1 title plus one H2 bearing the primitive's name, holding only its mandated form, within **20 body lines**.
- [ ] **Core tested bare:** the same task run with and without it, in fresh contexts, judged pairwise — before any Details line existed.
- [ ] **Details earned:** every line in `## Details` traceable to an assertion the bare core failed; one section, **80 lines** maximum, **100 body lines** total.
- [ ] **Overflow externalized:** depth still needed past 100 body lines moved to linked reference files or bundled scripts, each with its read-or-run trigger named in Details.
- [ ] **Shipped clean:** all critical assertions passing; `agentskills validate` clean, or a manual frontmatter check recorded.

## Details

### Core primitives

Every skill opens with **exactly one primitive**; the core's H2 heading is the primitive's name. They map control flow and contracts onto markdown the way keywords map onto a language:

| Primitive | Analogue | Use when | Mandated form |
|-----------|----------|----------|---------------|
| **Checklist** | conjunction | conditions must all hold; order is free | `- [ ]` per condition, phrased as its passing state; every box gets checked or marked not applicable with a reason |
| **Recipe** | sequence | order changes the outcome | Ordered list; one imperative action per number; no sub-bullets |
| **Loop** | iteration | a recipe repeats toward an exit | `Repeat until <observable condition>, max N:` then an ordered body; prefer a validator check as the exit condition; invariants restated inside the body |
| **Decision** | branch | the situation selects the action | For 2-3 branches, bolded `**Question?** →` action lines inside a Recipe step; for many flat cases, a `Condition \| Action` table — conditions observable and mutually exclusive, earlier rows win; a multi-step action becomes a Call |
| **Handler** | exception | a step can fail in anticipated ways | `Failure \| Recovery` table; recovery verbs only retry, abort, compensate, or escalate to the user; fires only off the normal path |
| **Call** | function call | the work lives outside this file | A link with a disposition: `read <file> when <trigger>` or `run <script> to <outcome>`; one level deep; expected output and no-runtime fallback stated |
| **Rules** | invariant | constraints bind every action | Unordered list; one imperative rule per bullet; a prohibition only against an observed rationalization; a GFM alert only to raise one rule's salience |
| **Reference** | data | facts get looked up, not executed | Unordered fact list or `Term \| Meaning` table; no instructions |
| **Template** | type | output must have a shape | One fenced skeleton with `<placeholder>` fields; exact text only where exactness changes behavior |
| **Example** | test case | style or detail only a concrete instance conveys | Paired fenced input and output blocks, one filled instance; complements a Template, never replaces it |
| **Rubric** | evaluator | quality must be judged | `Criterion \| Standard` table; every standard checkable; one absolute floor |

**Grammar follows the primitive:** boxes state conditions as *already true*, numbers *command* actions, Rules bullets *command*, Reference bullets *declare*, standards *measure*, Examples *demonstrate*, Calls *defer*, Handlers *recover*.

### Line budgets

- **Body** is every line after the frontmatter's closing `---`; headings and blank lines count.
- **Ceilings, never targets:** the platform maximum is 500 body lines — the core's 20 is 4% of it, the 100 total is 20%. Do not pad toward them.
- **One primitive per core.** A second structure the core genuinely needs (a Template a Recipe fills, a Rubric a Loop checks) lives in Details, rendered in its own primitive's mandated form.

### Writing Details

- **Every line earns its place:** a line that changes no behavior gets deleted, not kept as context.
- **Never restate the core:** Details adds only the definitions, criteria, conditions, and at most one Example the core needs to execute perfectly.

### Overflow, frontmatter, shipping

- **Overflow:** past 100 body lines, externalize through Calls — reference files for branch-only depth, scripts for deterministic work. Assets are output ingredients; selection logic stays in SKILL.md.
- **Frontmatter:** required `name` (matches directory; 1-64 lowercase letters, numbers, single hyphens) and `description` (third person; for model-invoked skills, triggering conditions only, never a workflow summary; for user-invoked skills, a short index line). Treat `disable-model-invocation`, `context: fork`, and `$ARGUMENTS` as extensions: document effect and fallback.
- **Testing:** fresh contexts that have never seen the skill, controllable variables held constant, treatment versus control judged with a forced, reasoned winner from a third context. Rerun the no-skill baseline as models improve; **retire** the skill when its delta disappears.
