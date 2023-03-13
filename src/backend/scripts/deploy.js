async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
  
  const Lisprocoin = await ethers.getContractFactory("Lisprocoin");
  const lisprocoin = await Lisprocoin.deploy()

  // Save copies of each contracts abi and address to the frontend.
  saveFrontendFiles(lisprocoin, "Lisprocoin");
}

function saveFrontendFiles(contract, name) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../../backend/contractsData";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + `/${name}-address.json`,
    JSON.stringify({ address: contract.address }, undefined, 2)
  );

  const contractArtifact = artifacts.readArtifactSync(name);

  fs.writeFileSync(
    contractsDir + `/${name}.json`,
    JSON.stringify(contractArtifact, null, 2)
  );
}
npx hardhat run src/backend/scripts/deploy.js --network polygon

Deploying contracts with the account: https://polygon-mainnet.g.alchemy.com/v2/S-7W-EuKWAo_ksZu7lx0Rn0ySh0pM3kC
Account balance: 2000000000000
Token address: 0x70E546c7a2cA4495cFcbE263a3b6D5ce68B2204C
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
