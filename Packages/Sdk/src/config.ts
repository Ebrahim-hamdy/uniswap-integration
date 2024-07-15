import { Token } from '@uniswap/sdk-core';
import { FeeAmount } from '@uniswap/v3-sdk';

interface networkConfig {
  chainId: number;
  rpcUrl: string;
  apiUrl?: string;
  browserUrl?: string;
}

export const networksConfig: Record<string, networkConfig> = {
  ethereum: {
    chainId: 1,
    rpcUrl: 'https://rpc.public.curie.radiumblock.co/http/ethereum',
  },
  sepolia: {
    chainId: 11155111,
    rpcUrl: 'https://rpc2.sepolia.org',
  },
  base: {
    chainId: 8453,
    rpcUrl: 'https://base.drpc.org',
    apiUrl: 'https://api.basescan.org/api',
    browserUrl: 'https://basescan.org',
  },
  baseSepolia: {
    chainId: 84532,
    rpcUrl: 'https://sepolia.base.org',
    apiUrl: 'https://api-sepolia.basescan.org/api',
    browserUrl: 'https://sepolia.basescan.org',
  },
};

export const POOL_FACTORY_CONTRACT_ADDRESSES: any = {
  '11155111': '0x0227628f3F023bb0B980b67D528571c95c6DaC1c',
  '84532': '0x4752ba5DBc23f44D87826276BF6Fd6b1C372aD24',
};

export const QUOTER_CONTRACT_ADDRESSES: any = {
  '11155111': '0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3',
  '84532': '0xC5290058841028F1614F3A6F0F5816cAd0df5E27',
};

const WETH_ADDRESS: any = {
  '11155111': '0xfff9976782d46cc05630d1f6ebab18b2324d6b14',
  '84532': '0x4200000000000000000000000000000000000006',
};

const USDC_ADDRESS: any = {
  '11155111': '0x1c7d4b196cb0c7b01d743fbc6116a902379c7238',
  '84532': '0x036CbD53842c5426634e7929541eC2318f3dCF7e',
};

// Inputs that configure this example to run
export interface TokensConfig {
  in: Token;
  amountIn: number;
  out: Token;
  poolFee: number;
}

export const providerConfig =
  networksConfig[process.env.DEFAULT_NETWORK as string];

export const chainId = providerConfig.chainId;
export const QUOTER_CONTRACT_ADDRESS: any = QUOTER_CONTRACT_ADDRESSES[chainId];
export const POOL_FACTORY_CONTRACT_ADDRESS: any =
  POOL_FACTORY_CONTRACT_ADDRESSES[chainId];

export const WETH_TOKEN: any = new Token(
  chainId,
  WETH_ADDRESS[chainId],
  18,
  'WETH',
  'Wrapped Ether'
);

export const USDC_TOKEN: any = new Token(
  chainId,
  USDC_ADDRESS[chainId],
  6,
  'USDC',
  'USD//C'
);

export const tokensConfig = {
  in: WETH_TOKEN,
  amountIn: 10,
  out: USDC_TOKEN,
  poolFee: FeeAmount.MEDIUM,
};
