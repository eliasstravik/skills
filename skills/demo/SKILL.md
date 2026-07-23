---
name: demo
description: User-invoked workflow for realistic local artifact demos.
disable-model-invocation: true
---

# Demo

## Recipe

1. Resolve the target and `DEMO_DIR` inside the provided demo state root, or expanded `~/.demo` otherwise: revise a named demo in place, demonstrate a named artifact, or ask one focused question only when plausible targets would materially change the result.
2. Inspect the source and choose its smallest convincing focal experience; use host tools directly, stage missing product or service behavior with deterministic synthetic state, and keep `Demo` or `Simulated` visible without credentials, destructive action, or claims of a live backend, model, extension, auth flow, integration, or third party.
3. Build or revise the one descriptive lowercase-hyphen directory as an accessible responsive local experience, preferring one self-contained `index.html` and adding only assets or files the focal path requires.
4. Start a long-lived server for `DEMO_DIR` on `127.0.0.1` using a free non-common port, record its PID, and record the exact restart command with the same binding, port, and directory.
5. Verify the exact preview URL and focal path with browser interaction at relevant viewports when available, or a clearly identified HTTP/source fallback otherwise, and keep the verified server alive through handoff.
6. On success reply with exactly five lines labeled `Demo path`, `Preview`, `Restart`, `Real vs staged`, and `QA`; after bounded serve or verification failure reply with `Not ready`, omit every link, and give the path, restart command, concrete failure, next fix, and QA limitation.

## Details

- Run the server as the foreground command of a long-running tool session; do not background or detach it from a shell that will exit, and treat loss of that session as a serving failure rather than reporting its URL.
