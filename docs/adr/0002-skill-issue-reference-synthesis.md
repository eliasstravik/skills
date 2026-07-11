---
status: proposed
---

# Build skill-issue as a single-file reference synthesis

Create `skill-issue` as a decision-ordered reference for authoring agent skills. Synthesize Anthropic, OpenAI/Codex, Vercel, Matt Pocock, obra/superpowers, and the agentskills.io specification into one self-contained `SKILL.md`. Make the file its own primary example: it should obey the structural, writing, compression, testing, and portability rules it teaches wherever those rules apply to a user-invoked reference skill. Order the guidance around the decisions an author faces: whether a skill should exist, how to match its form to the work, how it is invoked, how to write operational instructions, how to test it, and how to ship it portably. Preserve broadly pretrained vocabulary such as predictability, baseline, pressure test, ratchet, and the 80/20 rule, but rewrite the synthesis in the repository's imperative house style rather than inheriting any source's private lexicon. Write the behaviorally complete version within 500 body lines, then retain only the 20-100 lines that preserve all critical behavior and at least 80% of demonstrated value. Use `disable-model-invocation: true` because the repository presents `skill-issue` as a user-invoked mode, while explaining that this and similar controls are vendor extensions. Teach proportionate, type-matched evidence: a no-skill baseline for every new skill, pressure scenarios for discipline, separate trigger and guidance tests for model-invoked skills, and real with/without comparisons for reference skills. Accept the known strict-validator error for the documented invocation extension, but no other validation errors.

## Considered Options

- A workflow or iterative authoring loop: rejected because the durable need is a compact reference that informs judgment, not phase machinery.
- Bundled evaluation scripts and a viewer: rejected because deterministic tooling is unnecessary for this repository's intended use and would dominate the skill's surface area.
- A Pocock-faithful vocabulary: rejected because private terminology would increase learning cost and conflict with the repository's vocabulary discipline; retain only useful cross-source terms.
- Multiple files with progressive disclosure: rejected because the guidance is one coherent decision path and fits below the single-file budget; split only if future distinct branches earn it.
- Portable-only frontmatter: rejected because user invocation is a binding house convention; document the extension and its no-op behavior instead of hiding the trade-off.
