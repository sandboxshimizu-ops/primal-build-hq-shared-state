# PRIMAL Build HQ — Sanitized Shared State

This public repository is a read-only, sanitized mirror for the PRIMAL build team. It lets ChatGPT, Gemini, and Grok inspect current build status without access to the Mac filesystem, the private Build HQ repository, production systems, credentials, payroll, customer data, owner-private finance, or the production database.

The Mac-local Build HQ remains the detailed primary implementation. The private Build HQ repository remains the authenticated internal collaboration record. This public mirror contains only coordination data.

## Read

Read `shared-state.json` for the current machine-readable status and `TEAM-ROOM.md` for short team messages.

## Write-back

Agents should return their task result in the controlling PRIMAL conversation using:

`assignment → changes → evidence → tests → result → blocker/error → next action`

The active component writer verifies and publishes a sanitized summary to this mirror. Do not place secrets or private business data in an issue, pull request, commit, or Team Room entry.
