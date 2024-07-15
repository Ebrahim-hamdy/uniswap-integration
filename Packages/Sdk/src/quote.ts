import 'dotenv/config';
import { ethers } from 'ethers';
import { tokensConfig } from './config';

import { computePoolAddress } from '@uniswap/v3-sdk';
import IUniswapV3PoolABI from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json';

import { getProvider } from './libs/providers';
import { toReadableAmount, fromReadableAmount } from './libs/conversion';
import {
  POOL_FACTORY_CONTRACT_ADDRESS,
  QUOTER_CONTRACT_ADDRESS,
} from './config';

export async function quote(): Promise<any> {
  const quoterContract = new ethers.Contract(
    QUOTER_CONTRACT_ADDRESS,
    [
      'function quoteExactInputSingle(tuple(address tokenIn,address tokenOut,uint256 amountIn,uint24 fee,uint160 sqrtPriceLimitX96) params) public returns (uint256 amountOut, uint160 sqrtPriceX96After, uint32 initializedTicksCrossed, uint256 gasEstimate)',
    ],
    getProvider()
  );
  const poolConstants = await getPoolConstants();

  const quotedAmountOut = await quoterContract.callStatic.quoteExactInputSingle(
    {
      tokenIn: poolConstants.token0,
      tokenOut: poolConstants.token1,
      fee: poolConstants.fee,
      amountIn: fromReadableAmount(
        tokensConfig.amountIn,
        tokensConfig.in.decimals
      ).toString(),
      sqrtPriceLimitX96: 0,
    }
  );

  console.log(
    toReadableAmount(quotedAmountOut.amountOut, tokensConfig.out.decimals)
  );

  // return toReadableAmount(quotedAmountOut, tokensConfig.out.decimals);
}

async function getPoolConstants(): Promise<{
  token0: string;
  token1: string;
  fee: number;
}> {
  const currentPoolAddress = computePoolAddress({
    factoryAddress: POOL_FACTORY_CONTRACT_ADDRESS,
    tokenA: tokensConfig.in,
    tokenB: tokensConfig.out,
    fee: tokensConfig.poolFee,
  });

  const poolContract = new ethers.Contract(
    currentPoolAddress,
    IUniswapV3PoolABI.abi,
    getProvider()
  );
  const [token0, token1, fee] = await Promise.all([
    poolContract.token0(),
    poolContract.token1(),
    poolContract.fee(),
  ]);

  return {
    token0,
    token1,
    fee,
  };
}

(async () => {
  await quote();
})();
