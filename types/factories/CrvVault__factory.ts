/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CrvVault, CrvVaultInterface } from "../CrvVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_steCRV",
        type: "address",
      },
      {
        internalType: "address",
        name: "_crvToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_ldoToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_crvStGauge",
        type: "address",
      },
      {
        internalType: "address",
        name: "_crvPool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_ldoPool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stEthPool",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "CrvWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EthWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "crvAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ldoAmount",
        type: "uint256",
      },
    ],
    name: "Farmed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LdoWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LpWithdrawn",
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
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "steCRV",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "crvToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "ldoToken",
        type: "address",
      },
    ],
    name: "TokenAddressesSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "crvStGauge",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "crvPool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "ldoPool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "stEthPool",
        type: "address",
      },
    ],
    name: "UtilityAddressesSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "unstakedLp",
        type: "uint256",
      },
    ],
    name: "unstaked",
    type: "event",
  },
  {
    inputs: [],
    name: "crvPool",
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
    name: "crvStGauge",
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
    name: "crvToken",
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
    name: "emergencyWithdraw",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_crvAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_ldoAmount",
        type: "uint256",
      },
    ],
    name: "farmCrvLdoRewards",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ldoPool",
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
    name: "ldoToken",
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
    name: "reInvestRewards",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
    inputs: [
      {
        internalType: "address",
        name: "_steCrv",
        type: "address",
      },
      {
        internalType: "address",
        name: "_crvToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_ldoToken",
        type: "address",
      },
    ],
    name: "setTokenAddresses",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_crvStGauge",
        type: "address",
      },
      {
        internalType: "address",
        name: "_crvPool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_ldoPool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stEthPool",
        type: "address",
      },
    ],
    name: "setUtilityAddresses",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stEthPool",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "stakeLp",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "steCRV",
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
    name: "unstakeLp",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vaultCompoundedLp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vaultLdoRewardFunds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vaultLpFunds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002b8f38038062002b8f833981016040819052620000349162000420565b600080546001600160a01b031916339081178255604051909182917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600180819055506200009b876001600160a01b0316620003fd60201b620022711760201c565b620000ed5760405162461bcd60e51b815260206004820152601860248201527f496e76616c6964204c5020546f6b656e2061646472657373000000000000000060448201526064015b60405180910390fd5b6200010c866001600160a01b0316620003fd60201b620022711760201c565b6200015a5760405162461bcd60e51b815260206004820152601960248201527f496e76616c69642043525620546f6b656e2061646472657373000000000000006044820152606401620000e4565b62000179856001600160a01b0316620003fd60201b620022711760201c565b620001c75760405162461bcd60e51b815260206004820152601960248201527f496e76616c6964204c444f20546f6b656e2061646472657373000000000000006044820152606401620000e4565b620001e6846001600160a01b0316620003fd60201b620022711760201c565b620002345760405162461bcd60e51b815260206004820152601560248201527f496e76616c6964204761756765206164647265737300000000000000000000006044820152606401620000e4565b62000253836001600160a01b0316620003fd60201b620022711760201c565b620002a15760405162461bcd60e51b815260206004820152601860248201527f496e76616c69642043525620506f6f6c206164647265737300000000000000006044820152606401620000e4565b620002c0826001600160a01b0316620003fd60201b620022711760201c565b6200030e5760405162461bcd60e51b815260206004820152601860248201527f496e76616c6964204c444f20506f6f6c206164647265737300000000000000006044820152606401620000e4565b6200032d816001600160a01b0316620003fd60201b620022711760201c565b6200037b5760405162461bcd60e51b815260206004820152601a60248201527f496e76616c696420737445544820506f6f6c20616464726573730000000000006044820152606401620000e4565b600280546001600160a01b03199081166001600160a01b03998a1617909155600380548216978916979097179096556004805487169588169590951790945560058054861693871693909317909255600680548516918616919091179055600780548416918516919091179055600880549092169216919091179055620004b5565b3b151590565b80516001600160a01b03811681146200041b57600080fd5b919050565b600080600080600080600060e0888a0312156200043c57600080fd5b620004478862000403565b9650620004576020890162000403565b9550620004676040890162000403565b9450620004776060890162000403565b9350620004876080890162000403565b92506200049760a0890162000403565b9150620004a760c0890162000403565b905092959891949750929550565b6126ca80620004c56000396000f3fe6080604052600436106101235760003560e01c80637fedbe27116100a0578063b20fdc0d11610064578063b20fdc0d1461030b578063be97a9801461032b578063db2e21bc1461034b578063f2fde38b14610360578063f629cba21461038057600080fd5b80637fedbe27146102785780638da5cb5b14610298578063923f8468146102b65780639c08e9cb146102d6578063ac856ea0146102eb57600080fd5b8063490344a2116100e7578063490344a2146101eb5780634ba912ff1461020b5780634d3f9d3e1461022b57806363485ccb1461024b578063715018a61461026157600080fd5b806303b771241461012f578063174761e514610159578063325cc5801461019157806332d7d66d146101b55780633899dc6d146101d557600080fd5b3661012a57005b600080fd5b34801561013b57600080fd5b506101446103a0565b60405190151581526020015b60405180910390f35b34801561016557600080fd5b50600454610179906001600160a01b031681565b6040516001600160a01b039091168152602001610150565b34801561019d57600080fd5b506101a7600a5481565b604051908152602001610150565b3480156101c157600080fd5b50600354610179906001600160a01b031681565b3480156101e157600080fd5b506101a760095481565b3480156101f757600080fd5b50610144610206366004612434565b610675565b34801561021757600080fd5b50610144610226366004612488565b610894565b34801561023757600080fd5b506101446102463660046124aa565b611296565b34801561025757600080fd5b506101a7600b5481565b34801561026d57600080fd5b5061027661144f565b005b34801561028457600080fd5b50600754610179906001600160a01b031681565b3480156102a457600080fd5b506000546001600160a01b0316610179565b3480156102c257600080fd5b506101446102d13660046124ed565b6114c3565b3480156102e257600080fd5b506101446118a4565b3480156102f757600080fd5b50600854610179906001600160a01b031681565b34801561031757600080fd5b50600654610179906001600160a01b031681565b34801561033757600080fd5b50600254610179906001600160a01b031681565b34801561035757600080fd5b50610144611bee565b34801561036c57600080fd5b5061027661037b366004612506565b612187565b34801561038c57600080fd5b50600554610179906001600160a01b031681565b60006002600154036103cd5760405162461bcd60e51b81526004016103c490612521565b60405180910390fd5b600260015560006103dc612277565b90506000816009546103ee919061256e565b9050600082600a54610400919061256e565b9050600061040e828461258b565b600554604051632e1a7d4d60e01b8152600481018390529192506001600160a01b031690632e1a7d4d90602401600060405180830381600087803b15801561045557600080fd5b505af1158015610469573d6000803e3d6000fd5b505060025460405163a9059cbb60e01b81526001600160a01b03909116925063a9059cbb915061049f903390859060040161259e565b6020604051808303816000875af11580156104be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e291906125b7565b50600480546040516370a0823160e01b815230928101929092526000916001600160a01b03909116906370a0823190602401602060405180830381865afa158015610531573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055591906125d9565b90506000610563868361256e565b6004805460405163a9059cbb60e01b81529293506001600160a01b03169163a9059cbb9161059591339186910161259e565b6020604051808303816000875af11580156105b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d891906125b7565b50336000908152600c6020526040812080548792906105f89084906125f2565b92505081905550846009600082825461061191906125f2565b9250508190555083600a600082825461062a91906125f2565b909155505060405183815233907fc99009ef3dfc0489efa43797eee17157bc922e1ccfdddd9807414c7ca7b10f7c9060200160405180910390a2600196505050505050506001805590565b600080546001600160a01b031633146106a05760405162461bcd60e51b81526004016103c490612605565b6001600160a01b0385163b6106ef5760405162461bcd60e51b8152602060048201526015602482015274496e76616c6964204761756765206164647265737360581b60448201526064016103c4565b6001600160a01b0384163b6107465760405162461bcd60e51b815260206004820152601860248201527f496e76616c69642043525620506f6f6c2061646472657373000000000000000060448201526064016103c4565b6001600160a01b0383163b61079d5760405162461bcd60e51b815260206004820152601860248201527f496e76616c6964204c444f20506f6f6c2061646472657373000000000000000060448201526064016103c4565b6001600160a01b0382163b6107f45760405162461bcd60e51b815260206004820152601a60248201527f496e76616c696420737445544820506f6f6c206164647265737300000000000060448201526064016103c4565b600580546001600160a01b038781166001600160a01b031992831681179093556006805488831690841681179091556007805488841690851681179091556008805493881693909416831790935560408051948552602085019190915283019190915260608201527f4cb3f361a85d88ca4c0d58e1d375121b0db2579d910173818297b146668bb3c09060800160405180910390a1506001949350505050565b60006002600154036108b85760405162461bcd60e51b81526004016103c490612521565b600260015560006108c9838561258b565b1161090d5760405162461bcd60e51b815260206004820152601460248201527343616e6e6f74206661726d203020546f6b656e7360601b60448201526064016103c4565b6003546040516370a0823160e01b815233600482015284916001600160a01b0316906370a0823190602401602060405180830381865afa158015610955573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097991906125d9565b101580156109f65750600480546040516370a0823160e01b8152339281019290925283916001600160a01b03909116906370a0823190602401602060405180830381865afa1580156109cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f391906125d9565b10155b610a585760405162461bcd60e51b815260206004820152602d60248201527f546f6b656e2042616c616e63657320616e642052657175657374656420416d6f60448201526c0eadce8e640dad2e6dac2e8c6d609b1b60648201526084016103c4565b600354604051636eb1769f60e11b815233600482015230602482015284916001600160a01b03169063dd62ed3e90604401602060405180830381865afa158015610aa6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aca91906125d9565b10158015610b4d575060048054604051636eb1769f60e11b8152339281019290925230602483015283916001600160a01b039091169063dd62ed3e90604401602060405180830381865afa158015610b26573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b4a91906125d9565b10155b610ba45760405162461bcd60e51b815260206004820152602260248201527f52657175657374656420416d6f756e747320617265206e6f7420617070726f76604482015261195960f21b60648201526084016103c4565b6003546040516323b872dd60e01b8152336004820152306024820152604481018590526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610bfb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1f91906125b7565b506003546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610c69573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8d91906125d9565b600480546040516323b872dd60e01b81523392810192909252306024830152604482018690529192506001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610cea573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0e91906125b7565b50600480546040516370a0823160e01b815230928101929092526000916001600160a01b03909116906370a0823190602401602060405180830381865afa158015610d5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8191906125d9565b60035460065460405163095ea7b360e01b815292935047926001600160a01b039283169263095ea7b392610dbc92911690879060040161259e565b6020604051808303816000875af1158015610ddb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dff91906125b7565b506004805460075460405163095ea7b360e01b81526001600160a01b039283169363095ea7b393610e3493169187910161259e565b6020604051808303816000875af1158015610e53573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e7791906125b7565b5060065460405163556d6e9f60e01b81526001600482015260006024820181905260448201869052916001600160a01b03169063556d6e9f906064016020604051808303816000875af1158015610ed2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef691906125d9565b60075460405163556d6e9f60e01b815260016004820152600060248201819052604482018790529293506001600160a01b039091169063556d6e9f906064016020604051808303816000875af1158015610f54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f7891906125d9565b60065460405163394747c560e01b815260016004820181905260006024830152604482018990526064820186905260848201529192506001600160a01b03169063394747c59060a4016020604051808303816000875af1158015610fe0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061100491906125d9565b5060075460405163394747c560e01b815260016004820181905260006024830152604482018790526064820184905260848201526001600160a01b039091169063394747c59060a4016020604051808303816000875af115801561106c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061109091906125d9565b50600061109d84476125f2565b6040805180820182528281526000602082018190526008549251630b4c7e4d60e01b8152939450909290916001600160a01b031690630b4c7e4d9085906110ea908690869060040161263a565b60206040518083038185885af1158015611108573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061112d91906125d9565b336000908152600c602052604081208054929350839290919061115190849061258b565b92505081905550806009600082825461116a919061258b565b909155505060025460055460405163095ea7b360e01b81526001600160a01b039283169263095ea7b3926111a592911690859060040161259e565b6020604051808303816000875af11580156111c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111e891906125b7565b5060055460405163b6b55f2560e01b8152600481018390526001600160a01b039091169063b6b55f2590602401600060405180830381600087803b15801561122f57600080fd5b505af1158015611243573d6000803e3d6000fd5b5050604080518e8152602081018e90523393507fac526ade047cb51f2cb152d0bfa87c33e1208576a5def1e4005942df94cc122992500160405180910390a2505060018080559998505050505050505050565b600080546001600160a01b031633146112c15760405162461bcd60e51b81526004016103c490612605565b6001600160a01b0384163b6113185760405162461bcd60e51b815260206004820152601860248201527f496e76616c6964204c5020546f6b656e2061646472657373000000000000000060448201526064016103c4565b6001600160a01b0383163b61136f5760405162461bcd60e51b815260206004820152601960248201527f496e76616c69642043525620546f6b656e20616464726573730000000000000060448201526064016103c4565b6001600160a01b0382163b6113c65760405162461bcd60e51b815260206004820152601960248201527f496e76616c6964204c444f20546f6b656e20616464726573730000000000000060448201526064016103c4565b600280546001600160a01b038681166001600160a01b0319928316811790935560038054878316908416811790915560048054928716929093168217909255604080519384526020840192909252908201527f8f70a2529b5e7a1c44ae7b33c9f5527f47445e1e764fab029cdcfb0769d597209060600160405180910390a15060019392505050565b6000546001600160a01b031633146114795760405162461bcd60e51b81526004016103c490612605565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b60006002600154036114e75760405162461bcd60e51b81526004016103c490612521565b6002600155816115315760405162461bcd60e51b815260206004820152601560248201527443616e6e6f74207374616b65203020546f6b656e7360581b60448201526064016103c4565b6002546040516370a0823160e01b815233600482015283916001600160a01b0316906370a0823190602401602060405180830381865afa158015611579573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061159d91906125d9565b10156116005760405162461bcd60e51b815260206004820152602c60248201527f4c5020546f6b656e2062616c616e636520262072657175657374656420616d6f60448201526b0eadce840dad2e6dac2e8c6d60a31b60648201526084016103c4565b600254604051636eb1769f60e11b815233600482015230602482015283916001600160a01b03169063dd62ed3e90604401602060405180830381865afa15801561164e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061167291906125d9565b10156116c05760405162461bcd60e51b815260206004820181905260248201527f52657175657374656420416d6f756e74206973206e6f7420617070726f76656460448201526064016103c4565b6002546040516323b872dd60e01b8152336004820152306024820152604481018490526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015611717573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061173b91906125b7565b50336000908152600c60205260408120805484929061175b90849061258b565b925050819055508160096000828254611774919061258b565b9091555050336000908152600c60205260409081902054600254600554925163095ea7b360e01b815291926001600160a01b039182169263095ea7b3926117c1921690859060040161259e565b6020604051808303816000875af11580156117e0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061180491906125b7565b5060055460405163b6b55f2560e01b8152600481018390526001600160a01b039091169063b6b55f2590602401600060405180830381600087803b15801561184b57600080fd5b505af115801561185f573d6000803e3d6000fd5b50506040518581523392507f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d915060200160405180910390a250506001808055919050565b600080546001600160a01b031633146118cf5760405162461bcd60e51b81526004016103c490612605565b60006118d961229d565b6004805460075460405163095ea7b360e01b81529394506001600160a01b039182169363095ea7b393611912939092169186910161259e565b6020604051808303816000875af1158015611931573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061195591906125b7565b5060075460405163556d6e9f60e01b81526001600482015260006024820181905260448201849052916001600160a01b03169063556d6e9f906064016020604051808303816000875af11580156119b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119d491906125d9565b60075460405163394747c560e01b815260016004820181905260006024830152604482018690526064820184905260848201529192506001600160a01b03169063394747c59060a4016020604051808303816000875af1158015611a3c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a6091906125d9565b50604080518082018252478082526000602083018190526008549351630b4c7e4d60e01b8152919390916001600160a01b0390911690630b4c7e4d908590611aae908690869060040161263a565b60206040518083038185885af1158015611acc573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190611af191906125d9565b60025460055460405163095ea7b360e01b81529293506001600160a01b039182169263095ea7b392611b29921690859060040161259e565b6020604051808303816000875af1158015611b48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b6c91906125b7565b5060055460405163b6b55f2560e01b8152600481018390526001600160a01b039091169063b6b55f2590602401600060405180830381600087803b158015611bb357600080fd5b505af1158015611bc7573d6000803e3d6000fd5b5050505080600a6000828254611bdd919061258b565b909155506001965050505050505090565b600080546001600160a01b03163314611c195760405162461bcd60e51b81526004016103c490612605565b6002546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015611c62573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c8691906125d9565b1115611db6576002546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015611cd5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cf991906125d9565b6002549091506001600160a01b031663a9059cbb611d1f6000546001600160a01b031690565b836040518363ffffffff1660e01b8152600401611d3d92919061259e565b6020604051808303816000875af1158015611d5c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d8091906125b7565b506040518181527fe494cfe8f7dcbb3a114ab6de6e86ababbf58e7bc5c62681ca0a23d56d20603039060200160405180910390a1505b600480546040516370a0823160e01b815230928101929092526000916001600160a01b03909116906370a0823190602401602060405180830381865afa158015611e04573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e2891906125d9565b1115611f5d57600480546040516370a0823160e01b815230928101929092526000916001600160a01b03909116906370a0823190602401602060405180830381865afa158015611e7c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ea091906125d9565b6004549091506001600160a01b031663a9059cbb611ec66000546001600160a01b031690565b836040518363ffffffff1660e01b8152600401611ee492919061259e565b6020604051808303816000875af1158015611f03573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f2791906125b7565b506040518181527fcca896e5e5e6f02614df08f26e86cb895135aac0bc5f82c6166a48eed713025f9060200160405180910390a1505b6003546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015611fa6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fca91906125d9565b11156120fa576003546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015612019573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061203d91906125d9565b6003549091506001600160a01b031663a9059cbb6120636000546001600160a01b031690565b836040518363ffffffff1660e01b815260040161208192919061259e565b6020604051808303816000875af11580156120a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120c491906125b7565b506040518181527f8c07171b74c2af57034cfbcd39797660f51eea9c36018a2e673ed0564de8fb879060200160405180910390a1505b471561218157476121136000546001600160a01b031690565b6001600160a01b03166108fc829081150290604051600060405180830381858888f1935050505015801561214b573d6000803e3d6000fd5b506040518181527f7909752b76037727fecfc6c1abb7264306fd284ff7be21e2aa09bf2fdc00579d9060200160405180910390a1505b50600190565b6000546001600160a01b031633146121b15760405162461bcd60e51b81526004016103c490612605565b6001600160a01b0381166122165760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103c4565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3b151590565b336000908152600c602052604081205460095482906122969083612672565b9392505050565b600480546040516370a0823160e01b8152309281019290925260009182916001600160a01b0316906370a0823190602401602060405180830381865afa1580156122eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061230f91906125d9565b9050600560009054906101000a90046001600160a01b03166001600160a01b031663e6f1daf26040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561236157600080fd5b505af1158015612375573d6000803e3d6000fd5b5050600480546040516370a0823160e01b81523092810192909252600093506001600160a01b031691506370a0823190602401602060405180830381865afa1580156123c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123e991906125d9565b905060006123f783836125f2565b905080600b600082825461240b919061258b565b9091555090949350505050565b80356001600160a01b038116811461242f57600080fd5b919050565b6000806000806080858703121561244a57600080fd5b61245385612418565b935061246160208601612418565b925061246f60408601612418565b915061247d60608601612418565b905092959194509250565b6000806040838503121561249b57600080fd5b50508035926020909101359150565b6000806000606084860312156124bf57600080fd5b6124c884612418565b92506124d660208501612418565b91506124e460408501612418565b90509250925092565b6000602082840312156124ff57600080fd5b5035919050565b60006020828403121561251857600080fd5b61229682612418565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761258557612585612558565b92915050565b8082018082111561258557612585612558565b6001600160a01b03929092168252602082015260400190565b6000602082840312156125c957600080fd5b8151801515811461229657600080fd5b6000602082840312156125eb57600080fd5b5051919050565b8181038181111561258557612585612558565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60608101818460005b6002811015612662578151835260209283019290910190600101612643565b5050508260408301529392505050565b60008261268f57634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212201171d63cec3a86fcd44798d898ef8b747178d832d31820515e79964bcbdc00c664736f6c63430008110033";

export class CrvVault__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _steCRV: string,
    _crvToken: string,
    _ldoToken: string,
    _crvStGauge: string,
    _crvPool: string,
    _ldoPool: string,
    _stEthPool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CrvVault> {
    return super.deploy(
      _steCRV,
      _crvToken,
      _ldoToken,
      _crvStGauge,
      _crvPool,
      _ldoPool,
      _stEthPool,
      overrides || {}
    ) as Promise<CrvVault>;
  }
  getDeployTransaction(
    _steCRV: string,
    _crvToken: string,
    _ldoToken: string,
    _crvStGauge: string,
    _crvPool: string,
    _ldoPool: string,
    _stEthPool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _steCRV,
      _crvToken,
      _ldoToken,
      _crvStGauge,
      _crvPool,
      _ldoPool,
      _stEthPool,
      overrides || {}
    );
  }
  attach(address: string): CrvVault {
    return super.attach(address) as CrvVault;
  }
  connect(signer: Signer): CrvVault__factory {
    return super.connect(signer) as CrvVault__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrvVaultInterface {
    return new utils.Interface(_abi) as CrvVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrvVault {
    return new Contract(address, _abi, signerOrProvider) as CrvVault;
  }
}
