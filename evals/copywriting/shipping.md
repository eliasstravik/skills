# copywriting - shipping approval packet

Date: 2026-07-24. Ticket: [ELI-254](/ELI/issues/ELI-254). Follow-on install
ticket: [ELI-255](/ELI/issues/ELI-255).

## Decision requested

Approve the current `/copywriting` shipping candidate for install in
[ELI-255](/ELI/issues/ELI-255), or reject with the scope change required before
install.

## Candidate summary

- Shipping skill path: `skills/copywriting/SKILL.md`.
- Active primitive: one `## Switch`.
- Earned Details: 4 customer-language/voice lines tracing to the C10/C11
  bare-core failure.
- No Calls or shipped references.
- Description optimizer `best_description` is applied verbatim:
  `User-invoked workflow for truthful audience-facing commercial copy.`

## Validation summary

- Full paired benchmark iteration 3: with-skill 43/43 active assertions,
  without-skill 41/43.
- Preserved need signal: no-skill eval 6 still failed C10/C11 by copying
  distinctive customer language; with-skill eval 6 passed C10/C11.
- All 16 C1 model/isolation checks passed in iteration 3.
- Trigger optimization: GPT-5.6 Luna scored train 12/12 and held-out test 8/8;
  `best_description` stayed unchanged.
- Static viewer: uploaded to [ELI-254](/ELI/issues/ELI-254) for review as
  [copywriting final full iteration static viewer](/api/attachments/12ca3c75-aff5-4ce4-9c99-cd2898f4beda/content).

## Scope note for approver

The broad approved eval corpus passed as regression coverage, but the
evidence-earned behavioral improvement is narrow: customer-language
transformation in social/content/newsletter/voice-led public copy. The approval
decision should explicitly accept or reject shipping the current broad
user-invoked `/copywriting` core with only that narrow earned Details section.

No global install has been run. Install remains deferred to
[ELI-255](/ELI/issues/ELI-255) after approval.
