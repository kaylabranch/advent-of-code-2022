import { input } from "./input.js";
import { TextListToArrayOfStrings } from "../../data-loaders.js";

// PROBLEM

// SOLUTION:
export function myFunc(input) {
  // format input
  const data = TextListToArrayOfStrings(input);

  // return length of string before and including marker
  let lengthToMarker = 0;

  const charArray = Array.from(...data);
  charArray.every((value, index) => {
    // starting at 4th char,
    if (index > 2) {
      // look back at previous 4, add all to temp set
      const previousFour = new Set();
      for (let i = 0; i < 4; i++) {
        previousFour.add(charArray[index - i]);
      }

      // if set length is 4 we have our marker - return index and false
      if (previousFour.size === 4) {
        lengthToMarker = index + 1;
        return false;
      }
    }

    // else return true and continue
    return true;
  });

  return lengthToMarker;
}

console.log(myFunc(input));
