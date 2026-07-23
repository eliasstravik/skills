# skills

Seven personal agent skills rebuilt from scratch on eval-first foundations
(skill-creator process, skill-issue form).

Skills, in build order: `voice-mode`, `html`, `demo`, `automake`, `consultant`,
`autoconsultant`, `skill-issue`.

## Install

```bash
npx skills add /Users/eliasstravik/dev/skills --skill <name> -g
```

## Repo layout

- `skills/<name>/` — the shipping skill (installers receive exactly this).
- `evals/<name>/` — committed eval sources: prompts, assertions, fixtures.
- Generated run output is gitignored. See `CLAUDE.md` for the full conventions.
