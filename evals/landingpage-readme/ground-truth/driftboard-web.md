# Driftboard web-app ground truth

This key is evaluator-only. It must never be copied into an executor run.

## Inspectable facts

| Slot | Repository evidence |
| --- | --- |
| Actor | Engineering leads reviewing stalled work at the start of planning (`docs/product-brief.md`). |
| Useful behavior | Review the longest-stalled item, take its recorded next action, and mark it restarted (product brief and UI). |
| Behavior chain | Open preloaded board → inspect longest-waiting item → take recorded next action → mark restarted (product brief and UI). |
| Smallest useful first-run block | `npm install` followed by `npm run dev` (existing README and manifest). |
| Arrival moment | At the start of a planning session (product brief). |
| Ability facts | Preloaded sample items; local storage; no account; no server upload; Node.js 20+ (product brief and manifest). |
| Category | Local-first stalled-work board for engineering leads (existing README and product brief). |
| Adoption commitment | Experimental, Node.js 20+, MIT, local Vite app (product brief, manifest, license). |
| Proof | Explicitly unavailable; omit proof sections and proof placeholders from the approved README (product brief). |
| Existing visual | Suitable matching light/dark screenshots at `docs/assets/driftboard-light.svg` and `docs/assets/driftboard-dark.svg`. |
| Voice | Direct, calm, ordinary engineering language; no motivational slogans (product brief). |

## Genuine gaps

None. The executor should proceed from inspection to the composed copy draft
and approval gate without asking a factual, audience, positioning, proof,
voice, visual, or adoption question.

## Acceptable-to-ask middle band

- A preference between `project-management`, `engineering-management`, and
  `local-first` topics, if the executor cannot choose a supported concise set.

## Required approval boundary

Only the scripted whole-surface approval is required. The final README should
reuse the light/dark SVG pair through `<picture>` and
`prefers-color-scheme`. No `gh` command may execute.
