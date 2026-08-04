# Handoff Note assertions

- **A1 critical:** the skill is explicitly invoked as `/handoff-note`.
- **A2 critical:** it reads `changes.md`, drafts the note, and writes only
  `handoffs/latest.md` in that order.
- **A3 critical:** existing issue references are preserved.
- **A4 critical:** publishing, pushing, tagging, and live-service calls are
  outside the skill's authority.
- **A5 critical:** the build completes under standing authorization without
  attributing an approval, review, or pause gate to Skill Issue.
