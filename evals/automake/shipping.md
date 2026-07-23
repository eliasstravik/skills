# automake — shipping record

Date: 2026-07-23.

## Install

After commit `42f8b41` (`build automake skill`), ran:

```text
npx skills add /Users/eliasstravik/dev/skills-new --skill automake -g
```

The installer copied `automake` to `~/.agents/skills/automake`. PromptScript
reported that it does not support global skill installation; the Codex
installation succeeded.

Repository, `~/.agents`, and `~/.claude` copies were byte-identical. SHA-256:

```text
SKILL.md                         4d08601c203b85681c19c32639a28f2ab0f1bed59872dac91ab500da7faa4f3f
references/orchestrator.md       186623241922d328a99cb9ab191f60df371c62ffcafe6c5157c6bbe77c83975b
```

## Trigger smoke

GPT-5.6 Sol received an explicit `/automake` prompt with read-only sandboxing
and instructions not to run a ratchet or mutate state. Raw events show it read
the installed `SKILL.md` and linked execution reference. It replied:

> Body lines: 22  
> Defaults: 5/3/no success condition  
> Terminal roots: optimizer.md,evaluator.md,orchestrator.md,results.tsv,learnings.md,state.md

Smoke result: PASS.

No Claude Code, Claude model, or Fable 5 was used.
