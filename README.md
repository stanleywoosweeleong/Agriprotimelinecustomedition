# AgriPro Timeline — Personal Edition (榴莲丰收时间轴 · 个人版)

A single-file, offline durian phenology planner — a **personalised fork** of the
AgriPro Timeline baseline, built around one grower's own stage vocabulary and
field needs.

**Live app:** https://stanleywoosweeleong.github.io/Agriprotimelinecustomedition/

Install it to your phone's home screen ("Add to Home Screen") to run it offline,
like a native app. The launcher icon carries a **V** badge to mark it as this
custom edition.

## What is different from the baseline

**1. The grower's own folk vocabulary, overlaid on the science.**
Stages read in the terms Malaysian durian farmers actually use, while the
days-after-anthesis (DAA) backbone stays exactly as the published literature and
the baseline had it — no DAA value was changed.

Rail order (盛花 = 0 DAA):

| Stage | Type | Date? |
|---|---|---|
| 催花与诱导期 Induction | spine | yes |
| 「红眼」 Red Eye | folk, loggable | no — calibrate |
| 「白眼」 White Eye | folk, loggable | no — calibrate |
| 「蟹眼」 Crab Eye · Bud Emergence | spine | yes |
| 火柴枝伸长期 Matchstick Elongation (pre-bloom) | spine | yes |
| 「盛花」 Blossom · Full Bloom | spine | yes (0 DAA) |
| 「幼果」 Young Fruitlet · Fruit Set — **鸡脚 drop risk** | spine | yes |
| 「拇指 / guli」 Thumb size — **鸡脚 drop risk** | folk | no — calibrate |
| 果实膨大期 Rapid Expansion | spine | yes |
| 「鸡旦」 Egg size | folk | no — calibrate |
| 「拳头」 Fist size | folk | no — calibrate |
| 「碗」 Bowl size | folk | no — calibrate |
| 「大果」 Full size | folk | no — calibrate |
| 熟化期 Maturation | spine | yes |
| 采收与落果 Harvest | spine | yes |
| 采后恢复期 Recovery | spine | loop |

**2. Honest, no-fabrication calibration.**
The folk size-stages have no separate published day-count, so the app projects
**no date** for them — it shows "log when you see it / 看到时记录" instead, and the
timeline bracket for those stages is left blank (uncertain by design) rather than
inventing a number. As the grower logs what he actually sees over his own seasons,
his records become the calibration. The app gets more accurate the more he uses
it, on his own trees and clones, without any invented numbers.

**3. 鸡脚 (chicken-feet) fruit-drop** is flagged as a first-class risk on the two
stages the grower identified as the worst for drop — 幼果 and 拇指.

**4. Two-tier rail.** Documented spine stages render as full dated nodes; folk
micro-stages render as lighter dashed sub-markers. The rail height scales to the
number of stages, so it reads cleanly however long it gets.

## How to use it

- **Tap a stage's circle** on the timeline to select it (a stage is selected by
  default on launch, so the detail tabs work straight away).
- **Right-click the same circle** (desktop) or **swipe the row left** (phone) to
  record the date you saw that stage. Spine stages set your schedule; folk size
  stages just save the date for calibration.
- **Durian clone** is a collapsible selector — tap the header to expand the list,
  pick your clone, and it collapses again. Built-in clones (e.g. Musang King)
  carry their reference days-to-harvest automatically; add your own clones in
  Settings, with or without a known harvest day-count.

## Storage isolation
All `localStorage` keys are namespaced `agripro_personal_*` (and
`agripro.personal.lang`) so this edition never collides with the baseline app's
saved farms, clones or settings on the shared `stanleywoosweeleong.github.io`
origin. It lives in its **own repo**, `Agriprotimelinecustomedition`.

## Deploy (GitHub Pages)
Put all four files at the **root** of the repo:
- `index.html`  (app + embedded V icon)
- `sw.js`  (cache `agripro-timeline-personal-v55` — bump the version string on each deploy)
- `.nojekyll`  (empty file; stops Jekyll processing)
- `README.md`

Then in **Settings → Pages**, set the source to branch **main**, folder **/ (root)**.
The app registers `./sw.js` automatically for offline use.

**On every update:** bump the cache version in `sw.js`, then hard-refresh (or
close and reopen the installed PWA) so the new build replaces the cached one.

## Contributor
This special build was made possible thanks to **Mr. Vincent Neng Kha Looi**, for
his guidance and experience behind this edition.

## Tech
Single-file vanilla-JS PWA. No CDN, no build step. Bilingual Chinese-first /
English via the `LL('en','zh')` helper. Tested headless (Playwright) and on
iPhone / Windows desktop PWA.

CC-BY-4.0 where attribution applies; agronomic, dosage and regulatory data follow
a strict no-fabrication policy.
