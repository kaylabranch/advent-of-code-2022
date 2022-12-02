import { input } from "./input.js";
import { TextListToArrayOfStrings } from "../../data-loaders.js";

// PROBLEM
// which 3 elves have the most calories, return total of top 3

// SOLUTION:
export function myFunc(input) {
  // format input
  const data = TextListToArrayOfStrings(input);

  let tempTotal = 0;
  let groupTotals = [];
  const numToGet = 3;

  // for each item in array, if in a group total the group - else reset temp total
  data.forEach((item, index) => {
    const strToInt = Number(item);
    tempTotal += strToInt; // zero when empty string

    // if item is string or last
    if (item === "" || index + 1 === data.length) {
      groupTotals.push(tempTotal);
      tempTotal = 0;
    }
  });

  // now sort, slice, and sum
  return groupTotals
    .sort((a, b) => b - a)
    .slice(0, numToGet)
    .reduce((sum, next) => sum + next, 0);
}

console.log(myFunc(input));
