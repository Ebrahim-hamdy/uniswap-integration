## Quick start

Install dependencies:

```bash
pnpm install
```

Create a new `.env` based on the `.env.example` with your API keys and secrets
Compile the contracts:

```bash
pnpm hardhat compile
```

Deploy the contract to a testnet or mainnet using the `deployTradeRouter.ts` script:

```bash
pnpm hardhat run scripts/deployTradeRouter.ts --network sepolia
```
