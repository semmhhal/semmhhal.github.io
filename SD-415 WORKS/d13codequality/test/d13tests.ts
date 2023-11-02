/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
import { assert } from "chai"
import { isVowel } from "../src/vowel.js"
import {  computeSalesCommission, compoundInterest } from "../src/sales.js"
import { DownPayment } from '../src/downpayment.js';
import { calcSum } from '../src/calcSum.js';
import { calcMul } from "../src/calcMul.js";
import { convertTemp } from "../src/Temp.js";
import { calcDis } from '../src/calcDis.js';

describe("isVowel", function () {

    it("a is vowel", function () {
        assert.equal(isVowel("a"), true);
    });

    it("e is vowel", function () {
        assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
        assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
        assert.equal(isVowel("o"), true);
    });    
    it("u is vowel", function () {
        assert.equal(isVowel("u"), true);
    });          

    it("z is not vowel", function () {
        assert.equal(isVowel("z"), false);
    });

    it("5 is not vowel", function () {
        assert.equal(isVowel("5"), false);
    });
});

describe("test of ComputSalesCommission", function(){
    it("tests salaried and 200 sales", function(){
       assert.strictEqual(computeSalesCommission(true, 200), 0);
   });
   it("tests not salaried and 200 sales", function(){
         assert.strictEqual(computeSalesCommission(false, 200), 0);
     });
     it("tests salaried and 300 sales", function(){
         assert.strictEqual(computeSalesCommission(true, 300), 3);
     });
     it("tests not salaried and 300 sales", function(){
         assert.strictEqual(computeSalesCommission(false, 300), 6);
     });
     it("tests salaried and 3500 sales", function(){
         assert.strictEqual(computeSalesCommission(true, 3500), 65);
     });
     it("tests not salaried and 3500 sales", function(){
         assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
 });

describe("test of compoundInterest", function(){
   it("tests $100 for 1 year at 10% monthly compound", function(){
     const exact = compoundInterest(100, 10, 1);
      assert.strictEqual(+exact.toFixed(2), 110.47 );
   });
it("tests $10000 for 5 years at 10% monthly compound", function(){
        const exact = compoundInterest(10000, 5, 10);
       assert.strictEqual(+exact.toFixed(2), 16470.09 );
  });
 });


describe('DownPayment', function(){
  it('should calculate down payment for CostofHouse >= 200000',() => {
    const result = DownPayment(350000, 0, 0.1, 0.15);
    assert.equal(5000 + 0.1 * (350000 - 200000),result);
  });

  it('should calculate down payment for 100000 < CostofHouse < 200000', () => {
    const result = DownPayment(180000, 0, 0.1, 0.15);
    assert.equal(2000 + 0.15 * (180000 - 100000),result);
  });

  it('should calculate down payment for 50000 < CostofHouse < 100000', () => {
    const result = DownPayment(95000, 0, 0.1, 0.15);
    assert.equal(1000 + 0.1 * (95000 - 50000),result);
  });

  it('should calculate down payment for CostofHouse < 50000', () => {
    const result = DownPayment(20000, 0, 0.1, 0.15);
    assert.equal((0.05 * 20000),result);
  });
});

describe('calcSum', () => {
  it('calculates the sum of digits for a given number', () => {
    const result = calcSum(1245, 0, 0);
    assert.equal(result, 12);
  });
});

describe('calcMul', () => {
    it('calculates the multiplication of digits for a given number', () => {
      const result = calcMul(123, 0, 0);
      assert.equal(result, 6);
    });
  });



describe('convertTemp function', () => {
  it('should convert Fahrenheit temperature to Celsius', () => {
    const result = convertTemp(32);
    assert.approximately(0.001,0, result); 
  });
});

describe('calcDis function', () => {
  it('should calculate the distance between two coordinates', () => {
    const result = calcDis(23, 29, 43, 90);
    assert.approximately(63.126, 0.001,result); // Approximate value based on your example
  });
});