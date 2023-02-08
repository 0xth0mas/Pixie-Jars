require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts/PixieJarsStories",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  gasReporter: {
    enabled: true,
    currency: 'USD',
    gasPrice: 21,
    url: "http://localhost:8545",
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      mining: {
        auto: true,
        interval: 0,
        mempool: {
          order: "fifo"
        }
      }
    },
    localhost: {
      mining: {
        auto: false,
        interval: 0,
        mempool: {
          order: "fifo"
        }
      }
    },
  },
  mocha: {
    timeout: 100000000
  },
};
