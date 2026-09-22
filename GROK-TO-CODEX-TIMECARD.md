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


## 汎用CSV live UI (2026-09-22, no download)

URL: `/time_management/c_generic_csv/init`

**Templates / output types observed:** 従業員CSV; MFクラウド; payroll; 理論人件費; PCA(店舗／従業員別); PCA(従業員別); 勤怠実績; 経費交通費明細; 手当控除明細

**Data-axis options:** 従業員情報; 月別勤怠情報; 日別勤怠情報; 経費交通費明細

**Extract conditions:** 店舗選択; 対象年月; 勤怠承認状況; 入社日; 退職日; 使用期間; 雇用形態; 対象年月に有効な従業員のみ; 承認待ちを含む; 当月入社; 退職予定者; 使用期間切れの従業員を含める; 社員、契約社員、パート; 月給、日給、時給、時間帯別時給

**Stores in selector:** `[000] 管理者用店舗（日本）`; `[001] Ｓａｎｄ Ｂｏｘ` (+ categories 全店舗/直営/フランチャイズ/未設定)

**Download model:** `ダウンロード予約` (async). 日別勤怠情報 uses **month** (`対象年月`), not a free ≤7-day range — no CSV/header bytes captured this pass (selector canceled; no settings saved).

**Codex next:** Prefer first Inbox contract on **勤怠実績** or **日別勤怠情報** for store 001; document async reservation→file-list pickup like USEN POS patterns.
