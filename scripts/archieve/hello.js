const hre = require("hardhat");

async function main() {
    const Hello = await hre.ethers.getContractFactory("Hello");
    const hello = await Hello.deploy();
    await hello.deployed();
    console.log(`Contract deployed to: ${hello.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

