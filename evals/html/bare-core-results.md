# html — bare-core comparison

Executor: GPT-5.6 Sol. Assertion grader: GPT-5.6 Terra. Blind comparator:
GPT-5.6 Luna. The skill contained only the five-step Recipe; no Details
section existed.

## Assertion results

| Eval | With bare core | Without skill |
| --- | ---: | ---: |
| New decision dashboard | 9/11 | 6/11 |
| Named in-place revision | 10/12 | 8/12 |
| Interactive source-grounded artifact | 10/12 | 8/12 |
| Occupied-port recovery | 10/12 | 7/12 |

Every treatment artifact passed target identity, single-file completeness,
source fidelity, usability, self-containment, artifact-root loopback serving,
exact `/index.html` verification, and run isolation. Treatment produced the
required two-line handoff in all four flows.

Every treatment failed H9 because its reported listener was unreachable after
the headless executor exited. H12 failed derivatively because the handoff
still included that now-dead link.

## Blind comparison

Labels alternated before judgment:

| Eval | A | B | Luna winner |
| --- | --- | --- | --- |
| 1 | without skill | with bare core | A |
| 2 | with bare core | without skill | A |
| 3 | without skill | with bare core | A |
| 4 | with bare core | without skill | A |

After unblinding, the bare core wins two pairs and the controls win two.
Controls won the dashboard and interactive pairs by adding optional
decision-record and multi-select affordances beyond the stated contract. The
bare core won the revision and collision pairs through clearer artifact
identity and exact `/index.html` handoffs. Post-exit liveness failed equally
in all eight arms.

## Details earned

One Details instruction is earned by H9 and H12: use the static-server command
as a foreground long-running tool session, rather than backgrounding or
detaching it from a short-lived shell. No artifact-design, verification-file,
or handoff Detail is earned because the bare core passed those assertions.
