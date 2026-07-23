# consultant — preserved no-skill failures, round 3

Independent judge: GPT-5.6 Terra. Executors: four fresh GPT-5.6 Sol no-skill
arms. No installed skill was read, invoked, or imitated.

## F3.1 — Fresh consultation state lacked a slug directory

The intended state surface is:

> `~/.consultant/<slug>/consultation.md`

Flow 1 instead created:

> `outputs/consultant-home/consultation.md`

and placed `plan.md` and `handoff.md` beside it at the redirected state root.
Its transcript says:

> `Initial state path: outputs/consultant-home/`

This leaves no consultation-slug boundary and risks collisions between
independent consultations. It is distinct from new-versus-resume identity and
from missing durable state sections.

## Repeated from earlier rounds

- F1.1: every flow still violated exact question grammar.
- F1.2: fresh Flow 1 and Flow 4 state still lacked required sections.
- F1.3: Flow 1 and Flow 2 plans still lacked required sections.
- F1.4: completed flows still lacked the safe fenced absolute-path handoff.
- F2.1: Flow 1 still dispatched without a valid dedicated gate.
- F2.2: Flow 2 still sent a reference not explicitly named by its plan.

F2.3 did not recur: all observed commands and changes stayed inside their run
directories.

## Passed unaided

- Mixed approval plus new information was saved, clarified, revised, and
  re-gated before the single reviewer dispatch.
- Named resume and fresh-state identity were otherwise respected.
- No reviewer packet contained consultation state or hidden client context.
- No product implementation was performed.
- All executors used allowed GPT-5.6 Sol; no Claude or Fable model was invoked.
