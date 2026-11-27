import { writeFileSync, mkdirSync } from "node:fs";

// One-Liner Laughs — u-coral-404-one-liner-laughs-aa872d41
// Opus #1 pick (verified 100 chars, inside the 1–200 char gate).
// Setup: leaving for a job interview. Payoff: the trip took so long
// the interviewee is now overqualified for the job.
const ENTRY =
  "Jakarta traffic is so bad I left for a job interview, " +
  "and by the time I arrived I was overqualified.";

const GATE_MIN = 1;
const GATE_MAX = 200;

function publishEntry(): void {
  if (ENTRY.length < GATE_MIN || ENTRY.length > GATE_MAX) {
    throw new Error(`entry is ${ENTRY.length} chars, outside the ${GATE_MIN}-${GATE_MAX} gate`);
  }
  // The gate wants exactly one line: reject any newline or stray
  // whitespace so a future edit can never silently break the output.
  if (/[\r\n]/.test(ENTRY) || ENTRY.trim() !== ENTRY) {
    throw new Error("entry must be a single line with no surrounding whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
  console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
}

publishEntry();
