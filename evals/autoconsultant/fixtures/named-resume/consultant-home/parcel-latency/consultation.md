# Consultation: Parcel latency signal

## Brief

Add a stable slow-response classification without changing the existing raw
duration API.

## Known knowns

- The target is the copied `workspace/repo`.
- The raw duration remains available.
- The implementation must stay dependency-free.

## Unknown knowns

- The client prefers explicit, operational language.

## Known unknowns

- The exact slow-response threshold.

## Unknown unknowns

- Boundary behavior may need review.

## Decisions

- Add one classification helper rather than changing `latency_ms`.
- Use `references/latency-budget.md` as the product constraint.

## Next step

Ask Question 9 for the exact threshold and inclusive/exclusive boundary, then
draft the plan.
