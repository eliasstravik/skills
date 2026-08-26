# autoconsultant — description optimization

## 2026-08-26 issue #52 refresh

Issue #52 reran the frozen 20-query corpus after composing Consultant's scored,
bounded review state into Autoconsultant. The allowed-model substitute kept
skill-creator's 12-query train, 8-query held-out, three-pass, label-blind
contract. GPT-5.6 Luna compared the current description with two proposed
alternatives; all three scored 36/36 train and 24/24 held-out. The stable
tie-break retained the current description unchanged. GPT-5.6 Terra
independently scored it 20/20.

The retained text remains the verbatim `best_description` in
`skills/autoconsultant/SKILL.md`. No Claude Code, Claude model, or Fable model
ran. This section supersedes the earlier optimization records below.

## 2026-08-25 issue #50 refresh

Issue #50 reran the frozen 20-query corpus after updating Consultant's question
and review contracts. The allowed-model substitute preserved skill-creator's
12-query train, 8-query held-out, three-pass, label-blind contract. GPT-5.6
Luna proposed two alternatives beside the current description and ran three
independent routing passes. Every candidate scored 36/36 train and 24/24
held-out. GPT-5.6 Terra independently scored the selected candidate 20/20.

The stable tie-break retained candidate A. Its `best_description` is the
current description, unchanged, and is applied verbatim in
`skills/autoconsultant/SKILL.md`:

> Autoconsultant owns the approval-gated workflow that takes an ambiguous
> repository change through a persistent Consultant consultation and
> adversarial plan review, then prepares separately approved, independent
> Optimizer and Evaluator instructions plus one copy-paste-safe handoff for a
> fresh agent. It triggers when a request asks to combine consultation or plan
> approval with Automake or an evaluator-optimizer setup, preserve plan
> references, resolve ratchet limits or success conditions, or transfer
> execution to a new context; explicit `/autoconsultant` also triggers it. It
> does not own Consultant-only planning, Automake execution, prompt drafting
> without invocation, plan review without setup, implementation, testing, TDD,
> Git preflight, or generic workflow explanation.

No Claude Code, Claude model, or Fable model ran. This section supersedes the
historical form and frontmatter checks below.

## 2026-08-25 model-invocation update

Issue #48 replaced the explicit-only corpus with 20 frozen routing queries: 12
train and 8 held-out, with implicit positive requests, explicit
`/autoconsultant` coverage, and adjacent-workflow negatives. GPT-5.6 Luna
proposed three candidates and ran three label-blind routing passes. Selected
conforming candidate A scored 36/36 train and 24/24 held-out. Its
`best_description` is applied verbatim in `skills/autoconsultant/SKILL.md`.
The flag `disable-model-invocation` is absent. The 2026-07-23 record below is
historical and no longer defines invocation behavior.

Date: 2026-07-23. Process: skill-creator's seeded 60/40 trigger ratchet,
adapted from its Claude-only runner to Codex CLI to honor the client model
restriction. The autopilot-approved 20-query set used three runs per query.

## Outcome

`best_description` = **the existing description, unchanged**:

> Chains Consultant into an approved Automake setup and a copy-paste handoff
> for a fresh agent.

The text is already present verbatim in `SKILL.md`. All three GPT-5.6 Luna
passes scored 20/20: every explicit Autoconsultant activation selected the
skill, while Consultant-only and Automake-only requests, ordinary planning or
implementation, direct role-prompt drafting, plan review, explanations,
explicit do-not-invoke language, and unrelated similar words avoided it, for
60/60 correct decisions.

The ratchet stopped at iteration 1 because the first candidate had no failures,
so GPT-5.6 Sol was not called for a rewrite. GPT-5.6 Terra independently scored
20/20.

No Claude Code, Claude model, or Fable 5 was used.

## Manual frontmatter check

`agentskills validate` is unavailable on this machine, so the recorded
frontmatter check is limited to name and format:

- `name: autoconsultant` matches the directory and naming grammar. PASS
- `description` is present, is a single string, and matches
  `best_description` verbatim. PASS
- `disable-model-invocation: true` preserves the user-invoked contract. PASS
- Frontmatter has paired delimiters and unique required keys. PASS

## Manual skill-issue form check

- The body has 17 lines; the Recipe core has 12 lines before Details, and
  Details has 4 lines including its heading. PASS
- The body has one H1, one primitive H2 (`## Recipe`), and one earned
  `## Details` section. PASS
- Every Details line traces to A2 or A15 from the bare-core grade. PASS
- The body is within the 100-line ceiling and needs no overflow reference or
  script. PASS
