# USEN TIME CARD — first export schema for Codex (sanitized)

Grok read/export only. No USEN settings changed. No passwords.

## Package
- Template: 勤怠実績 → 日別勤怠情報
- Company: Sand Box (`t12250`)
- Store exported: `001` Sand Box
- Cheesus on this account: **NO**
- Period: **2026-09** (対象年月); dates in file 20260901 → 20260921
- Original filename: `t12250_無題_202609_20260922 (1).csv`
- PRIMAL raw (unchanged bytes): `PRIMAL_SANDBOX_USEN_TIMECARD_2026-09_DAILY_PUNCH_RAW.csv`
- SHA-256: `80985abe4f474b1160365dfe6ca752362e751929889bfa170ed2105b38ae86a0`
- Encoding detected: utf-8-sig
- Format: CSV, 94 columns
- Attendance rows: **139**
- Distinct staff (`担当者コード`): **14**
- Historical export: month picker available; arbitrary multi-month/day-range not verified

## Exact headers
1. `担当者コード`
2. `担当者名`
3. `労働時間制`
4. `雇用形態`
5. `出勤日`
6. `曜日`
7. `勤務種別`
8. `労働時間合計(分)`
9. `時間外(分)`
10. `普通残業時間 + 週40h超時間(分)`
11. `休日出勤(分)`
12. `法定内残業(分)(変形シフト)`
13. `所定休日出勤(分)`
14. `法定休日出勤(分)`
15. `深夜(分)`
16. `法定内残業深夜(分)(変形シフト)`
17. `所定休日深夜(分)`
18. `法定休日深夜(分)`
19. `有休(分)`
20. `特別休暇(分)`
21. `代休(分)`
22. `欠勤(分)`
23. `出勤店舗コード`
24. `出勤店舗名`
25. `コメント`
26. `法定内残業時間(分)`
27. `法定内残業深夜時間(分)`
28. `所定休日出勤2(分)`
29. `法定休日出勤2(分)`
30. `深夜労働時間3(分)`
31. `勤怠(開始)`
32. `勤怠(終了)`
33. `勤怠(休憩開始1)`
34. `勤怠(休憩終了1)`
35. `勤怠(休憩開始2)`
36. `勤怠(休憩終了2)`
37. `勤怠(休憩開始3)`
38. `勤怠(休憩終了3)`
39. `打刻(開始)`
40. `打刻(終了)`
41. `打刻(休憩開始1)`
42. `打刻(休憩終了1)`
43. `打刻(休憩開始2)`
44. `打刻(休憩終了2)`
45. `打刻(休憩開始3)`
46. `打刻(休憩終了3)`
47. `勤怠(開始1)`
48. `勤怠(終了1)`
49. `勤怠(開始2)`
50. `勤怠(終了2)`
51. `勤怠(開始3)`
52. `勤怠(終了3)`
53. `勤怠(休憩開始1-1)`
54. `勤怠(休憩終了1-1)`
55. `勤怠(休憩開始1-2)`
56. `勤怠(休憩終了1-2)`
57. `勤怠(休憩開始1-3)`
58. `勤怠(休憩終了1-3)`
59. `勤怠(休憩開始2-1)`
60. `勤怠(休憩終了2-1)`
61. `勤怠(休憩開始2-2)`
62. `勤怠(休憩終了2-2)`
63. `勤怠(休憩開始2-3)`
64. `勤怠(休憩終了2-3)`
65. `勤怠(休憩開始3-1)`
66. `勤怠(休憩終了3-1)`
67. `勤怠(休憩開始3-2)`
68. `勤怠(休憩終了3-2)`
69. `勤怠(休憩開始3-3)`
70. `勤怠(休憩終了3-3)`
71. `打刻(開始1)`
72. `打刻(終了1)`
73. `打刻(開始2)`
74. `打刻(終了2)`
75. `打刻(開始3)`
76. `打刻(終了3)`
77. `打刻(休憩開始1-1)`
78. `打刻(休憩終了1-1)`
79. `打刻(休憩開始1-2)`
80. `打刻(休憩終了1-2)`
81. `打刻(休憩開始1-3)`
82. `打刻(休憩終了1-3)`
83. `打刻(休憩開始2-1)`
84. `打刻(休憩終了2-1)`
85. `打刻(休憩開始2-2)`
86. `打刻(休憩終了2-2)`
87. `打刻(休憩開始2-3)`
88. `打刻(休憩終了2-3)`
89. `打刻(休憩開始3-1)`
90. `打刻(休憩終了3-1)`
91. `打刻(休憩開始3-2)`
92. `打刻(休憩終了3-2)`
93. `打刻(休憩開始3-3)`
94. `打刻(休憩終了3-3)`

## Clock-in / out / breaks
- Planned/adjusted attendance: `勤怠(開始)`, `勤怠(終了)`, `勤怠(休憩開始N)`, `勤怠(休憩終了N)` (+ multi-segment variants)
- Raw punches: `打刻(開始)`, `打刻(終了)`, `打刻(休憩開始N)`, `打刻(休憩終了N)` (+ multi-segment variants)

## Corrections / approvals
- **Not present as CSV columns** in this export.
- Export UI has filter `勤怠承認状況` / `承認待ちを含む` — status is filter-time, not a field in this file.
- Free-text `コメント` may hold notes.

## Store mapping
- `出勤店舗コード` / `出勤店舗名` present per row
- Account stores: `000` admin, `001` Sand Box; Cheesus missing

## Ambiguities / missing
- No Cheesus Time Card store on this login
- Async `ダウンロード予約` pickup
- Default export title `無題`
- Dual parallel files this pass (attendance-summary-like + punch-rich); use DAILY_PUNCH raw as primary

## Verdict for Codex
- USEN TIME CARD DATA ACCESS: **PASS** (Sandbox)
- READY FOR PRIMAL INGESTION CONTRACT: **YES** (Sandbox 日別勤怠情報); Cheesus still blocked until store appears

## Owner clarification (2026-09-22)
Shimizu Jan: **Cheesus and Sandbox use the same Time Card system.** Live store list on company `t12250` still shows only `000` + `001` Sand Box — Cheesus store code/name not visible yet. Contract should assume one company / dual-store once Cheesus store appears or is identified; do not invent a second company.
