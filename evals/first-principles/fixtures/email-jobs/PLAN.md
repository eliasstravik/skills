# Background jobs — status

Six months in. We built **pgq**, our own job queue on Postgres:

- a scheduler process that polls the `jobs` table every 500 ms
- leader election between schedulers using advisory locks
- retries with an exponential backoff table, and a dead-letter table
- an admin UI to inspect and replay jobs (two months of work, 80% done)

The only jobs today are transactional emails (receipts, password resets),
sent through our email provider's HTTP API.

## Open problems

- Duplicate sends: if a worker crashes after the provider accepts the email
  but before the job is marked done, the email is sent again on retry. Seen on
  about 0.3% of jobs.
- Leader election flaps during deploys; jobs stall for up to two minutes.
- No metrics yet.

## Decision log

- March: the team voted to stay on pgq rather than switch, because so much of
  it is already built.
