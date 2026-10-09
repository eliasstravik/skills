#!/bin/sh

set -u

if [ "$#" -lt 1 ] || [ "$#" -gt 2 ]; then
  echo "Usage: serve.sh <page-dir> [stop]" >&2
  exit 2
fi

if [ ! -d "$1" ]; then
  echo "Page unavailable: page directory does not exist: $1" >&2
  exit 1
fi

DIR=$(cd "$1" && pwd -P) || exit 1
STATE=$(dirname "$DIR")
MODE=${2:-start}
PID_FILE="$STATE/server.pid"
PORT_FILE="$STATE/server.port"
LOG_FILE="$STATE/server.log"

# The server is started as: python3 -c <code> <port> <dir>. Ownership is decided on the
# argument tail "<port> <dir>" so a server for a longer path that merely contains DIR
# (or a recycled PID) is never treated as ours.
is_ours() {
  candidate=$1
  expected_port=${2:-}
  case "$candidate" in
    ''|*[!0-9]*) return 1 ;;
  esac
  command=$(ps -p "$candidate" -ww -o command= 2>/dev/null) || return 1
  case "$command" in
    *http.server*" $DIR") ;;
    *) return 1 ;;
  esac
  head=${command%" $DIR"}
  port_arg=${head##* }
  valid_port "$port_arg" || return 1
  [ -z "$expected_port" ] || [ "$port_arg" = "$expected_port" ]
}

stop_owned() {
  candidate=$1
  is_ours "$candidate" || return 1
  kill "$candidate" 2>/dev/null || return 1
  count=0
  while is_ours "$candidate" && [ "$count" -lt 20 ]; do
    sleep 0.25
    count=$((count + 1))
  done
  ! is_ours "$candidate"
}

valid_port() {
  case "$1" in
    ''|*[!0-9]*) return 1 ;;
  esac
  [ "$1" -ge 1024 ] && [ "$1" -le 65535 ]
}

pick_port() {
  python3 -c 'import socket
common={3000,4000,4173,5000,5173,8000,8080,8765}
while True:
    sock=socket.socket()
    sock.bind(("127.0.0.1",0))
    port=sock.getsockname()[1]
    sock.close()
    if port not in common:
        print(port)
        break'
}

probe() {
  python3 -c 'import sys, urllib.request
opener=urllib.request.build_opener(urllib.request.ProxyHandler({}))
with opener.open("http://127.0.0.1:%s/index.html" % sys.argv[1], timeout=1) as response:
    sys.exit(0 if response.status == 200 else 1)' "$1" >/dev/null 2>&1
}

wait_for_url() {
  candidate=$1
  port=$2
  count=0
  while [ "$count" -lt 20 ]; do
    is_ours "$candidate" "$port" || return 1
    if probe "$port"; then
      return 0
    fi
    sleep 0.25
    count=$((count + 1))
  done
  return 1
}

recorded_pid=''
if [ -f "$PID_FILE" ]; then
  recorded_pid=$(sed -n '1p' "$PID_FILE")
fi

recorded_port=''
if [ -f "$PORT_FILE" ]; then
  recorded_port=$(sed -n '1p' "$PORT_FILE")
fi

if [ "$MODE" = stop ]; then
  if is_ours "$recorded_pid"; then
    stop_owned "$recorded_pid" || {
      echo "Page unavailable: owned server did not stop: $recorded_pid" >&2
      exit 1
    }
  fi
  rm -f "$PID_FILE"
  if valid_port "$recorded_port"; then
    echo "Stopped page: http://127.0.0.1:$recorded_port/index.html"
  else
    echo "Stopped page: $DIR"
  fi
  exit 0
fi

if [ "$MODE" != start ]; then
  echo "Usage: serve.sh <page-dir> [stop]" >&2
  exit 2
fi

python3 -c 'pass' >/dev/null 2>&1 || {
  echo "Page unavailable: python3 cannot run" >&2
  exit 1
}

# The font ships as base64 text (InterVariable.woff2.b64) so every file in this skill is text and
# text-only skill hosts can carry it. Rebuild the binary the page loads beside its copy in page/.
font_error=$(python3 -c 'import base64, sys
from pathlib import Path
fonts=Path(sys.argv[1])/"fonts"
source=fonts/"InterVariable.woff2.b64"
if not source.is_file():
    sys.exit(0)
try:
    data=base64.b64decode(source.read_text(encoding="ascii"), validate=False)
    target=fonts/"InterVariable.woff2"
    if not target.is_file() or target.read_bytes() != data:
        target.write_bytes(data)
except (OSError, ValueError) as error:
    print(error)
    sys.exit(1)' "$DIR" 2>&1) || {
  echo "Page unavailable: font could not be rebuilt from InterVariable.woff2.b64: $font_error" >&2
  exit 1
}

