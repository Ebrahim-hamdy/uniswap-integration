import { ethers, providers } from 'ethers';
import { providerConfig } from '../config';

// Provider Functions

export function getProvider(): providers.Provider {
  return new ethers.providers.JsonRpcProvider(providerConfig.rpcUrl);
}
