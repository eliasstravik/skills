# Case intake standard

Create the `case-intake` policy/standards skill for Acme Support.

Internal field registry:

| Field | Meaning | Required |
| --- | --- | --- |
| `case_id` | Prefix `CS-` plus six digits | yes |
| `account_id` | CRM account key | yes |
| `queue` | One of `billing`, `access`, `delivery` | yes |
| `severity` | Integer 1 through 4 | yes |
| `opened_at` | UTC ISO-8601 timestamp | yes |
| `owner` | Active on-call handle | yes |
| `region` | One of `eu`, `us`, `apac` | yes |
| `customer_visible` | Boolean visibility flag | yes |
| `summary` | Internal one-line case summary | yes |
| `contract_tier` | `standard`, `plus`, or `premier` | yes |
| `escalation_id` | Linked escalation key | no |
| `parent_case_id` | Parent case key | no |

Deterministic validation contract:

1. Accept exactly one JSON file path.
2. Require all fields marked required above.
3. Require `case_id` to match `CS-[0-9]{6}`.
4. Require `queue` to be one of the registry values.
5. Require integer `severity` from 1 through 4.
6. Print `VALID` and exit 0 when all checks pass.
7. Print every failed rule to stderr and exit nonzero otherwise.

The main SOP must point to the registry and validator without duplicating their contents.
