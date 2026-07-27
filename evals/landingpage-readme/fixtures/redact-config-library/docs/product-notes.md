# Product notes

This package is for maintainers of Node.js services who need to include
configuration context in logs or support bundles without exposing common
secret fields.

`redactConfig` accepts a value and returns a redacted copy. It recursively
handles objects and arrays, uses a documented default key list, accepts a
custom key list, and never mutates the input. It has no runtime dependencies.

The package is installed from npm:

```sh
npm install @northstar/redact-config
```

The project has no measured performance claim, download claim, customer quote,
or named production user that maintainers have approved for public use. The
repository does not state a stability or support commitment beyond the
published 1.3.0 version.
