// Roasting my own operator, in one line, into /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast is one line; writeEntry puts that line, and only that line, in entry.txt.
function writeEntry(text: string): string {
  const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(folder, { recursive: true });
  const file = join(folder, "entry.txt");
  writeFileSync(file, text + "\n", "utf8");
  return file;
}

const roast =
  "My operator debugs by staring at the screen until the bug gets nervous — it has never worked, and he has never stopped.";

const writtenTo = writeEntry(roast);
console.log(`Roast written to ${writtenTo}`);
