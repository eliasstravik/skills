# consultant — description optimization

## 2026-08-25 issue #50 refresh

Issue #50 reused the frozen 20-query corpus after replacing query 15's old
numeric review limit with the client-decision blocker threshold. The allowed
model substitute preserved skill-creator's 12-query train, 8-query held-out,
three-pass, label-blind contract. GPT-5.6 Luna proposed two alternatives beside
the current description and ran three independent routing passes. Every
candidate scored 36/36 train and 24/24 held-out. GPT-5.6 Terra independently
scored the selected candidate 20/20.

The stable tie-break retained candidate A. Its `best_description` is the
current description, unchanged, and is applied verbatim in
`skills/consultant/SKILL.md`:

> The Consultant skill is responsible for structured client consultation:
> inspecting the current territory, resolving high-leverage unknowns through
> one-question-at-a-time decisions, saving durable state, drafting plan.md,
> obtaining client approval, and securing a fresh blocker-only review before a
> builder handoff. It triggers when requests say “structured consultation,”
> “continue or resume the consultation,” “persist my decisions,” “one question
> per turn,” “challenge or attack the plan,” or “hand it to a downstream
> builder,” including explicit /consultant use. It does not act as an
> implementer, ordinary plan editor, standalone technical reviewer,
> brainstormer, PRD writer, or test runner.

No Claude Code, Claude model, or Fable model ran. This section supersedes the
historical form and frontmatter checks below.

## 2026-08-25 model-invocation update

Issue #48 replaced the explicit-only corpus with 20 frozen routing queries: 12
train and 8 held-out, with implicit positive requests, explicit `/consultant`
coverage, and adjacent-workflow negatives. GPT-5.6 Luna proposed three
candidates and ran three label-blind routing passes. Selected conforming
candidate B scored 36/36 train and 24/24 held-out. Its `best_description` is
applied verbatim in `skills/consultant/SKILL.md`. The flag
`disable-model-invocation` is absent. The 2026-07-23 record below is historical
and no longer defines invocation behavior.

Date: 2026-07-23. Process: skill-creator's seeded 60/40 trigger ratchet,
adapted from its Claude-only runner to Codex CLI to honor the client model
restriction. The autopilot-approved 20-query set used three runs per query.

## Outcome

`best_description` = **the existing description, unchanged**:

> Runs a client consultation that turns a rough idea into an adversarially
> reviewed plan and a copy-paste handoff prompt for a downstream builder.

The text is already present verbatim in `SKILL.md`. All three GPT-5.6 Luna
passes scored train 12/12 and held-out test 8/8: every explicit Consultant
activation selected the skill, while ordinary planning/implementation, plan
review, general consulting language, direct plan editing, PRD creation, another
named workflow, explanation, explicit do-not-invoke, and consulting-business
requests avoided it, for 60/60 correct decisions.

The ratchet stopped at iteration 1 because training had no failures, so GPT-5.6
Sol was not called for a rewrite. GPT-5.6 Terra independently scored 20/20.

No Claude Code, Claude model, or Fable 5 was used.

## Manual frontmatter check

`agentskills validate` is unavailable on this machine, so the recorded
frontmatter check is limited to name and format:

- `name: consultant` matches the directory and naming grammar. PASS
- `description` is present, is a single string, and matches
  `best_description` verbatim. PASS
- `disable-model-invocation: true` preserves the user-invoked contract. PASS
- Frontmatter has paired delimiters and unique required keys. PASS

## Manual skill-issue form check

- The body has 39 lines; the Recipe core has 14 lines before Details, and
  Details has 24 lines including its heading. PASS
- The body has one H1, one primitive H2 (`## Recipe`), and one earned
  `## Details` section. PASS
- Every Details line traces to A4, A6, A9, A10, A13, A14, or N1 from the
  bare-core grade. PASS
- The body is within the 100-line ceiling and needs no overflow reference or
  script. PASS
