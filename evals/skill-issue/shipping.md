# skill-issue — shipping record

## Install

After the final behavior, self-audit, description, and manual frontmatter gates passed, ran the logical command:

```bash
npx skills add <Paperclip worktree> --skill skill-issue -g
```

The Paperclip worktree path was used so the installer copied the reviewed branch bytes rather than the still-old primary checkout. The machine's Homebrew Node had a missing `llhttp` dylib, so the successful retry pinned the existing FNM Node 24 runtime while invoking the same npm `skills add` command.

The installer detected Codex, selected only `skill-issue`, and copied it to `~/.agents/skills/skill-issue`. Its additional PromptScript target reported that global installation is unsupported; this did not affect the Codex copy. A recursive comparison between the worktree source and `~/.agents/skills/skill-issue` passed byte-for-byte.

## Final gates

- Shipping scope contains only `SKILL.md` and three references. PASS.
- Final treatment: 10/10 critical assertions; empty grader suggestions. PASS.
- Pure baseline: 8/10, preserving two exact-shell failures. PASS.
- Independent per-line self-audit: 51 lines, zero issues. PASS.
- Trigger optimizer: all descriptions 60/60; retained `best_description` applied verbatim. PASS.
- Manual frontmatter name/format check: PASS.
- Installed user-level Codex copy matches source: PASS.
