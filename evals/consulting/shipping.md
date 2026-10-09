# consulting — shipping record

Date: 2026-10-09. Built from `~/.consultant/visual-interview-consultant/plan.md` under its handoff.

## Client instruction that overrode the plan

Mid-build the client wrote: "skip tests and evals completely, just get it live asap (use /skill-issue for
skill writing)". Earlier, in the handoff: "build it in full, commit, push, sync and lmk when its ready for
use." So the following plan steps were **not done**:

- Step 2: no `evals.json`, `assertions.md`, fixtures or `trigger-eval.json`.
- Step 5: no `check-shell.sh` and no sample-session fixture.
- Step 8: no with-skill / no-skill eval runs, no eval viewer. There is no baseline evidence.
- Step 9: no description optimization. The description is hand-written by the description canon, not an
  optimizer `best_description`.
- Step 12: no dogfood consultation; no phone test.

## Gates passed on the client's behalf

- Eval prompt sign-off, eval viewer review: not applicable (no evals).
- Plan view and waiting state: built strictly from the shell's existing tokens. **Not yet seen by the client.**
- Pull request and merge: done by the builder, as the handoff instructed.

## What was checked (smoke only, by hand)

- `sh -n` on both scripts. `serve.sh`: start, reuse, `Cache-Control: no-store` on JSON and not on the
  bundle, stop, and exit 3 `Manifest invalid:` on a trailing comma.
- `check-step.sh` passes the two approved sample pages and the skeleton in `page-contract.md`, and fails a
  wrong recommended key.
- In a real browser (agent-browser) against a throwaway session: the comment tool opens by default; an
  option click works while it is open and changes only the iframe hash; a click on the disabled copy button
  copies `Question n: … / Answer: k. label` and shows the toast; an `Other` decision shows "You chose
  something else: …", marks no option and embeds nothing; injected HTML in a label and a decision renders
  as text; the plan view renders headings, nested lists, a table, fenced code, allowed links only, the
  review status and one covered embed per answered step; at 390×844 there is no horizontal scroll and the
  pill, arrows and options are at least 44px high.
- No word-boundary match for `innerHTML`, `insertAdjacentHTML`, `outerHTML`, `document.write`, `eval` or
  `new Function` in `assets/index.html`.

## Manual frontmatter check

- `name: consulting` equals the directory, lowercase, under 64 characters. PASS.
- `description`: one third-person string, positive and negative triggers, no XML, 906 characters. PASS.
- Body: 103 lines, about 1,900 words, nine ordered sections. PASS.

## Shipping surface

Exactly ten files under `skills/consulting/`: `SKILL.md`, `assets/index.html`,
`assets/vendor/agentation.js`, `assets/vendor/LICENSES.txt`, `assets/fonts/InterVariable.woff2`,
`assets/fonts/INTER-LICENSE.txt`, `scripts/serve.sh`, `scripts/check-step.sh`,
`references/page-contract.md`, `references/review-loop.md`.

- `agentation.js` sha256 `7ae227c863b68e7daac28890ea28a589b5158e2804b3d361c9c41f8f1259f8af` — matches.
- `InterVariable.woff2` sha256 `693b77d4f32ee9b8bfc995589b5fad5e99adf2832738661f5402f9978429a8e3` — matches.

## Judgement calls

- Plan headings render one level down (`#` → `h2`) so "Plan" stays the page's only `h1`; sizes are the
  plan's 1.5 / 1.25 / 1rem.
- From the last question the next arrow opens the plan, and from the plan the previous arrow opens the last
  question.
- A plan link that is not allowed is shown as its literal Markdown text; allowed links open in a new tab.
- Copying comments on an answered question or the plan shows "Feedback copied"; an answer shows "Answer
  copied".
- `LICENSES.txt` adds one heading line above each unmodified licence text.
- `check-step.sh` also rejects `formaction`, `data` and `xlink:href` targets outside the file.
- The phone rule D11 is encoded as an exception: if the comment tool cannot be used on a device, the agent
  builds nothing and the client types the number.
