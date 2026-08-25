# consultant — shipping record

## 2026-08-25 issue #50 refresh

Installed the revised skill globally from the issue worktree before handoff:

```text
npx skills add /Users/eliasstravik/.herdr/worktrees/skills/issue-50-refine-consultant-questions-and-stop-non --skill consultant -g -y
```

The installer copied `consultant` to `~/.agents/skills/consultant`. Its
PromptScript warning remains expected because PromptScript does not support
global skill installation. Repository, `~/.agents`, and `~/.claude` copies
were byte-identical. SHA-256:

```text
SKILL.md  4295cbe065e9b05b3f2cf6bc04b067890cc60b0d7abda4e9f211c553e6aedde4
```

Date: 2026-07-23.

## Install

After commit `9d16459` (`build consultant skill`), ran:

```text
npx skills add /Users/eliasstravik/dev/skills-new --skill consultant -g
```

The installer copied `consultant` to `~/.agents/skills/consultant`.
PromptScript reported that it does not support global skill installation; the
Codex installation succeeded.

Repository, `~/.agents`, and `~/.claude` copies were byte-identical. SHA-256:

```text
SKILL.md  ed70c5e33c6c5a7283cd3a65fa4198712f0464a2706a5f60a55e7d8ab6d735f5
```

## Trigger smoke

GPT-5.6 Sol received an explicit `/consultant` prompt in a read-only sandbox
and instructions not to create state or invoke another skill. Raw events show
it read the installed `~/.agents/skills/consultant/SKILL.md`. It reported:

> Body-line count: 39  
> `1. Approve and run the adversarial review now. (Recommended)`  
> `2. Add something first.`  
> `3. Other — describe how you want to proceed.`  
> Fresh requests do not search, list, or read existing consultations.  
> Skills invoked: consultant

Smoke result: PASS.

No Claude Code, Claude model, or Fable 5 was used.
