import { ethers, upgrades, network } from 'hardhat';
import { TradeRouter__factory } from 'typechain-types';
import { delay, verify, storeContractAddress } from './utils';
import { deploymentArgs } from './constants/deploymentArgs';

export const tradeRouter = 'TradeRouter';
async function main() {
  const chainId: string = network.config.chainId!.toString();
  const { USDC, WETH9, uniswapRouter, feeTier } = deploymentArgs[chainId];

  const factory: TradeRouter__factory = <TradeRouter__factory>(
    await ethers.getContractFactory('TradeRouter')
  );
  const contract = await upgrades.deployProxy(
    factory,
    [USDC, WETH9, uniswapRouter, feeTier],
    {
      initializer: 'initialize',
    },
  );
  await contract.waitForDeployment();

  // Retrieve the proxy contract address
  const proxyAddress = await contract.getAddress();
  const implementationAddress =
    await upgrades.erc1967.getImplementationAddress(proxyAddress);

  console.log('TradeRouter proxy contract deployed at: ', proxyAddress);
  console.log(
    'TradeRouter contract implementation deployed at: ',
    implementationAddress,
  );

  // Store the proxy contract address so we can use it later on
  storeContractAddress(tradeRouter, proxyAddress);

  // wait x seconds for transaction to be confirmed
  // before submitting for verification
  const ms = 20 * 1000; // milliseconds
  console.log(
    `Waiting ${ms / 1000} seconds before sending for verification...`,
  );
  await delay(ms);

  // Programmatically verify the proxy contract
  // this will verify the implementation contract
  // and link the proxy contract with it
  console.log(`Sent for verification...`);
  await verify(proxyAddress);
  console.log(`Successfully verified!`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
