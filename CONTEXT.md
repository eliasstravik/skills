# Skills

This context captures domain language for the local agent skills in this repository, especially reusable workflow skills that guide future agents.

## Language

**Consultation**:
A saved consulting session that turns a client's rough idea into a handoff-ready plan. The term emphasizes an active consultant-client relationship and replaces the older "engagement" language.
_Avoid_: Engagement

**Client**:
The human being consulted. The client owns taste and final calls, but should be treated as needing deliberate handholding through clear options, trade-offs, and the consultant's recommendation.
_Avoid_: User, requester

**Builder**:
The downstream executing agent that receives the handoff plan. A builder may be coding, researching, writing, operating systems, or doing any other concrete work.
_Avoid_: Coding agent, implementer

**Consultation workspace**:
The durable save file directory for one consultation, rooted at `~/.consultant/<slug>/`. Explicit paths resume; similar existing slugs trigger a continue/new question; otherwise a new slug is created without ceremony.
_Avoid_: Engagement workspace, map

**Handoff plan**:
The lean builder brief produced at the end of a consultation: outcome, key decisions, implementation shape, constraints, references, out of scope, and risks/open assumptions for a fresh agent to execute from cold.
_Avoid_: Spec, ticket map

**Adversarial review**:
A mandatory fresh-subagent review of the draft handoff plan and the files it explicitly references, excluding `consultation.md`. It looks for guesses, missing decisions, and weak assumptions before the client exits the consultation.
_Avoid_: Cold read, gate

**Unknowns matrix**:
The four named quadrants a consultation maintains on behalf of the client: Known knowns, Unknown knowns, Known unknowns, and Unknown unknowns.
_Avoid_: Taxonomy, form
