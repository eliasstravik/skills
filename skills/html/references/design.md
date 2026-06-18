# Design

Sources: the [HTML effectiveness gallery](https://thariqs.github.io/html-effectiveness/), especially [Living design system](https://thariqs.github.io/html-effectiveness/05-design-system.html) and [Component variants](https://thariqs.github.io/html-effectiveness/06-component-variants.html).

Use HTML for design artifacts when tokens, components, states, or variants need to be visible and reusable. HTML is a strong medium for design systems because the artifact can render the actual visual language and feed constraints back into later prompts.

## Gallery Use Cases

- Living design system
- Component variants

## Good Fits

- Design-system references generated from repo tokens, CSS variables, component code, or screenshots.
- Component contact sheets showing sizes, states, intents, densities, empty states, loading states, and error states.
- Token audits with swatches, type scale, spacing scale, radius, shadow, and usage notes.
- Visual QA surfaces for comparing product UI against intended system rules.

## Think About

- Source of truth: CSS variables, Tailwind config, Figma export, screenshots, component files, or documented brand tokens.
- Scope: token reference, component matrix, page pattern, state audit, or brand application.
- Reuse: make tokens copyable and variant names unambiguous.
- Coverage: include disabled, focus, hover, active, loading, empty, error, selected, and destructive states when relevant.
- Drift: call out mismatches between code, screenshots, and documented design rules.

## Useful Patterns

- Token boards with swatches, raw values, semantic roles, and copy buttons.
- Type-scale ladders that show size, line-height, weight, and intended use.
- Component matrices with rows for state and columns for size or intent.
- Side-by-side examples of correct and incorrect usage.
- Notes on accessibility, contrast, focus rings, and touch target size.

## Quality Bar

- The artifact renders the design language directly instead of describing it abstractly.
- Tokens have semantic labels, not just raw values.
- Component variants are stable and comparable in one glance.
- The artifact exposes missing states or inconsistent styling.
- Later agents can use it as a visual constraint document.
