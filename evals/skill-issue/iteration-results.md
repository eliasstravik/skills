# skill-issue — paired evaluation results

## Protocol

Every iteration launched five fresh with-skill/no-skill pairs together with GPT-5.6 Sol. GPT-5.6 Terra graded every arm; GPT-5.6 Luna performed each benchmark analyst pass. Source hashes, baseline purity, run-local skill loading, external-path isolation, transcript presence, and exact models passed the contamination gate.

The static skill-creator viewer was generated after each iteration; later viewers include the preceding workspace for comparison.

## Iteration 1

- Treatment: 10/10 assertions, 100% mean per-eval pass rate.
- Pure baseline: 8/10 weighted assertions, 86.67% mean per-eval pass rate.
- The treatment grader requested broader deterministic-validator coverage.

## Iteration 2

The fixture added missing-field, malformed-ID, and no-argument cases. The programmatic checker removed every required field from the valid fixture in turn and verified that each variant failed for the omitted field.

- Treatment: 10/10 assertions; baseline: 8/10.
- A remaining grader suggestion requested queue, severity, and case-ID boundary coverage.

## Final iteration 3

Before this run, an independent self-audit clarified the Inputs allocation and the compliance-only Output without changing the approved decisions. The final checker exercised every required field, every allowed queue and severity value, invalid types and ranges, case-ID boundaries, and the no-argument contract.

- Treatment: 10/10 assertions, 100% mean per-eval pass rate.
- Pure baseline: 8/10 weighted assertions, 86.73% mean per-eval pass rate.
- Every final treatment grader returned an empty suggestions list.
- The only baseline failures remained A5 and A10: the exact ordered SOP shell.
- No executor or grader recorded an execution error.

The loop stopped because the final shipping bytes pass every critical treatment assertion and treatment feedback is empty.
