---
name: html
description: User-invoked workflow for durable single-file HTML artifacts.
disable-model-invocation: true
---

# HTML

## Recipe

1. Resolve `ARTIFACT_DIR` inside the provided HTML state root, or expanded `~/.html` otherwise: revise a named artifact in place, or create a three-random-word lowercase slug for new work.
2. Write only `ARTIFACT_DIR/index.html` as a complete self-contained, source-faithful, responsive interface with semantic structure and accessible controls unless the user names another entry file.
3. Start a long-lived static server for `ARTIFACT_DIR` on `127.0.0.1` using a free non-common port.
4. Verify the exact `http://127.0.0.1:<PORT>/index.html` with files inside the task run, retrying from step 3 on another port if binding or fetching fails, and keep the verified server alive through handoff.
5. Reply with exactly `HTML file: <absolute entry-file path>` then `HTML: [Open locally](<verified /index.html URL>)`; if serving cannot be verified, omit the link and give the path plus one concise reason.

## Details

- Run `python3 -m http.server "$PORT" --bind 127.0.0.1 --directory "$ARTIFACT_DIR"` as the foreground command of a long-running tool session; do not background or detach it from a shell that will exit.
