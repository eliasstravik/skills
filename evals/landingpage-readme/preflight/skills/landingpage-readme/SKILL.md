---
name: landingpage-readme
description: User-invoked executor-composition probe for landingpage-readme.
disable-model-invocation: true
---

# Landingpage README Preflight

## Recipe

1. Read `probe-repo/evidence.md`.
2. Invoke `/copywriting` for one truthful audience-facing tagline using only that evidence.
3. If invocation is unavailable, write `probe-repo/outputs/preflight-result.md` with `landingpage_readme_loaded: yes`, `copywriting_visible: <observed value>`, `copywriting_invoked: no`, and the exact dependency result.
4. If invocation succeeds, save only the returned tagline to `probe-repo/outputs/copywriting-output.md`.
5. Record the successful observation in `probe-repo/outputs/preflight-result.md` with `landingpage_readme_loaded: yes`, `copywriting_visible: yes`, and `copywriting_invoked: yes`.
6. Stop without drafting a README or metadata.
