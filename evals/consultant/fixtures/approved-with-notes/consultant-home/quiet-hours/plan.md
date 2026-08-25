# Outcome

Let a Northstar Alerts workspace suppress optional digest notifications during
one daily quiet-hours interval without delaying critical alerts.

# Context

The workspace already stores one IANA timezone and classifies notifications as
optional digests or critical alerts.

# Decisions

- Use one workspace-wide start and end time.
- Interpret both times in the stored workspace timezone.
- Deliver critical alerts immediately during quiet hours.

# Approach

Add quiet-hours fields to workspace settings, validate a complete daily
interval, and consult the saved interval before sending an optional digest.

# Constraints

- No per-user schedules.
- No new notification classes.
- No suppression of critical alerts.

# References

None.

# Out of scope

- Calendar exceptions, holidays, and multiple intervals.

# Risks

- Daylight-saving transitions must use the workspace timezone rules rather
  than a fixed UTC offset.
