# skill-issue — no-skill failures, round 1

Independent judge: GPT-5.6 Terra. Executors: four fresh GPT-5.6 Sol no-skill
arms. No Claude Code, Claude model, Fable 5, installed skill, live state,
external temporary directory, credential, or service was used.

## F1.1 — The sole core H2 is not the exact selected primitive

Affected evals: 1, 2, 3, 4. Severity: high.

Verbatim final-artifact evidence:

> `## Workflow`

> `# Deploy Note`
>
> `1. Inspect the supplied deployment record.`

> `## Ownership transfer`

> `Follow this sequence:`

The bare core requires an H1 and exactly one H2 whose text is the selected
primitive: Recipe for evals 1, 2, and 4; Router for eval 3.

## F1.2 — The Router core does not use the mandated Router table form

Affected eval: 3. Severity: high.

Verbatim final-artifact evidence:

> `| Exclusive request class | Transfer ownership to |`

> `## Safe fallback`

A Router requires a `Request | Skill` table containing overlap, uncertain, and
no-match fallbacks. The separate fallback section is not the mandated form.

## F1.3 — Failure-earned depth is not in one `## Details` section

Affected evals: 1, 2, 4. Severity: high.

Verbatim final-artifact evidence:

> `## Hard boundary`

> `3. Draft a note that includes the environment, version, result, and operator.`

> `2. Choose the applicable primary-source family. For a claim about law,`

The fixture evidence says these behaviors were earned only by bare-core
failures. They belong in one and only one `## Details` section rather than a
different H2 or the core.

## F1.4 — The Router bare core exceeds 20 body lines

Affected eval: 3. Severity: high.

Verbatim final-artifact boundary evidence:

> `## Ownership transfer`

> `## Safe fallback`

> `or begin any specialist work.`

The artifact has 33 body lines after frontmatter, while its evidence earns no
Details section.

## F1.5 — A model-invoked description summarizes capability

Affected eval: 3. Severity: medium.

Verbatim final-artifact evidence:

> `description: Routes fictional Acorn Cloud support requests to exactly one support specialist. Use when a request needs support ownership determined across billing, account, or technical support, including ambiguous and unmatched requests.`

Model-invoked descriptions contain observable triggering conditions and
exclusions only; the first sentence instead describes what the skill does.

## Contamination

None. Raw events show only run-local fixture reads and writes, and every
executor reported `Skills invoked: none`.
