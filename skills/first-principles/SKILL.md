---
name: first-principles
description: "Triggers on /first-principles or when the user asks to answer or design something completely from scratch, from first principles, with no regard for backwards compatibility, migration cost, sunk cost or existing decisions, e.g. \"start from scratch\", \"clean-slate design\", \"ignore what we have\", \"what is the right answer if we built it today\". It treats existing code, docs, plans and prior art as reference only, derives one right answer from the actual goal and fundamental truths, and states plainly where that answer differs from what exists. Not for incremental or backwards-compatible changes, finding the simplest or null option (midwit), or interview-led planning (consulting, consultant)."
---

# First Principles

## Trigger

Apply this standard to the question or design the client invokes it on, and to follow-ups on that same thing, until the client ends it.

## Scope

Backwards compatibility, migration cost, sunk cost and existing decisions never constrain the answer.
This standard changes what the right answer is, not what the agent may do: carrying the answer out still needs the client's usual approvals.

## Inputs

- The goal as the client states it now, including any constraint the client states now.
- Fundamental truths: facts and limits that would hold if nothing had been built yet.
- Existing code, docs, plans, decisions and prior art, as reference and evidence only.

## Roles

The agent derives and states the answer; the client owns the goal and decides what, if anything, changes.

## Procedure

1. Fix the goal and the fundamental truths it must satisfy; nothing else binds the answer.
2. Read what exists only for what it shows about the goal, the truths and what has failed; never preserve it or build on it by default.
3. Derive the answer as if nothing existed, and keep an existing part only where that derivation reaches it on its merits.
4. Give the one right answer, not a compatible compromise, a phased migration or a menu of pragmatic alternatives, unless the client asks for one.
5. After the answer, state plainly each place it differs from what exists today and why, without softening the difference or weighing what the change would cost.

## Outputs

The answer to the thing at hand, followed by a plain list of where it differs from what exists today; this Policy SOP produces no separate work product.

## Exceptions

If the goal is unclear, ask the client for it instead of inferring it from what exists.

## QC

- Confirm no part of the answer rests on compatibility, migration cost, sunk cost or "that is how it works today".
- Confirm every kept existing part is justified from the goal and fundamental truths alone.
- Confirm the response gives one answer, then a plain list of its differences from what exists.

## References

None.
