/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICurvePool, ICurvePoolInterface } from "../ICurvePool";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "amounts",
        type: "uint256[2]",
      },
      {
        internalType: "uint256",
        name: "min_mint_amount",
        type: "uint256",
      },
    ],
    name: "add_liquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "j",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "min_dy",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "use_eth",
        type: "bool",
      },
    ],
    name: "exchange",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "j",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
    ],
    name: "get_dy",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_token_amount",
        type: "uint256",
      },
      {
        internalType: "int128",
        name: "i",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "min_amount",
        type: "uint256",
      },
    ],
    name: "remove_liquidity_one_coin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ICurvePool__factory {
  static readonly abi = _abi;
  static createInterface(): ICurvePoolInterface {
    return new utils.Interface(_abi) as ICurvePoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICurvePool {
    return new Contract(address, _abi, signerOrProvider) as ICurvePool;
  }
}