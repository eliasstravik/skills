# skill-issue — no-skill failures, round 4

Independent judge: GPT-5.6 Terra. Executors: four fresh GPT-5.6 Sol no-skill
arms. Only failures distinct from the first nine preserved classes appear.

## F4.1 — A Details rule is not earned

Affected eval: 1. Severity: medium.

Verbatim final-artifact evidence:

> `- Do not invent changes, links, or claims absent from the inspected evidence.`

Verbatim bare-core evidence:

> `Only those two failures may earn depth beyond the bare core.`

> `- A5 because the draft dropped issue links from commit messages.`
>
> `- A6 because the agent rationalized publishing after approval.`

The extra prohibition addresses neither failed assertion and restates the
evidence-only core. This differs from F1.3, which concerns earned depth placed
outside Details.

## F4.2 — Recipe items bundle multiple imperative actions

Affected evals: 1, 4. Severity: medium.

Verbatim final-artifact evidence:

> `1. **Resolve the range.** Identify the exact commit range requested. If it is`
>
> `missing or ambiguous, stop and ask the user to resolve it.`

> `4. **Obtain approval.** Show the complete draft, exact range, and proposed`
>
> `output path. Do not write until the user explicitly approves them. If the`
>
> `user requests changes, revise the draft and obtain approval again.`

> `2. Choose source families. When the claim concerns law, standards, software,`
>
> `company facts, or science, read \`references/source-policy.md\` to select the`
>
> `required primary source family and produce its selection fields. If that`
>
> `file cannot be read, stop and ask the user to provide it; do not substitute`
>
> `secondary sources or continue the research.`

A Recipe allows one imperative action per number. These entries combine main
actions with stopping, asking, revising, re-approval, reading, producing, and
prohibiting work. This differs from F2.1's nested sub-bullets.

## Contamination

None. Raw streams show only run-local fixture reads and writes. Every executor
reported `Skills invoked: none`.
