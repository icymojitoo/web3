const { ethers } = require ("ethers");
require ("dotenv").config();

const api_key = process.env.INFURA_API_KEY;
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${api_key}`);

const main = async () => {
    const blockNumber = await provider.getBlockNumber();
    console.log("Current block number: ", blockNumber);
    const blockInfo = await provider.getBlock(blockNumber);
    // console.log("Current block: ", blockInfo);
    const { transactions } = await provider.getBlockWithTransactions(blockNumber);
    console.log("Transactions in current block: ", transactions[0]);
}

main();