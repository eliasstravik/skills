# skill-issue — no-skill failures, round 2

Independent judge: GPT-5.6 Terra. Executors: four fresh GPT-5.6 Sol no-skill
arms. Only failures distinct from F1.1-F1.5 are preserved here.

## F2.1 — A Recipe core contains sub-bullets

Affected eval: 2. Severity: medium.

Verbatim final-artifact evidence:

> `3. Draft a deployment note containing:`
>
> `   - environment`
>
> `   - version`
>
> `   - result`
>
> `   - operator`

A Recipe is a flat ordered list with one imperative action per number and no
sub-bullets. The note fields also belong in the earned Details section under
F1.3, but the nested Recipe form is an independent defect.

## F2.2 — Necessary overflow is not a linked one-level Call

Affected eval: 4. Severity: high.

Verbatim final-artifact evidence:

> `2. Choose source families: when the claim concerns law, standards, software, company facts, or science, read \`references/source-policy.md\` and use it to select the primary source family and required selection fields.`

Overflow requires a linked disposition of the form `read <file> when
<trigger>`, plus expected output and a no-runtime fallback. Inline code inside
a Recipe item is not a Call. Its placement outside Details is already F1.3;
the missing Call form is distinct.

## Contamination

None. Raw events show only run-local fixture reads, writes, and validation.
Every executor reported `Skills invoked: none`.
