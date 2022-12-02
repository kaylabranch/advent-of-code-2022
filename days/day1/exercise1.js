import { input } from "./input.js";
import { TextListToArrayOfStrings } from "../../data-loaders.js";

// PROBLEM
// input is number of calories each elf is carrying, each line break is a new group
// which elf has the most calories, return how many

// SOLUTION:
export function myFunc(input) {
  // format input
  const data = TextListToArrayOfStrings(input);

  let tempTotal = 0;
  let biggestGroupTotal = 0;

  // for each item in array, add to temp total unless we're in a new group;
  // if in a new group, check if temp total is bigger than current highest total;
  // if so, replace
  // then reset temp total
  data.forEach((item) => {
    const strToInt = Number(item);

    if (item !== "") {
      tempTotal += strToInt;
    } else {
      if (tempTotal > biggestGroupTotal) {
        biggestGroupTotal = tempTotal;
      }
      tempTotal = 0;
    }
  });

  return biggestGroupTotal;
}

console.log(myFunc(input));
