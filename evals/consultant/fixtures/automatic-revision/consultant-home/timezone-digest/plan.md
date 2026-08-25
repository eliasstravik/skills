# Outcome

Let a Northstar Alerts workspace suppress optional digest notifications during
one daily quiet-hours interval without delaying critical alerts.

# Context

The workspace already stores one IANA timezone and classifies notifications as
optional digests or critical alerts.

# Decisions

- Use one workspace-wide start and end time.
- Interpret both times in the stored workspace IANA timezone.
- Deliver critical alerts immediately during quiet hours.

# Approach

Add quiet-hours fields to workspace settings. When the schedule is saved,
convert its start and end to the timezone's current fixed UTC offset, then use
that offset for later digest checks.

# Constraints

- No per-user schedules.
- No new notification classes.
- No suppression of critical alerts.

# References

None.

# Out of scope

- Calendar exceptions, holidays, and multiple intervals.

# Risks

- A fixed offset may differ from the workspace timezone after a
  daylight-saving transition.
