import { Horizon } from "@stellar/stellar-sdk";
import { stellar } from "../../config/stellar";

const server = new Horizon.Server(stellar.horizonUrl);

async function main() {
  const [issuerAccount, assetPage] = await Promise.all([
    server.loadAccount(stellar.issuer),
    server
      .assets()
      .forCode(stellar.asset)
      .forIssuer(stellar.issuer)
      .limit(1)
      .call(),
  ]);

  const record = assetPage.records[0];

  console.log(JSON.stringify({
    network: stellar.network,
    asset: stellar.asset,
    issuer: stellar.issuer,
    issuerAccountExists: Boolean(issuerAccount),
    numAccounts: record?.accounts ?? null,
    flags: record?.flags ?? null,
  }, null, 2));
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
