const { ethers } = require ("ethers");
require ("dotenv").config();

const api_key = process.env.INFURA_API_KEY;

const provider = new ethers.providers.InfuraProvider("mainnet", api_key);

provider.getBlockNumber().then((blockNumber) => {
    console.log(blockNumber);
});

async function getBalance(address) {
    const balance = await provider.getBalance(address);
    return ethers.utils.formatEther(balance);
}

const b = getBalance("smohit.eth");
b.then((balance) => {
    console.log(balance);
});
