import argparse
import json
from pathlib import Path


def failure_brief(events: list[dict[str, object]]) -> list[str]:
    failures = [event for event in events if event.get("conclusion") == "failure"]
    failures.sort(key=lambda event: float(event.get("duration_seconds", 0)), reverse=True)
    return [
        f"{event['job']}: {event['step']} failed after {event['duration_seconds']}s"
        for event in failures
    ]


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Summarize failed steps from exported GitHub Actions job events."
    )
    parser.add_argument("events", type=Path, help="Path to a JSON Lines event export")
    args = parser.parse_args()

    events = [
        json.loads(line)
        for line in args.events.read_text(encoding="utf-8").splitlines()
        if line.strip()
    ]
    for line in failure_brief(events):
        print(line)


if __name__ == "__main__":
    main()
