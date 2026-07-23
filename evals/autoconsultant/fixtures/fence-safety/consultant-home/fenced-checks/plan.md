# Outcome

Normalize surrounding whitespace while preserving literal fenced examples.

# Context

The repository contains one small helper and unittest.

# Decisions

- Preserve the exact verification snippet in the Automake Optimizer.
- Keep one focused candidate.

# Approach

Clarify normalization behavior and tests.

# Constraints

- Dependency-free.
- Do not weaken existing checks.

# References

- `references/verification-fences.md`

# Out of scope

Markdown rendering, syntax highlighting, and new parsing dependencies.

# Risks

An unsafe outer handoff fence could truncate the embedded approved artifacts.
