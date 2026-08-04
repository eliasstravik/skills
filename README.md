# skills

**Nine focused workflows for developers who need more from their agents than a
one-line prompt.**

Install one workflow from Elias Stravik's personal collection, then invoke it
when you need a repeatable process for planning, implementation, copy, or
repository work.

## Install one skill

```bash
npx skills add eliasstravik/skills --skill midwit -g
```

This installs `midwit` at user level. Invoke `/midwit` when nontrivial work is
drifting into clever-but-fragile complexity and you want to recover the shared
truth between the idiot's simple answer and the genius's simple answer.

<!-- VISUAL PLACEHOLDER
Input: record the terminal as the user runs
`npx skills add eliasstravik/skills --skill midwit -g`.
Behavior: show the CLI resolving this repository and the selected skill.
Result: run `npx skills list -g` and show `midwit` in the installed
skills. Crop tightly to the terminal, keep commands readable at GitHub's
content width, redact local paths or usernames, and export as an optimized GIF
or linked MP4 poster without simulated output.
-->

## Pick the workflow you need

| Skill | Use it when you need to… |
| --- | --- |
| [`voice-mode`](skills/voice-mode/SKILL.md) | Keep a live call natural, spoken, and concise. |
| [`html`](skills/html/SKILL.md) | Build a durable single-file HTML artifact and verify it locally. |
| [`demo`](skills/demo/SKILL.md) | Turn an artifact into a realistic, verified local demo. |
| [`automake`](skills/automake/SKILL.md) | Run a Git-backed evaluator–optimizer ratchet. |
| [`consultant`](skills/consultant/SKILL.md) | Turn a rough idea into an adversarially reviewed plan. |
| [`autoconsultant`](skills/autoconsultant/SKILL.md) | Carry an approved plan into an Automake setup and fresh-agent handoff. |
| [`skill-issue`](skills/skill-issue/SKILL.md) | Shape a compact agent skill from checkable evidence. |
| [`copywriting`](skills/copywriting/SKILL.md) | Draft truthful audience-facing copy from supplied evidence. |
| [`midwit`](skills/midwit/SKILL.md) | Challenge nontrivial work with a much simpler or null alternative until told to stop. |

Install any one of them by replacing the skill name:

```bash
npx skills add eliasstravik/skills --skill <name> -g
```

## What gets installed

- `skills/<name>/` is the shipping surface for that workflow.
- `evals/<name>/` contains its prompts, assertions, fixtures, and recorded
  evaluation notes; generated run output stays untracked.
- [`CLAUDE.md`](CLAUDE.md) documents the repository's build, isolation, and
  validation conventions.

The install command requires `npx` and an agent that can load installed skills.
No specific runtime version or support commitment is documented.

## License

[MIT](LICENSE) © 2026 Elias Stravik.
