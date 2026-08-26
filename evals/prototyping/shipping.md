# prototyping — shipping record

Date: 2026-08-26. Issue: `eliasstravik/skills#53`.

## Done-gate

- Full paired round: with skill 40/42 (95.24%), without skill 19/42
  (45.24%).
- Focused stop/resume regression: with skill 7/7, unchanged baseline 2/7;
  final composite treatment 42/42.
- Detached owned servers and exact loopback URLs survived executor exit in all
  six treatment cases. The harness stopped them through `serve.sh`.
- The final skill-creator static viewer was reviewed in a real browser with
  round 1 as previous-workspace context. Desktop, mobile, UI, logic, formal
  grades, and benchmark views were clean; final feedback is empty.
- Trigger optimization selected the existing description at train 36/36 and
  held-out 24/24. The selected text is applied verbatim.

## Manual frontmatter check

`agentskills validate` is unavailable on npm, so the recorded shipping gate is
the repo-required manual name/format check:

- `name: prototyping` matches the directory and lowercase naming grammar.
  PASS.
- `description` is one plain third-person string, contains positive and
  negative triggers, contains no XML, and is 448 characters, below the 1,024
  character ceiling. PASS.
- The description matches the optimizer's `best_description` byte-for-byte.
  PASS.
- Frontmatter has exactly the required `name` and `description` fields and is
  bounded by YAML delimiters. PASS.

The supplementary skill-creator `quick_validate.py` check also passed. It did
not replace or rewrite the manual gate.

## Shipping surface and checks

Exactly four files ship:

```text
skills/prototyping/SKILL.md
skills/prototyping/assets/index.html
skills/prototyping/references/step-page.md
skills/prototyping/scripts/serve.sh
```

- `SKILL.md`: 118 lines, 884 words, nine ordered sections, below the 500-line
  and 5,000-token form ceilings.
- `references/step-page.md`: 161 lines with a table of contents.
- `sh -n`, JSON parsing for both eval corpora, `git diff --check`, the exact
  four-file surface check, and self-containment scans passed.
- A fresh shipping smoke test verified slug injection, detached ownership,
  the exact `/index.html` URL from a separate shell, stop ownership, and file
  preservation.
- Occupied-port retry, stale foreign PID safety, owned-process reuse, and
  owned stop passed both the deterministic checks and behavioral evals.

## Installation

The required command completed successfully for Codex:

```text
npx skills add /Users/eliasstravik/dev/skills --skill prototyping -g
```

Because the implementation lived in a delegated worktree before merge, the
four branch files were staged temporarily at that local source path for the
command and removed immediately afterward. The pre-existing main-checkout
status was unchanged. The installer copied the skill to
`~/.agents/skills/prototyping`; `diff -qr` found no difference from the
shipping directory, and both `SKILL.md` files have SHA-256
`f552c161c8ad11e88ff5adc4d3dca9563c15b474605caa4f87c191513e43838c`.
The installer also reported its expected non-blocking limitation that
PromptScript does not support global skill installation.
