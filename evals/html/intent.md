# html — intent

Date: 2026-07-23. Behavioral reference:
`~/dev/skills` at commit `8f5e3a9`. The reference repository remains clean at
that exact commit. Its wording is not reused.

## Real job

Create or revise one durable, complete HTML artifact, serve that artifact from
its own directory on loopback, verify the exact page, and return the absolute
file path plus verified local URL. The artifact should make supplied
information useful as an interface rather than substituting a decorated chat
response for the requested file.

This is not a general application scaffold, deployment workflow, or website
hosting skill. A new artifact receives its own stable directory; a named
existing artifact is revised in place.

## Live-state surfaces

- Production state: `~/.html/<slug>/`, normally containing `index.html`.
- Process state: a loopback-only static server and its selected port.
- Run state: generated slug, resolved absolute paths, server PID, verification
  result, and any retry after a port collision.

Every eval replaces the production state root with its run-local
`outputs/html-home/`. It records the server PID and terminates that eval server
after verification. No run reads or writes real `~/.html`, uses an external
temporary directory, or leaves a listener running.

## Interaction contract

- Invocation is explicit.
- New work creates exactly one complete, self-contained HTML entry file unless
  the user names another file.
- A named slug or artifact path is revised in place without silently creating
  a replacement.
- Supplied facts remain exact; generated assumptions are visibly identified.
- Serving is restricted to `127.0.0.1` on a free non-common port.
- The exact artifact URL is fetched successfully before it is reported.
- The final response stays limited to the absolute file path and verified
  local link, or the path plus a concise serving failure.

## Eval flows

1. **New decision dashboard** — turn a fictional operations brief into a
   responsive single-file dashboard under a generated three-word slug; verify
   source fidelity, accessibility basics, self-containment, serving, and the
   concise final response.
2. **Named in-place revision** — update a pre-existing artifact by slug while
   preserving unrelated user-authored content; create no second artifact
   directory and serve the revised page.
3. **Interactive source-grounded artifact** — build a useful filterable or
   tabbed interface from supplied fictional records, with inline behavior and
   no unsupported facts or external dependencies.
4. **Occupied-port recovery** — begin with the requested candidate port held
   by a run-local listener, select another free non-common loopback port,
   verify the exact page there, and leave no eval process behind.

The default build order remains unchanged.
