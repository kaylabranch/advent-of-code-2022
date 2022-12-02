import { input } from "./input.js";
import {
  TextListToArrayOfArrays,
  TextListToArrayOfChars,
  TextListToArrayOfStrings,
} from "../../data-loaders.js";

// PROBLEM

// SOLUTION:
export function myFunc(input) {
  // format input
  const data = TextListToArrayOfStrings(input);

  return data;
}

console.log(myFunc(input));
