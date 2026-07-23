---
name: queue-triage
description: Classifies fictional support requests for a sample operations team.
---

# Queue Triage

## Workflow

1. Read the request title, customer tier, age, and reported impact.
2. Choose `urgent`, `today`, or `backlog`.
3. State one reason grounded in the supplied fields.
4. Recommend exactly one next action.

Never contact a customer or change a live queue. If impact is unknown, ask one
question before classifying.

Example input:

- Title: Export stalls after approval
- Customer tier: Studio
- Age: 19 hours
- Impact: Five editors cannot publish

Example output:

- Priority: urgent
- Reason: Multiple users are blocked from publishing.
- Next action: Ask the on-call engineer to inspect export job `EX-204`.
