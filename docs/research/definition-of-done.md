# Definition of done and verification before a task starts

Research for a new skill (SKIL-1, 2026-11-08). Internal: rival products are named here on purpose.

## The recommendation, first

Build one small skill that writes a **done contract** before work starts and checks it before `ready`.

- **The contract has four parts.** One sentence on the end state the person will see. Three to seven checks, each with the exact proof that settles it. What's out of scope. What the agent can't check yet, and what it needs to.
- **Prove the checks can run before the work starts.** Run each one once (open the app, run the test command, look up the secret name). A check that can't run is a gap to raise now, not at the end.
- **One confirmation, low friction.** Put everything in a single card, worded so "yes" accepts it. Skip the card when the task is small and nothing is missing. Never ask for a fact the agent can look up.
- **The contract is frozen.** The agent may tick a check off; it may not weaken or drop one without asking.
- **At `ready`, the proof *is* the contract.** Each check gets fresh evidence from the final state, plus a "not proven" list.
- **Replace the open-ended reviewer with a contract checker**, not with nothing. A fresh agent gets only the contract and the result and answers one question per check: "proven or not?" It also flags anything unsafe. Style notes are dropped.

Your view mostly holds up. The evidence agrees that a clear done and real verification are the biggest lever, and that extra process mostly gets in the way. It disagrees in three places (see [Where the evidence pushes back](#where-the-evidence-pushes-back)):

1. Agents grade their own work too kindly, so someone other than the worker should still check the result: a fresh agent or you.
2. "Perfect" verification rarely exists. Aim for decisive verification and an honest list of what isn't proven.
3. The criteria must be locked, or they quietly shrink while the work runs.

---

## 1. How should the end state be defined?

### Approaches found

| Approach | Where | Strength | Weakness |
|---|---|---|---|
| **Goal plus "Done when"** in the prompt | Codex best practices ([link](https://learn.chatgpt.com/guides/best-practices): "Done when: What should be true before the task is complete") | Cheapest; fits any task | Often vague; no proof attached |
| **A goal condition checked by a fresh model each turn** | Claude Code `/goal` ([docs](https://code.claude.com/docs/en/goal)); Codex Goals ([cookbook](https://developers.openai.com/cookbook/examples/codex/using_goals_in_codex)) | The worker doesn't judge itself; loops until met | The judge can't run tools, so it sees only what the worker showed it |
| **Acceptance criteria as behaviour** (Given/When/Then, EARS) | Spec Kit spec template; [Kiro specs](https://kiro.dev/docs/specs/); [ExecPlans](https://developers.openai.com/cookbook/articles/codex_exec_plans) ("Phrase acceptance as behavior, with specific inputs and outputs") | Precise, testable | Heavy for small tasks; Kiro says nothing on how to verify |
| **A feature list where every item starts failing** | Anthropic [long-running harness](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) | Can't be gamed: only the "passes" flag may change | Built for very long builds |
| **Sprint contract** agreed by builder and checker before work | Anthropic [harness design](https://www.anthropic.com/engineering/harness-design-long-running-apps) ("agreeing on what 'done' looked like for that chunk of work before any code was written") | Done and check fixed together | Two agents |
| **Test seams confirmed with the user first** | Matt Pocock [tdd](https://github.com/mattpocock/skills/blob/main/skills/engineering/tdd/SKILL.md) ("No test is written at an unconfirmed seam"), [to-spec](https://github.com/mattpocock/skills/blob/main/skills/engineering/to-spec/SKILL.md) | The user approves *where* proof happens; each seam notes "what it catches and what it misses" | Code only |
| **Proof required per change type, decided up front** | Theo's [t3code AGENTS.md](https://github.com/pingdotgg/t3code/blob/main/AGENTS.md), Lauren's [noodle plan templates](https://github.com/poteto/noodle/blob/main/.agents/skills/plan/references/templates.md) ("'it compiles' is not verification") | Ties done to evidence | Needs a list of change types |
| **A merge gate checklist** | Theo's [full-send](https://github.com/t3dotgg/tstack/blob/main/skills/full-send/SKILL.md) | Concrete, same every time | Generic; not about this task's intent |
| **A team-wide Definition of Done** | [Scrum Guide](https://scrumguides.org/scrum-guide.html) ("If a Product Backlog item does not meet the Definition of Done, it cannot be released") | Shared bar | It's a quality floor, not this task's goal |

### Which is best

**A per-task contract in which each check comes with its proof.** It combines three ideas from the table: "Done when" for intent, behaviour-shaped checks from ExecPlans and Spec Kit, and proof decided up front from t3code and noodle. It is locked like the long-running harness's feature list, and it carries a short **out of scope** line, as in Matt's [wayfinder](https://github.com/mattpocock/skills/blob/main/skills/engineering/wayfinder/SKILL.md) ("Name the destination… The destination fixes the scope").

Why: an end state without its proof is a wish, and a proof without the end state is the noise you get from today's reviewer. Pairing them one-to-one makes "done" a fact anyone can check. Matt's [loop-me](https://github.com/mattpocock/skills/blob/main/skills/in-progress/loop-me/SKILL.md) gives the test for whether it's well defined: "done when an implementer agent could build it without asking a single question."

Shape:

```
Done when: <the end state the person will see, one sentence>
Checks:
  1. <behaviour>  → proof: <exact command / screenshot of what / observation>
  2. …
Out of scope: <what this task won't touch>
Can't check yet: <gap> → needs <thing> from <who>
```

---

## 2. What makes verification good enough?

"Perfect" is the wrong target. Graders are often brittle ([Anthropic evals post](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents): a good task is one where "two domain experts would independently reach the same pass/fail verdict"), and some things only a person can judge (taste). The bar is **decisive**: if the work were wrong, the check would fail, and someone else could run it again.

### Checklist: verification that counts

1. **The real thing, on the real surface.** Drive the app in a browser rather than trusting a unit test. ([Lauren, prove-it-works](https://github.com/cursor/plugins/blob/main/harness/pstack/claude-code/skills/principle-prove-it-works/SKILL.md): "Do not infer from proxies, self-reports, or 'it compiles.'" [feature playbook](https://github.com/cursor/plugins/blob/main/harness/pstack/claude-code/skills/poteto-mode/playbooks/feature.md): "Verify on the matching surface.")
2. **Fresh.** Run in this session, on the final change. ([Theo, full-send](https://github.com/t3dotgg/tstack/blob/main/skills/full-send/SKILL.md): "Proof is evidence you observed yourself in this session"; [superpowers](https://github.com/obra/superpowers/blob/main/skills/verification-before-completion/SKILL.md): "NO COMPLETION CLAIMS WITHOUT FRESH VERIFICATION EVIDENCE.")
3. **Seen failing first, where possible.** Red, then green; reproduce the bug before fixing it. ([Matt, diagnosing-bugs](https://github.com/mattpocock/skills/blob/main/skills/engineering/diagnosing-bugs/SKILL.md): "Do **not** proceed to hypothesise without a loop.")
4. **One-to-one with the checks**, including the error, empty and saved-state paths that matter. ([verify-atlas](https://github.com/poteto/verification-skill-example/blob/main/.cursor/skills/verify-atlas/SKILL.md): "Do not submit 'look, it opens' captures.")
5. **Re-runnable by someone else**: a command, a script or a screenshot with its steps. Screenshots are the strongest evidence and test output next ([Matt, pr](https://github.com/mattpocock/skills/blob/main/skills/engineering/pr/SKILL.md): "Screenshots are S-tier").
6. **Locked.** The criteria and tests aren't softened to pass ([Anthropic harness](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents): "It is unacceptable to remove or edit tests").
7. **Honest about gaps.** What wasn't proven is listed. Mocked tests, the wrong surface, "inconclusive", or running out of budget don't count as a pass ([Theo, takeover](https://github.com/t3dotgg/tstack/blob/main/skills/takeover/SKILL.md): "Green mocked tests do not prove the user experience works"; [sol-loop](https://github.com/t3dotgg/tstack/blob/main/skills/sol-loop/SKILL.md): "Budget end is not approval").

### Checklist: missing verification ability (flag before starting)

| Missing | Example |
|---|---|
| **Access** | repo, staging, production, a third-party dashboard |
| **Credentials** | API key, test account login |
| **Test data** | fixtures, a seeded database, a real sample file, a reproducing input |
| **A running app** | dev server won't start, needs Docker or a device |
| **A way to see it** | browser for the UI, phone for mobile, emails, notifications |
| **A way to observe side effects** | logs, database, outgoing webhooks, payments |
| **The oracle** (what "right" looks like) | expected numbers, a design, a source of truth, the person's taste |
| **Permission** | touching production, sending messages, spending money |
| **Time** | a job that takes hours, a cron that fires tomorrow |

Matt's [diagnosing-bugs](https://github.com/mattpocock/skills/blob/main/skills/engineering/diagnosing-bugs/SKILL.md) shows the move when a gap is found: say what was tried, then ask for "(a) access to whatever environment reproduces it, (b) a redacted captured artifact… or (c) permission to add temporary production instrumentation." Lauren's [create-verification-skill](https://github.com/cursor/plugins/blob/main/harness/pstack/claude-code/skills/create-verification-skill/SKILL.md) shows how to find gaps: "Answer these from the codebase and only ask the user what you cannot observe." Theo's [full-send](https://github.com/t3dotgg/tstack/blob/main/skills/full-send/SKILL.md) puts the rule plainly: "When you cannot find a way to prove a change, you do not have full confidence. Ask the user."

---

## 3. When to ask, when to propose and proceed

| Situation | Do |
|---|---|
| Small, clear, reversible task; every check can run | **State the contract in one line and go.** No card. (Lauren's [in-your-own-words](https://github.com/cursor/plugins/blob/main/harness/pstack/claude-code/skills/in-your-own-words/SKILL.md) is restated without waiting.) |
| Non-trivial task, intent clear, nothing missing | **One card**: the contract, worded so "yes" accepts it. Start on yes. |
| Any gap in verification ability | **Ask now**, in the same card: what's missing, what was tried, the smallest thing that unblocks it. |
| Done is ambiguous (two reasonable readings) | **Ask** with options and a recommendation first ([Matt, grilling](https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md): "Word each question so \"yes\" accepts your recommended answer"). |
| A fact the agent can look up | **Never ask.** Look it up ([grilling](https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md)). |
| Mid-work: a check turns out wrong or impossible | **Ask before changing the contract**, never silently. |
| The person already approved a contract (e.g. in the brief) | **Don't re-ask.** Only raise new gaps. |

Rule of thumb: **one round, all at once, recommendation first**. Superpowers' [brainstorming](https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md) gives the reason the round exists: "You build what you believe your human partner wants, and that belief is usually thinner than it feels." The Codex [prompting guide](https://developers.openai.com/cookbook/examples/gpt-5/codex_prompting_guide) gives the reason to keep it short: prompting for upfront plans and status updates "can cause the model to stop abruptly."

---

## 4. In Shepherdr, and for any agent

### How it works today

- The Assistant's instructions already say each brief holds "the goal, the files in scope, **what done looks like, how to check it**" (`~/.config/herdr-core/templates/assistant.md`). Nothing enforces the shape.
- The worker has a task browser, secrets by name (`herdr-secret`) and a Proof setting (a recipe artifact with a "Not proven" list). That's most of the tooling a contract needs.
- Review: on, which starts a fresh reviewer. Its template (`templates/reviewer.md`) gets the brief and the diff and is told to report "what is wrong", with no contract to check against. That's where the off-target findings come from.
- `herdr-task ready` takes a summary, details and a proof id. It doesn't know about checks.

### Proposed flow

1. **At task creation (Assistant).** Draft the contract with the skill while the person is in the chat. Show it in the one confirmation the Assistant already gives. Settle gaps then: ask for missing secrets with `herdr-secret ask`, have the person sign in to the task browser, get fixtures. The brief gets a `## Done when` section (checks plus proofs) and a `## Needs` line. *This is the cheapest moment, because the person is there.*
2. **At start (worker).** Preflight: run each proof route once (the test command, opening the app in the task browser, `herdr-secret list` for the named secrets). All good: **start without asking**. A gap: set the status line, then one AskUserQuestion card.
3. **During the work.** Changing the contract needs a card. Ticking checks off doesn't.
4. **At `ready`.** The proof artifact lists each check, its fresh evidence and its result, then "Not proven". *Possible later change:* `ready` refuses when a check has neither a proof nor a "not proven" line.
5. **Review.** A new mode, or a replacement for the current one: a **contract check**. A fresh agent gets the contract, the proof and the diff. For each check it answers proven / not proven / contradicted, with its own evidence. It also flags blockers outside the contract (data loss, unsafe, broke something else). Nothing else.

### Any agent, without Shepherdr

Same contract, in the chat. Confirm it with the CLI's question tool. Optionally hand it to a goal loop: Claude Code's [`/goal`](https://code.claude.com/docs/en/goal) or a Stop hook ([hooks guide](https://code.claude.com/docs/en/hooks-guide)), or Codex Goals. The [Claude Code best practices](https://code.claude.com/docs/en/best-practices) describe this ladder (a line in the prompt, then `/goal`, then a Stop hook) and name the reason: "Claude stops when the work looks done. If it has nothing to run that tells it whether the work actually *is* done, 'looks done' is all it has to go on."

---

## 5. Should it replace the separate review agent?

**Replace the intent-blind review. Keep a narrow, intent-bound check.**

For dropping today's review:
- "A reviewer that's asked to find problems will always find *something*. If you fix every finding, you end up with extra…" ([Claude Code best practices](https://code.claude.com/docs/en/best-practices)).
- Lauren's [interrogate](https://github.com/cursor/plugins/blob/main/harness/pstack/claude-code/skills/interrogate/SKILL.md) restates intent first and keeps only findings proven by a command: "No findings is a valid result."
- Matt's [code-review](https://github.com/mattpocock/skills/blob/main/skills/engineering/code-review/SKILL.md) keeps "Spec" findings apart from "Standards" ones: "Reporting them separately stops one axis from masking the other."
- Anthropic: an evaluator is worth its cost mainly when the task is at "the edge of what the generator could do well solo" ([harness design](https://www.anthropic.com/engineering/harness-design-long-running-apps)).

For keeping *some* independent check:
- "Agents reliably skew positive when grading their own work" ([harness design](https://www.anthropic.com/engineering/harness-design-long-running-apps)). LLMs "struggle to self-correct their responses without external feedback" ([Huang et al., ICLR 2024](https://arxiv.org/abs/2310.01798)).
- Claude Code's `/goal` deliberately has "completion… decided by a fresh model rather than the one doing the work" ([docs](https://code.claude.com/docs/en/goal)).
- Codex Goals: a goal "should not be marked complete because the model believes it is probably done" ([cookbook](https://developers.openai.com/cookbook/examples/codex/using_goals_in_codex)).

**What should remain:** a contract checker that knows the intent because the contract *is* the intent. It's cheap, it can't wander off-topic, and it catches the "skew positive" problem. Turn it off for small tasks where the proof artifact plus your Accept is check enough.

---

## Where the evidence pushes back

| Your view | Evidence | Verdict |
|---|---|---|
| Minimal harness, agents are smart | Anthropic: "adding complexity only when it demonstrably improves outcomes" ([building effective agents](https://www.anthropic.com/engineering/building-effective-agents)). OpenAI: "maximize a single agent's capabilities first" ([practical guide](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf)). Claude Code's best practices list old prompting tricks you can stop using. | **Holds.** Keep the skill tiny; skill-issue's litmus will force that anyway. |
| The one thing that matters is a clear done plus perfect verification | Every guide puts this first: Claude Code best practices, Codex Goals, Anthropic's harness posts. | **Holds, with a caveat.** On long, large builds a planner still mattered (the generator "under-scoped" without one, per the [harness design](https://www.anthropic.com/engineering/harness-design-long-running-apps) post). For Shepherdr-sized tasks, the contract covers it. |
| "Perfect" verification | Graders are brittle; taste can't be scripted; vision misses some UI. | **Adjust:** decisive verification plus an honest "not proven" list. You remain the check for taste, at Accept. |
| Drop the separate reviewer | Self-grading skews positive; a fresh judge is the built-in pattern in `/goal`. | **Adjust:** swap the reviewer for a contract checker; don't remove independent checking. |
| (Not stated) Criteria stay put | The harness post had to forbid editing tests. | **Add:** lock the contract. |

---

## 6. Recommended skill design

**Name (proposal):** `done-contract`. In skill-issue's terms it's an Artifact SOP: it owns one output's required contents and acceptance criteria, so it gets a bare-noun name.

**Admission (skill-issue litmus).** "Write acceptance criteria" on its own is generic best practice and would be rejected. The skill earns its place only through survivor lines:
- **Authority:** the person confirms; the agent may not weaken a check.
- **Quality bar:** what counts as proof, and what doesn't.
- **House format:** the contract shape and when to skip the card.
- **Local state:** in Shepherdr, which tool proves what (task browser, `herdr-secret`, the Proof recipe).

Everything else gets cut.

**Trigger.** Start of any non-trivial task, `/done`, or "what does done look like". In Shepherdr: the Assistant when writing a brief, and the worker at start. Not for trivial edits, pure Q&A, or tasks that already carry an approved contract.

**Steps.**
1. Restate the goal in one sentence: the end state the person will see.
2. Look up everything you can: the repo, its test commands, how to run it, the secrets list, the browser.
3. Draft three to seven checks, each with its proof. Prefer the real surface and a proof that would fail if the work were wrong.
4. Preflight each proof route once. Anything that can't run becomes a "can't check yet" item with what's needed and from whom.
5. Decide whether to ask (section 3). If asking, send one card with the recommendation first. If not, state the contract in one line and start.
6. Lock the contract. Changing it needs a yes.
7. Before done: run every proof fresh, record the result per check, and list what isn't proven. In Shepherdr this becomes the Proof artifact.

### Example 1: UI task

> *"Add a dark-mode toggle to the settings page."*

```
Done when: Settings has a Dark mode switch; flipping it re-themes the whole app at once and it stays after reload.
Checks:
  1. Switch visible on /settings, labelled "Dark mode"      → proof: screenshot, light and dark, at 1280 and 390 px
  2. Flipping it re-themes app shell + settings + one inner page → proof: browser drive, 3 screenshots after toggle
  3. Choice survives a reload and a new tab                  → proof: toggle, reload, screenshot; new tab, screenshot
  4. Default follows the OS setting when never toggled       → proof: emulate prefers-color-scheme: dark in fresh profile, screenshot
  5. No text below 4.5:1 contrast in dark                    → proof: axe run output on the 3 pages
Out of scope: theming emails and the marketing site.
Can't check yet:
  ⚠ Settings is behind login → needs a test account in the task browser (you sign in once), or a seeded dev user.
Confirm? 1. Yes, as written (Recommended)  2. Change checks  3. Other
```

### Example 2: Backend task

> *"Stripe webhooks sometimes double-charge credits. Fix it."*

```
Done when: A repeated Stripe event credits the account once, and the duplicate gets a 200.
Checks:
  1. Repro first: replaying the same event twice credits twice today → proof: failing test (red) before the fix
  2. Same test passes after the fix                                  → proof: test output (green)
  3. Two concurrent deliveries of one event credit once               → proof: test with 2 parallel requests
  4. Different events for the same customer still both credit         → proof: test
  5. Real signed event via Stripe CLI to local server credits once    → proof: `stripe trigger` + `stripe events resend` transcript + DB row count
Out of scope: refunds, the billing UI.
Can't check yet:
  ⚠ Stripe test-mode key → needs secret STRIPE_TEST_KEY (masked box)
  ⚠ Which event field is the unique key (event.id vs payment_intent) → your call; recommend event.id
Confirm? 1. Yes, use event.id (Recommended)  2. Use payment_intent  3. Other
```

### Example 3: Research / doc task

> *"Research how good agent skills define done, and write a report."* (this task)

```
Done when: One private HTML report and the same text as markdown in docs/research/, recommendation first, every repo claim linked.
Checks:
  1. Answers each of the brief's 7 questions        → proof: the section list mapped to the questions
  2. Every claim about a named repo links the file  → proof: script re-fetches each link and greps the quoted words
  3. Missing repos said plainly, not guessed        → proof: "potatoe" has 0 repos; the report says Lauren is "poteto"
  4. Artifact link opens                            → proof: link opened in the task browser, screenshot
  5. No skill in skills/ changed                    → proof: git diff --stat shows only docs/
Out of scope: building the skill.
Can't check yet: none.
→ no card; starts at once (all checks runnable, intent clear).
```

---

## 7. Open questions for you

1. **Name:** `done-contract`, `definition-of-done`, or something else?
2. **Where it runs in Shepherdr:** the Assistant at creation, the worker at start, or both? *Recommend both:* the Assistant drafts and confirms; the worker only preflights and raises new gaps.
3. **Review:** swap today's reviewer for a contract checker, keep both, or no review at all? *Recommend:* contract checker on for medium and large tasks, off for small.
4. **Should `ready` refuse** when a check has neither a proof nor a "not proven" line?
5. **Confirmation:** one card for every non-trivial task, or only when something's missing or ambiguous? *Recommend:* only then. Otherwise state the contract and go.
6. **Taste checks** ("looks good", tone): always yours at Accept, or may the agent judge against a reference?
7. **Goal loop:** should the worker keep looping until every check passes (`/goal` or a Stop hook), or stop once and report?

---

## Sources read

**Matt Pocock — [mattpocock/skills](https://github.com/mattpocock/skills)**: [grilling](https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md), [grill-me](https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md), [to-spec](https://github.com/mattpocock/skills/blob/main/skills/engineering/to-spec/SKILL.md), [to-tickets](https://github.com/mattpocock/skills/blob/main/skills/engineering/to-tickets/SKILL.md), [implement](https://github.com/mattpocock/skills/blob/main/skills/engineering/implement/SKILL.md), [tdd](https://github.com/mattpocock/skills/blob/main/skills/engineering/tdd/SKILL.md), [code-review](https://github.com/mattpocock/skills/blob/main/skills/engineering/code-review/SKILL.md), [diagnosing-bugs](https://github.com/mattpocock/skills/blob/main/skills/engineering/diagnosing-bugs/SKILL.md), [wayfinder](https://github.com/mattpocock/skills/blob/main/skills/engineering/wayfinder/SKILL.md), [loop-me](https://github.com/mattpocock/skills/blob/main/skills/in-progress/loop-me/SKILL.md), [pr](https://github.com/mattpocock/skills/blob/main/skills/engineering/pr/SKILL.md), [wizard](https://github.com/mattpocock/skills/blob/main/skills/engineering/wizard/SKILL.md). The older `write-a-prd` and `prd-to-plan` aren't in the repo any more; `to-spec` and `to-tickets` replaced them.

**Lauren — handle is `poteto`, not "potatoe".** `github.com/potatoe` exists but has 0 public repos. [`poteto`](https://github.com/poteto) is "lauren" (React Compiler core team). Her skill pack "pstack" is published in [cursor/plugins](https://github.com/cursor/plugins/tree/main/harness/pstack/claude-code). Files read: [principle-prove-it-works](https://github.com/cursor/plugins/blob/main/harness/pstack/claude-code/skills/principle-prove-it-works/SKILL.md), [principle-sequence-verifiable-units](https://github.com/cursor/plugins/blob/main/harness/pstack/claude-code/skills/principle-sequence-verifiable-units/SKILL.md), [in-your-own-words](https://github.com/cursor/plugins/blob/main/harness/pstack/claude-code/skills/in-your-own-words/SKILL.md), [feature playbook](https://github.com/cursor/plugins/blob/main/harness/pstack/claude-code/skills/poteto-mode/playbooks/feature.md), [interrogate](https://github.com/cursor/plugins/blob/main/harness/pstack/claude-code/skills/interrogate/SKILL.md), [create-verification-skill](https://github.com/cursor/plugins/blob/main/harness/pstack/claude-code/skills/create-verification-skill/SKILL.md), [verify-atlas example](https://github.com/poteto/verification-skill-example/blob/main/.cursor/skills/verify-atlas/SKILL.md), [noodle plan](https://github.com/poteto/noodle/blob/main/.agents/skills/plan/SKILL.md) + [templates](https://github.com/poteto/noodle/blob/main/.agents/skills/plan/references/templates.md), [noodle verification](https://github.com/poteto/noodle/blob/main/.agents/skills/execute/references/verification.md).

**Theo Browne — [t3dotgg/tstack](https://github.com/t3dotgg/tstack)**: [full-send](https://github.com/t3dotgg/tstack/blob/main/skills/full-send/SKILL.md), [full-stop](https://github.com/t3dotgg/tstack/blob/main/skills/full-stop/SKILL.md), [takeover](https://github.com/t3dotgg/tstack/blob/main/skills/takeover/SKILL.md), [sol-loop](https://github.com/t3dotgg/tstack/blob/main/skills/sol-loop/SKILL.md), [council](https://github.com/t3dotgg/tstack/blob/main/skills/council/SKILL.md). Also [pingdotgg/t3code AGENTS.md](https://github.com/pingdotgg/t3code/blob/main/AGENTS.md) and [test-t3-app](https://github.com/pingdotgg/t3code/blob/main/.agents/skills/test-t3-app/SKILL.md).

**Anthropic**: [Claude Code best practices](https://code.claude.com/docs/en/best-practices), [/goal](https://code.claude.com/docs/en/goal), [hooks guide](https://code.claude.com/docs/en/hooks-guide), [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents), [Skill authoring best practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices), [Demystifying evals](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents), [Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents), [Harness design for long-running apps](https://www.anthropic.com/engineering/harness-design-long-running-apps), [ralph-loop plugin](https://github.com/anthropics/claude-plugins-official/blob/main/plugins/ralph-loop/README.md).

**OpenAI**: [Practical guide to building agents (PDF)](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf), [Codex best practices](https://learn.chatgpt.com/guides/best-practices), [Using Goals in Codex](https://developers.openai.com/cookbook/examples/codex/using_goals_in_codex), [Codex prompting guide](https://developers.openai.com/cookbook/examples/gpt-5/codex_prompting_guide), [ExecPlans](https://developers.openai.com/cookbook/articles/codex_exec_plans).

**Other**: [obra/superpowers verification-before-completion](https://github.com/obra/superpowers/blob/main/skills/verification-before-completion/SKILL.md), [brainstorming](https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md), [GitHub Spec Kit](https://github.com/github/spec-kit), [Kiro specs](https://kiro.dev/docs/specs/), [Ralph (Huntley)](https://ghuntley.com/ralph/), [Scrum Guide](https://scrumguides.org/scrum-guide.html), [Huang et al. 2024](https://arxiv.org/abs/2310.01798).

**Our own**: `skills/consulting`, `skills/midwit`, `skills/first-principles`, `skills/skill-issue` (form rules and the litmus test used above), and Shepherdr's `herdr-task --help`, `herdr-task show SKIL-1`, and the worker, assistant and reviewer templates in `~/.config/herdr-core/templates/`. How they relate: *consulting* is the heavy version (a full interview and prototype) for ambiguous changes; this skill is the light one for any task. *midwit* backs the "skip the card when small" rule. *first-principles* asks for the goal when it's unclear, which is the same move as step 1.
