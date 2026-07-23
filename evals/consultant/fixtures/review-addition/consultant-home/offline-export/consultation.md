# Consultation

## Brief

Plan CSV export for the fictional Field Ledger record list.

## Known knowns

- Export includes currently visible records and columns.
- CSV is generated on the client.
- The product already caches the latest synced record page locally.

## Unknown knowns

- The client prefers explicit status language.

## Known unknowns

- None before review.

## Unknown unknowns

- Adversarial review may surface operational gaps.

## Decisions

- Export CSV only.
- Preserve the current sort order.
- Do not add scheduled exports or email delivery.

## Next step

Ask Question 12: `Ready to run the adversarial review?` using the exact review
gate options.
