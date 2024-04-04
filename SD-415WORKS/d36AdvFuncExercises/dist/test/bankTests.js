/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
//import { assert } from "chai";
import { makeBank } from "../src//bank.js";
describe("bank tests", function () {
    const bank = makeBank();
    it("bankBalance", function () {
        assert.strictEqual(bank.bankBalance(), 85);
    });
    it("transactionsDB is private", function () {
        const bankProps = Object.keys(bank);
        assert.strictEqual(bankProps.find(prop => prop === "transactionsDB"), undefined);
    });
});
