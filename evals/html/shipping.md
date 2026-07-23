# html — shipping record

Date: 2026-07-23.

## Install

After commit `901978e` (`build html skill`), ran:

```text
npx skills add /Users/eliasstravik/dev/skills-new --skill html -g
```

The installer selected and copied `html` to `~/.agents/skills/html`. It also
reported that PromptScript does not support global skill installation; this is
an unsupported-target warning, not a Codex installation failure.

The following three `SKILL.md` files had the same SHA-256:

```text
e2a761575b67c74465902bafd99bebd4484ddfb3e3fb5637860f0b3c9bb69b07
```

- repository `skills/html/SKILL.md`
- `~/.agents/skills/html/SKILL.md`
- `~/.claude/skills/html/SKILL.md`

## Trigger smoke

GPT-5.6 Sol received an explicit `/html` smoke prompt with read-only sandboxing
and no permission to create an artifact or server. Raw events show it read
`/Users/eliasstravik/.agents/skills/html/SKILL.md` and no other skill. It
replied:

> The `html` skill is user-only, has 5 Recipe steps, and its Details section
> does contain a foreground long-running-session rule.

Smoke result: PASS.

No Claude Code, Claude model, or Fable 5 was used.
