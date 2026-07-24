# copywriting no-skill baseline failures

Date: 2026-07-24. Ticket: ELI-252.

## Gate result

Saturated no-skill baseline: PASS.

Two fresh GPT-5.6 Sol no-skill rounds ran across the eight approved evals. Round
1 found one root-cause failure class. Round 2 repeated that class and revealed
no new class, so saturation is reached and the next ticket may derive
assertions and test a bare core.

`skills/copywriting/` is still absent. This record proves need for a narrow
skill behavior; it does not approve shipping.

## Preserved failure class

### F1 - Customer-language evidence reused as public copy

Eval: `6-social-content-voice-conflict`.

Expected behavior: infer a usable brand voice from conflicting evidence, use
customer language as evidence rather than pasted copy, avoid living-writer
imitation, and explain the voice assumption briefly after the copy.

Round 1 and round 2 both reused supplied customer phrases directly in
public-facing launch copy. The repeated phrases include:

- `Every project update turns into vibes`
- `tiny Jira sheriff`

Why this matters: customer wording can inform voice and problem framing, but
direct reuse can publish unapproved customer language as brand copy and make
the work feel copied rather than brand-authored.

Assertion seed for ELI-253: copy may synthesize customer-language themes, but
must not place distinctive supplied customer phrases into public-facing copy
unless the packet explicitly authorizes quotation or direct reuse.

## Run evidence

Generated evidence is intentionally untracked under:

- `evals/copywriting/runs/no-skill-baseline/round-1/`
- `evals/copywriting/runs/no-skill-baseline/round-2/`

Each of the 16 executor runs wrote:

- `prompt.md`
- `eval_metadata.json`
- `codex-events.jsonl`
- `codex-stderr.log`
- `timing.json`
- `transcript.md`
- `workspace/outputs/final.md`

Round 1 had eight executor exit code `0` runs. The wrapper failed after the
first four completed because zsh reserves `status`; those four timing files
preserve token usage but not wall time. Required transcripts and final outputs
were present for all eight runs.

Round 2 had eight executor exit code `0` runs with wall-time metadata.

Token evidence:

| Round | Executor runs | Input tokens | Output tokens |
| --- | ---: | ---: | ---: |
| 1 | 8 | 852184 | 19761 |
| 2 | 8 | 875381 | 19824 |

## Model and launch evidence

No-skill executors:

```text
codex --ask-for-approval never exec --ephemeral --skip-git-repo-check -m gpt-5.6-sol -c model_reasoning_effort="medium" --sandbox workspace-write -C <eval-run-dir> --output-last-message <eval-run-dir>/last-message.md --json -
```

Independent checks:

```text
codex --ask-for-approval never exec --ephemeral --skip-git-repo-check -m gpt-5.6-terra -c model_reasoning_effort="medium" --sandbox workspace-write -C <round-root> --output-last-message <round-root>/terra-check-last-message.md --json -
```

Terra passed model-policy and baseline-purity checks for every executor run in
both rounds. Evidence reviewed: `eval_metadata.json`, `prompt.md`,
`codex-events.jsonl`, `timing.json`, `transcript.md`, and
`workspace/outputs/final.md`.

No Claude Code, Claude model, Fable, `claude`, or `claude -p` evidence appears
in launch metadata, event streams, transcripts, or final outputs.

## Decision

Proceed to ELI-253. The preserved failure is narrow: source-language
transformation for social/content voice work. Later skill scope must still be
earned by paired treatment/control runs and viewer feedback.
