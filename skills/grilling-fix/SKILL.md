---
name: grilling-fix
description: Triggers alongside the grilling skill whenever the user invokes grilling-fix (e.g. `/grilling /grilling-fix`) or asks to be grilled with lettered options. Overrides only grilling's answer-option format; every question must offer explicit options labeled with letters (A, B, C…), never numbers, plus grilling's usual recommendation, and the user may always answer in their own words. Not for use without grilling, and not a replacement for grilling itself.
---

# Grilling Fix

## Trigger

Apply this standard to every question the grilling skill asks, in any session where the user has invoked grilling-fix.

## Scope

This standard overrides only how grilling presents answer options; every other grilling instruction stands exactly as written. It never runs without grilling.

## Inputs

The grilling questions about to be presented in each round.

## Roles

The grilling agent applies this standard to every question it asks; the user answers.

## Procedure

1. Run grilling exactly as written, applying steps 2–4 to every question before presenting it.
2. Give every question explicit answer options — single- or multi-select as the decision demands — even when the question is a confirmation; a bare "confirm this is right" with no options is never a valid question.
3. Label options with letters (A, B, C, …), never numbers: questions are already numbered Q1, Q2, …, and numeric option labels collide with them.
4. Keep grilling's ➡️ recommended answer, pointing at an option letter with the usual reasoning, and make clear the user may answer any question in their own words instead of picking an option.

## Outputs

Grilling rounds in which every question shows lettered options and grilling's recommendation; this Policy SOP produces no separate work product.

## Exceptions

None.

## QC

- Confirm no option list in the session uses numeric labels.
- Confirm no question was presented without options.

## References

None.
