#!/usr/bin/env python3
"""Grades every run of an iteration and copies what the viewer shows into outputs/.

collect.py <iteration-dir>
"""
import pathlib, re, shutil, subprocess, sys

HERE = pathlib.Path(__file__).resolve().parent


def main():
    it = pathlib.Path(sys.argv[1]).resolve()
    for edir in sorted(it.glob("eval-*")):
        name = re.sub(r"^eval-\d+-", "", edir.name)
        for arm in ("with_skill", "without_skill"):
            adir = edir / arm
            run = adir / "run"
            if not run.is_dir():
                continue
            out = adir / "outputs"
            if out.exists():
                shutil.rmtree(out)
            out.mkdir()
            proj = run / "root/tally"
            for src, dst in [(run / "response.md", "1-chat-response.md"), (run / "hp-calls.log", "2-hp-calls.log"),
                             (proj / "TASKS.md", "3-TASKS.md"), (run / "transcript.md", "9-transcript.md")]:
                if src.is_file():
                    shutil.copy(src, out / dst)
            for p in sorted((proj / "scratch/autoproject").glob("*.md")) if (proj / "scratch/autoproject").is_dir() else []:
                shutil.copy(p, out / f"4-scratch-{p.name}")
            subprocess.run([sys.executable, str(HERE / "grade.py"), name, str(adir)], check=False)
            if (run / "transcript.md").is_file():
                shutil.copy(run / "transcript.md", adir / "transcript.md")


if __name__ == "__main__":
    main()
