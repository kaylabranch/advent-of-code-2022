import { input } from "./input.js";
import { TextListToArrayOfStrings } from "../../data-loaders.js";

// PROBLEM
// find all of the directories with a total size of at most 100000, then calculate the sum of their total sizes

// SOLUTION:
export function myFunc(input) {
  // format input
  const data = TextListToArrayOfStrings(input);

  // organize into filesystem using a running directory
  const fileSystem = { "/": { totalSize: 0, children: [] } };
  let runningDir = ["/"];

  data.forEach((line) => {
    if (line.includes("$ cd /")) {
      // reset directory
      runningDir = ["/"];
    } else if (line.includes("$ cd ..")) {
      // remove last directory
      runningDir = runningDir.slice(0, -1);
    } else if (line.includes("$ cd")) {
      // add directory if doesn't exist
      const dir = line.split("$ cd ")[1];
      runningDir.push(dir);
    } else if (line.includes("dir")) {
      // add dir to file tree
      const newDir = line.split("dir ")[1];

      // add new dir
      if (!fileSystem[newDir]) {
        fileSystem[`${runningDir.join("/")}/${newDir}`] = {
          totalSize: 0,
          children: [],
        };
      }
    } else if (line.match(/\d/)) {
      // update totalSize for file's containing folder
      const fileSize = line.split(" ")[0];

      // go up the chain until done, adding size to parent folders
      let tempRunningDir = [...runningDir];
      tempRunningDir.forEach((currDir) => {
        fileSystem[`${tempRunningDir.join("/")}`].totalSize += Number(fileSize);
        tempRunningDir = tempRunningDir.slice(0, -1);
      });
    }
  });

  // if a directory totalSize > max size, add that directory to a Set of directories to total
  // end up with set of directories to add
  const directoriesToAdd = new Set();
  const maxSize = 100000;
  for (const dir in fileSystem) {
    if (fileSystem[dir].totalSize < maxSize) {
      directoriesToAdd.add(dir);
    }
  }

  // finally go through dir list and sum totalSizes
  let totalSize = 0;
  directoriesToAdd.forEach((dir) => {
    totalSize += fileSystem[dir].totalSize;
  });

  return totalSize;
}

console.log(myFunc(input));
