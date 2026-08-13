# skill-issue — manual frontmatter check

`agentskills validate` is unavailable from npm, so the repo's manual name/format gate applies.

- `name: skill-issue` matches the directory and the lowercase-hyphen grammar. PASS.
- Frontmatter has paired delimiters and one non-empty `name` and `description`. PASS.
- `disable-model-invocation` is absent, as required by the approved model-invoked rewrite. PASS.
- The description is 319 characters, under 1,024 characters, contains no XML, and equals the optimizer's `best_description` verbatim. PASS.
- The body has exactly the nine required H2 sections in order and is 51 lines after frontmatter, under both vendor ceilings. PASS.
- Three linked reference files exist; each is under 100 lines and therefore needs no table of contents. PASS.
- Eval evidence remains outside the shipping skill directory. PASS.
- An independent audit checked all 51 body lines against the hard litmus and found zero issues. PASS.
