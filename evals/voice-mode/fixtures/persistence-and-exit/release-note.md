# Cedar API release candidate

The candidate fixes duplicate webhook delivery during regional failover.

- Changed file: `packages/webhooks/src/failover-deduper.ts`
- Verification: 27 focused tests passed; replay simulation passed.
- Review URL: https://releases.example.com/cedar-api/rc-12
- Remaining risk: the 24-hour soak test is still running.
- Recommendation: continue the soak test; do not promote to production yet.
