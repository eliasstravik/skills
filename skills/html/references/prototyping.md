# Prototyping

Sources: the [HTML effectiveness gallery](https://thariqs.github.io/html-effectiveness/), especially [Animation sandbox](https://thariqs.github.io/html-effectiveness/07-prototype-animation.html) and [Clickable flow](https://thariqs.github.io/html-effectiveness/08-prototype-interaction.html).

Use HTML prototypes when the user needs to feel timing, motion, interaction, layout transitions, or a workflow before implementation. A good prototype answers "does this interaction work?" faster than prose can.

## Gallery Use Cases

- Animation sandbox
- Clickable flow

## Good Fits

- Motion tuning for duration, easing, delay, transform distance, opacity, spring feel, or choreography.
- Clickable user flows with enough fidelity to judge information architecture and interaction order.
- Micro-interactions such as completion, drag, reorder, expand, collapse, confirm, dismiss, or transition states.
- Product flows that need user feedback before engineering commits to a path.

## Think About

- Fidelity: prototype only the parts needed to answer the question.
- Controls: expose the parameters the user is likely to tune.
- Export: provide a copy action for chosen timing values, CSS variables, JSON config, or implementation notes.
- States: include reset, replay, loading, disabled, empty, and failure where relevant.
- Device: verify the interaction on the viewport where it matters most.

## Useful Patterns

- Sandboxes with sliders, segmented controls, toggles, and replay buttons.
- Click-through screen sequences with persistent navigation and visible current state.
- Draggable or reorderable mock surfaces with a reset action.
- Parameter summaries that update live and can be copied back into implementation.
- Reduced-motion fallbacks for animation-heavy prototypes.

## Quality Bar

- The prototype isolates the decision rather than building a mini product.
- Controls are labeled by the value they tune and show current values.
- Interaction works with mouse and keyboard where reasonable.
- The artifact includes the selected parameters or implementation notes.
- The result is inspectable as one self-contained HTML file.
