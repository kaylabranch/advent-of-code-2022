import { input } from "./input.js";
import { TextListToArrayOfStrings } from "../../data-loaders.js";

// PROBLEM
// return the highest possible scenic score for any tree

// SOLUTION:
export function myFunc(input) {
  // format input
  let data = TextListToArrayOfStrings(input);

  let scenicScores = [];

  // for every row, check visibility in all directions
  data.forEach((row, rowIndex) => {
    if (rowIndex > 0 && rowIndex < data.length - 1) {
      Array.from(row).forEach((tree, treeIndex) => {
        if (treeIndex > 0 && treeIndex < data.length - 1) {
          let directions = {
            north: [],
            south: [],
            east: [],
            west: [],
          };

          // check if tree is visible in any direction
          data.every((rowTwo, rowTwoIndex) => {
            if (rowTwoIndex < rowIndex) {
              directions.north.push(rowTwo[treeIndex]);
            } else if (rowTwoIndex > rowIndex) {
              directions.south.push(rowTwo[treeIndex]);
            } else {
              // east and west
              Array.from(rowTwo).forEach((col, colIndex) => {
                if (colIndex > treeIndex) {
                  // west
                  directions.west.push(col);
                } else if (colIndex < treeIndex) {
                  // east
                  directions.east.push(col);
                }
              });
            }

            return true;
          });

          // reverse north and east b/c we're looking backwards those directions
          directions.north.reverse();
          directions.east.reverse();

          // now for every tree count out in each direction, finding the closest tree of same or more height
          let closest = [];
          for (const key in directions) {
            directions[key].every((direction, index) => {
              // if last index or if tree is blocking, push visibility index
              if (index === directions[key].length - 1 || direction >= tree) {
                closest.push(index + 1);
                return false;
              }
              return true;
            });
          }

          // then multiply and add to scenic score array
          const [n, s, e, w] = [...closest];
          scenicScores.push(n * s * e * w);
        }
      });
    }
  });

  return scenicScores.sort((a, b) => b - a)[0];
}

console.log(myFunc(input));
