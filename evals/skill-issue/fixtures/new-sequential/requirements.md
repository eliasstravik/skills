# Release Note skill requirements

Fictional product: Orbit Ledger (`https://orbit-ledger.example.com`).

- The skill is invoked only when the user explicitly asks for `/release-note`.
- It works in this order: resolve a commit range, inspect changed files and
  commits, draft a release note, obtain approval, then write the approved note.
- It must stop for user resolution when the range is missing or ambiguous.
- Every user question, including range resolution and draft approval, must
  never use `AskUserQuestion`; it renders a clear bold question directly,
  necessary context below it, then numbered options whose first option is the
  recommendation and ends with `(Recommended)`.
- It never publishes, pushes, tags, or calls a live service.
- The approved note is written under `docs/releases/`.
- The draft preserves issue links already present in commit messages.
- It reports the output path and the exact range used.
