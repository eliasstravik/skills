# Signalrelay product brief

Signalrelay is a small Node.js service for GTM engineers managing inbound website forms. It accepts a signup, validates the email and company domain, forwards the record to a configured Clay webhook, and receives a Clay callback containing enrichment and a score.

Rules in `config/routes.json` decide whether a qualified record is sent to HubSpot, posted to a Slack review channel, or held for manual review. Signalrelay does not store the full enriched Clay payload.

The first useful run uses `npm run demo`. It reads `fixtures/signup.json`, applies an included mock Clay score, and prints the selected route without contacting Clay, HubSpot, or Slack.

Audience: GTM engineers who already use Clay for inbound enrichment and want one reviewable routing layer before CRM or Slack actions.

Commitments: experimental, MIT licensed, Node 20+, best-effort maintenance, no support SLA. No approved customers, testimonials, adoption claims, hosted service, or performance benchmarks. No visual assets exist.

Done-with-you help is offered for installation, environment and Clay callback configuration, route setup, team rollout and training, ongoing maintenance and upgrades, and a dedicated Slack support channel. It does not include operating the customer's campaigns or enrichment program.

The GitHub About description should be the eyebrow pitch without the project name or trailing period. Suitable topics: `clay`, `gtm-engineering`, `lead-routing`, `hubspot`, `nodejs`.
