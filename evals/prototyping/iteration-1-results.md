# prototyping — paired evaluation results

Date: 2026-08-26. Executor: GPT-5.6 Sol at medium reasoning. The six
no-skill arms prohibited all installed skills; the six treatment arms read the
shipping `prototyping` skill and could compose with the named host skill. Every
state root was redirected into its run directory.

## Round 1

| Eval | With skill | Without skill |
| --- | ---: | ---: |
| Consultant-hosted session | 7/7 | 2/7 |
| Named-session resume | 7/7 | 5/7 |
| One-off prototype | 7/7 | 3/7 |
| Grilling round | 7/7 | 2/7 |
| Occupied-port recovery | 7/7 | 5/7 |
| Stop command | 5/7 | 2/7 |
| **Total** | **40/42 (95.24%)** | **19/42 (45.24%)** |

The skill beat the no-skill baseline by 50 percentage points. All six
treatment servers survived executor exit and answered their exact loopback
`/index.html` URL from a separate shell. The harness stopped each owned server
through the shipping helper.

Eval 6 exposed two related instruction failures: it emitted bare option keys
instead of `{key,label}` objects and copied `serve.sh` into the session before
reporting that copy as the stop command. The procedure and QC now state both
contracts explicitly.

## Focused regression

The fresh eval 6 treatment then passed 7/7 against the unchanged 2/7 baseline.
Its manifest used object-shaped options, the session contained only approved
state files, the response named the resolved shipping helper, and the server
again survived executor exit. The final composite treatment result is 42/42
against the original 19/42 baseline.

Browser review found one additional resilience gap: an executor could forget
to replace the shell's slug placeholder. `serve.sh` now atomically resolves
that placeholder before serving, while the procedure retains the explicit
copy-and-replace instruction. A browser regression confirmed the resulting
title and heading are `notification-settings`, not the placeholder, with no
console error.

## Viewer review

The skill-creator static viewer was generated for round 1 and again for the
focused regression with round 1 supplied as previous-workspace context.
Desktop and mobile shells, UI variants, a logic walkthrough, chosen and
recommended markers, the responsive rail, formal grades, and the benchmark
tab were inspected in a real browser. Direct variant switching worked; no
browser error was reported. Final feedback is empty.

## Decision

SHIP. The final treatment clears all critical assertions and preserves a
large no-skill need signal.
