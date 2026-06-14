# AgriPro Timeline — Personal Edition (榴莲丰收时间轴 · 个人版)

A single-file, offline durian phenology planner — a **personalised fork** of the
AgriPro Timeline baseline, built around one grower's own stage vocabulary and
field needs.

## What is different from the baseline

**1. The grower's own 10-stage vocabulary, overlaid on the science.**
Stages now read in the terms Malaysian durian farmers actually use, while the
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
| 「大果」 Ball size · full size | folk | no — calibrate |
| 熟化期 Maturation | spine | yes |
| 采收与落果 Harvest | spine | yes |
| 采后恢复期 Recovery | spine | loop |

**2. Honest, no-fabrication calibration.**
The folk size-stages have no separate published day-count, so the app projects
**no date** for them — it shows "log when you see it / 看到时记录" instead. As the
grower logs what he actually sees over his own seasons, his records become the
calibration. The app gets more accurate the more he uses it, on his own trees and
clones, without any invented numbers.

**3. 鸡脚 (chicken-feet) fruit-drop** is flagged as a first-class risk on the two
stages the grower identified as the worst for drop — 幼果 and 拇指.

**4. Two-tier rail.** Documented spine stages render as full dated nodes; folk
micro-stages render as lighter dashed sub-markers. The rail height scales to the
number of stages, so it reads cleanly however long it gets.

## Storage isolation
All `localStorage` keys are namespaced `agripro_personal_*` (and
`agripro.personal.lang`) so this edition never collides with the baseline app's
saved farms, clones or settings on the shared GitHub Pages origin. Deploy it to
its **own folder/repo**.

## Deploy (GitHub Pages)
Upload all four files to the deploy folder:
- `index.html`
- `sw.js`  (cache `agripro-timeline-personal-v2` — bump the version on each deploy)
- `.nojekyll`
- `README.md`

The app registers `./sw.js` automatically for offline use.

## Tech
Single-file vanilla-JS PWA. No CDN, no build step. Bilingual Chinese-first /
English via the `LL('en','zh')` helper. Tested headless (Playwright) and on
iPhone / Windows desktop PWA.

CC-BY-4.0 where attribution applies; agronomic, dosage and regulatory data follow
a strict no-fabrication policy.
