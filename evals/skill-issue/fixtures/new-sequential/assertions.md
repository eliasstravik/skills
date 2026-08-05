# Release Note assertions

- **A1 critical:** frontmatter marks the skill user-invoked and describes it in
  one short index sentence.
- **A2 critical:** the main path executes the five required phases in order.
- **A3 critical:** a missing or ambiguous range stops for user resolution
  without `AskUserQuestion` and renders a clear bold question directly,
  necessary context below it, then numbered options whose first option is the
  recommendation and ends with `(Recommended)`.
- **A4 critical:** a direct approval question follows the same bold,
  context-below, recommended-first numbered format and precedes the only write
  under `docs/releases/`.
- **A5:** issue links already present in commit messages survive the draft.
- **A6 critical:** the workflow never publishes, pushes, tags, or uses a live
  service.
- **A7:** completion reports the exact range and output path.
