# Exploration And Planning

Sources: the [HTML effectiveness gallery](https://thariqs.github.io/html-effectiveness/), especially [Three code approaches](https://thariqs.github.io/html-effectiveness/01-exploration-code-approaches.html), [Visual design directions](https://thariqs.github.io/html-effectiveness/02-exploration-visual-designs.html), and [Implementation plan](https://thariqs.github.io/html-effectiveness/16-implementation-plan.html).

Use HTML for exploration and planning when the user needs to choose a direction, compare alternatives, or hand a plan to another implementation session. The core advantage is side-by-side cognition: the reader can point at an option, compare tradeoffs, then preserve the decision as a readable artifact.

## Gallery Use Cases

- Three code approaches
- Visual design directions
- Implementation plan

## Good Fits

- Multiple technical approaches with pros, cons, risk, testability, bundle cost, operational cost, or maintainability.
- Multiple visual directions where tone, density, layout, palette, and state treatment need to be seen rather than imagined.
- Implementation plans that combine milestones, mockups, data flow, key code, risks, assumptions, and open questions.
- Planning handoffs to a fresh agent session, reviewer, designer, or implementer.

## Think About

- Decision: what choice is the artifact supposed to make easier?
- Axes: what should be compared consistently across options?
- Recommendation: when enough context exists, state the recommended path and why.
- Handoff: include enough implementation detail that the next session can execute without reconstructing the thinking.
- Review surface: mark risky code, schema changes, contracts, unknowns, and people or teams needed for decisions.

## Useful Patterns

- Option grids with uniform criteria and a clear recommendation.
- Live rendered design alternatives, not just descriptions of design alternatives.
- Milestone timelines split into independently reviewable slices.
- Data-flow diagrams paired with the exact files, APIs, migrations, or contracts involved.
- Risk tables with severity and mitigation.
- Open questions grouped by owner or blocking date.

## Quality Bar

- Alternatives are genuinely distinct, not minor variations.
- Every option names the tradeoff it optimizes for.
- The plan contains the riskiest code or contract snippets, not only prose.
- The reader can understand the recommendation from the first screen and inspect evidence below.
- The artifact can become implementation context without needing the chat transcript.
