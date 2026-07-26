# landingpage-readme — shipping record

Date: 2026-07-26. Ticket: [ELI-262](/ELI/issues/ELI-262).

## Candidate

- Shipping skill path: `skills/landingpage-readme/SKILL.md`.
- Active primitive: one 15-step `## Recipe`.
- Earned Details: three bullets tracing to the preserved bare-core
  L3/L4/L5/L7 failures.
- No Calls, scripts, references, or other shipped files.
- The trigger optimizer's `best_description` is applied verbatim:
  `User-invoked workflow for truthful README-led GitHub repository landing surfaces.`

## Validation

- The frozen 20-query trigger set was already approved.
- Three fresh GPT-5.6 Luna trigger passes and one independent GPT-5.6 Terra
  check each scored train 12/12 and held-out test 8/8.
- Manual frontmatter validation passed: matching name, exact optimized
  description, explicit invocation extension, paired delimiters, and unique
  required keys.
- Manual form validation passed: 26 body lines, one 15-step Recipe core, one
  three-line earned Details section, and no overflow.
- `skills/landingpage-readme/` and `skills/copywriting/` each contain only
  `SKILL.md`; neither shipping scope contains eval evidence.
- The repository inventory contains nine skill directories, and both
  `CLAUDE.md` and `README.md` name `landingpage-readme`.

## Install

From Paperclip's run scratch directory, outside the repository, ran:

```text
npx skills add /Users/eliasstravik/dev/skills/.paperclip/worktrees/ELI-258-build-the-landingpage-readme-skill-from-the-approved-consultation-plan --skill landingpage-readme -g
```

The command exited successfully and copied `landingpage-readme` to
`~/.agents/skills/landingpage-readme`. PromptScript reported that it does not
support global skill installation; the Codex installation succeeded.

The repository and installed `SKILL.md` files were byte-identical with
SHA-256:

```text
929e5a8027721d965c646b21799b252ec201a7c05e9afa0e2734d5d3e61726c9
```

No real-repository dogfood or live GitHub mutation was performed; that remains
the separate downstream done-gate.
