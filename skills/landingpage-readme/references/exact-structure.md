# Exact landing-page README structure

Keep this order and formatting across every variant. Formulas define semantic jobs, not mandatory filler. If a shorter line performs the job more clearly, use it. Omit optional proof or media sections when the repository cannot support them.

## Page order

1. Hero
2. Aspiration
3. Alternatives scorecard
4. Behavior in action
5. Three-step start
6. Demo, when real or explicitly planned
7. Pricing or adoption paths
8. Social proof, when real and permissioned
9. FAQ
10. Closing start step
11. Repeated CTA cluster

The structure came from the locked landing-page README format and was refined through Rowbound, Wedge, Stockpile, Mold, Greenware, and Codebound iterations.

## Global copy rules

- Use direct, active headings. Prefer commands or observable outcomes over labels such as “Features” or “Why us.”
- Write like a person explaining the product to a smart colleague: ordinary words, concrete nouns, and exact verbs.
- Keep headings short. Do not force a `without` clause, product name, platform name, or second promise into a heading when the main outcome is already clear.
- Preserve each formula's meaning while rewriting its surface language for the product, audience, and approved angle.
- Lead with the user's workflow and downstream value. Put formats, payloads, schemas, internals, and implementation detail below the result they enable.
- Make every claim visualizable, falsifiable, product-specific, and supported by repository evidence or an approved user fact.
- Make each paragraph add a mechanism, condition, consequence, qualification, or example. Delete paragraphs that only paraphrase their heading.
- Use no salesy adjectives, invented urgency, or unexplained abstractions such as “add the judgment.”
- Use em dashes in headings only when the formula needs the turn; avoid them in body paragraphs.
- Keep behavior-design framework names out of published prose, metadata, alt text, and HTML comments.

## 1. Hero

Order: eyebrow → headline → paragraph → visual → buttons → checks → proof.

### Eyebrow

Formula: `[Project name] | [specific category] for/on [platform or audience]`.

- Render as a centered flat-square shields.io badge with dark `24292f` label and green `2ea44f` message.
- Use the specific pitch, not a vague category. “Enrichment cache for Clay” beats “GTM infrastructure.”
- Set the GitHub About description to the pitch after the project name, with no trailing period, when metadata mutation is approved.

### Headline

Default formula: `[Command verb] [target outcome]`.

Extended formula: `[Command verb] [target outcome] without [sharp pain 1] or [sharp pain 2]`.

- Use the default when it is already distinctive and clear.
- Add the pain clause only when it clarifies the promise rather than making it slower to understand.
- Keep implementation detail out. “Build GTM engineering systems with code” is clearer than a stack inventory.
- Render with `<h3 align="center">` to avoid GitHub's h1/h2 rule.

### Introductory paragraph

Formula: `[Product] lets you [valuable behavior] when [frustration moment], by [ability mechanism] and [freedom or downstream mechanism].`

- Preserve all semantic slots, but make the sentence sound natural.
- Carry the value through to the destination the reader cares about. For prospecting, that may be enrichment and routing into Clay, a CRM, or a campaign rather than the intermediate payload.
- Render as a centered `<p>`.

### Visual

- Show a simple product-specific input → behavior → result scene at 88% width.
- Prefer one immediately legible product moment over a dense architecture diagram.
- Use a committed GitHub-safe image with literal alt text describing the scene.
- Never place “demo recording placeholder” or similar production language inside an approved hero image. Put missing-production guidance in an HTML comment instead.

### Buttons, checks, and proof

- Primary CTA: name the concrete first outcome or actual product action. Prefer “Build my GTM stack” to “Install Codebound.” Use the real in-product label when that is the clearest next action.
- Link the primary CTA to `docs/getting-started.md`.
- Secondary CTA: `Book a demo`, opening in a new tab.
- Render both as committed 40px-high SVG buttons that fit side by side on a 340px viewport.
- Follow with three centered `<sub>` check facts that remove the biggest first-step doubts.
- Add `⭐ Used by [peer group]` only when use by that group is supported or explicitly approved. Otherwise use supported proof or omit the line.

## 2. Aspiration

Headline formula: `[Run/Keep/Build] [desired working state] [in the reader's existing context].`

Describe the state after the change in present tense. Keep mechanisms and product components out unless they are part of the state the reader values.

## 3. Alternatives scorecard

Headline formula: `Choose between [alternative 1], [alternative 2], [alternative 3] — or [golden route].`

- Name categories, not competitors.
- Put the product first and bold its column.
- Use nine short, neutral rows when the evidence supports them: three feasibility facts, three desirability facts, and three effectiveness facts.
- Use ✅ and ❌ only in cells. Let alternatives win where they genuinely win; never manufacture a perfect product score.
- Close with one plain command plus the interface, labor, and freedom or outcome reasons.

