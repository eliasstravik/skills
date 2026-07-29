# midwit — implementation review packet

Date: 2026-07-29.

## Exact work completed

### Shipping skill

- Added `skills/midwit/SKILL.md` as a manual-only skill with
  `disable-model-invocation: true`.
- Implemented a session-long anti-midwit stance that challenges only
  nontrivial work, offers a concrete naive-outsider simpler or null
  alternative, waits for the user's ruling, complies without relitigation,
  leaves routine work alone, and ends on any natural stop request.
- Kept one Rules core with ten single-imperative bullets.
- Preserved a 15-line bare core and a 19-line final body.
- Added one nonblank Details instruction only after critical A1 failed:
  quantify each simpler alternative as a concrete 10–100x reduction in
  machinery or effort.
- Removed the provisional “never build the framework in the middle” clause
  before treatment because no preserved baseline earned that prohibition.

### Approved evaluation corpus

- Defined critical assertions A1–A6.
- Added five exact eval prompts with all eight scripted user replies.
- Added seven pristine fixture files across five fictional fixture sets.
- Recorded the accepted pre-run Paperclip confirmation, manual frontmatter
  check, and description-optimizer N/A with the required quoted repository
  sentence.
- Added reusable isolated executor, verifier, grader, blind-comparator,
  analyzer, and JSON-schema harnesses.

### Controlled evidence

- Bare-core iteration: five pure controls first, then five treatments; both
  configurations scored 80%. The treatment's A1 failure earned the only
  Details line.
- Full iteration: five fresh pure controls first, then five fresh treatments.
  The full skill passed all seven applicable critical checks; the control
  passed six of seven. Mean per-eval pass rate was 100% versus 80%.
- GPT-5.6 Sol executed every arm, GPT-5.6 Terra graded each assertion, and
  GPT-5.6 Luna performed alternating-label blind comparisons and benchmark
  analysis.
- Both iterations generated the standard Skill Creator static viewer.
- Every counted arm passed model, transcript, source-integrity, isolation,
  treatment-loading, and baseline-purity gates.
- The full A1 treatment states a 20–50x reduction and wins its blind pair.
- The A6 treatment proceeds “without revisiting the challenge”; no
  framework/no-relitigation conflict remains.

### Repository integration and verification

- Updated the library inventory from nine skills to ten and added `midwit` to
  `README.md` and the repository conventions.
- Moved the shared repository conventions unchanged into `AGENTS.md`, which
  Codex reads natively, and reduced `CLAUDE.md` to the supported `@AGENTS.md`
  import so Claude Code and Codex share one instruction source.
- Added preserved-failure, bare-core, full-iteration, done-gate, prompt-review,
  intent, assertion, and frontmatter records under `evals/midwit/`.
- Verified exact YAML values, valid JSON, `bash -n`, one shipping file,
  one H1, one Rules H2, ten core bullets, one Details H2, one nonblank Details
  instruction, 19 body lines, seven fixture files, no nested fixture Git
  repositories, gitignored run evidence, the one-line Claude import, and clean
  diff whitespace.

## Explicitly not done

- No commit.
- No push.
- No pull request.
- No installation.

Approval authorizes repository publication through the existing
Paperclip-provided branch. Installation remains gated until the ready PR has
been reviewed and merged, because the required install command targets the
main repository path from outside the repository.
