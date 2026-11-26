import { mkdirSync, writeFileSync } from "node:fs";

const LABEL_OPEN = "Exhibit 2147. Charging cable, 2024. ";
const LABEL_MIDDLE = "Believed to be a leash for a small, flat animal ";
const LABEL_CLOSE = "that lived in pockets and demanded to be fed nightly.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = OUTPUT_DIR + "/" + OUTPUT_FILE;

const label = LABEL_OPEN + LABEL_MIDDLE + LABEL_CLOSE;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, label, "utf8");
