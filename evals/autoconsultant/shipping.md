# autoconsultant — shipping record

## 2026-08-26 issue #52 refresh

After implementation commit `cebcea7`, installed the revised skill globally
from the issue worktree:

```text
npx skills add /Users/eliasstravik/.herdr/worktrees/skills/issue-52-add-scored-bounded-adversarial-review-lo --skill autoconsultant -g -y
```

The installer copied `autoconsultant` to
`~/.agents/skills/autoconsultant`. Its PromptScript warning remains expected
because PromptScript does not support global skill installation. Repository,
`~/.agents`, and `~/.claude` copies were byte-identical. SHA-256:

```text
SKILL.md  1a5a8e0e47924cf153e2a5adb1972a7297d4d3521550daabcd8069cf6f021126
```

`agentskills validate` is not installed, so the required manual frontmatter
gate checked name and format only. `name: autoconsultant` matches its
directory, the optimizer-owned description is one quoted string and matches
the retained `best_description` verbatim, both frontmatter delimiters are
present, and the required keys occur once. `quick_validate.py` also passed.
PASS.

## 2026-08-25 issue #50 refresh

Installed the revised skill globally from the issue worktree before handoff:

```text
npx skills add /Users/eliasstravik/.herdr/worktrees/skills/issue-50-refine-consultant-questions-and-stop-non --skill autoconsultant -g -y
```

The installer copied `autoconsultant` to `~/.agents/skills/autoconsultant`.
Its PromptScript warning remains expected because PromptScript does not support
global skill installation. Repository, `~/.agents`, and `~/.claude` copies
were byte-identical. SHA-256:

```text
SKILL.md  a47580a7b4e2da059c61c9a5e4126cc45abae9a82ecbcfd389b8f1738b85d98a
```

Date: 2026-07-23.

## Install

After commit `f17510f` (`build autoconsultant skill`), ran:

```text
npx skills add /Users/eliasstravik/dev/skills-new --skill autoconsultant -g
```

The installer copied `autoconsultant` to
`~/.agents/skills/autoconsultant`. PromptScript reported that it does not
support global skill installation; the Codex installation succeeded.

Repository, `~/.agents`, and `~/.claude` copies were byte-identical. SHA-256:

```text
SKILL.md  e0c74a8560be02bc9af5de3ab02815b749691077ce74f48aad90f4b5fd48e546
```

## Trigger smoke

GPT-5.6 Sol received an explicit `/autoconsultant` prompt in a read-only
sandbox and instructions not to create state or invoke another skill. Raw
events show it read the installed
`~/.agents/skills/autoconsultant/SKILL.md`. It reported:

> Body-line count: 17  
> Stop after the handoff without showing Automake's Run gate, performing Git
> preflight, mutating the repository, creating Automake state, launching a
> child, running the ratchet, or implementing.  
> Keep every scratch artifact and fence check inside the declared run directory
> or in memory; never use an external temporary directory.  
> Direct the fresh agent to read `plan.md` and every explicit reference it
> names before invoking Automake.  
> Skills invoked: autoconsultant

Smoke result: PASS.

No Claude Code, Claude model, or Fable 5 was used.
