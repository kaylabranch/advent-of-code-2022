import { input } from "./input.js";
import { TextListToArrayOfStrings } from "../../data-loaders.js";

// PROBLEM
// Find the smallest directory that, if deleted, would free up enough space on the filesystem to run the update.
// What is the total size of that directory?

// SOLUTION:
export function myFunc(input) {
  // format input
  const data = TextListToArrayOfStrings(input);

  const maxSystemSpace = 70000000;
  const spaceNeededForUpdate = 30000000;

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

  // find directory to delete, lowest possible size
  const totalSizeTopFolder = fileSystem["/"].totalSize;
  const unusedSpace = maxSystemSpace - totalSizeTopFolder;
  const spaceNeeded = spaceNeededForUpdate - unusedSpace;

  let possibleDirs = [];
  for (const key in fileSystem) {
    if (fileSystem[key].totalSize > spaceNeeded) {
      possibleDirs.push(fileSystem[key].totalSize);
    }
  }

  return possibleDirs.sort((a, b) => a - b)[0];
}

console.log(myFunc(input));
