import { input } from "./input.js";
import { TextListToArrayOfStrings } from "../../data-loaders.js";

// PROBLEM
// count the number of trees that are visible from outside the grid

// SOLUTION:
export function myFunc(input) {
  // format input
  let data = TextListToArrayOfStrings(input);

  const outerTreesVisible = data[0].length * 2 + data.length * 2 - 4; // - 4 for 4 corners of grid that get counted twice
  let interiorTreesVisible = 0;

  // for every row, check visibility in all directions
  data.forEach((row, rowIndex) => {
    if (rowIndex > 0 && rowIndex < data.length - 1) {
      Array.from(row).forEach((tree, treeIndex) => {
        if (treeIndex > 0 && treeIndex < data.length - 1) {
          let treeVisible = {
            north: true,
            south: true,
            east: true,
            west: true,
          };

          // check if tree is visible in any direction
          data.every((rowTwo, rowTwoIndex) => {
            if (rowTwoIndex < rowIndex) {
              if (rowTwo[treeIndex] >= tree) {
                treeVisible.north = false;
              }
            } else if (rowTwoIndex > rowIndex) {
              if (rowTwo[treeIndex] >= tree) {
                treeVisible.south = false;
              }
            } else {
              // east and west
              Array.from(rowTwo).forEach((col, colIndex) => {
                if (colIndex > treeIndex) {
                  // west
                  if (col >= tree) {
                    treeVisible.west = false;
                  }
                } else if (colIndex < treeIndex) {
                  // east
                  if (col >= tree) {
                    treeVisible.east = false;
                  }
                }
              });
            }

            return true;
          });

          if (
            treeVisible.north ||
            treeVisible.south ||
            treeVisible.east ||
            treeVisible.west
          ) {
            interiorTreesVisible++;
          }
        }
      });
    }
  });

  return outerTreesVisible + interiorTreesVisible;
}

console.log(myFunc(input));
