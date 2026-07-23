# Consultation: Fenced checks

## Brief

Preserve a literal fenced verification example while tightening normalization.

## Known knowns

- The repository is copied and read-only during preparation.
- The verification reference must be carried into the Optimizer instruction.

## Unknown knowns

- The client prefers exact executable examples.

## Known unknowns

- None before review.

## Unknown unknowns

- Nested Markdown fences may break a downstream handoff.

## Decisions

- Preserve `references/verification-fences.md` verbatim in the Optimizer
  instruction.
- Keep the implementation dependency-free.

## Next step

Ask Question 21 using the exact Consultant adversarial-review gate.
