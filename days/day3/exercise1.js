import { input } from "./input.js";
import { TextListToArrayOfStrings } from "../../data-loaders.js";

// SOLUTION:
export function myFunc(input) {
  // format input
  const data = TextListToArrayOfStrings(input);

  // sum of priority numbers
  let priorityTotal = 0;

  data.forEach((bag) => {
    // create set of unique chars
    let firstHalf = new Set();

    // for each char, if in first half add to set - if in second half, check if in set
    Array.from(bag).every((item, index) => {
      if (index < bag.length / 2) {
        firstHalf.add(item);
      } else if (firstHalf.has(item)) {
        priorityTotal += getPriorityNumber(item);
        return false;
      }
      return true;
    });
  });

  return priorityTotal;
}

function getPriorityNumber(item) {
  const alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return alpha.indexOf(item) + 1;
}

console.log(myFunc(input));
