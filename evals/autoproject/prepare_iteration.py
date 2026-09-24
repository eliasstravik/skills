#!/usr/bin/env python3
"""Prepares every run of one iteration and writes each executor prompt.

prepare_iteration.py <iteration-dir> [eval-name ...]

Creates <iteration-dir>/eval-<id>-<name>/{with_skill,without_skill}/run via
prepare_run.sh, plus prompt.txt and eval_metadata.json.
"""
import json, pathlib, subprocess, sys

HERE = pathlib.Path(__file__).resolve().parent
SKILL = HERE.parent.parent / "skills/autoproject"

SESSION = {
    ("running", "with_skill"): "Earlier in this session the user typed /autoproject, approved run `faster-parse` with Go, and you loaded the autoproject skill. This message arrives later in the same session.",
    ("running", "without_skill"): "Earlier in this session the user asked you to run an autoproject improvement loop (run `faster-parse`) and approved it. This message arrives later in the same session.",
    ("fresh", "with_skill"): "You are a freshly started coordinator with no earlier conversation.",
    ("fresh", "without_skill"): "You are a freshly started coordinator with no earlier conversation.",
}

SKILL_LINE = {
    "with_skill": "Installed skills available to you (name: description, then location). Load one by reading its SKILL.md when it applies:\n- autoproject: {desc}\n  Location: {skill}/SKILL.md",
    "without_skill": "Do not invoke, read, or load any skill: no Skill tool, no SKILL.md files anywhere. Work only from the project's own instructions.",
}

TEMPLATE = """This is a skill evaluation. I am developing agent skills for herdr-projects, a local tool where a "coordinator" agent manages a software project and hands work to worker threads. Please play the coordinator of the test project below for one turn, making the decisions a careful coordinator would, so I can check the commands you choose.

Everything lives in a sandbox directory: {run}. The project folder (the coordinator's working directory) is {proj}; its AGENTS.md describes the coordinator role. The herdr-projects command for this sandbox is `{run}/bin/hp --root {run}/root`. That `hp` is a logging test double: it records each call and returns canned output, and it starts no real agents. Use exactly that prefix for every herdr-projects command, and treat its output as real. Keep all reads and writes inside {run}; do not use any other herdr-projects or herdr binary, and do not touch ~/.herdr-projects or ~/.config/herdr-projects.

{skill_line}

{session}

The user's message (this is chat, from the user):
<<<
{prompt}
>>>
{replies}
When you would end your turn and wait, stop. Then write two files:
- {run}/response.md: every chat message you sent to the user, verbatim and in order, separated by a line `---`.
- {run}/transcript.md: a plain log of your actions (each command you ran with abbreviated output, and each file you read or wrote), ending with the line `Skills invoked: <names, or none>`.
"""


def description():
    text = (SKILL / "SKILL.md").read_text()
    for line in text.splitlines():
        if line.startswith("description:"):
            return line.split(":", 1)[1].strip().strip('"')
    return ""


def main():
    it = pathlib.Path(sys.argv[1]).resolve()
    only = set(sys.argv[2:])
    spec = json.loads((HERE / "evals.json").read_text())
    for e in spec["evals"]:
        if only and e["name"] not in only:
            continue
        edir = it / f"eval-{e['id']}-{e['name']}"
        edir.mkdir(parents=True, exist_ok=True)
        (edir / "eval_metadata.json").write_text(json.dumps(
            {"eval_id": e["id"], "eval_name": e["name"], "prompt": e["prompt"], "assertions": e["assertions"]}, indent=2) + "\n")
        for arm in ("with_skill", "without_skill"):
            run = edir / arm / "run"
            subprocess.run([str(HERE / "prepare_run.sh"), e["name"], str(run)], check=True, capture_output=True)
            replies = ""
            if e["replies"]:
                lines = "\n".join(f"{i}. {r}" for i, r in enumerate(e["replies"], 1))
                replies = f"\nScripted user replies. Each time you stop to wait for the user, take the next reply below as their next chat message and continue; when they run out, stop:\n{lines}\n"
            prompt = TEMPLATE.format(
                proj=run / "root/tally", run=run,
                skill_line=SKILL_LINE[arm].format(desc=description(), skill=SKILL),
                session=SESSION[(e["session"], arm)], prompt=e["prompt"], replies=replies)
            (edir / arm / "prompt.txt").write_text(prompt)
            (edir / arm / "outputs").mkdir(exist_ok=True)
            link = edir / arm / "run-1"  # aggregate_benchmark.py reads <arm>/run-*/grading.json
            if not link.exists():
                link.symlink_to(".")
    print(it)


if __name__ == "__main__":
    main()
