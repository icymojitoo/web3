const { ethers } = require ("ethers");
require ("dotenv").config();

const api_key = process.env.INFURA_API_KEY;
console.log(api_key)

// provider
const provider = new ethers.providers.InfuraProvider("mainnet", api_key);

// dai contract address
const address = "0x6b175474e89094c44da98b954eedeac495271d0f";

// erc20 contract abi
const ERC20ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint)",
    "function balanceOf(address) view returns (uint)",
]

// create contract instance
const contract = new ethers.Contract(address, ERC20ABI, provider);

const main = async () => {
    name = await contract.name();
    symbol = await contract.symbol();
    totalSupply = await contract.totalSupply();
    balance = await contract.balanceOf("0x6b175474e89094c44da98b954eedeac495271d0f");

    console.log("reading contract data from mainnet from: ", address);
    console.log("name: ", name);
    console.log("symbol: ", symbol);
    console.log("totalSupply: ", ethers.utils.formatEther(totalSupply));
    console.log("balance: ", ethers.utils.formatEther(balance));
}

main()