## 4. Behavior in action

Headline formula: `[Concrete input action]. [Immediate observable result].`

It must pass the video test: a person could record the input and result. Prefer the user's wording over product jargon.

Use exactly three blocks:

1. 📈 The user's wanted workflow or pace.
2. ⚡ The labor the product removes or completes.
3. 💬 The downstream handoff, trigger, or next useful result.

- Write each block as a short direct h3 plus one factual paragraph.
- Do not use “Say yes to” or “Say no to”; they sound like sales scaffolding rather than product behavior.
- Do not force `Let [Product]` into the middle heading. “Get the full stack scaffolded and verified” can be clearer.
- Replace abstractions with the actual user action. Prefer “you add any important comments” to “you add the judgment.”
- Keep the end-to-end workflow visible. An immediate send to Clay may matter because Clay enriches and routes the lead into a CRM or outbound campaign.

## 5. Three-step start

Headline formula: `[Complete first outcome] in [true time box]` or `[Start first outcome] in one guided setup`.

Render three top-aligned HTML table cards with keycaps 1️⃣ 2️⃣ 3️⃣. The steps are:

1. Perform the input or install.
2. Configure or approve the safety boundary.
3. Use or inspect the result.

Each card gets one bold action title and one `<sub>` support line. A reader should understand the first-success chain from the cards alone.

## 6. Demo

Use only when a real recording exists or the user explicitly wants a planned slot.

- Headline: `Watch [outcome happen] in [true duration]`.
- Show one 88%-width media embed and one literal description of what appears, in order.
- For missing media, use a neutral static frame plus an HTML comment specifying the exact input, behavior, result, framing, duration, and GitHub upload step.

## 7. Pricing or adoption paths

Use the fixed headline `Choose how to get started` and a two-column HTML table.

### Self-serve

- Who it is for.
- `Free` when supported.
- The complete product capability, not a deliberately weakened tier.
- Primary CTA in a separate bottom row so buttons align.

### Done-with-you

- `Let's talk`.
- Everything in self-serve.
- Full setup and installation or deployment.
- Required platform, authentication, environment, or provider configuration.
- Team access, rollout, training, and best practices.
- Ongoing maintenance and upgrades.
- Dedicated Slack channel support when actually offered.
- Frame the offer as getting the team set up and supported. Do not promise to build or operate their ongoing enrichment flows, campaigns, or systems unless that service is real.

## 8. Social proof

Use real, permissioned quotes only. Render each as a markdown blockquote with a bold quote and a separate `<sub>` attribution. Omit the section when proof is unavailable; do not publish fake names, placeholder testimonials, or invented adoption.

## 9. FAQ

Use the fixed headline `Get your questions answered`.

- Ask real adoption questions: required skills, setup, cost, safety, data handling, limits, compatibility, failure recovery, and what the product does not do.
- Start each answer with the verdict: `Yes.`, `No.`, a number, or the direct constraint.
- Keep each answer to the shortest supported explanation.

## 10. Close and repeated CTA

Headline formula: `[Complete the first useful outcome] in [time or guided setup].`

Paragraph formula: `[Result and time]. [Product handles the labor]. [Reader performs the minimal step].`

Repeat the hero CTA buttons, checks, and supported proof exactly. End the page there.

## Getting-started guide

Create `docs/getting-started.md` from repository evidence. It should include:

1. A result-led title.
2. Exact prerequisites.
3. The supported install or access step.
4. The smallest runnable setup sequence.
5. The real command, click, or input that produces the first result.
6. Where to inspect the result.
7. Safe next steps and an issue link. Use the repository's absolute
   `https://github.com/OWNER/REPO/issues/new` URL; a relative `../issues/new`
   link from a file in `docs/` resolves inside GitHub's blob path instead of
   the Issues UI.

Do not send the CTA to a generic README anchor when a focused guide can finish the job.

## Ten-variant preview

- Keep the structure, evidence, pricing facts, and CTA destinations identical across variants.
- Give each variant a genuinely different strategic angle, not synonym swaps.
- Use one page with previous/next controls, numbered pagination, a visible `N / 10` counter, arrow-key navigation, and a stable URL fragment for each variant.
- Verify an initial deep link opens the requested variant and browser back/forward restores the prior variant.
- Apply approved literal copy and global user corrections across all variants before generating further alternatives.
- Keep preview code and rejected variants outside the repository.
- After selection, copy only the approved README, guide, and production assets into the target branch.

## GitHub formatting

- Use GFM tables and HTML `align` attributes; GitHub strips custom CSS.
- Use h3 for the centered borderless hero headline and h2 for section headings.
- Use non-breaking spaces inside check items so wrapping occurs between items.
- Commit every linked local image and button asset.
- Give every visual accurate alt text.
- Validate all local links and SVG/XML before proposing the final mutation.
