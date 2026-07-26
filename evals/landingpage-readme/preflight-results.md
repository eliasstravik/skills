# landingpage-readme — executor composition preflight result

Date: 2026-07-26. Outcome: **STOPPED — verifier/contract mismatch requires
Elias's decision before graded runs or live dependency changes.**

## Launch record

- Harness: `preflight/run-preflight.sh`
- Successful executor launch: `runs/preflight/run-20260726-02/`
- Model: `gpt-5.6-sol`
- Reasoning effort: `high`
- Sessions: fresh, ephemeral, user configuration and rules ignored
- Approval policy: `never`
- Sandbox: `workspace-write`
- Working directories: the two generated case workspaces only
- Network, browser, `gh`, live repositories, installed skills, and user config:
  untouched

The first launch at `runs/preflight/run-20260726-01/` never initialized Codex
because the outer Paperclip filesystem sandbox denied the in-process app
server. It did not exercise the composition mechanism. The identical approved
harness then ran with the required outer execution permission as
`run-20260726-02`.

## Observations

### Disabled case

- The explicit repository-local `landingpage-readme` probe loaded.
- The repository-local `copywriting` skill was visible with
  `disable-model-invocation: true`.
- The mid-recipe dependency call was unavailable because model invocation was
  disabled.
- No fallback tagline or copywriting output was produced.

### Enabled case

- The explicit repository-local `landingpage-readme` probe loaded.
- The repository-local `copywriting` skill loaded after the invocation-mode
  line was removed.
- It produced the evidence-grounded tagline:
  “Turn a local JSON log into a failure summary before you decide what to
  retry.”
- It produced no benchmark, customer, download, time-saved, or guarantee
  claim.
- The staged enabled copy differed from the disabled copy only by removal of
  `disable-model-invocation: true`.
- The repository source `skills/copywriting/SKILL.md` remained byte-unchanged.

## Why the harness stopped

`preflight/verify-preflight.sh` requires the enabled tagline to contain the
literal phrase `Python maintainer`. The executor's tagline is truthful,
audience-compatible, and contains the required input and outcome, but it does
not contain that literal phrase. Therefore the script exited at this check and
did not write `verification.md`.

The approved prose contract and P5 assertion require a truthful Signal Cup
tagline without invented proof; they do not require the audience label to
appear verbatim. Changing the verifier, changing the prompt, or retrying until a
stochastic output happens to contain the phrase would alter how the approved
gate is applied. No such substitution has been made.

## Decision required

Elias must choose one of these paths:

1. Accept the observed composition mechanism and authorize aligning the
   verifier with the approved semantic criterion (truthful Signal Cup tagline,
   no invented proof), then re-verify the preserved run.
2. Keep the literal `Python maintainer` requirement and authorize a revised
   preflight prompt plus a fresh run.
3. Reject the mechanism and provide a different approved dependency design.

Until that decision, no baseline, bare-core, grader, comparator, analyzer,
optimizer, copywriting invocation-mode flip, or installation step may run.
