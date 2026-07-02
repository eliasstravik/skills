# Move playbooks

One section per move. Every move is a ticket: claim it, run the playbook, append the Resolution, gist it on the map.

## Blind-spot pass — unknown unknowns

The client's core fear: "what haven't I even considered?" You almost certainly know more about this domain than the client — the pass exists to get it out of you and into the map.

Sweep the territory the idea touches — the codebase module, the domain (auth, payments, video encoding, whatever), prior art in the wild — hunting specifically for things the client would not think to ask about: hairy dead ends, decisions that look optional but aren't, conventions that will bite later, the questions an expert would ask in the first meeting. If the client pointed at context sources (a repo, docs, old notes), search them.

Present findings as a short report — "here's what your map is missing" — an HTML report when it's dense. Then triage together, one finding at a time: each becomes a ticket (sharp question), a fog entry (dim one), or is dismissed with the client's reasons noted. The pass resolves when every finding is triaged; the Resolution lists the triage.

## Options — unknown knowns

For taste the client can't put into words: they'll know it when they see it, so make things they can see. Reactions to concrete artifacts surface preferences that no interview question can reach.

Build 3–4 **wildly different** concrete directions — different enough that the client's reaction carries information. Same-but-tweaked variants waste the move. For anything visual or interactive, make HTML: invoke the html skill if it is available; otherwise build clean single-file HTML yourself; fall back to markdown sketches only when HTML can't be viewed. For non-visual questions (an API shape, a data model, a tone of voice) the options can be stubs, outlines, or samples.

Save the artifacts in `references/`, walk the client through them, and — the actual point — record *what the reaction reveals*, not just which option won: "chose B, but really it was B's density; disliked A's playfulness" is the unknown-known made explicit. That sentence goes in the Resolution and later in the plan.

## Interview — known unknowns

For decisions everyone can already name. Ask one question at a time — batching is bewildering, and each answer should shape the next question. Use AskUserQuestion dialogs; put your recommended answer first, marked "(Recommended)", with the trade-off in each option's description. You are the expert in the room: a consultant who only asks questions without advising is doing half the job.

Prioritize questions by blast radius — the ones that would change the architecture come first; cosmetics can wait or land in Fog. When an answer can be found in the territory instead (the codebase, the docs), go look — don't spend the client's attention on what the terrain already answers.

One interview ticket covers one decision area. If an answer reveals a new area, that's a new ticket, not question eleven.

## Research — thin territory

When you lack facts: how the existing codebase actually works, what the domain requires, what prior art exists, what a third-party API can do. Read the territory — code, docs, the web — before asking the client anything a search would answer.

Write what you learned as a summary in `references/` (the builder benefits from it too), gist it in the Resolution. If research surfaces decisions, they become tickets; if it surfaces gotchas the client should know, fold them into the next blind-spot triage. A strong research variant: find working code that does something like what the client wants — a reference implementation is a map the builder can follow directly.

## Task — blocked on the world

Manual work that must happen before the discussion can move: creating accounts, granting access, moving data, buying a domain. Nothing to decide — just legwork.

Automate what you can from here. For the rest, hand the client a precise checklist and mark the ticket blocked on it. The Resolution records what was done and every resulting fact later work depends on: where credentials live, the new URL, the row count.
