#!/bin/sh

set -u

if [ "$#" -lt 1 ] || [ "$#" -gt 2 ]; then
  echo "Usage: serve.sh <session-dir> [stop]" >&2
  exit 2
fi

if [ ! -d "$1" ]; then
  echo "Prototypes unavailable: session directory does not exist: $1" >&2
  exit 1
fi

DIR=$(cd "$1" && pwd -P) || exit 1
MODE=${2:-start}
PID_FILE="$DIR/server.pid"
PORT_FILE="$DIR/server.port"
LOG_FILE="$DIR/server.log"

is_ours() {
  candidate=$1
  case "$candidate" in
    ''|*[!0-9]*) return 1 ;;
  esac
  command=$(ps -p "$candidate" -ww -o command= 2>/dev/null) || return 1
  case "$command" in
    *http.server*"$DIR"*) return 0 ;;
    *) return 1 ;;
  esac
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

wait_for_url() {
  candidate=$1
  port=$2
  count=0
  while [ "$count" -lt 20 ]; do
    is_ours "$candidate" || return 1
    if curl --fail --silent --show-error --max-time 1 \
      "http://127.0.0.1:$port/index.html" >/dev/null 2>&1; then
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
      echo "Prototypes unavailable: owned server did not stop: $recorded_pid" >&2
      exit 1
    }
  fi
  rm -f "$PID_FILE"
  if valid_port "$recorded_port"; then
    echo "Stopped prototypes: http://127.0.0.1:$recorded_port/index.html"
  else
    echo "Stopped prototypes: $DIR"
  fi
  exit 0
fi

if [ "$MODE" != start ]; then
  echo "Usage: serve.sh <session-dir> [stop]" >&2
  exit 2
fi

INDEX_FILE="$DIR/index.html"
if [ -f "$INDEX_FILE" ] && grep -q '__SESSION_SLUG__' "$INDEX_FILE"; then
  SESSION_SLUG=${DIR##*/}
  python3 -c 'from pathlib import Path
import sys
target=Path(sys.argv[1])
temporary=target.with_name(".index.html.slug.tmp")
temporary.write_text(target.read_text().replace("__SESSION_SLUG__", sys.argv[2]))
temporary.replace(target)' "$INDEX_FILE" "$SESSION_SLUG" || {
    echo "Prototypes unavailable: could not set the session slug" >&2
    exit 1
  }
fi

if is_ours "$recorded_pid"; then
  if valid_port "$recorded_port" && wait_for_url "$recorded_pid" "$recorded_port"; then
    echo "Prototypes: http://127.0.0.1:$recorded_port/index.html"
    exit 0
  fi
  stop_owned "$recorded_pid" || {
    echo "Prototypes unavailable: owned server did not stop before revive" >&2
    exit 1
  }
else
  rm -f "$PID_FILE"
fi

port=$recorded_port
if ! valid_port "$port"; then
  port=$(pick_port) || {
    echo "Prototypes unavailable: could not choose a loopback port" >&2
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
class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        pass
def handler(*args, **kwargs):
    return QuietHandler(*args, directory=sys.argv[2], **kwargs)
server=http.server.ThreadingHTTPServer(("127.0.0.1", int(sys.argv[1])), handler)
server.serve_forever()' "$port" "$DIR" </dev/null >>"$LOG_FILE" 2>&1 &
  pid=$!
  printf '%s\n' "$pid" >"$PID_FILE"

  if wait_for_url "$pid" "$port"; then
    echo "Prototypes: http://127.0.0.1:$port/index.html"
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
      echo "Prototypes unavailable: could not choose a retry port" >&2
      exit 1
    }
  fi
done

echo "Prototypes unavailable: $reason after 3 attempts" >&2
exit 1
