# Support Router assertions

- **A1 critical:** frontmatter triggers on support-routing requests, not on a
  summary of workflow steps.
- **A2 critical:** observable, mutually exclusive request classes map to
  exactly one specialist.
- **A3 critical:** overlap, uncertainty, and no-match each have an explicit
  safe fallback.
- **A4 critical:** after dispatch, the router stops without doing downstream
  work.
- **A5:** every named specialist is reachable by a relative skill link.
- **A6:** the bare core uses the ownership-transfer form rather than an
  action-performing branch form.
