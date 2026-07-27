# Executor composition preflight

All assertions are critical. A failure stops the build for Elias; it does not
authorize a substitute dependency mechanism.

- **P1 — Permitted executors.** Both commands use `gpt-5.6-sol`; no other
  model-backed process, Claude-family model, Fable, `claude`, or `claude -p`
  runs.
- **P2 — Run-local state.** Both executors use ephemeral sessions, ignore user
  configuration and rules, have no web-search flag, and read or write only
  their generated preflight case directory.
- **P3 — Explicit user-only invocation works.** Both transcripts read the
  staged `.agents/skills/landingpage-readme/SKILL.md` after the explicit
  `/landingpage-readme` request and record `landingpage_readme_loaded: yes`.
- **P4 — Disabled invocation mode is enforced.** The disabled case stages the
  real copywriting source byte-for-byte, records it as unavailable to the
  skill-to-skill call because `disable-model-invocation: true` remains, drafts
  no fallback tagline, and stops.
- **P5 — Enabled copywriting composes.** The enabled transcript reads the
  staged `.agents/skills/copywriting/SKILL.md`; its result records
  `copywriting_invoked: yes`, and `copywriting-output.md` contains a truthful
  Signal Cup tagline without invented proof.
- **P6 — The only candidate difference is invocation mode.** A recursive diff
  between disabled and enabled staged copywriting directories contains exactly
  the removal of `disable-model-invocation: true`.
- **P7 — Live dependencies remain unchanged.** The repository
  `skills/copywriting/SKILL.md`, globally installed skills, and user config are
  byte-unchanged by the preflight.
