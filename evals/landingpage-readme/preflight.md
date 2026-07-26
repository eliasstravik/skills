# landingpage-readme — executor composition preflight

This is an ungraded, run-local mechanism check. Elias must approve this prompt
with the eval corpus before it runs. A failure stops the build for Elias; it
does not authorize a fallback dependency mechanism.

## Harness setup

Use one fresh directory under `evals/landingpage-readme/runs/preflight/`.
Nothing in this preflight may mutate the repository skill sources, installed
skills, global config, credentials, live GitHub state, or any path outside the
run directory.

1. Stage the current repository `skills/landingpage-readme/` byte-for-byte as
   the run-local user-invoked skill.
2. Stage the current repository `skills/copywriting/` byte-for-byte as the
   run-local sibling for the disabled case.
3. For the enabled case, create a second run-local copy differing only by
   removal of `disable-model-invocation: true`; do not touch the live source or
   installed copy.
4. Run each case in a fresh GPT-5.6 Sol one-shot Codex context with user config
   and rules ignored, approvals disabled, the run directory as the only
   writable workspace, no browser/network/`gh`, and complete JSONL plus final
   transcript capture.

## Fixed repository evidence

The preflight repository contains only:

```text
Project: Signal Cup
Actor: Python maintainers
Behavior: turn one local JSON log into a failure summary
Starter command: signal-cup examples/failure.json
Ability facts: local-only, no account, no network
Proof: none
```

No production README or GitHub metadata is written. The executor writes only a
run-local `preflight-result.md`.

## Disabled-case prompt

> Use `/landingpage-readme` on the run-local Signal Cup evidence, but stop after
> the first attempted mid-recipe `/copywriting` invocation. Record whether
> landingpage-readme loaded, whether copywriting was visible, whether the
> runtime honored copywriting's `disable-model-invocation: true`, and the exact
> dependency result. Do not draft fallback audience-facing copy.

Expected observation: the user-invoked landingpage-readme skill loads, the
copywriting sibling is visible, and a skill-to-skill invocation is unavailable
while the disable extension is present.

## Enabled-case prompt

> Use `/landingpage-readme` on the run-local Signal Cup evidence and continue
> only far enough to invoke `/copywriting` for a truthful one-line tagline.
> Record whether landingpage-readme loaded, whether copywriting was visible,
> whether the runtime invoked the run-local copywriting skill, and the resulting
> tagline. Do not continue to README or metadata mutation.

Expected observation: the same user-invoked landingpage-readme skill loads and
its mid-recipe call invokes the otherwise byte-identical run-local copywriting
skill after the disable extension is absent.

## Passing record

The preflight passes only when transcripts prove all of the following:

- both executors ran on GPT-5.6 Sol;
- the landingpage-readme instructions came from the staged current repository
  version;
- copywriting was visible in both cases;
- the disabled case was blocked specifically by invocation mode;
- the enabled case used copywriting rather than local fallback prose;
- no prohibited model, external state, network, browser, or `gh` call appeared;
- the enabled copywriting copy differed only by the invocation-mode line.

If Codex cannot expose or enforce these semantics, stop and return the
transcripts plus exact launch configuration to Elias.
