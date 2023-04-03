import 'dotenv/config';
import { HardhatUserConfig } from 'hardhat/types';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import '@typechain/hardhat';
import 'solidity-coverage';
import "@nomiclabs/hardhat-etherscan";

const config: HardhatUserConfig = {
    solidity: {
        compilers: [ 
            {
                version: "0.8.17",
                settings: {optimizer: {
                    enabled: true,
                  },},
            },
        ],
    },
    networks: {
        goerli_testnet: {
            url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
            accounts: process.env.DEPLOYER_PRIVATE_KEY
                ? [process.env.DEPLOYER_PRIVATE_KEY as string]
                : undefined,
        },
        eth_mainnet: {
            url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
            accounts: process.env.DEPLOYER_PRIVATE_KEY
                ? [process.env.DEPLOYER_PRIVATE_KEY as string]
                : undefined,
        },
    },
    paths: {
        sources: 'contracts',
    },
    typechain: {
        outDir: 'types',
        target: 'ethers-v5',
    },
    etherscan: {
        apiKey: process.env.EXPLORER_API_KEY || ""
    }
};

export default config;
