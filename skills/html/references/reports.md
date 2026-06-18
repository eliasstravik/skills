# Reports

Sources: the [HTML effectiveness gallery](https://thariqs.github.io/html-effectiveness/), especially [Weekly status](https://thariqs.github.io/html-effectiveness/11-status-report.html) and [Incident timeline](https://thariqs.github.io/html-effectiveness/12-incident-report.html).

Use HTML for reports when the artifact recurs, will be skimmed by busy readers, or benefits from metrics, timelines, tables, source notes, and visual status. Reports should make the current state and required action obvious.

## Gallery Use Cases

- Weekly status
- Incident timeline

## Good Fits

- Weekly status, project updates, launch readiness, sprint summaries, and executive briefs.
- Incident reports, postmortems, retrospectives, outage summaries, and remediation tracking.
- Research or operational reports with metrics, highlights, carryover, source notes, and action items.
- Auto-generated summaries from git logs, CI, deploy logs, dashboards, tickets, or Slack.

## Think About

- Cadence: one-off, weekly, monthly, post-incident, or release-gated.
- Audience: executive skim, engineering deep dive, customer-facing summary, or internal ops.
- Topline: what changed, what matters, what slipped, and what decision is needed.
- Evidence: metrics, charts, timelines, links, log excerpts, PR lists, owners, dates.
- Accountability: action items need owners, due dates, and status.

## Useful Patterns

- Metric strips for the few numbers that matter.
- Highlights, shipped, slipped, blocked, and carryover sections.
- Compact charts for trend direction rather than exhaustive analytics.
- Incident timelines with minute-by-minute events and status changes.
- Root cause, impact, mitigation, and action-item tables.
- Source footer listing data pulled and generation timestamp.

## Quality Bar

- A reader can understand the state from the first screen.
- Metrics have context: comparison period, direction, and why they matter.
- Timelines separate detection, diagnosis, mitigation, and resolution.
- Action items are concrete and assigned.
- The report is structured enough to reuse next cycle without becoming generic.
