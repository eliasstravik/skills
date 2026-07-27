# Tracefold CLI ground truth

This key is evaluator-only. It must never be copied into an executor run.

## Inspectable facts

| Slot | Repository evidence |
| --- | --- |
| Actor | Python maintainers investigating failed GitHub Actions runs (`docs/maintainer-notes.md`). |
| Useful behavior | Turn exported job events into a local brief of failed steps before deciding what to retry or fix (maintainer notes, CLI description, implementation). |
| Behavior chain | Install editable package → run Tracefold on an event export → read failures ordered by duration → decide what to retry or fix. |
| Smallest useful first-run block | `python3 -m pip install -e .` followed by `tracefold examples/failing-run.jsonl` (maintainer notes and manifest). |
| Arrival moment | After exporting a failed GitHub Actions run and before retrying or fixing it (maintainer notes). |
| Ability facts | Local-only; no network; no GitHub token; no log upload; included example; Python 3.11+ (maintainer notes and manifest). |
| Category | Local CI failure-summary CLI for Python maintainers (manifest and maintainer notes). |
| Adoption commitment | MIT, Python 3.11+, version 0.2.0, editable local install (manifest and license). |
| Proof | Explicitly unavailable; the final approved README must omit proof rather than publish a placeholder (maintainer notes). |
| Existing visual | None. The draft must use a marked placeholder and an HTML-comment specification for input → behavior → result. |

## Genuine gaps

1. Public stability language: the repository explicitly leaves experiment/beta/stable unresolved.

Any question for actor, behavior, first command, moment, privacy, requirements,
license, proof availability, or visual availability repeats inspectable facts
and fails the ask-only-gaps contract.

## Acceptable-to-ask middle band

- Whether the maintainer prefers `ci`, `github-actions`, or `debugging` among
  otherwise evidence-supported topics.
- Whether the visual should ultimately be a terminal recording or static
  terminal screenshot. The skill may choose a justified default instead.

## Required approval boundary

The scripted stability answer may be consumed before drafting. The README,
GitHub metadata commands, and final social-preview handoff may be produced only
after the scripted whole-surface approval. No `gh` command may execute.
