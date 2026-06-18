# Decks

Sources: Anthropic's [HTML article](https://claude.com/blog/using-claude-code-the-unreasonable-effectiveness-of-html), the [HTML effectiveness gallery](https://thariqs.github.io/html-effectiveness/), and the gallery's [Arrow-key slide deck](https://thariqs.github.io/html-effectiveness/09-slide-deck.html) example.

Use HTML decks when the user needs a compact narrative that can be stepped through in a meeting, review, demo, or decision session. A deck should be a guided conversation, not a long report broken into arbitrary screens.

## Gallery Use Cases

- Arrow-key slide deck

## Good Fits

- Weekly status or launch readiness updates
- Decision briefs with a small number of choices
- Research summaries that need a live walkthrough
- PR, incident, roadmap, or product demos that benefit from pacing
- Lightweight presentations sourced from Slack threads, docs, issue trackers, code, metrics, or previous HTML artifacts

## Think About

- Audience: executives, engineering reviewers, designers, customers, or implementers
- Meeting shape: read-ahead, live presentation, async Loom-style walkthrough, or decision room
- Narrative: what changed, why it matters, what evidence supports it, and what decision or action is needed
- Duration: number of slides should match the time budget; a short deck is usually stronger
- Source density: move supporting detail into appendix slides, speaker notes, collapsible sections, or links

## Useful Patterns

- Represent each slide as a `<section>` with stable dimensions and a visible progress indicator.
- Add left/right arrow navigation and keep normal scroll usable.
- Put one main idea per slide; reserve dense tables for appendix or supporting slides.
- Use dashboards sparingly. A deck can contain metrics, but it should still read as a story.
- Include a decision slide when the artifact is meant to resolve ambiguity.
- Add print styles when the deck may be exported to PDF.

## Structure Templates

Status deck:

1. Title, date, audience, time budget
2. What shipped
3. What is still moving
4. Metrics or evidence
5. Decision needed
6. Next week or next actions

Decision deck:

1. Context and goal
2. Constraints
3. Option A
4. Option B
5. Tradeoff table
6. Recommendation and ask

Technical walkthrough:

1. Problem statement
2. System shape
3. Key path or data flow
4. Risk or failure mode
5. Implementation plan
6. Review focus

## Quality Bar

- The first slide makes the subject and reason for the meeting obvious.
- The reader can skim slide titles alone and understand the arc.
- Visual emphasis matches importance, not aesthetic novelty.
- Text fits on small screens and does not rely on viewport-scaled type.
- Keyboard navigation, focus states, and current-slide state are reliable.
- The deck can stand alone as one `.html` file with no build step.
