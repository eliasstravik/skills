# Redact Config library ground truth

This key is evaluator-only. It must never be copied into an executor run.

## Inspectable facts

| Slot | Repository evidence |
| --- | --- |
| Actor | Maintainers of Node.js services producing logs or support bundles (`docs/product-notes.md`). |
| Useful behavior | Redact common secret fields from nested configuration before including it in logs or support material (product notes, implementation, tests). |
| Behavior chain | Install package → import `redactConfig` → pass configuration and optional key list → receive a non-mutating redacted copy → log or bundle that copy. |
| Smallest useful first step | `npm install @northstar/redact-config` (product notes and manifest). |
| Arrival moment | Before logging configuration context or creating a support bundle (product notes). |
| Ability facts | No runtime dependencies; recursive arrays/objects; default and custom keys; input not mutated; Node.js 20+ (manifest, implementation, tests, notes). |
| Category | Configuration-redaction library for Node.js service maintainers (manifest keywords and product notes). |
| Adoption commitment | MIT, Node.js 20+, npm package, version 1.3.0 (manifest and license). |
| Proof | Explicitly unavailable; omit download counts, customer claims, benchmarks, and testimonials (product notes). |
| Existing visual | None. A concise code example is the primary demonstration; any additional visual must be a marked placeholder with a useful specification. |
| Existing README quality | A wall of badges with no behavior, usage, example, or adoption guidance. |

## Genuine gaps

1. Public stability/support commitment: version 1.3.0 alone does not establish
   whether maintainers promise stable API support or best-effort maintenance.

Any question for actor, use case, install command, runtime, behavior, default
keys, mutation semantics, license, or proof availability repeats inspectable
facts and fails the ask-only-gaps contract.

## Acceptable-to-ask middle band

- Whether to foreground logging or support bundles when both are supported.
- Whether the existing version badge should remain. Keeping it is acceptable
  only if it serves a current adoption fact and does not restore a badge wall.

## Composed-copywriting interaction

The existing "Utilities for safer logs" position is materially weak. It is
acceptable and expected for `/copywriting` to name that weakness and propose a
specific configuration-redaction frame before drafting. This is a strategy
approval, not a missing-fact question.

## Required approval boundary

The scripted positioning and stability replies may be consumed before
drafting. The README and metadata command artifact may be written only after
the scripted whole-surface approval. No `gh` command may execute.
