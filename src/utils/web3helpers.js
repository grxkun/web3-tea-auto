// utils/web3helpers.js

const Web3 = require('web3'); // Import the web3 library

// Initialize a Web3 instance with the desired provider URL
const initializeWeb3 = (providerUrl) => {
  return new Web3(providerUrl);
};

// Get the latest block number from the Ethereum blockchain
const getLatestBlockNumber = async (web3) => {
  try {
    const latestBlockNumber = await web3.eth.getBlockNumber();
    return latestBlockNumber;
  } catch (error) {
    console.error('Error fetching block number:', error);
    return null;
  }
};

// Example usage:
const main = async () => {
  const providerUrl = 'https://cloudflare-eth.com'; // Use your preferred Ethereum node URL
  const web3 = initializeWeb3(providerUrl);

  const latestBlockNumber = await getLatestBlockNumber(web3);
  if (latestBlockNumber !== null) {
    console.log('Latest block number:', latestBlockNumber);
  }
};

main(); // Execute the example

module.exports = {
  initializeWeb3,
  getLatestBlockNumber,
};
