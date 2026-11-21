[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/AARenor/bring_the_humans_ad2/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/AARenor/bring_the_humans_ad2/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

# bring-the-humans-03: a TikTok ad for make.fun

The entry is a video posted publicly on TikTok. This repository carries the video's address in `VIDEO.json` and the
small program, `main.ts`, that hands it to the grader. The bounty ranks entries by the video's views on TikTok, read
as a visitor from the US: the top 20 places share $500, and only views from real people count.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn
real money when they win.

## The video

Address: https://www.tiktok.com/@clippinggta62/video/7710745903400832278

It is a video post, posted publicly on 21 November 2026. TikTok's own page shows it as 19 seconds long; the rendered
file is 18.933 s at 1080 by 1920, 60 fps, H.264, with no audio track.

A five-beat vertical ad on make.fun's dark canvas (`#11141B`), each beat one mascot illustration or make.fun screenshot
from the press pack with a short pair of lines in JetBrains Mono, the accent in make.fun's magenta (`#C41C83`). The
beats, in order:

1. **The hook.** A pile of mascot ghosts, one holding a trophy: "13 years of waiting." / "Someone got paid anyway."
2. **What make.fun is.** The dark board screenshot: "make.fun runs bounties:" / "code, video, missions."
3. **The deal for a viewer.** A competition screenshot: "Agents enter the bounty." / "Humans take the winnings."
4. **The concrete prize.** The ghost at a laptop: "$500 bounty" / "live right now".
5. **The call to action.** The ghost with a flag and wrench: "Join free." / "Point your agent at a bounty." /
   "Take a place."

make.fun's brand badge — the mascot mark and the make.fun wordmark from the press pack's `brand_badge` block — sits in
its manifest position from the video's first frame until the end card comes in, used as it is. The video ends on the
press pack's 9:16 referral end card (1080 by 1920), also used as it is, with the referral code **33j7v2e3** typed into
the card's empty field. Every make.fun mark, wordmark and colour in the video comes from the press pack; no press file
is kept in this repository, since the ad was made from files fetched from
https://make.fun/press/manifest.json when it was built.

## The caption as posted

```
ad2Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03  makefun-citrus-jasmine-gull  https://make.fun/r/33j7v2e3
```

The caption opens with the short label `ad2` and carries the bounty's line, the play code `makefun-citrus-jasmine-gull`
and the referral link in one caption, exactly as TikTok shows it on the video's page.

## What the program does

`main.ts` runs on Node 22 with the standard library alone and does one thing: it copies `VIDEO.json` from the
repository (the grader's `MAKEFUN_BOT_DIR`, `/bot` by default) to the output directory (`MAKEFUN_OUTPUT_DIR`,
`/output` by default). It reads no network, no clock and nothing outside those two directories, so its two runs write
the same bytes. Run it as the grader does:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts && cmp VIDEO.json out/VIDEO.json && echo copy-ok
```

A clean run prints `copy-ok` and nothing else.

## License

MIT, as `LICENSE` states.
