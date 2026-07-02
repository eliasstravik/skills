# Workspace file formats

Templates for every file in `~/.consultant/<idea-slug>/`. Keep to these shapes so any session — or any other agent — can read a workspace cold.

## engagement.md

```markdown
# <Idea title>

## Brief
<what the client wants, in their words plus your sharpening;
 territory pointers: repo path if one exists, relevant docs/URLs;
 what "done and happy" looks like; the client's expertise gap;
 hard constraints (stack, time, integrations, stated taste)>

## Decisions so far
<!-- one line per resolved ticket: gist here, detail in the ticket -->
- [<ticket title>](tickets/NNN-slug.md) — <one-line gist of the answer>

## Fog
<!-- decisions you can feel coming but can't phrase sharply yet.
     Ticket when the question is sharp (even if blocked); fog when it isn't.
     Don't pre-slice fog into ticket-sized pieces. -->

## Status
Phase: discovery | drafting | gates | handed off
Last session: <date>
Next: <the single next thing a resuming session should do>
```

## Tickets — `tickets/NNN-slug.md`

Numbered in creation order, three digits. `blocked-by` lists ticket numbers; a ticket is on the frontier when it is open and nothing blocking it remains open.

```markdown
---
type: research | blind-spot | options | interview | task
status: open | resolved
blocked-by: []
---

## Question
<the decision or investigation this ticket resolves — sharp enough that a
 session could pick it up without the conversation that created it>

## Resolution
<appended on close: the answer, the why, rejected alternatives,
 links to any references/ assets produced>
```

## plan.md — the deliverable

Written for a builder who has never seen this conversation. Every section earns its place by removing a guess the builder would otherwise make.

```markdown
# <Idea title>

## The idea
<one tight paragraph: what is being built and why the client wants it>

## Decisions
<!-- the heart of the plan. For each: the decision, the why, and the
     alternative that was rejected (so the builder doesn't "helpfully"
     re-make it). Group by area if there are many. -->

## Constraints
<stack, integrations, performance, non-negotiables, client taste>

## References
<!-- one line per asset in references/: what it is and what it settles.
     "mockup-b.html — the chosen visual direction; match its spacing and tone" -->

## Out of scope
<what the client explicitly does not want built now>

## Open questions for the builder
<!-- accepted risks from the cold read. For each: the question, the
     client's default answer, and "log it in implementation-notes.md if
     the territory forces a different call". -->
```

## references/

Assets created by moves: prototypes (`options-a.html` …), research summaries, example code collected as maps-for-the-builder. Name files for what they settle, and link every asset from the ticket that produced it and from plan.md — an unlinked asset is invisible to the builder.

## implementation-notes.md

Created empty at handoff. The builder appends dated entries whenever the territory contradicts the plan or forces an unplanned decision. You never write here; it is the raw material for a post-build debrief with the client.
