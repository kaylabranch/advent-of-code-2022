import { TextListToArrayOfStrings } from "../../data-loaders.js";
import { input_startState, input_steps } from "./input.js";

// SOLUTION:
export function myFunc(startState, steps) {
  // format input
  const startStateFormatted = TextListToArrayOfStrings(startState);
  const stepsFormatted = TextListToArrayOfStrings(steps);

  // storage for ordered stacking
  let stacks = [];

  // format starting state into arrays based on stacks

  startStateFormatted.slice(0, -1).forEach((row) => {
    // replace empty spaces in stack with asterisk, remove brackets, array the chars
    const rowChars = Array.from(
      row.replace(/\s{4}/g, "*").replace(/\[|\]|\s/g, "")
    );
    // add to stacks in order
    rowChars.forEach((item, index) => {
      if (!stacks[index]) {
        stacks.push([]);
      }
      if (item !== "*") {
        stacks[index].push(item);
      }
    });
  });

  // now format and run through steps
  stepsFormatted.forEach((step) => {
    const [, numToMove, fromStack, toStack] = step.split(/[^\d]+/);

    // move stack and remember to flip, top of stack is lowest in index
    const itemsToMove = stacks[Number(fromStack) - 1].splice(
      0,
      Number(numToMove)
    ); // removed 'reverse()' for exercise2, this was the only change required from exercise1

    // add to stack
    stacks[Number(toStack) - 1].unshift(...itemsToMove);
  });

  // now return the first item of every array in a string
  return stacks.map((stack) => stack[0]).join("");
}

console.log(myFunc(input_startState, input_steps));
