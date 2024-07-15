/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  TradeRouter,
  TradeRouterInterface,
} from "../../../contracts/TradeRouter.sol/TradeRouter";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "ERC1967InvalidImplementation",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1967NonPayable",
    type: "error",
  },
  {
    inputs: [],
    name: "EnforcedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "ExpectedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "UUPSUnauthorizedCallContext",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32",
      },
    ],
    name: "UUPSUnsupportedProxiableUUID",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAmount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "UPGRADE_INTERFACE_VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_usdc",
        type: "address",
      },
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
      {
        internalType: "address",
        name: "_uniswapRouter",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "_feeTier",
        type: "uint24",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "recoverETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapEthForUsdc",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "uniswapRouter",
    outputs: [
      {
        internalType: "contract IUniswapRouter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b5061001d610022565b6100d4565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff16156100725760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b03908116146100d15780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b6080516114e56100fd60003960008181610a0701528181610a300152610c5101526114e56000f3fe6080604052600436106100ca5760003560e01c8063715018a6116100795780638da5cb5b116100565780638da5cb5b146101fe578063ad3cb1cc14610248578063c46270231461029e578063f2fde38b146102be57005b8063715018a614610182578063735de9f7146101975780638456cb59146101e957005b806352d1902d116100a757806352d1902d1461011057806355a6b378146101385780635c975abb1461014057005b80630614117a146100d35780633f4ba83a146100e85780634f1ef286146100fd57005b366100d157005b005b3480156100df57600080fd5b506100d16102de565b3480156100f457600080fd5b506100d161032f565b6100d161010b366004611272565b610341565b34801561011c57600080fd5b50610125610360565b6040519081526020015b60405180910390f35b6100d161038f565b34801561014c57600080fd5b507fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033005460ff16604051901515815260200161012f565b34801561018e57600080fd5b506100d16105ea565b3480156101a357600080fd5b506000546101c49073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161012f565b3480156101f557600080fd5b506100d16105fc565b34801561020a57600080fd5b507f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c1993005473ffffffffffffffffffffffffffffffffffffffff166101c4565b34801561025457600080fd5b506102916040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b60405161012f9190611376565b3480156102aa57600080fd5b506100d16102b93660046113c7565b61060c565b3480156102ca57600080fd5b506100d16102d9366004611425565b610842565b6102e66108a8565b476000819003610322576040517f1f2a200500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61032c3382610936565b50565b6103376108a8565b61033f610952565b565b6103496109ef565b61035282610af3565b61035c8282610afb565b5050565b600061036a610c39565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b610397610ca8565b346000036103d1576040517f1f2a200500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006103dd3447611440565b111561042e5761042e6103f03447611440565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c1993005473ffffffffffffffffffffffffffffffffffffffff1690610936565b600080546040805160e08101825260025473ffffffffffffffffffffffffffffffffffffffff808216835260015481166020840190815262ffffff7401000000000000000000000000000000000000000090930483168486019081523360608601908152346080870181815260a088018b815260c089019b8c5298517f04e45aaf00000000000000000000000000000000000000000000000000000000815297518616600489015293518516602488015291519094166044860152925182166064850152516084840152925160a48301529351821660c48201529116916304e45aaf9160e40160206040518083038185885af1158015610532573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610557919061147a565b5060008054604080517f12210e8a000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff909216926312210e8a9260048084019382900301818387803b1580156105bf57600080fd5b505af11580156105d3573d6000803e3d6000fd5b50505050600047111561033f5761033f3347610936565b6105f26108a8565b61033f6000610d04565b6106046108a8565b61033f610d9a565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff166000811580156106575750825b905060008267ffffffffffffffff1660011480156106745750303b155b905081158015610682575080155b156106b9576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84547fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000166001178555831561071a5784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff16680100000000000000001785555b6000805473ffffffffffffffffffffffffffffffffffffffff808a167fffffffffffffffffffffffff00000000000000000000000000000000000000009283161790925560028054600180548e8616908516179055928b1662ffffff8a1674010000000000000000000000000000000000000000029092167fffffffffffffffffff0000000000000000000000000000000000000000000000909316929092171790556107c633610e13565b6107ce610e24565b6107d6610e34565b83156108375784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050505050565b61084a6108a8565b73ffffffffffffffffffffffffffffffffffffffff811661089f576040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600060048201526024015b60405180910390fd5b61032c81610d04565b336108e77f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c1993005473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff161461033f576040517f118cdaa7000000000000000000000000000000000000000000000000000000008152336004820152602401610896565b60008060008084865af161035c5763b12d13eb6000526004601cfd5b61095a610e3c565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f0330080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001681557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a150565b3073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161480610abc57507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610aa37f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614155b1561033f576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61032c6108a8565b8173ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610b80575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610b7d9181019061147a565b60015b610bce576040517f4c9c8ce300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83166004820152602401610896565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114610c2a576040517faa1d49a400000000000000000000000000000000000000000000000000000000815260048101829052602401610896565b610c348383610e97565b505050565b3073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461033f576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033005460ff161561033f576040517fd93c066500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080547fffffffffffffffffffffffff0000000000000000000000000000000000000000811673ffffffffffffffffffffffffffffffffffffffff848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b610da2610ca8565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f0330080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011781557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258336109c4565b610e1b610efa565b61032c81610f61565b610e2c610efa565b61033f610f69565b61033f610efa565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033005460ff1661033f576040517f8dfc202b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ea082610fba565b60405173ffffffffffffffffffffffffffffffffffffffff8316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a2805115610ef257610c348282611089565b61035c61110e565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005468010000000000000000900460ff1661033f576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61084a610efa565b610f71610efa565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f0330080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b8073ffffffffffffffffffffffffffffffffffffffff163b600003611023576040517f4c9c8ce300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82166004820152602401610896565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60606000808473ffffffffffffffffffffffffffffffffffffffff16846040516110b39190611493565b600060405180830381855af49150503d80600081146110ee576040519150601f19603f3d011682016040523d82523d6000602084013e6110f3565b606091505b5091509150611103858383611146565b925050505b92915050565b341561033f576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608261115b57611156826111d8565b6111d1565b815115801561117f575073ffffffffffffffffffffffffffffffffffffffff84163b155b156111ce576040517f9996b31500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85166004820152602401610896565b50805b9392505050565b8051156111e85780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b803573ffffffffffffffffffffffffffffffffffffffff8116811461123e57600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000806040838503121561128557600080fd5b61128e8361121a565b9150602083013567ffffffffffffffff808211156112ab57600080fd5b818501915085601f8301126112bf57600080fd5b8135818111156112d1576112d1611243565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561131757611317611243565b8160405282815288602084870101111561133057600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60005b8381101561136d578181015183820152602001611355565b50506000910152565b6020815260008251806020840152611395816040850160208701611352565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b600080600080608085870312156113dd57600080fd5b6113e68561121a565b93506113f46020860161121a565b92506114026040860161121a565b9150606085013562ffffff8116811461141a57600080fd5b939692955090935050565b60006020828403121561143757600080fd5b6111d18261121a565b81810381811115611108577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006020828403121561148c57600080fd5b5051919050565b600082516114a5818460208701611352565b919091019291505056fea2646970667358221220f094870b0cce5ca569be9c4ddfe75c7c7a2f681b5a857dc07730d2d321bcf18564736f6c63430008180033";

type TradeRouterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TradeRouterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TradeRouter__factory extends ContractFactory {
  constructor(...args: TradeRouterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      TradeRouter & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TradeRouter__factory {
    return super.connect(runner) as TradeRouter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TradeRouterInterface {
    return new Interface(_abi) as TradeRouterInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): TradeRouter {
    return new Contract(address, _abi, runner) as unknown as TradeRouter;
  }
}
