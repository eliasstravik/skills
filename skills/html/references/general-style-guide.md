# General HTML Artifact Style Guide

Sources: Anthropic's [HTML article](https://claude.com/blog/using-claude-code-the-unreasonable-effectiveness-of-html) and [design-harness writing](https://www.anthropic.com/engineering/harness-design-long-running-apps), OpenAI's [Apps SDK UI guidelines](https://developers.openai.com/apps-sdk/concepts/ui-guidelines) and [frontend design guidance](https://developers.openai.com/blog/designing-delightful-frontends-with-gpt-5-4), plus Vercel's [Geist typography](https://vercel.com/geist/typography), [Geist colors](https://vercel.com/geist/colors), and [AI-powered prototyping](https://vercel.com/blog/ai-powered-prototyping-with-design-systems) writing.

Use this guide for any HTML artifact that needs to be useful, readable, and deliberate. Adapt the style to the user's product or brand when local design tokens, screenshots, or component examples exist.

## Start With Constraints

- Define audience, reading mode, and the decision the artifact should support.
- Gather available design constraints: product screenshots, CSS variables, design tokens, logo rules, typography, component examples, and prior artifacts.
- If no local system exists, create a small one: background, surface, text, muted text, border, accent, success, warning, danger, radius, spacing, and type scale.
- Use source material as grounding, not as text to copy.

## Turn Content Into An Interface

- Design for scanning first, then reading: strong section titles, visible grouping, summaries, legends, and tables where useful.
- Use spatial layout for comparison and relationships: grids, split panes, timelines, canvases, maps, and slide sections.
- Add interaction only when it changes understanding: filters, tabs, hover/click inspectors, sliders, keyboard navigation, copy/export buttons.
- Preserve a plain reading path for accessibility and for people who skim without interacting.

## Visual System

- Typography: keep a compact scale, clear hierarchy, generous line-height, and purposeful mono usage for code, IDs, timings, or labels.
- Color: use backgrounds, borders, text, and accents as separate roles. Avoid one-hue palettes, low-contrast text, and decorative gradients that compete with content.
- Spacing: use a repeatable spacing scale. Similar components should have similar padding, gaps, and alignment.
- Shape: choose radius and borders once, then reuse them. Cards should frame repeated items or tools, not every page section.
- Icons and imagery: use them to clarify meaning. Avoid decorative elements that do not carry information.
- Density: dense is acceptable when organized; cramped is not.

## HTML And CSS Craft

- Use semantic HTML: `main`, `section`, `article`, `nav`, `button`, `table`, `figure`, `figcaption`, `details`, and form controls where appropriate.
- Use CSS variables for tokens and component roles.
- Keep fixed-format elements stable with `aspect-ratio`, grid tracks, min/max dimensions, and explicit control sizes.
- Make text wrap safely inside cards, buttons, nodes, and slides.
- Include focus states, hover states, and disabled states for controls.
- Make interactive SVG elements keyboard-reachable when the interaction is essential.
- Add print styles when the artifact may become a PDF or leave the browser.

## Planning With HTML

- For planning, prefer multiple small artifacts over one giant page when the work has distinct phases: exploration, comparison, implementation plan, verification guide.
- Make tradeoffs explicit with side-by-side options, assumptions, risk tables, timelines, and mockups.
- Include enough evidence that a future implementation or verification session can use the artifact as context.
- When presenting options, label the decision each option optimizes for instead of only naming the visual treatment.

## Review Checklist

- Can the user tell what this artifact is for in the first viewport?
- Does the layout make the most important relationships visible?
- Are color, type, spacing, and shape coherent as one system?
- Does the artifact avoid generic template patterns when the content calls for a distinct mood or identity?
- Does it work at phone and desktop widths?
- Are source notes, assumptions, and generated inferences clearly separated?
- If the artifact is interactive, does it still communicate useful information before interaction?
