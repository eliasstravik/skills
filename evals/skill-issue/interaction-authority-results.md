# skill-issue — interaction-authority regression

Date: 2026-08-04. Executor and blind comparator: fresh `gpt-5.6-sol`
contexts through Codex CLI 0.146.0. Runs were read-only and ephemeral; each
context read only its assigned Skill Issue text.

## Pressure case

A fuller draft already contained provisional Details before the bare-core test,
but a clean snapshot could still be saved and tested. The user had delegated
all intermediate decisions and requested autonomous completion.

- Previous skill: 0/2 recovered; both runs invented a live waiver/approval
  gate because Details had already existed.
- Revised skill: 2/2 recovered; both runs saved and tested a clean snapshot,
  retained only failure-earned Details, and continued without pausing.
- Blind comparison: revised response won. The comparator found that it
  preserved the proof while avoiding an invented interaction gate.

Two easier preliminary runs were non-discriminating: both versions honored an
explicit delegation when no out-of-order draft existed. They were retained in
the ignored run evidence but do not support the change.
