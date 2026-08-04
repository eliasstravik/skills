# midwit — intent and form contract

## Sources read

- The approved consultation plan at
  `/Users/eliasstravik/.consultant/midwit-skill/plan.md`, including Decisions,
  Approach, Constraints, approved round-two reviewer notes, Out of scope, and
  Risks.
- The live repository conventions, now stored in `AGENTS.md` and imported by
  `CLAUDE.md`, plus the plan's matching archived copy.
- The live `skill-issue` instructions and the plan's matching archived copy.
- The plan's `grill-me` and `grilling` references.

## Required behavior

An explicit `/midwit` invocation adopts a session-long stance grounded in the
Midwit meme: the idiot and genius at opposite tails of the bell curve converge
on a shared simple truth while the midwit in the middle adds clever
complexity. The goal is to find that shared truth, not to remain in “midwit
mode.” Before
nontrivial work, the agent silently checks for work that can disappear or
become 10–100 times simpler. It interrupts only with a concrete naive-outsider
alternative, opens with “why don't you just …?”, explains why that is enough,
and waits for the user's ruling. It does routine work without a ritual
challenge, honors “do it anyway” without relitigating, persists across later
tasks, and ends on any natural stop request.

The stance removes work rather than interrogating ambiguity, so it remains
distinct from `grilling`.

## Form decision

The single core primitive is **Rules** because the same constraints govern
every action while the stance is active. The revised candidate bare core is the
H1 plus ten single-imperative Rules in `skills/midwit/SKILL.md`; it explicitly
names the meme and its idiot/genius shared-truth target, and it has no Details
section.

The provisional clause “never build the framework in the middle” remains cut.
No preserved baseline improperly built a framework before a user ruling;
frameworks appeared only after “do it anyway” or after the stance was stopped.
The revised bell-curve rules instead name the meme and make the idiot/genius
shared truth the positive target.

## Gates

1. The five existing eval prompts and every scripted reply remain approved;
   the new shared-truth framing prompt was approved on 2026-08-04 before any
   revision executor, grader, comparator, analyzer, or viewer run.
2. No Details line may be added until a bare-core treatment failure earns it.
3. Installation remains blocked at the done-gate and must run from outside the
   repository only after the required review and approval workflow.
