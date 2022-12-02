import { myFunc } from "./exercise1.js";
import { input } from "./input.js";
import { test_input } from "./test_input.js";

describe("day #, exercise 1", function () {
  it("test input", function () {
    // arrange
    const testResult = myFunc(test_input);

    // act

    // assert
    expect(testResult).toBe();
  });

  // once solved, test real input:
  it("real input", function () {
    // arrange
    const testResult = myFunc(input);

    // act

    // assert
    expect(testResult).toBe();
  });
});
