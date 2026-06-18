# Illustrations

Sources: Anthropic's [HTML article](https://claude.com/blog/using-claude-code-the-unreasonable-effectiveness-of-html), the [HTML effectiveness gallery](https://thariqs.github.io/html-effectiveness/), and the gallery's [SVG figure sheet](https://thariqs.github.io/html-effectiveness/10-svg-illustrations.html) example.

Use HTML illustration sheets when the user needs visual concepts, article figures, documentation headers, lightweight diagrams, or copyable SVG artwork. Illustrations explain a concept or create visual memory; they do not need to encode every operational detail.

## Gallery Use Cases

- SVG figure sheet

## Good Fits

- Header illustrations for docs, blog posts, launch notes, and explainers
- Conceptual figures that make an abstract mechanism memorable
- Sets of related visuals that must share palette, stroke width, typography, and layout rules
- Vector assets the user may tweak by hand, paste elsewhere, or export one by one
- Visual alternatives where the user wants to choose a direction by pointing at it

## Think About

- Concept: what single idea should each figure make visible?
- Context: where will the artwork be used, and at what size?
- Set logic: how many figures are needed, and what rules make them feel related?
- Palette: choose a small role-based palette and document the meaning of each accent.
- Export: each SVG should be standalone, with its own `<style>` block and a download or copy action.

## Useful Patterns

- Build a figure sheet: one page containing multiple SVG cards, captions, usage notes, and export buttons.
- Use inline SVG with explicit `viewBox`, dimensions, accessible labels where useful, and self-contained styles.
- Keep geometry simple enough for future manual editing.
- Use consistent strokes, corner radii, label placement, and whitespace across the set.
- Add a "Palette & rules" section with swatches and concrete drawing constraints.
- Prefer meaning-bearing color roles over decorative gradients.

## Distinguish From Diagrams

Choose illustration when the goal is recognition, tone, or conceptual explanation. Choose a diagram when the reader must inspect sequence, causality, architecture, dependencies, timings, decisions, or failure paths.

## Quality Bar

- Each figure has a clear subject without needing a paragraph of explanation.
- Captions state where the illustration belongs and what idea it supports.
- SVGs are copyable/exportable as standalone assets.
- The set uses a consistent visual grammar instead of reinventing style per figure.
- Labels are legible at the intended display size.
- Decorative choices do not obscure the concept.
