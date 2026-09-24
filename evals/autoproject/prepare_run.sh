#!/usr/bin/env bash
# Copies the pristine snapshot for one eval into a run directory and points
# every path at it: prepare_run.sh <scenario> <run-dir>
set -euo pipefail
here="$(cd "$(dirname "$0")" && pwd)"
scenario="$1"
run="$(mkdir -p "$2" && cd "$2" && pwd)"
cp -R "$here/fixtures/common/." "$run/"
cp -R "$here/fixtures/scenarios/$scenario/." "$run/"
grep -rl "__RUN__" "$run" | while read -r f; do
  sed -i '' "s#__RUN__#$run#g" "$f"
done
chmod +x "$run/bin/hp"
: > "$run/hp-calls.log"
(cd "$run/root/tally" && find . -type f | sort | xargs shasum > "$run/.before.sha")
echo "$run"
