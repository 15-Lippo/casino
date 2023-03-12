require("@nomiclabs/hardhat-waffle");

const fs = require('fs')
const privateKey = fs.readFileSync(".secret").toString().trim();

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
  //defaultNetwork: "ganache",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545"
    },
    polygon: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/S-7W-EuKWAo_ksZu7lx0Rn0ySh0pM3kC",
      chainId: 137,
      gasPrice: 20000000000,
      accounts: [privateKey]
    },
    bsc: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [privateKey]
    },
    hardhat: {
    },
  },
};
