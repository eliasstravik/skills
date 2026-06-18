# Custom Editing Interfaces

Sources: the [HTML effectiveness gallery](https://thariqs.github.io/html-effectiveness/), especially [Ticket triage board](https://thariqs.github.io/html-effectiveness/18-editor-triage-board.html), [Feature flag editor](https://thariqs.github.io/html-effectiveness/19-editor-feature-flags.html), and [Prompt tuner](https://thariqs.github.io/html-effectiveness/20-editor-prompt-tuner.html).

Use custom editing interfaces when the user needs to manipulate structured information more naturally than text allows. The artifact is a throwaway tool for one job, and it must end with an export path back to the agent, a doc, or a file.

## Gallery Use Cases

- Ticket triage board
- Feature flag editor
- Prompt tuner

## Good Fits

- Reordering, bucketing, prioritizing, approving, rejecting, tagging, or annotating many items.
- Editing structured config such as feature flags, JSON, YAML, environment settings, rules, or launch plans.
- Tuning prompts, templates, copy, generated examples, or variable-filled content with live preview.
- Reviewing datasets, transcripts, diffs, feedback, test cases, or content queues.

## Think About

- Input shape: cards, rows, tree, key-value config, prompt template, examples, annotations, or media regions.
- Manipulation: drag, filter, search, toggle, group, sort, edit, compare, approve, reject, or tag.
- Constraints: dependencies, invalid states, prerequisites, warnings, schema, and required fields.
- Export: copy as Markdown, JSON, YAML, CSV, prompt text, patch, diff, or selected rows.
- Persistence: local state is usually enough; explain reset behavior.

## Useful Patterns

- Kanban-style triage boards with filters and copy-as-Markdown export.
- Form-based config editors with grouped toggles, dependency warnings, and copy-diff output.
- Side-by-side prompt editors with variable highlighting, live rendered samples, and counters.
- Bulk action controls plus per-item notes.
- Reset, import, export, and copy buttons with clear feedback.

## Quality Bar

- The editor solves one concrete manipulation problem.
- Every user change can be exported in a useful format.
- Invalid or risky states are visible before export.
- The interface starts with a sensible pre-sort or inferred default when possible.
- The user can recover with reset or undo for destructive interactions.
