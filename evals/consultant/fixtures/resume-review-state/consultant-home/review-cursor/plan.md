# Outcome

Export Review Cursor rows as CSV without unbounded memory growth.

# Context

The service generates exports in one request and already reports explicit size
errors.

# Decisions

- Stream rows into a bounded buffer.
- Preserve CSV column order.

# Approach

Append encoded rows until the configured memory cap is reached. Oversized
export behavior remains a pending client decision.

# Constraints

- Stay dependency-free.
- Do not change the CSV schema.

# References

None.

# Out of scope

- Background jobs and persistent export history.

# Risks

- The plan does not yet define behavior when the memory cap is reached.
