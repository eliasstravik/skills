# Consultation

## Brief

Plan a quiet-hours schedule for the fictional Northstar Alerts workspace.

## Known knowns

- The workspace already stores one IANA timezone.
- Quiet hours suppress optional digest notifications only.
- Critical alerts remain immediate.

## Unknown knowns

- The client prefers one simple workspace-wide schedule.

## Known unknowns

- None before review.

## Unknown unknowns

- Adversarial review may find a safety or correctness blocker.

## Decisions

- Use the stored workspace timezone.
- Support one start and end time shared by all members.
- Never suppress critical alerts.
- Keep per-user schedules out of scope.

## Next step

Ask Question 4: `Ready to run the adversarial review?` using the exact review
gate options.
