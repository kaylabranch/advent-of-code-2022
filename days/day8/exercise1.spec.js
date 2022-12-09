import { myFunc } from "./exercise1.js";
import { input } from "./input.js";
import { test_input } from "./test_input.js";

describe("day 8, exercise 1", function () {
  it("test input", function () {
    // arrange
    // act
    const testResult = myFunc(test_input);

    // assert
    expect(testResult).toBe(21);
  });

  // once solved, test real input:
  it("real input", function () {
    // arrange
    // act
    const testResult = myFunc(input);

    // assert
    expect(testResult).toBe(1684);
  });
});
