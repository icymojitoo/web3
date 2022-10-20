const { expect } = require("chai");

// write test for a contract which only returns a string
describe("Hello", function () {
    it("Should return the new greeting once it's changed", async function () {
        const Hello = await ethers.getContractFactory("Hello");
        const hello = await Hello.deploy();
        await hello.deployed();
        expect(await hello.greet()).to.equal("Hello World!");
    });
});
