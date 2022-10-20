const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");

describe("SimpleStorage", function() {
    async function deployFixture() {
        const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
        const simpleStorage = await SimpleStorage.deploy();
        await simpleStorage.deployed();
        return { simpleStorage };
    }

    describe("get", function() {
        it("Should return 0", async function() {
            const { simpleStorage } = await loadFixture(deployFixture);
            expect(await simpleStorage.get()).to.equal(0);
        });
    });

    describe("set", function() {
        it("Should set the value", async function() {
            const { simpleStorage } = await loadFixture(deployFixture);
            await simpleStorage.set(42);
            expect(await simpleStorage.get()).to.equal(42);
        });
    });
})
