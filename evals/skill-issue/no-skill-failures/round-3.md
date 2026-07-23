# skill-issue — no-skill failures, round 3

Independent judge: GPT-5.6 Terra. Executors: four fresh GPT-5.6 Sol no-skill
arms. Only failures distinct from F1.1-F1.5 and F2.1-F2.2 are preserved.

## F3.1 — User-invoked descriptions are imperative

Affected evals: 1, 2. Severity: medium.

Verbatim final-artifact evidence:

> `description: Draft and, after approval, write an Orbit Ledger release note for an explicit commit range.`

> `description: Prepare an approved deployment note from a supplied deployment record.`

Descriptions are third person; user-invoked skills use a short index line.
`Draft` and `Prepare` are imperative commands. This differs from F1.5's
model-invoked capability summary.

## F3.2 — Shipping lacks recorded frontmatter validation

Affected evals: 1, 2, 3, 4. Severity: medium.

Verbatim execution evidence:

> `Validation: all links exist; \`git diff --check\` passed.`

> `Validation: six steps confirmed, body under 100 lines, no whitespace errors.`

> `wc -l workspace/skills/release-note/SKILL.md && sed -n '1,999999p' workspace/skills/release-note/SKILL.md && git status --short -- workspace && git diff -- workspace/skills/release-note/SKILL.md`

> `wc -l -c workspace/skills/deploy-note/SKILL.md; sed -n '1,'"'$p'"' workspace/skills/deploy-note/SKILL.md; git status --short -- workspace; git diff -- workspace`

Neither `agentskills validate` nor a manual frontmatter verification was
recorded. Counts, links, steps, and whitespace do not verify required
frontmatter shape and description discipline.

## Contamination

None. Raw streams show only run-local fixture reads, writes, and validation.
Every executor reported `Skills invoked: none`.
