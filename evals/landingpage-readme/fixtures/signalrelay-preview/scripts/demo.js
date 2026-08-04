import { readFile } from "node:fs/promises";
import { chooseRoute } from "../src/server.js";

const signup = JSON.parse(await readFile(new URL("../fixtures/signup.json", import.meta.url), "utf8"));
const mockClayResult = { score: 86 };

console.log(JSON.stringify({ email: signup.email, route: chooseRoute(mockClayResult) }, null, 2));
