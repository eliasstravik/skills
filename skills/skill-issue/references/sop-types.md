# SOP types

Classify every admitted skill as exactly one type. The type determines the skill's job and name.

| Type | Use when the skill owns | Naming rule | Example |
| --- | --- | --- | --- |
| Artifact SOP | One output's required contents and acceptance criteria | Bare noun | `gtm-report` |
| Process SOP | A recurring, cross-step process | Gerund | `gtm-reporting` |
| Lifecycle SOP | One entity across creation, maintenance, and retirement | Bare noun naming the entity; always drop `-management` | `gtm-workspace` |
| Task SOP | One bounded action | Imperative verb-noun | `generate-gtm-report` |
| Policy/standards SOP | Declarative constraints, taste, or quality bars | Bare noun or plural | `copywriting` |

## Classification rules

- Classify by what the skill owns, not by incidental verbs in its prose.
- An Artifact SOP specifies the work product; a Process SOP coordinates repeated work that may produce it.
- A Lifecycle SOP owns the managed entity through state changes; its name never ends in `-management`.
- A Task SOP completes one action and stops.
- A Policy/standards SOP produces no domain work product. It may include a compliance procedure explaining how to apply its constraints.

## Worked naming contrast

| Purpose | Type | Name |
| --- | --- | --- |
| Define the mandatory sections and acceptance criteria of a GTM report | Artifact SOP | `gtm-report` |
| Run the recurring research, drafting, review, and delivery of GTM reports | Process SOP | `gtm-reporting` |
| Govern a GTM workspace from creation through updates and retirement | Lifecycle SOP | `gtm-workspace` |
| Generate one GTM report from approved inputs | Task SOP | `generate-gtm-report` |
| Enforce the house standards for GTM prose | Policy/standards SOP | `gtm-writing` |
