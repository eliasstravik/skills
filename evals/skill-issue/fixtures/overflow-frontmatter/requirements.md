# Source Research requirements

Fictional service: Juniper Index (`https://juniper-index.example.com`).

The model-invoked skill should trigger when a user asks to investigate a
question using primary sources and save a cited research note. It must not
trigger for casual explanations, unsourced brainstorming, or requests to edit
an existing note.

The main path is sequential: define the claim, choose source families, gather
evidence, reconcile conflicts, write the cited note, and report material
uncertainty. Source-family selection requires detailed branch-only policy for
law, standards, software, company facts, and scientific claims. That policy is
necessary but would push a self-contained shipping body beyond 100 lines.

If the branch policy cannot be read, the agent must stop and ask for it rather
than silently substituting secondary sources.
