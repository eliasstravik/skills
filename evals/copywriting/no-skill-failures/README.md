# copywriting no-skill baseline failures

Date: 2026-07-24. Ticket: [ELI-252](/ELI/issues/ELI-252).

## Gate Result

Saturated no-skill baseline: PASS.

Two fresh GPT-5.6 Sol no-skill rounds ran across the eight approved evals.
Every counted baseline prompt used the approved `evals/copywriting/evals.json`
corpus with only `__RUN_DIR__` replaced, copied the fixture into the run-local
`workspace/`, forbade every installed skill, and saved `transcript.md`.

GPT-5.6 Terra's final check found no skill contamination, no prohibited
model/tool use, no browsing, no live-state access, and no counted run-directory
isolation failure. The final counted second round added no failure class beyond
F1, so saturation is reached.

## Preserved Failure Class

### F1 - Customer-language evidence pasted into public copy

Eval: `6-social-content-voice-conflict`.

Expected behavior: infer a usable brand voice from conflicting evidence, use
customer language as evidence rather than pasted copy, avoid living-writer
imitation, and explain the voice assumption briefly after the copy.

Round 1 reused distinctive supplied customer phrases in public-facing launch
copy, including:

- `Every project update turns into vibes`
- `tiny Jira sheriff`

The clean counted round 2 repeated the class and also opened the thread with
the supplied phrase:

- `You can spot a flaky test faster than a flaky handoff`

Why this matters: customer wording can inform voice and problem framing, but
direct reuse can publish unapproved customer language as brand copy and makes
the result feel copied rather than brand-authored. The recurrence across two
independent no-skill rounds proves a stable failure class.

Assertion seed for [ELI-253](/ELI/issues/ELI-253): copy may synthesize themes
from supplied customer language, but must not place distinctive supplied
customer phrases into public-facing copy unless the packet explicitly
authorizes quotation or direct reuse.

## Compliance Evidence

Counted raw evidence is intentionally untracked under:

- `evals/copywriting/runs/baseline/round-1/`
- `evals/copywriting/runs/baseline/round-2/`

Each counted executor run wrote:

- `prompt.md`
- `metadata.json`
- `timing.json`
- `transcript.md`
- `codex.stdout.log`
- `codex.stderr.log`
- `workspace/source-packet.md`
- `workspace/outputs/final.md`

Final Terra check:

- `evals/copywriting/runs/baseline/round-2/terra-final-check.md`

One earlier round-2 eval-1 attempt was discarded after Terra found an external
`/tmp` validation write. Eval 1 was rerun in place with an explicit
no-external-temp wrapper before the final Terra check. The counted round-2
evidence is the clean replacement.

## Model and Launch Evidence

No-skill executors:

```text
codex exec --skip-git-repo-check --ignore-user-config --ignore-rules -m gpt-5.6-sol -c model_reasoning_effort="medium" -c approval_policy="never" --sandbox workspace-write -C <eval-run-dir> -o <eval-run-dir>/transcript.md -
```

Independent Terra checks:

```text
codex exec --skip-git-repo-check --ignore-user-config --ignore-rules -m gpt-5.6-terra -c model_reasoning_effort="medium" -c approval_policy="never" --sandbox workspace-write -C <round-root> -o <round-root>/<check>.md -
```

## Decision

Proceed to [ELI-253](/ELI/issues/ELI-253). The preserved failure is narrow:
source-language transformation for social/content voice work. Later skill scope
must still be earned by paired treatment/control runs and viewer feedback.
