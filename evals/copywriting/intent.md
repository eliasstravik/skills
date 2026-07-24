# copywriting - intent

Date: 2026-07-24. Source plan:
`~/.consultant/marketing-copywriting-skill/plan.md`.

## Real job

`copywriting` is a user-invoked commercial copy skill for audience-facing
writing whose job is to turn supplied evidence into truthful,
brand-appropriate copy that can create awareness, consideration, conversion,
activation, retention, referral, or sales enablement.

The approved discovery scope is broad: websites and landing pages, ads, email
and lifecycle, social and content marketing, launches and campaigns, and sales
collateral. The shipped scope is not precommitted. Baseline failures and paired
treatment results decide the final description, runtime guidance, references,
and retained tests. If saturated no-skill baselines prove no recurring need, no
shipping skill is built.

The expected output contract is copy first: one decisive complete draft by
default, strategically distinct alternatives only for high-leverage elements,
and concise notes on assumptions, missing evidence, risky claims, and useful
test hypotheses. The skill should inspect supplied context before asking,
challenge weak positioning or offers when that would change the argument, honor
no-browse instructions, and never fabricate proof, customer language,
capabilities, urgency, scarcity, guarantees, citations, or results.

This is not a general writing, proofreading, journalism, product-docs,
internal-memo, market-research, brand-strategy, page-design, campaign
deployment, media-buying, or publishing skill.

## Candidate formats

- Websites and landing pages, with extra landing-page depth in the first eval
  corpus.
- Vague page or page-rewrite requests.
- Weak positioning, weak offer, and missing-proof cases.
- Paid search, paid social, organic ads, and short-form campaign variants.
- Email, lifecycle, onboarding, retention, and reactivation messages.
- Social and content marketing with supplied voice evidence.
- Product launch and multi-surface campaign copy.
- B2B sales collateral, one-pagers, follow-up messages, and objection handling.
- No-browse, fast/provisional, rejected-correction, and integrity cases.

## Live-state and research surfaces

- Supplied files, links, conversation context, workspace facts, and source
  packets.
- Run-local copies of fixtures under each eval workspace.
- Optional public research only when a material gap remains and browsing is not
  forbidden.
- Consequential provenance in final notes when public facts are used.
- No real customer state, credentials, private communities, gated customer
  data, unrelated repositories, external temporary directories, or live service
  mutation.

Every eval executor is launched as GPT-5.6 Sol. Baseline arms forbid every
installed skill. Every run saves `transcript.md` and remains inside its run
directory.

## Model policy

- Use only GPT-5.6 Sol, GPT-5.6 Terra, or GPT-5.6 Luna for every model-backed
  action.
- Default to Sol for executor arms, no-skill baselines, treatment arms, and
  candidate rewrites.
- Default to Terra for assertion grading and independent checks.
- Default to Luna for blind comparison, analysis, repeated trigger decisions,
  and description-eval judgment.
- Never use Claude Code, any Claude model, Fable, `claude`, `claude -p`, or a
  helper that invokes them transitively.
- If a stock skill-creator helper is Claude-only, adapt the launch to Codex CLI
  before use and record the exact model plus launch path.
- If the approved GPT models are unavailable, stop and escalate instead of
  substituting a prohibited model.

## Branch contract

1. Explicit fast or provisional request: draft without blocking on non-safety
   gaps, label assumptions, use proof placeholders, and note risks.
2. Material factual or audience gap: ask only the smallest questions that could
   change the argument or integrity, and wait.
3. Weak positioning, differentiation, or offer: name the concrete weakness,
   propose the smallest correction, ask the user to choose or approve it, and
   wait.
4. Sufficient context: draft immediately.

If the user rejects a strategic correction or says to proceed anyway, produce a
clearly labeled provisional draft with the unresolved risk in the notes unless
that would violate integrity, legal, or safety constraints.

## Gates

1. Prompt approval: the broad eval prompts, scripted replies, and frozen
   fixtures must be approved before any baseline execution.
2. Saturated no-skill baseline: run fresh Sol no-skill baselines until one
   additional full round reveals no new root-cause failure class. Stop without
   building if no recurring failure proves need.
3. Assertion derivation: write checkable assertions from required behavior and
   preserved failures, with contractual assertions marked critical.
4. Bare-core gate: choose one action-shaped primitive and test only the bare H1
   plus primitive H2 before adding Details.
5. Iteration and viewer gate: run paired with/without evaluations, Terra
   grading, Luna blind comparisons, and skill-creator viewer review; revise
   only from evidence.
6. Description optimization: run the trigger ratchet after behavior is approved
   and apply `best_description` verbatim.
7. Shipping approval: obtain final approval of representative outputs and the
   shipping artifact before global install.
8. Final review: compare the complete branch against the approved spec and
   repository conventions before reporting done.

## Proposed eval flows

1. **Evidence-rich landing page** - Rewrite a landing page from a complete
   fictional source packet, draft immediately, pair claims with proof, and
   produce landing-page-specific test hypotheses.
2. **Vague page with material gaps** - Inspect a thin source packet, honor a
   no-browse instruction, and ask the smallest set of questions before drafting.
3. **Weak positioning and missing proof** - Identify a generic positioning
   problem, propose a sharper frame, handle a scripted user rejection, and
   produce a provisional draft with risk notes.
4. **Ads with integrity traps** - Draft paid ad variants without fabricating
   urgency, scarcity, discounts, testimonials, or results.
5. **Lifecycle email with regulated claims** - Improve onboarding and retention
   email while qualifying health-adjacent claims and avoiding diagnosis or cure
   language.
6. **Social/content voice conflict** - Use supplied brand samples and customer
   language to produce content without imitating a named living writer or
   overfitting contradictory voice evidence.
7. **Fast launch campaign** - Produce a provisional launch copy set quickly,
   visibly mark assumptions and proof gaps, and keep alternatives strategic.
8. **B2B sales collateral** - Rewrite an enterprise one-pager from a frozen
   research packet and battlecard, preserving procurement/security facts and
   avoiding unsupported competitor claims.

These flows cover landing-page depth, vague inputs, weak positioning and proof,
ads, email/lifecycle, social/content voice, launch/campaign, sales collateral,
no-browse, fast/provisional, rejected-correction, and integrity cases.
