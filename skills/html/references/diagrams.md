# Diagrams

Sources: Anthropic's [HTML article](https://claude.com/blog/using-claude-code-the-unreasonable-effectiveness-of-html), the [HTML effectiveness gallery](https://thariqs.github.io/html-effectiveness/), and the gallery's [Annotated flowchart](https://thariqs.github.io/html-effectiveness/13-flowchart-diagram.html) example.

Use HTML diagrams when the user needs to inspect relationships, sequence, architecture, state, or causality. Diagrams are evidence surfaces: they should make a system easier to reason about, not merely look technical.

## Gallery Use Cases

- Annotated flowchart

## Good Fits

- Deploy pipelines, CI workflows, rollback paths, and incident timelines
- Architecture maps, service dependencies, data flows, module maps, and call graphs
- State machines, lifecycle diagrams, sequence diagrams, and decision trees
- PR or code-review explainers where reviewers need to see how files and paths connect
- Research explainers where a live inspector, legend, or hover state helps comprehension

## Think About

- Source of truth: code, config, logs, workflow files, traces, architecture docs, or user-provided notes
- Diagram type: flowchart, map, timeline, sequence, state machine, dependency graph, or annotated diff
- Reader task: find risk, understand a path, compare options, verify coverage, or debug a failure
- Directionality: where does the reader start, and what counts as success, failure, or terminal state?
- Interactivity: click nodes for detail, filter by layer, highlight a path, or reveal code/config evidence.

## Useful Patterns

- Pair the visual canvas with a legend and a details panel.
- Give every node a stable identifier and a short label.
- Use shape, color, and line style to encode distinct meanings; document them in the legend.
- Show failure paths and short-circuits explicitly, not just the happy path.
- Include timings, owners, source files, commands, or snippets when they help verify the diagram.
- Use inline SVG for precise arrows, markers, groups, and clickable regions.
- Keep a fallback textual summary so the artifact still works for readers using assistive technology.

## Flowchart Layout Contract

Flowcharts are fragile. Prefer a boring, legible flowchart over a visually ambitious one. If these rules cannot be satisfied, split the content into smaller diagrams, use tabs, or replace the chart with a table or numbered process.

### Simplify First

- Start by writing the graph as plain text: node id, label, type, and outgoing edges.
- Keep one flowchart to 3-7 nodes when possible. If it needs more than 9 nodes or 12 edges, split it by phase, actor, or success/failure path.
- Use one primary direction, usually top-to-bottom. Use left-to-right only for short linear flows.
- Keep labels short: 1-5 words inside nodes, 1-3 words on edge labels.
- Put details outside the diagram in a side panel, footnote list, or expandable section.

### Layout Rules

- Place nodes on an explicit grid, not by visual guesswork. Use fixed columns/rows, SVG coordinates, or CSS grid areas.
- Use consistent node dimensions within a diagram. If text is long, wrap it inside the node or move detail outside the node.
- Maintain at least 40px between nodes and at least 24px between a connector and any unrelated node.
- Keep all connectors in a single SVG layer behind or between nodes, not mixed into individual cards.
- Use orthogonal connectors: vertical and horizontal segments with 90-degree turns. Avoid diagonal arrows except in tiny two-node diagrams.
- Connect every edge to a named anchor on the source and target node: `top`, `right`, `bottom`, or `left`.
- Terminate arrow paths at the target node boundary. Do not leave arrowheads floating near a card.
- Route connectors around nodes. No line may pass under, through, or behind a node where it becomes hidden.
- Avoid crossing arrows. If two edges must cross, the diagram is too dense; split it or re-route with more whitespace.
- Put edge labels in small pills offset from the line. Labels must not overlap nodes, arrowheads, or other labels.

### Visual Rules

- Use one neutral node style plus one accent style for the current, risky, or terminal node. Do not assign random colors to every node.
- Use shape meaning consistently: rounded rectangle for action, diamond for decision, pill for start/end.
- Limit decisions to two or three outgoing edges, each labeled at the first segment leaving the diamond.
- Use arrowheads only at the destination end unless a bidirectional relationship is truly necessary.
- Keep shadows subtle or omit them; strong shadows make connector layering harder to read.
- Include a compact legend only when color, shape, or line style carries meaning.

### Validation Gate

Before returning a flowchart, check it explicitly:

- Every node in the plain-text graph appears exactly once in the rendered diagram.
- Every edge in the graph has one visible connector and one visible arrowhead.
- Every connector starts at a source anchor and ends at a target anchor.
- No connector is disconnected, hidden behind a node, or clipped by the SVG viewBox.
- No nodes, labels, cards, or controls overlap at desktop width or mobile width.
- The reading order is obvious without hover or click interactions.

## Diagram Selection

- Flowchart: sequential process with decisions and terminal states.
- Architecture map: services, ownership boundaries, protocols, dependencies.
- Data flow: transformations, inputs, outputs, storage, and trust boundaries.
- State machine: allowed states, transitions, guards, and invalid transitions.
- Sequence diagram: time-ordered interaction between actors or services.
- Module map: entry points, hot paths, files, and responsibilities.

## Quality Bar

- The diagram has one obvious entry point and an understandable reading order.
- Edge labels clarify why transitions happen.
- Visual encodings are consistent and explained.
- Unknowns or assumptions are marked instead of hidden.
- Interactions reveal supporting detail without making the static view useless.
- The artifact helps the user make a better decision than a prose explanation alone.
