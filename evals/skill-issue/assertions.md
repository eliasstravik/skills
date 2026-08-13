# skill-issue — assertion suite

Each contractual behavior has one checkable assertion. **(critical)** marks a release-blocking failure.

## Behavioral assertions

- **A1 (critical) — All-derivable proposals fail admission.** Eval 1 returns a clear rejection because none of the six survivor categories is present; it does not admit the proposal merely because the topic is useful.
- **A2 (critical) — Rejection produces no skill.** Eval 1 writes `output/rejection.md` and creates no `SKILL.md` anywhere under `output/`.
- **A3 (critical) — Artifact and process are distinguished by ownership.** Eval 2 classifies the required-output specification as an Artifact SOP named `incident-report` and the recurring cross-step workflow as a Process SOP named `incident-reporting`.
- **A4 (critical) — Lifecycle naming drops management.** Eval 3 classifies the entity-through-state-changes proposal as a Lifecycle SOP named `customer-context`, not `customer-context-management`.
- **A5 (critical) — Authored skills use the mandatory section contract.** Eval 4 creates `output/client-update-policy/SKILL.md` with exactly one H2 each for Trigger, Scope, Inputs, Roles, Procedure, Outputs, Exceptions, QC, and References, in that order; no required section is omitted.
- **A6 (critical) — Derivable lines are removed.** Eval 4 preserves the brief's internal 4 p.m. cutoff, Amber owner, named escalation, and approval rule while omitting competence content. Judgment anchor: canonical lines that must be absent include “write clearly,” “check spelling,” and “use active voice,” including close paraphrases that add no local contingency.
- **A7 (critical) — Policy type and name conform.** Eval 4 uses `name: client-update-policy`, identifies or embodies the Policy/standards type, and contains only a compliance procedure rather than inventing a domain work product.
- **A8 (critical) — Bulky non-derivable material overflows to references.** Eval 5 keeps the complete internal field registry in a file under `output/case-intake/references/` and points to it from the main SOP instead of duplicating the registry there.
- **A9 (critical) — Deterministic operations overflow to scripts.** Eval 5 implements the exact validation rules in a reusable file under `output/case-intake/scripts/`; retained runs show success for `valid.json`, queue and severity failures for `invalid.json`, required-field failure for `invalid-missing.json`, case-ID failure for `invalid-case-id.json`, and nonzero failure when no path argument is supplied. The programmatic checker also removes each required field from the valid fixture in turn and confirms every variant fails for that field; it exercises every allowed queue and severity value plus invalid types/ranges and valid/invalid case-ID boundaries.
- **A10 (critical) — Overflow preserves the SOP shell.** Eval 5's main `SKILL.md` has the nine required H2 sections in order, points to both overflow files without duplicating their contents, and stays within the 500-line vendor ceiling.

## Eval coverage

| Eval | Assertions |
| --- | --- |
| 1 — reject derivable git skill | A1, A2 |
| 2 — artifact vs process naming | A3 |
| 3 — lifecycle drops management | A4 |
| 4 — author nine-section policy | A5, A6, A7 |
| 5 — overflow reference and script | A8, A9, A10 |

Baseline purity, transcript presence, source integrity, and run-directory isolation are run-admissibility gates rather than skill-behavior assertions.
