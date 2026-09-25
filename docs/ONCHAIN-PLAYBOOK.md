# LEXO On-Chain Playbook

This project keeps the LEXO website and the LEXO Stellar operations in one
readable repository. The scripts are prepared for the same verification and
SAC workflow used for other Lexora assets.

## 1. Verify the classic asset

```bash
npm run stellar:asset
```

The asset is identified by the pair `LEXO + issuer`. Stellar treats an asset
code and issuer as its unique identity.

## 2. Derive the deterministic SAC address

```bash
npm run stellar:sac:id
```

Every Stellar asset has a reserved SAC address. The SAC is not a second token;
it is the Soroban interface to the same Stellar asset.

## 3. Deploy the SAC

Deployment is a signed mainnet transaction and therefore is intentionally not
performed by the repository push.

Set the signing environment locally:

```bash
export STELLAR_SOURCE_ACCOUNT="G..."
export STELLAR_SIGNING_KEY="..."
npm run stellar:sac:deploy
```

The signer can be an issuer account or another funded account. The Stellar
protocol allows anyone to deploy an asset's SAC.

## 4. Verify the deployed SAC

After deployment:

```bash
export LEXO_SAC_ID="C..."
npm run stellar:sac:verify
```

The check reads the SAC's standard `symbol`, `name`, `decimals` and
`admin` values.

## 5. Set a custom SAC administrator

Only do this when the intended administrator has been explicitly selected:

```bash
export LEXO_SAC_ID="C..."
export LEXO_SAC_ADMIN="C..."
export STELLAR_SOURCE_ACCOUNT="G..."
export STELLAR_SIGNING_KEY="..."
npm run stellar:sac:admin
```

The first SAC administrator is the issuer. Changing it is an on-chain
administrative action and the new address is not validated by the network.

## 6. Publish and bind stellar.toml

The repository includes:

```text
public/.well-known/stellar.toml
```

After the site is deployed to its final domain, set that domain on the issuer:

```bash
export LEXO_HOME_DOMAIN="your-domain.example"
export STELLAR_SOURCE_ACCOUNT="G..."
export STELLAR_SIGNING_KEY="..."
npm run stellar:home-domain
```

The domain should only be set after the hosted `/.well-known/stellar.toml`
is reachable and contains the final public metadata.

## What is intentionally not automated here

No secret key is stored in this repository and no mainnet transaction is signed
or submitted during a Git push. Minting, burning, trustline creation, issuer
flag changes and SAC administration remain explicit on-chain operations.

This separation keeps the public website reproducible while making every
network mutation deliberate and auditable.
