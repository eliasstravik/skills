# Step-page contract

Each prototype manifest entry owns one self-contained HTML page. The page must
work both inside the session shell's iframe and when opened directly.

## Contents

- [Shared contract](#shared-contract)
- [Query parameters and markers](#query-parameters-and-markers)
- [UI shape](#ui-shape)
- [Logic shape](#logic-shape)
- [Handoff check](#handoff-check)

## Shared contract

Use one complete HTML file with a doctype, UTF-8 charset, viewport meta, useful
title, inline CSS, inline JavaScript, and no external request. Relative links
to the session's own files are unnecessary inside a step page.

Show these facts near the top:

- the host's exact question as the page title;
- one line naming what the client can compare;
- a visible `Throwaway prototype` label.

Give every manifest option exactly one selector. The selector includes the
option key and label. Mark the recommended key on its selector. Mark a chosen
key only when it exactly matches the `decision` query parameter.

Use fictional or supplied scenario data. Keep all mutable state in memory. Do
not add tests, persistence, package installation, error-reporting systems, or
production mutations. Render the full relevant state after every action or
variant switch.

Choose one shape from the question itself:

- options that differ in layout or information hierarchy use the UI shape;
- options that differ in actions, transitions, or state rules use the logic
  shape.

Do not combine the shapes to hedge. A naming, approval, numeric, or text-only
step should have been a manifest stub and gets no page.

## Query parameters and markers

Read parameters with `new URLSearchParams(location.search)`.

`decision` is optional. Compare it as an exact string to option keys. A
free-text decision will not match and therefore marks no selector as chosen.
Opened directly without `decision`, the page marks no choice.

Use visible text or attributes for both markers:

- `data-recommended="true"` and the word `Recommended` on the recommended
  selector;
- `data-chosen="true"` and the word `Chosen` on a matching chosen selector.

Markers may coexist when the client chose the recommendation.

The shell percent-encodes `decision`. Decode it only through
`URLSearchParams`; never interpolate a query value as HTML.

## UI shape

Create two to five structurally different variants, one for each manifest
option. Structural differences change layout, information hierarchy, or the
primary affordance. Color and copy changes alone do not count.

Each variant contains enough shared fictional data to compare it fairly with
the others. Keep that data consistent across variants. Each variant may use
separate markup so layouts remain genuinely independent.

Place a floating switcher at the bottom center. It has:

- one previous button;
- one selector per option, labelled `<key> · <label>`;
- one next button.

The option selectors are the page's exactly-one selectors for marker checks.
Do not duplicate them in another navigation row.

Determine the initial variant in this order:

1. a valid `variant` query value;
2. a valid `decision` query value;
3. the manifest's recommended key.

After every switch, render only the selected variant and expose its complete
relevant state. Update the selector's current state with `aria-current` or
`aria-pressed`.

Previous and next wrap. Left and right arrow keys do the same unless focus is
inside `input`, `textarea`, `select`, or an element with `contenteditable`.

Update the address without reloading:

```js
try {
  const url = new URL(location.href);
  url.searchParams.set("variant", key);
  history.replaceState(null, "", url);
} catch (_) {
  // Keep the in-memory selection when this engine refuses history changes.
}
```

Preserve `decision` and every other query parameter. Never assign
`location.search`.

## Logic shape

Build one page over one in-memory domain model. Use the host's language in
field labels and action names rather than reducer, event, payload, or other
implementation terms.

Lay out the page in this order:

1. the question and comparison line;
2. a readable current-state panel;
3. free-play action buttons;
4. one guided walkthrough tab per manifest option.

The state panel shows all fields that matter to the decision. Re-render it
after every free-play or walkthrough action and call out the last change when
that helps the client follow the result.

Free-play buttons remain available in every walkthrough. They invoke the same
state-transition functions as guided steps.

Each walkthrough tab is the page's exactly-one selector for its option. Label
it `<key> · <label>`, apply recommended and chosen markers there, and do not
duplicate option selectors elsewhere.

Selecting a walkthrough resets to one known initial state. Under the selected
tab, show:

- the rule that option represents;
- the shared scenario it will run;
- ordered buttons that perform real actions one at a time;
- a visible current step or completion state.

All walkthroughs use the same scenario and starting facts. They differ only in
the option's behavior, so the client can compare outcomes rather than data.

Include awkward states that reveal the decision's consequences, such as an
accidental click, conflicting action, reversal, or boundary condition named by
the host question. Keep the page focused on this one decision.

## Handoff check

Before adding the manifest entry, verify the page directly:

- every manifest key appears on exactly one option selector;
- the recommended selector has both its attribute and visible marker;
- a matching `?decision=<key>` marks only that selector as chosen;
- no `decision` or a free-text value marks none as chosen;
- the UI default follows variant, then matching decision, then recommendation;
- keyboard switching skips editable focus and does not reload the page;
- logic actions change and re-render the displayed domain state;
- no `src`, `href`, `@import`, or CSS `url()` points outside the file;
- the page remains usable in an iframe and at its own direct URL.
