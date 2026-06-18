# Code Review And Understanding

Sources: the [HTML effectiveness gallery](https://thariqs.github.io/html-effectiveness/), especially [Annotated pull request](https://thariqs.github.io/html-effectiveness/03-code-review-pr.html), [PR writeup for reviewers](https://thariqs.github.io/html-effectiveness/17-pr-writeup.html), and [Module map](https://thariqs.github.io/html-effectiveness/04-code-understanding.html).

Use HTML for code review and understanding when code shape, risk, file relationships, or review focus would be flattened by Markdown. The artifact should make the change easier to inspect and make reviewer attention more precise.

## Gallery Use Cases

- Annotated pull request
- PR writeup for reviewers
- Module map

## Good Fits

- Pull requests with non-obvious control flow, concurrency, streaming, caching, migrations, permissions, or performance risks.
- Reviewer-facing writeups that need motivation, before/after behavior, file tours, and review focus.
- Codebase onboarding where a module map, hot path, entry points, and ownership boundaries matter.
- Diff-heavy explanations where inline annotations are better than a separate prose section.

## Think About

- Reader task: approve, find bugs, understand an unfamiliar area, or review one risky path.
- Evidence: use actual files, diffs, snippets, line anchors, tests, commands, and dependency paths.
- Severity: visually separate blocking issues, worth-a-look concerns, nits, and safe changes.
- Navigation: provide jump links, file filters, module maps, and summaries for large changes.
- Context: explain why the change exists before showing the diff.

## Useful Patterns

- Annotated diffs with margin notes and severity tags.
- File-by-file tours that state why each file changed.
- Module maps with boxes, arrows, highlighted hot paths, and entry point lists.
- Risk maps that connect files to likely failure modes.
- Before/after panels for behavior, API shape, or user-visible flow.
- Reviewer checklist grouped by what needs careful attention.

## Quality Bar

- Findings and risk areas are visible without reading every line.
- The artifact distinguishes source facts from agent judgment.
- Code snippets are short enough to inspect but complete enough to verify.
- The review focus is explicit, so reviewers know where not to spend time.
- The artifact helps someone unfamiliar with the code ask better questions.
