// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { Initializable } from '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';
import { UUPSUpgradeable } from '@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol';
import { OwnableUpgradeable } from '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import { PausableUpgradeable } from '@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol';

import { SafeTransferLib } from 'solady/src/utils/SafeTransferLib.sol';

/**
 * @title UniswapV3 Router functionality
 */
interface IUniswapRouter {
    struct ExactInputSingleParams {
        address tokenIn;
        address tokenOut;
        uint24 fee;
        address recipient;
        uint256 amountIn;
        uint256 amountOutMinimum;
        uint160 sqrtPriceLimitX96;
    }

    /**
     * @dev Swaps `amountIn` of one token for as much as possible of another token
     * @param params The parameters necessary for the swap, encoded as `ExactInputSingleParams` in calldata
     * @return amountOut The amount of the received token
     */
    function exactInputSingle(
        ExactInputSingleParams calldata params
    ) external payable returns (uint256 amountOut);

    /**
     * @dev refund any leftover ETH to the trader
     */
    function refundETH() external payable;
}

/**
 * @title TradeRouter
 * @dev Integrate with UniswapV3 to allow trader to swap ETH for USDC
 */
contract TradeRouter is
    Initializable,
    OwnableUpgradeable,
    UUPSUpgradeable,
    PausableUpgradeable
{
    using SafeTransferLib for address;

    /// @notice uniswap router proxy
    IUniswapRouter public uniswapRouter;

    address private USDC;
    address private WETH9;
    uint24 private feeTier;

    // Error Handling
    error ZeroAmount();
    error TransferFailed();

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    /**
     * @dev Initializes the contract with necessary addresses and sets up the initial state.
     * @param _usdc The address of the USDC contract.
     * @param _weth The address of the Wrapped Ether (WETH) contract.
     * @param _uniswapRouter The address of the Uniswap V3 swap router.
     * @param _feeTier percentage of the liquidity provider fee
     */
    function initialize(
        address _usdc,
        address _weth,
        address _uniswapRouter,
        uint24 _feeTier
    ) public initializer {
        uniswapRouter = IUniswapRouter(_uniswapRouter);
        feeTier = _feeTier;
        USDC = _usdc;
        WETH9 = _weth;

        __Ownable_init(msg.sender);
        __Pausable_init();
        __UUPSUpgradeable_init();
    }

    /**
     * @dev pause the contract. Only the owner can call this function.
     * Requirements:
     * - The contract must not be paused.
     */
    function pause() external onlyOwner {
        _pause();
    }

    /**
     * @dev unpause the contract. Only the owner can call this function.
     * Requirements:
     * - The contract must be paused.
     */
    function unpause() external onlyOwner {
        _unpause();
    }

    /**
     * @dev Swaps msg.value of Eth for as much as possible of USDC
     */
    function swapEthForUsdc() external payable whenNotPaused {
        if (msg.value == 0) revert ZeroAmount();

        // Transfer contract balance to the owner before submitting a new swap
        if ((address(this).balance - msg.value) > 0)
            address(owner()).safeTransferETH(
                (address(this).balance - msg.value)
            );

        // Execute uniswap swap function
        uniswapRouter.exactInputSingle{ value: msg.value }(
            IUniswapRouter.ExactInputSingleParams({
                tokenIn: WETH9,
                tokenOut: USDC,
                fee: feeTier,
                recipient: msg.sender,
                amountIn: msg.value,
                amountOutMinimum: 0,
                sqrtPriceLimitX96: 0
            })
        );

        // refund any leftover ETH to the trader
        uniswapRouter.refundETH();
        if (address(this).balance > 0)
            address(msg.sender).safeTransferETH(address(this).balance);
    }

    /**
     * @dev recover ETH from the contract by admin wallet only
     */
    function recoverETH() external onlyOwner {
        uint256 amount = address(this).balance;
        if (amount == 0) revert ZeroAmount();
        address(msg.sender).safeTransferETH(amount);
    }

    /**
     * @dev Authorizes the upgrade of the contract. Required by the OZ UUPS module
     *      (only owner is able to upgrade contract)
     * @param newImplementation The address of the new contract implementation.
     */
    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyOwner {}

    /// @dev allow contract to accept ETH when msg.data is empty
    receive() external payable {}

    /// @dev allow contract to accept ETH when msg.data is not empty
    fallback() external payable {}
}
