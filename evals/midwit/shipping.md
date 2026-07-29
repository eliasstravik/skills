# midwit — done-gate record

Date: 2026-07-29.

## skill-issue checklist

- [x] Requirements, assertions, preserved failures, and the candidate were
  read; critical A1 preserves the no-skill failure that proves need.
- [x] A1–A6 cover every contractual behavior and observed failure; all are
  critical.
- [x] Rules is the single core primitive.
- [x] The bare core is one H1 plus ten Rules in 15 body lines.
- [x] Fresh controlled baselines, treatments, blind comparisons, graders,
  analysis, and standard viewers tested the bare core before Details existed.
- [x] One Details section contains one nonblank line, earned only by the A1
  bare-treatment failure.
- [x] No Calls or overflow files are needed.
- [x] Manual frontmatter and extension checks are recorded.
- [x] The full treatment passes every critical assertion and keeps generated
  evidence outside the shipping skill.
- [x] Description optimization is N/A for the recorded manual-only reason.

## Repository checks

- [x] `skills/midwit/` contains only the shipping `SKILL.md`.
- [x] Eval prompts, assertions, fixtures, harnesses, and result records live
  under `evals/midwit/`.
- [x] Generated transcripts, gradings, benchmarks, comparisons, and viewers
  stay under gitignored `evals/midwit/runs/`.
- [x] JSON schemas and `evals.json` parse.
- [x] Shell harnesses pass `bash -n`.
- [x] Shared conventions live in `AGENTS.md`; `CLAUDE.md` contains exactly the
  supported `@AGENTS.md` import.
- [x] The worktree diff passes whitespace checks.

## Publication and install gate

- [ ] Board/user implementation approval.
- [ ] Commit, push, and ready PR from the Paperclip-provided branch.
- [ ] User review and PR merge confirmation.
- [ ] From outside the repository, run
  `npx skills add /Users/eliasstravik/dev/skills --skill midwit -g`.
- [ ] Verify the installed skill matches the merged repository copy.

No commit, push, PR, or install occurred before this done-gate review.
