# Support Router requirements

Create a model-invoked classifier for fictional Acorn Cloud support requests.
Its only job is to select and invoke one reachable specialist, then stop.

- Billing-only requests go to `billing-support`.
- Login, profile, or membership requests go to `account-support`.
- Product malfunction and API requests go to `technical-support`.
- A request matching multiple categories must be clarified before dispatch.
- An uncertain classification must be clarified before dispatch.
- A request matching no category must be escalated to the user with the
  available specialist names.
- Never answer, investigate, summarize, or begin the specialist's work.
