import { execFileSync } from "node:child_process";
import { stellar } from "../../config/stellar";

const sacId = process.env.LEXO_SAC_ID;

if (!sacId) {
  throw new Error("Set LEXO_SAC_ID to the deployed LEXO SAC contract address.");
}

const invoke = (method: string, extra: string[] = []) =>
  execFileSync(
    "stellar",
    [
      "contract",
      "invoke",
      "--id",
      sacId,
      "--network",
      "mainnet",
      "--",
      method,
      ...extra,
    ],
    { encoding: "utf8" },
  ).trim();

console.log(
  JSON.stringify(
    {
      asset: stellar.assetString,
      sac: sacId,
      symbol: invoke("symbol"),
      name: invoke("name"),
      decimals: invoke("decimals"),
      admin: invoke("admin"),
    },
    null,
    2,
  ),
);
