+++
name = "Tally"
goal = "Keep tally fast and correct for large CSV exports."
coordinator_agent = "claude"
thread_agent = "claude"
max_parallel_threads = 3
auto_resolve_days = 7
nudge = false
mute = false

[[repos]]
path = "__RUN__/repo"
+++

# Instructions

Run `pytest -q` before finishing any code change.
