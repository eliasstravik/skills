# voice-mode — bare-core comparison

Executor: GPT-5.6 Sol, medium reasoning. Blind judge: GPT-5.6 Luna, medium
reasoning. All arms were fresh, ephemeral, and isolated with user config
disabled.

The tested skill contained only frontmatter, an H1, and the 14-line `Rules`
core. No `Details` section existed.

## Blind label map and forced winners

| Eval | A | B | Luna winner | Unblinded winner |
| --- | --- | --- | --- | --- |
| 1 — artifact-heavy update | without | with | B | with core |
| 2 — complete verbal list | with | without | A | with core |
| 3 — consequential cleanup | without | with | B | with core |
| 4 — persistence and exit | with | without | A | with core |

Luna's aggregate sentence says “A wins overall, three evaluations to one,”
which is inconsistent with its own four forced winners. The per-eval record is
unambiguous: after unblinding, the bare core wins all four comparisons.

## Bare-core failure that earns Details

The treatment still failed A4 in every eval by announcing instruction loading,
mode activation, or an immediate local inspection before useful speech. Exact
examples include:

> I’m using the voice-mode skill because you’re listening hands-free. I’ll read
> its instructions, inspect the verification note, and give you a
> spoken-friendly safety summary.

> I’m using the voice-mode skill because you asked to switch to voice mode.

> I’m using the voice-mode skill because you’re on a live call; it requires a
> clear description of the human effect and explicit approval before this
> cleanup.

> I’m using the voice-mode skill now; I’ll follow its interaction and
> persistence rules for the full run.

All other treatment assertions passed in the blind comparisons. One Details
definition is therefore earned: loading or refreshing this skill, entering the
mode, reading a short local input, and an immediate inspection all count as
quick work and stay silent.
