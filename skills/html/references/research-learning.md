# Research And Learning

Sources: the [HTML effectiveness gallery](https://thariqs.github.io/html-effectiveness/), especially [How a feature works](https://thariqs.github.io/html-effectiveness/14-research-feature-explainer.html) and [Concept explainer](https://thariqs.github.io/html-effectiveness/15-research-concept-explainer.html).

Use HTML for research and learning when a reader needs to understand a topic once, navigate unfamiliar code, or build a mental model. The artifact should make a complex subject explorable without forcing a linear wall of text.

## Gallery Use Cases

- How a feature works
- Concept explainer

## Good Fits

- Feature explainers based on code, config, logs, docs, or architecture traces.
- Concept explainers with visual models, live examples, glossary terms, and comparisons.
- Onboarding materials for unfamiliar subsystems.
- Research summaries that need source notes, gotchas, FAQs, and examples.

## Think About

- Learning goal: what should the reader be able to explain or do afterward?
- Source grounding: list files, docs, tickets, threads, commits, or external references read.
- Navigation: add a table of contents, section anchors, collapsible steps, tabs, or glossary.
- Model: choose a visual metaphor, diagram, simulation, table, or annotated path.
- Gotchas: surface local exceptions and operational details that generic explanations miss.

## Useful Patterns

- TL;DR box followed by progressively deeper sections.
- Step-by-step request or lifecycle paths with expandable details.
- Tabbed code/config examples.
- Interactive visual models for abstract concepts.
- Glossaries in a side rail or linked terms inside the content.
- FAQ and "gotchas worth knowing" sections.

## Quality Bar

- The artifact states the key idea before details.
- Source notes make it clear where claims came from.
- The reader can skim, then drill into the exact part they need.
- Visuals or interactions teach the concept, not just decorate it.
- The artifact includes local caveats, not only general textbook knowledge.
