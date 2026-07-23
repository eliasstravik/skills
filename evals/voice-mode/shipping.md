# voice-mode — shipping record

Date: 2026-07-23.

## Install

`npx skills add /Users/eliasstravik/dev/skills-new --skill voice-mode -g`
installed the rebuilt skill into the shared global agent directory. The
installed `SKILL.md` under both `~/.agents/skills/voice-mode/` and
`~/.claude/skills/voice-mode/` has the same SHA-256 as the source:

`4d030c9a3bfa8a58f6d0f4081a6bda017fbce3e451e88916d906bbbbfa30aa1b`

The installer also reported that PromptScript does not support global skill
installation. Codex installation succeeded; this adapter limitation does not
affect the Codex-visible shared copy.

## Trigger smoke test

An ephemeral GPT-5.6 Sol context received an explicit `/voice-mode` request.
Its raw event stream read the installed
`~/.agents/skills/voice-mode/SKILL.md`, then answered:

> Voice mode is on. The smoke test passed with 7 checks.

The reply preserves the requested exact count, stays within two spoken
sentences, and writes no files. The platform emitted its known pre-read skill
notice before the skill body was available; this is the non-critical A4
boundary recorded in iteration 3, not a new failure.

No Claude Code, Claude model, or Fable 5 was used.
