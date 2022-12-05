import { myFunc } from "./exercise1.js";
import { input_startState, input_steps } from "./input.js";
import { test_input_startState, test_input_steps } from "./test_input.js";

describe("day 5, exercise 1", function () {
  it("test input", function () {
    // arrange
    // act
    const testResult = myFunc(test_input_startState, test_input_steps);

    // assert
    expect(testResult).toBe("CMZ");
  });

  // once solved, test real input:
  it("real input", function () {
    // arrange
    // act
    const testResult = myFunc(input_startState, input_steps);

    // assert
    expect(testResult).toBe("TGWSMRBPN");
  });
});
