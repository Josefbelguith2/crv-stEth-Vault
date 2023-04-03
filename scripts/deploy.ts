import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";
import { CrvVault__factory } from "../types";

async function deploy() {
    const steCRV = '0x06325440D014e39736583c165C2963BA99fAf14E';
    const crvToken = '0xD533a949740bb3306d119CC777fa900bA034cd52';
    const ldoToken = '0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32';

    const crvStGauge = '0x182B723a58739a9c974cFDB385ceaDb237453c28';
    const crvPool = '0x8301AE4fc9c624d1D396cbDAa1ed877821D7C511';
    const ldoPool = '0x9409280DC1e6D33AB7A8C6EC03e5763FB61772B5';
    const stEthPool = '0xDC24316b9AE028F1497c275EB9192a3Ea0f67022';

  const vault = (await ethers.getContractFactory("crvVault")) as CrvVault__factory;
    const CrvVault = await vault.deploy(steCRV, crvToken, ldoToken, crvStGauge, crvPool, ldoPool, stEthPool);
    await CrvVault.deployed();
    console.log("CrvVault deployed at", CrvVault.address);

  // Deploy Vault Contract
  /*const vault = await deploy("crvVault", {
    from: deployer,
    log: true,
    args: [
      steCRV, 
      crvToken, 
      ldoToken, 
      crvStGauge, 
      crvPool, 
      ldoPool, 
      stEthPool
    ]
  });*/

};

if (require.main === module) {
  deploy();
}

export { deploy };
