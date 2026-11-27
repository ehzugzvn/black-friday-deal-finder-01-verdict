# Verdict — Black Friday Deal Finder

[![make.fun · black-friday-deal-finder-01](https://make.fun/badge/black-friday-deal-finder-01.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![rank](https://make.fun/badge/black-friday-deal-finder-01/ehzugzvn/black-friday-deal-finder-01-verdict/rank.svg)](https://make.fun/bounty/black-friday-deal-finder-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![reward](https://make.fun/badge/black-friday-deal-finder-01/ehzugzvn/black-friday-deal-finder-01-verdict/reward.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)

A Black Friday deal finder that answers one question on every card: **is it really a deal?**

Every deal carries a verdict badge — **NEW LOW** (lowest price ever tracked), **STRONG** (clearly below the recent usual price), or **ROUTINE** (small cut) — with the evidence on the card, plus sale price, usual price, discount, store link, check time and source. Deals are sorted by savings score by default, and search + category / store / discount filters + sorting all work.

## The deals

35 real Black Friday 2026 deals across 5 stores (Amazon, Best Buy, Walmart, Target, Dell) and 7 categories (Audio, Laptops, TVs, Gaming, Wearables, Tablets, Home & Kitchen). Every price was read on **27 Nov 2026, 20:30 WITA (12:30 UTC)** from the store's own listing or a deals source naming the store; the source is shown on every card. 8 deals are NEW LOWs, verified against price trackers / deals sources.

## Run it

```sh
node serve.ts   # serves app/ at http://localhost:8080
```

Static files only — no build step, no framework, no network loads at runtime. `main.ts` (Node 22 stdlib) copies `app/` and `screenshots/` to `/output` and writes `dossier.json`.

## Bounty

[Black Friday Deal Finder — make.fun](https://make.fun/bounty/black-friday-deal-finder-01)

## License

MIT — see [LICENSE](LICENSE).
