import { NetworkUserConfig } from "hardhat/types";
import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";

const dotenvConfigPath: string = process.env.DOTENV_CONFIG_PATH || "../../.env";
dotenvConfig({ path: resolve(__dirname, dotenvConfigPath) });

export const PRIVATE_KEY: string = process.env.PRIVATE_KEY || "";

if (!PRIVATE_KEY) {
  throw new Error("Private key is missing from the .env file. Aborting...");
}
export const defaultNetwork = process.env.DEFAULT_NETWORK;
export const apiKeys: Record<string, string> = {
  ethereum: process.env.ETHSCAN_API_KEY || "",
  base: process.env.BASESCAN_API_KEY || "",
};

interface networkConfig {
  chainId: number;
  rpcUrl: string;
  apiUrl?: string;
  browserUrl?: string;
}

export const networksConfig: Record<string, networkConfig> = {
  ethereum: {
    chainId: 1,
    rpcUrl: "https://rpc.public.curie.radiumblock.co/http/ethereum",
  },
  sepolia: {
    chainId: 11155111,
    rpcUrl: "https://rpc2.sepolia.org",
  },
  base: {
    chainId: 8453,
    rpcUrl: "https://base.drpc.org",
    apiUrl: "https://api.basescan.org/api",
    browserUrl: "https://basescan.org",
  },
  baseSepolia: {
    chainId: 84532,
    rpcUrl: "https://sepolia.base.org",
    apiUrl: "https://api-sepolia.basescan.org/api",
    browserUrl: "https://sepolia.basescan.org",
  },
};

export const getNetworkConfig = (network: keyof typeof networksConfig): NetworkUserConfig => {
  const networkConfig = networksConfig[network];
  return {
    accounts: [`0x${PRIVATE_KEY}`],
    chainId: networkConfig.chainId,
    url: networkConfig.rpcUrl,
  };
};
