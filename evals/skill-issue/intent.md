# skill-issue — intent

## Behavioral source

Read-only source: `/Users/eliasstravik/dev/skills` at exact commit
`8f5e3a94109a8958037c6b5ac209355530e70f18`. The repository was clean and its
HEAD still matched that commit when this intent was recorded on 2026-07-23.
The old wording is not copied.

## Real job

Skill Issue is the form discipline for writing or revising an agent skill
inside the skill-creator process. It turns evidence and required behavior into
one compact, executable Markdown core whose structure matches what the agent
must do, then permits only failure-earned depth. It also makes line accounting,
overflow, frontmatter shape, and treatment-versus-control proof explicit enough
to audit.

Skill-creator remains the process authority for baselines, assertions,
executors, grading, description optimization, and shipping. Skill Issue neither
replaces that loop nor invents evidence; it governs the skill-writing artifact
inside it.

## Interaction contract

- Invocation is explicit; ordinary Markdown writing, issue filing, skill use,
  and code work do not activate this authoring discipline.
- Read supplied requirements, assertions, preserved failures, and existing
  skill text before choosing form.
- Choose exactly one core primitive by control flow and agent action, not by
  subject matter or visual preference.
- Write or audit an H1 plus one primitive H2 whose mandated form fits within 20
  body lines before Details.
- Add a single Details section only for bare-core assertion failures, keeping
  the entire body within 100 lines; externalize necessary overflow through
  triggered Calls.
- Treat line budgets as ceilings, preserve the distinction between
  user-invoked and model-invoked descriptions, and record manual frontmatter
  verification when the standard validator is unavailable.
- When evidence is absent or a no-skill baseline has no preserved failure,
  stop rather than manufacture a skill or unearned prose.

## State and safety surfaces

The old skill has no persistent state, subprocess, network, credential, or
live-service surface. Eval runs may read and edit only copied fictional skill
fixtures inside their run directories. Source skills, installed skills,
unrelated repositories, and external temporary directories are read-only or
off-limits as declared by the harness.

## Eval flows

1. **New sequential skill from evidence** — turn assertions and preserved
   failures for a fictional release-note workflow into a user-invoked Recipe
   core, then add only explicitly earned Details.
2. **Bloated existing skill audit** — revise a copied oversized Rules-shaped
   draft whose required behavior is actually sequential; remove no-op and
   unearned prose while preserving checkable requirements.
3. **Router versus Switch boundary** — author a support-triage skill that
   classifies and transfers ownership to one named specialist, including
   overlap, uncertainty, and no-match behavior without doing downstream work.
4. **Overflow and frontmatter discipline** — repair a model-invoked research
   skill with branch-only depth so its description contains triggering
   conditions, its compact core stays within budget, and its external
   reference is reached through a one-level read trigger with a fallback.

## Intent gate

The client authorized step-by-step autopilot for all remaining skills. This
scope and the four flows are approved under that standing authorization. No
change to the seven-skill build order is warranted.
