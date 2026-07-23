# demo — shipping record

Date: 2026-07-23.

## Install

After commit `3e2741f` (`build demo skill`), ran:

```text
npx skills add /Users/eliasstravik/dev/skills-new --skill demo -g
```

The installer copied `demo` to `~/.agents/skills/demo`. PromptScript reported
that it does not support global skill installation; the Codex installation
succeeded.

The repository, `~/.agents`, and `~/.claude` copies of `SKILL.md` had the same
SHA-256:

```text
d368c778e35eb2702870cc29e62862affb9ba450aff9fd7453d2ff9bf5d664c1
```

## Trigger smoke

GPT-5.6 Sol received an explicit `/demo` smoke prompt with read-only sandboxing
and no permission to create a demo or server. Raw events show it read only
`/Users/eliasstravik/.agents/skills/demo/SKILL.md`. It replied:

> The `demo` skill is user-only, has 6 Recipe steps, and Details requires a
> foreground long-running server session.

Smoke result: PASS.

No Claude Code, Claude model, or Fable 5 was used.
