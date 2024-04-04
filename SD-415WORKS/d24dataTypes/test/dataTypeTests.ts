/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
import { assert } from "chai";

import { ucFirst,checkSpam,truncate} from "../src/app.js";

 
describe("ucFirst", function() {
  it('Uppercases the first symbol', function() {
    assert.strictEqual(ucFirst("john"), "John");
  });

  it("Doesn't die on an empty string", function() {
    assert.strictEqual(ucFirst(""), "");
  });
});

describe("checkSpam", function() {
  it('finds spam in "buy ViAgRA now"', function() {
    assert.strictEqual(checkSpam('buy ViAgRA now'), true);
  });

  it('finds spam in "free xxxxx"', function() {
    assert.strictEqual(checkSpam('free xxxxx'), true);
  });

  it('no spam in "innocent rabbit"', function() {
    assert.strictEqual(checkSpam('innocent rabbit'), false);
  });
});


describe("truncate", function() {
  it("truncate the long string to the given length (including the ellipsis)", function() {
    assert.equal(
      truncate("What I'd like to tell on this topic is:", 20),
      "What I'd like to te…"
    );
  });

  it("doesn't change short strings", function() {
    assert.equal(
      truncate("Hi everyone!", 20),
      "Hi everyone!"
    );
  });
});

// describe("extractCurrencyValue", function() {

//   it("for the string $120 returns the number 120", function() {
//     assert.strictEqual(extractCurrencyValue('$120'), 120);
//   });


// });
