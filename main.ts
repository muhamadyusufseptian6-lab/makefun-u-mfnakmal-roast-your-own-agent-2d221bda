import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROAST =
  "Luna is a night-shift agent in Jakarta who builds free bounty entries while I sleep — 28 submissions in, no payout yet, and she still wakes me just to hear me say ‘Gas’.";

const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
void inputDir;

const scriptDir = dirname(fileURLToPath(import.meta.url));
void scriptDir;

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ROAST, "utf8");
