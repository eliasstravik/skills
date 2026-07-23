# Outcome

Let a Field Ledger user export the currently visible record list as CSV.

# Context

The list already has filters, sorting, visible columns, and client-side access
to the latest synced page.

# Decisions

- Export only visible records and columns in current sort order.
- Generate CSV on the client.
- Show success or failure status after the action.

# Approach

Add one Export CSV action, serialize the visible rows with stable headers, and
download the file locally.

# Constraints

- No server export job.
- No scheduled delivery.
- No new dependency.

# References

- `references/export-contract.md`

# Out of scope

- PDF, spreadsheet, scheduled, emailed, or multi-page exports.

# Risks

- Large visible pages may require a practical row limit.
