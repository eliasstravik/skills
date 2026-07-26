const DEFAULT_SECRET_KEYS = ["password", "secret", "token", "apiKey"];

export function redactConfig(value, secretKeys = DEFAULT_SECRET_KEYS) {
  if (Array.isArray(value)) {
    return value.map((item) => redactConfig(item, secretKeys));
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, child]) => [
        key,
        secretKeys.includes(key) ? "[REDACTED]" : redactConfig(child, secretKeys),
      ]),
    );
  }

  return value;
}
