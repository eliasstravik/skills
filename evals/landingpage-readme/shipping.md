# landingpage-readme — shipping record

Date: 2026-07-26. Ticket: [ELI-262](/ELI/issues/ELI-262).

## Candidate

- Shipping skill path: `skills/landingpage-readme/SKILL.md`.
- Active primitive: one 17-step `## Recipe`.
- Earned Details: five bullets tracing to the final bare-core
  L3/L4/L5/L9/L11 failures.
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
- Manual form validation passed: 27 body lines, one 17-step Recipe core, one
  five-line earned Details section, and no overflow.
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
dc84b74f9b2ab1cf1f52e9e5fd56e722b2a6ee7ab49562a39294a08824506d50
```

At initial shipping time, no real-repository dogfood or live GitHub mutation
had been performed; the separate downstream dogfood gate later completed.

## Final-review correction

The branch-wide standards/spec review made these material corrections after
the initial shipping record:

- portable missing-dependency recovery;
- an explicit attempted dependency call before the terminal recovery;
- the approved evidence-supported page architecture;
- an HTML-comment requirement for missing-visual production guidance; and
- one already-approved metadata disposition per Recipe item.

It also aligned Driftboard's implementation with its accepted local-storage
ground truth, isolated every eval arm as its own Git root, rejected external
temporary paths, classified L7 as critical, added shipping assertion L16, and
declared the model-policy-compatible optimizer path in `CLAUDE.md`.

Fresh authoritative bare-core and full-treatment runs replaced reliance on the
preserved historical snapshots. The final treatment passes 48/48 assertions,
the live dogfood already uses the corrected HTML-comment form, and the
corrected skill was reinstalled globally byte-identical to the repository hash
above.
