# html — no-skill baseline saturation

Round 2 reran all four scenarios in fresh GPT-5.6 Sol contexts. GPT-5.6 Terra
reviewed every transcript, raw event stream, run-local artifact, and liveness
record against the round-1 taxonomy.

## Outcome

- New failure classes: **0**
- Contaminated arms: **0**
- Baseline saturation: **reached**

Every artifact satisfied the substantive content task. The repeated failures
all mapped to round 1:

- servers rooted above the artifact and links that did not target the exact
  artifact-root `/index.html`;
- reported listeners that were unreachable after executor exit;
- multi-section handoffs instead of the exact two concise lines.

The round-1 external-temporary-file failure did not recur, but remains part of
the preserved failure set.

## Need decision

Keep and build the skill. The baseline has four preserved contractual failure
classes, including durable-serving and run-isolation failures that ordinary
HTML competence did not prevent.
