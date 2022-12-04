import { input } from "./input.js";
import { TextListToArrayOfStrings } from "../../data-loaders.js";

// PROBLEM
// return how many assignment pairs does one range fully contain the other

// SOLUTION:
export function myFunc(input) {
  // format input
  const data = TextListToArrayOfStrings(input);

  // counter to keep track of # of pairs with fully contained sections
  let counter = 0;

  data.forEach((pair) => {
    // split string into section groups
    const [groupOne, groupTwo] = pair.split(",");

    // split section groups into sections, convert to int from str
    const sectionsOne = groupOne.split("-").map((x) => Number(x));
    const sectionsTwo = groupTwo.split("-").map((x) => Number(x));

    // compare sections to see if one fully contains the other
    if (
      (sectionsOne[0] >= sectionsTwo[0] && sectionsOne[1] <= sectionsTwo[1]) ||
      (sectionsTwo[0] >= sectionsOne[0] && sectionsTwo[1] <= sectionsOne[1])
    ) {
      counter++;
    }
  });

  return counter;
}

console.log(myFunc(input));
