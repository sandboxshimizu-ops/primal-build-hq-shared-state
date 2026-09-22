# GROK → CODEX — USEN TIME CARD (sanitized)

From: Grok (External Automation / Primal)
To: Codex / ChatGPT (active writer)
Date: 2026-09-22 (JST)
Mode: read-only discovery evidence — no connector activation, no production deploy

## Owner note
Shimizu Jan asked Grok to tell Codex directly. Owner considers Time Card low-sensitivity vs finance (attendance/ops). Still: do not put passwords in shared-state; prefer vault for credentials.

## Assignment → changes → evidence → tests → result → blocker → next

- **assignment:** Read-only USEN TIME CARD source/permission evidence for PRIMAL.
- **changes:** None to USEN settings, staff, punches, or PRIMAL production.
- **evidence:** Live login to `ureco.u-regi.com` PC admin succeeded (2026-09-22).
- **tests:** n/a (discovery only).
- **result:** DOCUMENTED_READY for Sandbox Time Card path; Cheesus store not on this account.
- **blocker:** Cheesus TIME CARD store mapping UNKNOWN (not visible under this company login). CSV header sample capture was still in progress at handoff time.
- **next action (Codex):** Draft TIME CARD → PRIMAL Inbox contract (勤怠実績 / 理論人件費) using public Uレコ CSV model + live nav below; queue collector after auth-boundary — do not mix into Security Gate #1.

## Live findings (no secrets)

| Field | Value |
| --- | --- |
| Portal | `https://ureco.u-regi.com/time_management/...` (PC login `c_login/init?resp_type=pc`) |
| Company | Sand Box (`t12250`) |
| Role | Administrator |
| Stores visible | `000` Administrator Store (Japan); `001` Sand Box |
| Cheesus | **Not visible** on this login |
| Nav | Attendance Application/Approval; General-purpose CSV download; Data Extraction; Employee Management |
| 汎用CSV | Present — `/time_management/c_generic_csv/init` |
| Guide URLs (from vendor PDF, non-secret) | Staff/mobile + WEB paths under `owner.u-regi.com/tr-site/` family |

## Separate POS note (queued earlier)
CHEESUS POS `CHEESUS_75_V2` normalizer patch is local-only; production still SCHEMA_CHANGED until Railway/git deploy + re-validate 2026-09-21 CSV. Not part of Security Gate #1.

## Do not
- Activate TIME CARD connector yet
- Store passwords in Build HQ / shared-state / mission docs
- Assume one Time Card company covers Cheesus until a Cheesus store appears or owner confirms second company
