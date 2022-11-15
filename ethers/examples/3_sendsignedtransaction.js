const { ethers } = require ("ethers");
require ("dotenv").config();

const api_key = process.env.INFURA_API_KEY;
const private_key = process.env.PRIVATE_KEY_2;

// address
const dev1 = "0xe89b84140a7b8e071C951371136E6858f15E5E9D"
const dev2 = "0xa6A1C75C42AAE8f9e13045d4Ff59973f8EF4e2C8"


// goreli testnet
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${api_key}`);

// create wallet instance
const wallet = new ethers.Wallet(private_key, provider);


const main = async () => {
    // recipient address
    const toAddress = dev1;

    // balance before
    const sender_balance = await getBalance(wallet.address);
    const recipient_balance = await getBalance(toAddress);

    // create transaction
    const tx = await wallet.sendTransaction({
        to: toAddress,
        value: ethers.utils.parseEther("0.02")
    });

    // wait for transaction to be mined
    await tx.wait();
    console.log("txHash: ", tx);

    // balance after
    const sender_balance_after = await getBalance(wallet.address);
    const recipient_balance_after = await getBalance(toAddress);
}

main();

async function getBalance(address) {
    const balance = await provider.getBalance(address);
    console.log("balance: ", ethers.utils.formatEther(balance));
}