import { input } from "./input.js";
import { TextListToArrayOfStrings } from "../../data-loaders.js";

// SOLUTION:
export function myFunc(input) {
  // format input
  const data = TextListToArrayOfStrings(input);

  // sum of priority numbers
  let priorityTotal = 0;

  // batch array of strings into an array of arrays, where each sub array contains 3 items/strings
  let groups = [];
  const groupSize = 3;
  for (let i = 0; i < data.length; i += groupSize) {
    groups.push(data.slice(i, i + groupSize));
  }

  // for each group of 3, determine common item and add priority # to total
  groups.forEach((group) => {
    // find intersections of all arrays in group
    const intersection = group.reduce((a, b) =>
      Array.from(a).filter((c) => b.includes(c))
    );

    // remove dupes & make string
    const item = [...new Set(intersection)].toString();

    //get / add priority number
    priorityTotal += getPriorityNumber(item);
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
