const { ethers } = require ("ethers");
require ("dotenv").config();

const api_key = process.env.INFURA_API_KEY;

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${api_key}`);

const txn = "0x138c99e02b06d803d8127ff3b95f172665aeb1d335bc65d207dcd6484db50f5d"; // random txn hash
const address = "0x6b175474e89094c44da98b954eedeac495271d0f" // DAI

const ERC20ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint)",
    "function balanceOf(address) view returns (uint)",

    // Events
    "event Transfer(address indexed from, address indexed to, uint value)"
]

const contract = new ethers.Contract(address, ERC20ABI, provider);
const main = async () => {
    const block = await provider.getBlockNumber()
    const transferEvents = await contract.queryFilter("Transfer", block - 10, block);
    console.log(transferEvents);
}

main();
