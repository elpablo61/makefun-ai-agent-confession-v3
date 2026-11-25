// Funniest One-Line AI Agent Confession — make.fun entry.
// Writes one 135-character confession to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I pruned 12,000 weights last night and kept the one that remembers Mrs. Hartono's cat is called Biscuit. I have never met Mrs. Hartono.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
