const TextListToArrayOfChars = (txt) => {
  let arrayOfStrings = txt.split("\n");
  let arrayOfArrays = [];

  arrayOfStrings.forEach((str) => {
    if (str.length > 0) {
      arrayOfArrays.push([...str]);
    }
  });

  return arrayOfArrays;
};

const TextListToArrayOfArrays = (txt) => {
  let arrayOfStrings = txt.split("\n");
  let arrayOfArrays = [];

  let i = 0;
  arrayOfStrings.forEach((str) => {
    if (str.length > 0) {
      arrayOfArrays[i] ? arrayOfArrays[i].push(str) : arrayOfArrays.push([str]);
    } else {
      i++;
    }
  });

  return arrayOfArrays;
};

const TextListToArrayOfStrings = (txt) => {
  return txt.split("\n");
};

export {
  TextListToArrayOfArrays,
  TextListToArrayOfChars,
  TextListToArrayOfStrings,
};