manifest_error=$(python3 -c 'import json, re, sys
from pathlib import Path
path=Path(sys.argv[1])/"session.json"
def fail(reason):
    print(reason)
    sys.exit(3)
try:
    data=json.loads(path.read_text(encoding="utf-8"))
except OSError as error:
    fail("session.json cannot be read: %s" % error.strerror)
except ValueError as error:
    fail("session.json is not strict JSON: %s" % error)
if not isinstance(data, dict):
    fail("session.json is not an object")
rev=data.get("rev")
if not isinstance(rev, int) or isinstance(rev, bool):
    fail("rev is not an integer")
steps=data.get("steps")
if not isinstance(steps, list):
    fail("steps is not a list")
pattern=re.compile(r"^steps/[0-9]+-[a-z0-9-]+\.html$")
opened=0
for position, step in enumerate(steps, 1):
    if not isinstance(step, dict):
        fail("step %d is not an object" % position)
    for key in ("n", "question", "kind", "options", "recommended", "file"):
        if key not in step:
            fail("step %d has no %s" % (position, key))
    if step["n"] != position or isinstance(step["n"], bool):
        fail("step numbers must run 1, 2, 3 without gaps: position %d has n %r" % (position, step["n"]))
    if not isinstance(step["file"], str) or not pattern.match(step["file"]):
        fail("step %d file does not match steps/NN-slug.html: %r" % (position, step["file"]))
    if step.get("decision") is None:
        opened+=1
        if step.get("retired") is True:
            fail("step %d is retired without a decision" % position)
if opened > 1:
    fail("%d steps are open; at most one may have a null decision" % opened)' "$DIR" 2>&1)
manifest_status=$?
if [ "$manifest_status" -ne 0 ]; then
  echo "Manifest invalid: $manifest_error" >&2
  exit 3
fi

if is_ours "$recorded_pid"; then
  if valid_port "$recorded_port" && wait_for_url "$recorded_pid" "$recorded_port"; then
    echo "Page: http://127.0.0.1:$recorded_port/index.html"
    exit 0
  fi
  stop_owned "$recorded_pid" || {
    echo "Page unavailable: owned server did not stop before revive" >&2
    exit 1
  }
else
  rm -f "$PID_FILE"
fi

port=$recorded_port
if ! valid_port "$port"; then
  port=$(pick_port) || {
    echo "Page unavailable: could not choose a loopback port" >&2
    exit 1
  }
fi

attempt=1
reason="server did not answer"
while [ "$attempt" -le 3 ]; do
  : >"$LOG_FILE"
  printf '%s\n' "$port" >"$PORT_FILE"

  nohup python3 -c 'import http.server, os, sys
try:
    os.setsid()
except OSError:
    pass
FRESH=(".html", ".json", ".md")
class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        pass
    def end_headers(self):
        if self.path.split("?", 1)[0].split("#", 1)[0].lower().endswith(FRESH):
            self.send_header("Cache-Control", "no-store")
        super().end_headers()
def handler(*args, **kwargs):
    return QuietHandler(*args, directory=sys.argv[2], **kwargs)
server=http.server.ThreadingHTTPServer(("127.0.0.1", int(sys.argv[1])), handler)
server.serve_forever()' "$port" "$DIR" </dev/null >>"$LOG_FILE" 2>&1 &
  pid=$!
  printf '%s\n' "$pid" >"$PID_FILE"

  if wait_for_url "$pid" "$port"; then
    echo "Page: http://127.0.0.1:$port/index.html"
    exit 0
  fi

  if is_ours "$pid"; then
    stop_owned "$pid" || true
    reason="server stayed alive but did not answer within 5 seconds"
  else
    reason="server exited before the exact page answered"
  fi
  rm -f "$PID_FILE" "$PORT_FILE"
  attempt=$((attempt + 1))
  if [ "$attempt" -le 3 ]; then
    port=$(pick_port) || {
      echo "Page unavailable: could not choose a retry port" >&2
      exit 1
    }
  fi
done

echo "Page unavailable: $reason after 3 attempts" >&2
exit 1
