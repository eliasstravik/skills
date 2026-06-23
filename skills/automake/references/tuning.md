# Tuning

Use this reference when the user asks about `max_iterations`, `max_consecutive_failures`, or when the judge criteria are especially subjective, adversarial, screenshot-driven, or exploratory.

## Consecutive Failure Semantics

The loop tracks a streak of `NOT_BETTER` outcomes. Every `BETTER` resets that streak to `0`.

A long run can accumulate many rejects without tripping `max_consecutive_failures`; only rejections in a row after the last kept commit matter.

## Why The Streak Cap Exists

The consecutive failure cap is a stop-loss on spend and churn. Repeated rejects usually mean one of these is true:

- The builder and judge are misaligned.
- The prompt asks for something expensive to verify.
- The judge rejects incremental but correct progress.
- The builder is repeating a failed approach.
- The repo needs human direction before more autonomous attempts.

## Practical Defaults

Use these defaults when the user does not specify otherwise:

```text
max_iterations=5
max_consecutive_failures=3
```

`max_iterations=5` keeps the loop bounded while giving the builder enough attempts to learn from rejects.

`max_consecutive_failures=3` is a cheap guardrail for unattended or headless runs.

Prefer `5` to `8` when:

- The judge is highly adversarial.
- The work is visual, UX-heavy, or screenshot-driven.
- The prompt is exploratory.
- The expected gains are incremental.
- The builder needs several attempts to discover a good direction.

Lowering below `3` is uncommon. Prefer a looser failure streak over weakening the judge.

## Interview Guidance

Do not add extra interview questions. If the chosen judge reads as especially adversarial, subjective, or screenshot-driven, recommend a higher `max_consecutive_failures` before asking for final approval.

Example:

```text
Because this judge is subjective and visual, I recommend max_consecutive_failures=5 or 8 rather than 3. Which value do you want?
```

Ask that only when `max_consecutive_failures` has not already been provided and the default `3` looks too punitive.

## Model Defaults

Do not hard-code stale model names as the governing rule. Use the current strongest generally available coding model for serious builder/judge work, and inspect local CLI help before writing final commands when flags or model names are uncertain.

Avoid ultra-expensive Pro-tier variants unless the user explicitly asks.
