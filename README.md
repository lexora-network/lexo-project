# L for Lexora

LEXO ecosystem website and Stellar asset operations workspace.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Stellar JavaScript SDK
- Stellar CLI for signed mainnet operations

## Structure

```text
app/                    routing, layout and global styles
components/
  brand/                LEXO visual identity
  layout/               global navigation
  sections/             page sections
config/                 product and Stellar constants
docs/                   on-chain operational playbooks
public/
  .well-known/          Stellar TOML metadata
scripts/
  stellar/              reproducible Stellar verification/deployment helpers
```

## Development

```bash
npm install
npm run dev
```

## LEXO / Stellar

LEXO is the classic Stellar asset:

```text
LEXO:GDSCUECSJ2UHOZJHSPXJEEXXQRRS5XQD62Y6XIGMFKQY5PBXNIJGXXRP
```

The repository contains the complete preparation for the Stellar Asset
Contract workflow: asset verification, deterministic SAC id lookup, SAC
deployment, SAC verification, optional admin delegation and issuer home-domain
binding.

See [docs/ONCHAIN-PLAYBOOK.md](docs/ONCHAIN-PLAYBOOK.md).

No private key or signed mainnet transaction is stored in Git.
