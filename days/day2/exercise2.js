import { input } from "./input.js";
import { TextListToArrayOfChars } from "../../data-loaders.js";

// SOLUTION:
const typeGrid = {
  X: {
    // i need to lose
    A: 3, // they choose rock, i choose scissors
    B: 1, // they choose paper, i choose rock
    C: 2, // they choose scissors, i choose paper
  },
  Y: {
    // i need to draw
    A: 1, // they choose rock, i choose rock
    B: 2, // they choose paper, i choose paper
    C: 3, // they choose scissors, i choose scissors
  },
  Z: {
    // i need to win
    A: 2, // they choose rock, i choose paper
    B: 3, // they choose paper, i choose scissors
    C: 1, // they choose scissors, i choose rock
  },
};
export function myFunc(input) {
  // format input
  const data = TextListToArrayOfChars(input);

  let scoreList = [];

  // for each match, opponent is first index of match array and outcome is 3rd (based on char input format)
  data.forEach((match) => {
    const [opponent, , outcome] = [...match];

    let outcomeScore = outcome === "X" ? 0 : outcome === "Y" ? 3 : 6;
    let typeScore = typeGrid[outcome][opponent];

    scoreList.push(typeScore + outcomeScore);
  });

  // sum list of scores
  return scoreList.reduce((sum, next) => sum + next, 0);
}

console.log(myFunc(input));
