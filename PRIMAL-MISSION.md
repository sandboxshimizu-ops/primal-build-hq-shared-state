# PRIMAL Mission

## Objective

Build a reliable end-to-end PRIMAL system in which real restaurant data travels through the approved workflow and produces correct, role-safe outputs at every layer.

## Authoritative operating model

`SOURCE → COLLECTOR → PRIMAL INBOX → VALIDATION → NORMALIZATION → PRIMAL CORE → ROLE-SCOPED OUTPUT`

- Original source artifacts are preserved unchanged.
- Unknown is never represented as zero or complete.
- Collectors deliver data; they are not the source of truth.
- A capability is not marked live, connected, passed, or complete without evidence.
- PRIMAL Live is the owner control surface. Staff-facing interfaces receive only explicitly approved, role-safe output.

## Build HQ and shared state

The detailed Mac-local PRIMAL Build HQ is the primary implementation and source of truth. This public repository is a sanitized, read-only coordination mirror. It must never contain credentials, production database access, owner-private finance, payroll, customer data, or local filesystem information.

## Team model

| Agent | Responsibility | Mode |
| --- | --- | --- |
| Shimizu Jan | Owner / final business authority | Approver |
| Codex / ChatGPT | Core / lead architecture, Build HQ, contracts, testing, integration | Active writer for assigned core components |
| Gemini | Google ecosystem and independent QA / Master Blueprint audit | Read-only reviewer until access is explicitly verified |
| Grok | External automation and USEN / Uber / LINE integration discovery | Read-only reviewer until access is explicitly verified |

One active writer owns each component. Other agents may review or test independently and return: `assignment → changes → evidence → tests → result → blocker/error → next action`.

## Current critical path

Before any new real-data connector is activated, prove a default-deny, server-enforced authorization boundary in an isolated non-production lab. The baseline audit identified inactive request-path access control, owner-data exposure risk, unauthenticated writes, and permissive CORS. This is a safety prerequisite for trustworthy end-to-end operation.

Parallel read-only work may proceed:

- Gemini: audit Master Blueprint evidence and inventory Google integration evidence.
- Grok: collect source/permission evidence for USEN TIME CARD, Uber Eats, and LINE.
- Codex / ChatGPT: complete authorization-boundary integration and regression testing in the isolated lab.

## Hard boundaries

- Do not touch `-primal-math-engine`.
- Do not deploy, modify production security settings, activate real-data connectors, or share secrets without separate owner authorization.
- Preserve PRIMAL Live data and working functionality.
