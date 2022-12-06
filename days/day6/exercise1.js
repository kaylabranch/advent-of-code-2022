import { input } from "./input.js";
import { TextListToArrayOfStrings } from "../../data-loaders.js";

// SOLUTION:
export function myFunc(input) {
  const numPacketChars = 4;

  // format input
  const data = TextListToArrayOfStrings(input);

  // return length of string before and including marker
  let lengthToMarker = 0;

  const charArray = Array.from(...data);
  charArray.every((value, index) => {
    // starting at {numPacketChars} char (num - 2 because it's zero indexed and greater than)
    if (index > numPacketChars - 2) {
      // look back at previous {numPacketChars} of items, add all to temp set
      const group = new Set();
      for (let i = 0; i < numPacketChars; i++) {
        group.add(charArray[index - i]);
      }

      // if set length is {numPacketChars} we have our marker - return index and false
      if (group.size === numPacketChars) {
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
