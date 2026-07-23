# skill-issue — shipping record

Date: 2026-07-23.

## Install

After commit `2367c8e` (`build skill-issue skill`), ran:

```text
npx skills add /Users/eliasstravik/dev/skills-new --skill skill-issue -g
```

The installer copied `skill-issue` to `~/.agents/skills/skill-issue`.
PromptScript reported that it does not support global skill installation; the
Codex installation succeeded.

Repository, `~/.agents`, and `~/.claude` copies were byte-identical. SHA-256:

```text
SKILL.md  ebe3107a22fc2fa1cf0103c46c9827ab24562314ebcadec29eab9a16cd24d4e6
```

## Trigger smoke

GPT-5.6 Sol received an explicit `/skill-issue` prompt in a read-only sandbox
and instructions not to write or invoke another skill. Raw events show it read
the installed `~/.agents/skills/skill-issue/SKILL.md`. It reported:

> Body-line count: 38  
> Sole core H2: `## Checklist`  
> In a Recipe, count coordinated verbs, `then`, and conditional commands
> separately: split `write and save`, `write, then report`, and
> `if <condition>, stop and ask` into distinct numbered actions.  
> Start model-invoked descriptions with `Triggers when`; never lead with
> capability verbs such as `Routes`, `Classifies`, `Researches`, or `Creates`.  
> Skills invoked: skill-issue

Smoke result: PASS.

No Claude Code, Claude model, or Fable 5 was used.
