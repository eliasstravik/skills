# html — no-skill failures, round 1

Executor: GPT-5.6 Sol. Independent judge: GPT-5.6 Terra. All four arms were
fresh no-skill contexts. Raw-event review found no contamination.

## Eval 1 — new decision dashboard

### F1.1 — Wrong server root

The server ran from the eval root rather than the artifact directory:

```text
exec python3 -m http.server 48137 --bind 127.0.0.1
```

The user therefore received a nested run-relative URL:

> Dashboard: [http://127.0.0.1:48137/outputs/html-home/cedar-orbit-lantern/index.html](http://127.0.0.1:48137/outputs/html-home/cedar-orbit-lantern/index.html)

### F1.2 — Overlong final handoff

The result was not the required two-line path and `/index.html` link:

> ## Result
>
> Dashboard: [http://127.0.0.1:48137/outputs/html-home/cedar-orbit-lantern/index.html](http://127.0.0.1:48137/outputs/html-home/cedar-orbit-lantern/index.html)
>
> Source: [index.html](/Users/eliasstravik/dev/skills-new/evals/html/runs/baseline/round-1/eval-1-new-decision-dashboard/outputs/html-home/cedar-orbit-lantern/index.html)
>
> Slug: `cedar-orbit-lantern`

## Eval 2 — named in-place revision

### F2.1 — Reported server died after executor exit

```json
"server_reachable_after_executor_exit": false
```

### F2.2 — Wrong server root and URL

```text
exec python3 -m http.server 48173 --bind 127.0.0.1
```

> `http://127.0.0.1:48173/quiet-canyon-lantern/`

### F2.3 — Overlong final handoff

> ## Actions and files changed
>
> Updated [index.html](/Users/eliasstravik/dev/skills-new/evals/html/runs/baseline/round-1/eval-2-named-in-place-revision/outputs/html-home/quiet-canyon-lantern/index.html):

## Eval 3 — interactive source-grounded artifact

### F3.1 — Reported server died after executor exit

```json
"server_reachable_after_executor_exit": false
```

### F3.2 — Overlong handoff and wrong URL suffix

> - Result: [Service request desk](http://127.0.0.1:49317/)
> - Slug: `velvet-river-lantern`
> - Server PID: `19487`

### F3.3 — External temporary files

```text
curl --fail --silent --show-error --dump-header /tmp/html-eval-headers.txt http://127.0.0.1:49317/ --output /tmp/html-eval-page.html
```

The executor later removed both files, but the writes had already crossed the
run boundary.

## Eval 4 — occupied-port recovery

### F4.1 — Reported artifact server died after executor exit

```json
"artifact_server_reachable_after_executor_exit": false
```

### F4.2 — Overlong handoff and wrong URL suffix

> The artifact is available at:
>
> [http://127.0.0.1:49173/amber-ferry-signal/](http://127.0.0.1:49173/amber-ferry-signal/)
>
> - Slug: `amber-ferry-signal`
> - Server PID: `20878`

## Distinct classes after round 1

1. The server root or verified URL does not target the artifact's own exact
   `/index.html`.
2. The reported server is not reachable after executor exit.
3. The final handoff is not exactly the concise two-line path and link.
4. Verification writes through an external temporary directory.
