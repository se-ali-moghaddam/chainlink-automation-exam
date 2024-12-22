require("@nomicfoundation/hardhat-toolbox");

const { vars } = require('hardhat/config');

const ACC_PRIVATE_KEY = vars.get('ACC_PRIVATE_KEY');
const BSCSCAN_API_KEY = vars.get('BSCSCAN_API_KEY');
const INFURA_API_KEY = vars.get('INFURA_API_KEY');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  allowUnlimitedContractSize: true,
  networks: {
    bsc_testnet: {
      url: `https://bsc-testnet.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [ACC_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      bsc: BSCSCAN_API_KEY,
      bscTestnet: BSCSCAN_API_KEY
    }
  }
};
