const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers")
const { expect } = require("chai");

describe("Counter", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deployCounterFixture() {
        const Counter = await ethers.getContractFactory("Counter");
        const counter = await Counter.deploy();
        await counter.deployed();
        return { counter };
    }

    describe("Count", function() {
        it("Should return 0", async function () {
            const { counter } = await loadFixture(deployCounterFixture);
            expect(await counter.count()).to.equal(0);
        });
    })

    describe("Increment", function () {
        it("Should increment the counter", async function () {
            const { counter } = await loadFixture(deployCounterFixture);
            await counter.inc()
            expect(await counter.count()).to.equal(1);
        });
    });

    describe("Decrement", function () {
        it("Should decrement the counter", async function () {
            const { counter } = await loadFixture(deployCounterFixture);
            await counter.inc();
            await counter.inc();
            await counter.dec();
            expect(await counter.count()).to.equal(1);
        })
    });
});