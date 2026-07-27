import assert from "node:assert/strict";
import test from "node:test";
import { redactConfig } from "../src/index.js";

test("redacts nested default secret keys without changing the input", () => {
  const input = { service: "billing", auth: { token: "private", region: "eu" } };

  assert.deepEqual(redactConfig(input), {
    service: "billing",
    auth: { token: "[REDACTED]", region: "eu" },
  });
  assert.equal(input.auth.token, "private");
});
