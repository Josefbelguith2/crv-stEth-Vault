# crv-stEth-Vault-contracts

<img alt="Solidity" src="https://img.shields.io/badge/Solidity-e6e6e6?style=for-the-badge&logo=solidity&logoColor=black"/> <img alt="Javascript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>

This repository contains the Solidity Smart Contracts for crvVault.

## Prerequisites

-   git
-   npm
-   hardhat

## Getting started

-   Clone the repository

```sh
git clone https://github.com/Josefbelguith2/crv-stEth-Vault.git
```

-   Navigate to `crv-stEth-Vault` directory

```sh
cd crv-stEth-Vault
```

-   Install dependencies

```sh
npm install
```

### Configure project

-   Configure the .env

```sh
cp .example.env .env
```

## Run tests

-   Run Tests

```sh
npm run test
```

### Deploy to Blockchain Network

```sh
npx hardhat run --network <your-network> scripts/<deployment-file>
```

## Verify smart contracts

```sh
npx hardhat verify --network <network-name-in-hardhat-config> DEPLOYED_CONTRACT_ADDRESS "Constructor arguments"
```