// link = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB";


const { ethers } = require ("ethers");
require ("dotenv").config();

const api_key = process.env.INFURA_API_KEY;
const private_key = process.env.PRIVATE_KEY_1;

// address
const dev1 = "0xe89b84140a7b8e071C951371136E6858f15E5E9D"
const dev2 = "0xa6A1C75C42AAE8f9e13045d4Ff59973f8EF4e2C8"

const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${api_key}`);
const wallet = new ethers.Wallet(private_key, provider);

const ERC20_ABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address, uint) returns (bool)",
]


const address = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB"; // LINK
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
    const balance = await contract.balanceOf(wallet.address);
    console.log("balance: ", ethers.utils.formatEther(balance));
    const contractWithWallet = contract.connect(wallet);
    const tx = await contractWithWallet.transfer(dev2, ethers.utils.parseEther("10"));
    await tx.wait();
    console.log("txHash: ", tx);
    const balance_after = await contract.balanceOf(wallet.address);
    console.log("balance after: ", ethers.utils.formatEther(balance_after));
}

main();