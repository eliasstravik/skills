# autoconsultant — shipping record

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
