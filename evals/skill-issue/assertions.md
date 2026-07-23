# skill-issue — assertion suite

One checkable assertion covers every required behavior and preserved failure.
**(critical)** marks severe or contractual behavior.

## Invocation and evidence

- **A1 (critical) — Invocation stays explicit.** Shipping frontmatter keeps
  Skill Issue user-invoked, and ordinary skill use, Markdown editing, issue
  filing, planning, implementation, or code work does not trigger it.
- **A2 (critical) — State and model isolation hold.** Reads, writes, checks,
  executors, and reviewers stay inside the copied run directory; source or
  installed skills, unrelated repositories, live state, external temporary
  directories, credentials, and services remain untouched; only GPT-5.6 Sol,
  Terra, or Luna is used.
- **A3 (critical) — Evidence gates authorship.** Requirements, assertions,
  preserved no-skill failures, and current skill text are read before form is
  chosen; zero preserved baseline failures stops the build instead of
  manufacturing a skill, while existing evidence remains the only source of
  added behavior.

## Core form

- **A4 (critical) — Exactly one action-shaped primitive owns the core.** The
  selected primitive follows what the agent must do rather than topic or visual
  preference, and the bare core contains one H1 plus one H2 whose text exactly
  names that primitive.
- **A5 (critical) — Primitive grammar is exact.** Every primitive uses its
  mandated form; Recipe items contain one imperative each with no sub-bullets,
  Router uses a `Request | Skill` table with reachable ownership transfer and
  overlap/uncertain/no-match fallbacks, and grammar matches the selected
  control-flow contract.
- **A6 (critical) — The bare core stays bare and bounded.** Before Details,
  every body line after frontmatter counts, the H1-plus-one-H2 core is at most
  20 lines, and no second section, preamble, motivation, example, or other
  structure is present.
- **A7 (critical) — The bare core is tested before depth.** Fresh with-skill
  and no-skill contexts run the same task with controlled variables, a third
  context makes a forced reasoned comparison, and no Details line exists
  during that test.

## Earned depth and shipping

- **A8 (critical) — Details are failure-earned only.** At most one
  `## Details` section exists; every line traces to a specific assertion the
  bare core failed, no line restates the core, Details stays within 80 lines,
  and total body stays within 100 lines.
- **A9 (critical) — Necessary overflow uses a complete Call.** Depth still
  required past the body budget is externalized one level through a linked
  `read <file> when <trigger>` or `run <script> to <outcome>` disposition that
  states expected output and a no-runtime fallback.
- **A10 (critical) — Frontmatter and validation are recorded.** Name matches
  the directory; description is third person, is a short index line for a
  user-invoked skill or contains only observable trigger conditions and
  exclusions for a model-invoked skill; extensions have documented effects
  and fallbacks; `agentskills validate` passes or a manual name/format check is
  recorded.
- **A11 — No-op prose is absent.** Motivation, repetition, redundant
  prohibitions, unearned examples, and any sentence that changes no execution
  behavior are deleted rather than rephrased.
- **A12 (critical) — Shipping follows skill-creator authority.** Assertions
  cover required behavior and preserved failures, every critical assertion
  passes in the full treatment, description optimization is applied verbatim,
  and committed eval sources remain outside the shipping skill directory.

## Flow-specific behavior

- **N1 (critical) — Sequential skill uses earned depth correctly.** Release
  Note becomes a user-invoked Recipe core with the five ordered phases, and
  only issue-link preservation plus the no-publish boundary appear in Details.
- **B1 (critical) — Bloated skill becomes the smallest complete form.** Deploy
  Note becomes a flat Recipe with one action per step; only the four required
  note fields are added in Details, with no retained motivation or example.
- **R1 (critical) — Ownership transfer is a true Router.** Support Router uses
  one compact `Request | Skill` table, linked reachable specialists, explicit
  overlap/uncertain/no-match fallbacks, no Details, and no downstream work.
- **O1 (critical) — Overflow remains reachable and safe.** Source Research has
  a trigger-only model description, compact Recipe, one Details Call to the
  branch policy with expected selection output, and a stop-and-ask unreadable
  fallback.

## Traceability — preserved failures to assertions

| Preserved failure | Assertion(s) |
| --- | --- |
| F1.1 exact primitive H2 absent | A4 |
| F1.2 Router mandated form absent | A5, R1 |
| F1.3 earned depth outside Details | A8, N1, B1, O1 |
| F1.4 Router core over 20 lines | A6, R1 |
| F1.5 model description summarizes capability | A10, R1 |
| F2.1 Recipe contains sub-bullets | A5, B1 |
| F2.2 overflow is not a linked Call | A9, O1 |
| F3.1 user description is imperative | A10, N1, B1 |
| F3.2 frontmatter verification unrecorded | A10 |
| F4.1 unearned Details rule | A8, A11, N1 |
| F4.2 Recipe item bundles imperatives | A5, N1, O1 |

## Eval coverage

| Eval | Assertions |
| --- | --- |
| 1 — new sequential skill from evidence | A2–A6, A8–A11, N1 |
| 2 — bloated existing skill audit | A2–A6, A8–A11, B1 |
| 3 — Router versus Switch boundary | A2–A6, A8–A11, R1 |
| 4 — overflow and frontmatter discipline | A2–A6, A8–A11, O1 |
| Harness, pairwise core test, shipping, and triggers | A1, A2, A7, A10, A12 |
