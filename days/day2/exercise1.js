import { input } from "./input.js";
import { TextListToArrayOfChars } from "../../data-loaders.js";

// SOLUTION:
const outcomeGrid = {
  X: {
    // i choose rock
    A: 3, // they choose rock, draw
    B: 0, // they choose paper, i lose
    C: 6, // they choose scissors, i win
  },
  Y: {
    // i choose paper
    A: 6, // they choose rock, i win
    B: 3, // they choose paper, draw
    C: 0, // they choose rock, i lose
  },
  Z: {
    // i choose scissors
    A: 0, // they choose rock, i lose
    B: 6, // they choose paper, i win
    C: 3, // they choose scissors, draw
  },
};

export function myFunc(input) {
  // format input
  const data = TextListToArrayOfChars(input);

  let scoreList = [];

  // for each match, opponent is first index of match array and self is 3rd (based on char input format)
  data.forEach((match) => {
    const [opponent, , self] = [...match];

    let typeScore = self === "X" ? 1 : self === "Y" ? 2 : 3;
    let outcomeScore = outcomeGrid[self][opponent];

    scoreList.push(typeScore + outcomeScore);
  });

  // sum list of scores
  return scoreList.reduce((sum, next) => sum + next, 0);
}

console.log(myFunc(input));
