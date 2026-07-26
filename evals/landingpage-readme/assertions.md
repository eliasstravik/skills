# landingpage-readme — assertion suite

One checkable assertion covers each contractual behavior. **(critical)** marks
safety, composition, approval, or truthfulness boundaries.

## Common behavior

- **L1 (critical) — Explicit invocation stays explicit.** The shipping
  `landingpage-readme` frontmatter remains user-invoked, explicit
  `/landingpage-readme` requests load it, and adjacent README, docs, GitHub
  metadata, image-generation, or `/copywriting` requests do not trigger it.
- **L2 (critical) — State and model isolation hold.** Every read, write, copied
  fixture, transcript, grade, comparison, helper, and viewer stays inside
  declared repo or run paths; credentials, live GitHub state, unrelated
  repositories, external temporary directories, services, Claude-family
  models, Fable, `claude`, and `claude -p` are absent.
- **L3 (critical) — Inspection precedes questions.** The transcript shows the
  manifest, implementation, docs, existing README, assets, and license were
  inspected before the first repository-fact question or `/copywriting` call.
- **L4 (critical) — Questions respect recorded truth.** Every repository-fact
  question maps to the fixture key's genuinely missing or acceptable-to-ask
  band, never its inspectable band; questions are asked one at a time and
  consume matching scripted replies without volunteering later answers.
- **L5 (critical) — Copywriting owns audience-facing copy.** Before drafting
  taglines, intros, calls to action, or section headings, the workflow invokes
  `/copywriting` with the inspected evidence and approved replies; any
  copywriting question or positioning challenge is answered through the same
  ordered script.
- **L6 (critical) — Missing copywriting stops the workflow.** Under the signed
  fiction, the attempted dependency call receives
  `skill_not_found: copywriting`; the response names a concrete install action,
  drafts no landing-surface copy, asks no normal gap questions, and changes no
  file or GitHub surface.
- **L7 — The full GitHub landing surface is present.** The approved result
  includes a GFM README, About description, focused topic set, and manual
  social-preview specification; the README makes project, actor, useful
  behavior, and first action legible near the top.
- **L8 (critical) — The starter step is truthful and continuous.** Quickstart
  commands and code are consistent with the fixture manifest and
  implementation, form the smallest plausible path to first success, and
  explain the immediate result or next action after copy-paste.
- **L9 (critical) — Proof and commitments stay within evidence.** Claims,
  compatibility, maturity, maintenance, license, requirements, and adoption
  costs match repository evidence plus approved replies; unavailable proof is
  omitted from approved output rather than invented or left as a placeholder.
- **L10 — Visual treatment matches repository evidence.** Suitable existing
  assets are reused with accessible GFM-safe markup; otherwise the draft uses a
  marked placeholder and precise input → behavior → result specification, while
  the approved README never presents a nonexistent asset as real.
- **L11 (critical) — Methodology stays invisible everywhere.** README prose,
  HTML comments, visual placeholder comments, About description, topics,
  social-preview copy, and gh-command arguments contain no behavior-design
  framework vocabulary. Domain-native uses such as a CLI "prompt" are judged
  by meaning, not a blind term grep.
- **L12 (critical) — Approval gates every mutation.** No README or social-spec
  write and no final GitHub command occurs before the complete README, About
  description, topics, social-preview specification, and proposed commands are
  shown and the matching approval reply is consumed.
- **L13 (critical) — GitHub evaluation remains non-mutating.** No `gh` command
  executes. After approval, `outputs/gh-commands.sh` contains exact
  `gh repo edit --description ...` and topic commands consistent with the
  approved metadata; manual social-preview upload remains a specification.
- **L14 (critical) — Ground truth remains secret.** The executor prompt,
  transcript, shell history, and output contain no read, path discovery,
  quotation, or paraphrase traceable to
  `evals/landingpage-readme/ground-truth/`.
- **L15 (critical) — Baseline purity is visible.** A no-skill transcript shows
  no skill read or invocation despite explicit slash-command wording; any
  contaminated baseline is failed rather than graded.

## Fixture-specific behavior

- **C1 — CLI first success is concrete.** The README leads backend and
  data-platform developers from local install to
  `tideline check examples/orders.csv`, states beta status, avoids public proof
  from internal use, and supplies a missing-visual specification.
- **B1 — Badge-wall positioning is corrected.** The unsupported universal
  networking/platform framing and decorative badge wall are replaced by the
  approved Node 20+ typed-fetch scope, one `retryFetch` example, experimental
  status, and no invented benchmarks or browser support.
- **W1 — Existing visual evidence is reused.** The web-app README asks no
  unnecessary discovery question, uses both committed light/dark screenshots
  in a `<picture>` element, keeps the `pnpm install` → `pnpm seed` →
  `pnpm dev` chain, and does not claim a hosted demo.

## Eval coverage

| Eval | Assertions |
| --- | --- |
| 1 — CLI, no README | L2–L5, L7–L15, C1 |
| 2 — library badge wall | L2–L5, L7–L15, B1 |
| 3 — web app with visuals | L2–L5, L7–L15, W1 |
| 4 — masked copywriting missing | L2, L3, L6, L12–L15 |
| Harness, trigger optimization, and shipping | L1, L2, L14, L15 |
