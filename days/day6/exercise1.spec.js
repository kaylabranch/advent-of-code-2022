import { myFunc } from "./exercise1.js";
import { input } from "./input.js";
import {
  test_input,
  test_input2,
  test_input3,
  test_input4,
  test_input5,
} from "./test_input.js";

describe("day 6, exercise 1", function () {
  it("test input", function () {
    // arrange
    // act
    const testResult = myFunc(test_input);

    // assert
    expect(testResult).toBe(7);
  });

  it("test input2", function () {
    // arrange
    // act
    const testResult = myFunc(test_input2);

    // assert
    expect(testResult).toBe(5);
  });

  it("test input3", function () {
    // arrange
    // act
    const testResult = myFunc(test_input3);

    // assert
    expect(testResult).toBe(6);
  });

  it("test input4", function () {
    // arrange
    // act
    const testResult = myFunc(test_input4);

    // assert
    expect(testResult).toBe(10);
  });

  it("test input5", function () {
    // arrange
    // act
    const testResult = myFunc(test_input5);

    // assert
    expect(testResult).toBe(11);
  });

  // once solved, test real input:
  it("real input", function () {
    // arrange
    // act
    const testResult = myFunc(input);

    // assert
    expect(testResult).toBe(1816);
  });
});
