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
