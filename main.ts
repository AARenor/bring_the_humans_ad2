// bring-the-humans-03 entry program (Node 22, standard library only).
//
// The entry is a video posted on TikTok; this repository carries its address. The gate starts this program twice,
// in a sandbox with no network, and reads /output/VIDEO.json afterwards. So the whole job here is one faithful copy:
// read VIDEO.json from the directory the grader hands it (MAKEFUN_BOT_DIR, /bot by default) and write the same bytes
// to MAKEFUN_OUTPUT_DIR (/output by default). Nothing about the video is computed, fetched or written here: the house
// reads the video itself from TikTok, and nothing this program writes about it can move a place.
//
// Both runs must write the same bytes, so there is nothing here that depends on the clock, the network or chance.
// Run it outside the grader's container with MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR standing in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// An output directory that is already there is left as it is; one that is not is made, so both grader runs behave alike.
mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  // Byte for byte, parsed by nothing: the grader compares this copy with the repository's VIDEO.json.
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
