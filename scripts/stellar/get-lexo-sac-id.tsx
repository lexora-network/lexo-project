import { execFileSync } from "node:child_process";
import { stellar } from "../../config/stellar";

const args = [
  "contract",
  "id",
  "asset",
  "--network",
  "mainnet",
  "--asset",
  stellar.assetString,
];

try {
  const output = execFileSync("stellar", args, { encoding: "utf8" }).trim();
  console.log(output);
} catch (error) {
  console.error(
    "Could not derive the LEXO SAC id. Make sure stellar-cli is installed and mainnet is configured.",
  );
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
