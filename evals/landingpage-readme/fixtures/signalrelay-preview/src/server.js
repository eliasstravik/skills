import http from "node:http";

export function chooseRoute({ score }) {
  if (score >= 80) return "hubspot";
  if (score >= 50) return "slack-review";
  return "manual-review";
}

if (process.argv[1] === new URL(import.meta.url).pathname) {
  http.createServer((_request, response) => {
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify({ ok: true }));
  }).listen(process.env.PORT || 3000);
}
