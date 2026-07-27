# Maintainer notes

Tracefold is for Python maintainers who need to understand a failed GitHub
Actions run before deciding what to retry or fix. It works on an exported JSON
Lines event file and prints the slowest failed steps first.

The tool runs locally, makes no network requests, needs no GitHub token, and
does not upload logs. The repository contains no benchmark, user count,
testimonial, or production-adoption evidence.

The intended first-run path is an editable install followed by the included
example:

```sh
python3 -m pip install -e .
tracefold examples/failing-run.jsonl
```

The project has not documented whether version 0.2 should be described as an
experiment, a beta, or stable software.
