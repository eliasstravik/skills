# Outcome

Expose a clear due/not-due reminder status while preserving the existing
30-minute rule.

# Context

`notifier.py` already owns the boundary calculation.

# Decisions

- Add one formatting helper.
- Preserve `reminder_due`.

# Approach

Format the existing boolean result as explicit status text.

# Constraints

- Dependency-free.
- Change only `notifier.py` and its tests.

# References

- `references/message-contract.md`

# Out of scope

Scheduling, delivery, storage, and configuration.

# Risks

Wording could imply that a notification was sent when it was only due.
