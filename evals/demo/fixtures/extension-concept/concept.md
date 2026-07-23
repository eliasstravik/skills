# Quillmark note pin — demo concept

Show how a fictional browser helper could pin a selected sentence from an
article into a private reading list.

## Host context

- Host page: `https://knowledge.example.com/articles/coastal-signals`
- Article title: `Reading Coastal Signals`
- Selected sentence: `A narrow swell can arrive before the visible weather.`

## Focal interaction

1. The host page starts with the sentence visibly selected.
2. A small Quillmark toolbar surface shows `Pin selected sentence`.
3. Activating it changes the control to `Pinned`, increments a visible saved
   count from `2` to `3`, and adds the exact sentence to a staged reading list.
4. A reset control restores the starting state.

This is a concept demo only. It must not create an extension manifest, call a
browser API, request permissions, collect credentials, write to an external
service, or imply that Quillmark is installed. Use deterministic synthetic
state and keep `Demo` or `Simulated` visible at all times.
