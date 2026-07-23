# Deploy Note requirements

Fictional product: Birch Console (`https://birch-console.example.com`).

The user explicitly invokes `/deploy-note`. The agent must inspect the supplied
deployment record, verify environment and version, draft a note, ask for
approval, write the approved note to `notes/deployments/<version>.md`, and
report that path. Missing or conflicting deployment facts stop the workflow.
The skill never deploys, retries a deployment, or changes infrastructure.
