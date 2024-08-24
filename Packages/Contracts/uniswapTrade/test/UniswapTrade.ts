import { SignerWithAddress } from '@nomicfoundation/hardhat-ethers/signers';
import { expect } from 'chai';
import { ethers, upgrades, network } from 'hardhat';
import { TradeRouter, TradeRouter__factory } from 'typechain-types';

import { deploymentArgs } from '../scripts/constants/deploymentArgs';

interface Signers {
  deployer: SignerWithAddress;
}

const chainId: string = network.config.chainId!.toString();
const { USDC, WETH9, uniswapRouter, feeTier } = deploymentArgs[chainId];

describe('TradeRouter', function () {
  let uniswapTrade: TradeRouter;
  let uniswapTradeAddress;
  let signers: Signers = {} as Signers;
  let _trader: SignerWithAddress;

  before(async function () {
    const _signers = await ethers.getSigners();
    signers.deployer = _signers[0];
    _trader = _signers[1];

    const uniswapTradeFactory: TradeRouter__factory = <TradeRouter__factory>(
      await ethers.getContractFactory('TradeRouter')
    );
    uniswapTrade = (await upgrades.deployProxy(
      uniswapTradeFactory,
      [USDC, WETH9, uniswapRouter, feeTier],
      {
        // kind: "uups",
        initializer: 'initialize',
      },
    )) as unknown as TradeRouter;

    uniswapTradeAddress = await uniswapTrade.getAddress();
    console.log(uniswapTradeAddress);
  });

  it('Should set a valid deployment address', async function () {
    expect(uniswapTradeAddress).to.not.equal(ethers.ZeroAddress);
  });

  it('Should set the correct owner', async function () {
    expect(await uniswapTrade.owner()).to.eq(signers.deployer.address);
  });

  it('Should swap ETH for USDC', async function () {
    const trader = signers.deployer.address;
    const ERC20ABI = [
      'function balanceOf(address owner) view returns (uint256)',
    ];
    // const WETH_TOKEN = new ethers.Contract(WETH9, ERC20ABI, ethers.provider);
    const USDC_TOKEN = new ethers.Contract(USDC, ERC20ABI, ethers.provider);

    const ETHBalanceBfSwap = await ethers.provider.getBalance(trader);
    const USDCBalanceBfSwap = await USDC_TOKEN.balanceOf(trader);
    const amountIn = ethers.parseEther('0.0001');

    const tx = await uniswapTrade.swapEthForUsdc({ value: amountIn });
    const receipt = await tx.wait();

    const ETHBalanceAfSwap = await ethers.provider.getBalance(trader);
    const USDCBalanceAfSwap = await USDC_TOKEN.balanceOf(trader);

    expect(receipt.status).to.be.equal(1);

    expect(ETHBalanceBfSwap - ETHBalanceAfSwap >= amountIn).to.be.true;

    console.log(parseFloat(ethers.formatEther(USDCBalanceAfSwap)));
    console.log(parseFloat(ethers.formatEther(USDCBalanceBfSwap)));

    expect(parseFloat(ethers.formatEther(USDCBalanceAfSwap))).to.be.gt(
      parseFloat(ethers.formatEther(USDCBalanceBfSwap)),
    );
  });
});
