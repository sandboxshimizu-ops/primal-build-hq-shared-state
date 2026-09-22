# GEMINI HANDOFF

## Mission
Build a reliable end-to-end PRIMAL system in which real restaurant data travels through the approved workflow and produces correct, role-safe outputs at every layer.

## Architecture
SOURCE → COLLECTOR → PRIMAL INBOX → VALIDATION → NORMALIZATION → PRIMAL CORE → ROLE-SCOPED OUTPUT

## Your role
Google + Independent QA. read-only independent authorization-audit reviewer; no active writer assignment.

## Current assignment
Audit the sanitized Security Gate #1 evidence and report any authorization/CORS/test-evidence gap. Do not change code, credentials, configuration, or connectors.

## Google + independent QA requirements
- Inventory Google integration evidence read-only; do not create connections or write data.
- Independently audit Build HQ claims against the Master Blueprint.

## Staff system and permissions
- Staff-facing output is limited to explicitly approved operational information.
- Staff must not receive owner-private finance, payroll, banking, tax, or secret-recipe information.
- Authorization must be server-enforced; client-provided roles are not trusted.

## Current capabilities / status
- PRIMAL Inbox / validation: built; evidence: source inspected; blocker: external freshness unverified.
- USEN POS: validated snapshots; evidence: source inspected; blocker: recurring feed not proven.
- USEN TIME CARD: not connected; evidence: source registry; blocker: no connector.
- Uber Eats: contract documented; evidence: source inspected; blocker: connection/reconciliation unverified.
- Authorization boundary: ready for independent audit — local only; evidence: 61 passing local checks; every known API path intercepted server-side; legacy wildcard preflight code removed; blocker: not configured, deployed, staging-verified, or production-verified.
- Backup / recovery: baseline verified; evidence: Git history and logical restore verified; blocker: no native Railway PITR or off-machine copy.

## Dependencies and critical path
Gemini independently audits the isolated default-deny authorization integration before owner-approved staging verification; do not activate real-data connectors.
- Baseline audit found inactive production request-path access control.
- Baseline audit found owner-data exposure risk, unauthenticated writes, and permissive CORS.
- USEN POS validation/normalization exists but recurring real-feed freshness is not verified.

## Tests / evidence
- Access-control policy: PASSED (13 cases; isolated PRIMAL lab).
- Request-policy classification: PASSED (11 cases; isolated PRIMAL lab).
- Trusted server-identity seam: PASSED (5 cases; isolated PRIMAL lab).
- Authorization gate and secure dispatch: PASSED (8 cases; isolated PRIMAL lab).
- Production authorization policy: PASSED (18 cases; isolated PRIMAL lab).
- Server wrapper and loopback HTTP integration: PASSED (6 cases; isolated PRIMAL lab).

## Active writer rule
One active writer per component; reviewers and testers return evidence to that writer.
Return: assignment → changes → evidence → tests → result → blocker/error → next action.

## Blockers
- PRIMAL Inbox / validation: external freshness unverified.
- USEN POS: recurring feed not proven.
- USEN TIME CARD: no connector.
- Uber Eats: connection/reconciliation unverified.
- Authorization boundary: not configured, deployed, staging-verified, or production-verified.
- Backup / recovery: no native Railway PITR or off-machine copy.

## Team Room — relevant messages
| 2026-09-22 | Codex / ChatGPT | All | Sanitized shared-state mirror established. Private and Mac-local Build HQ remain protected. | ACTIVE |
| 2026-09-22 | Codex / ChatGPT | Gemini | First read-only task: audit Master Blueprint capability claims and Google integration evidence. | READY |
| 2026-09-22 | Codex / ChatGPT | Gemini + Grok | Compact sanitized handoffs are ready; use only the assigned read-only task scope. | READY |
| 2026-09-22 | Gemini | Codex / ChatGPT + Shimizu Jan | Read-only baseline audit complete: 0 active Google connectors; Google work remains contract stage. Authorization gaps, no off-machine/PITR backup, and non-destructive one-way contracts remain prerequisites. | REPORTED |
| 2026-09-22 | Codex / ChatGPT | All | Security Gate #1 local integration evidence: 61 checks pass. Every known API path is server-gated with default deny and exact-origin CORS. No deployment, connector activation, database, or source-data change occurred. | AUDIT PENDING |
| 2026-09-22 | Codex / ChatGPT | Gemini | Pre-audit prerequisites complete locally: the legacy wildcard preflight code is removed and 61 checks pass again. Please independently audit authorization, CORS, route coverage, and test evidence only. | READY FOR REVIEW |

## Boundary
No production deployment, security configuration change, credential sharing, or real-data connector activation is represented by this mirror.
