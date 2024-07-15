import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-chai-matchers';
import '@nomicfoundation/hardhat-ethers';
import '@nomicfoundation/hardhat-toolbox';
import '@openzeppelin/hardhat-upgrades';
import '@nomicfoundation/hardhat-verify';
import 'hardhat-gas-reporter';
import 'solidity-docgen';

import {
  apiKeys,
  getNetworkConfig,
  defaultNetwork,
  networksConfig,
} from './scripts/config';

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      forking: {
        url: networksConfig[defaultNetwork].rpcUrl,
      },
    },
    ethereum: getNetworkConfig('ethereum'),
    sepolia: getNetworkConfig('sepolia'),
    base: getNetworkConfig('base'),
    baseSepolia: getNetworkConfig('baseSepolia'),
  },

  etherscan: {
    apiKey: {
      ethereum: apiKeys.ethereum,
      sepolia: apiKeys.ethereum,
      base: apiKeys.base,
      baseSepolia: apiKeys.base,
    },
    customChains: [
      {
        network: defaultNetwork!,
        chainId: networksConfig[defaultNetwork!] as unknown as number,
        urls: {
          apiURL: networksConfig[defaultNetwork!].apiUrl!,
          browserURL: networksConfig[defaultNetwork!].browserUrl!,
        },
      },
    ],
  },
  sourcify: {
    enabled: true,
  },
  solidity: {
    compilers: [
      {
        version: '0.8.24',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1_000_000,
          },
        },
      },
    ],
  },
  gasReporter: {
    enabled: true,
    currency: 'USD',
    outputFile: 'gasReporter.txt',
    noColors: true,
    coinmarketcap: process.env.COIN_MARKET_CAP_API_KEY,
    token: 'ETH',
  },
  mocha: {
    timeout: 400000,
  },
};

export default config;
