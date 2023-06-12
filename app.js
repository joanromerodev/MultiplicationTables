// fs - Import the FilySystem library from Node -- It can be using the import or require statement depending if its a module or not. Check CJS and ESM documentation
const fs = require("node:fs");

// mathOperation - This function will execute the math operation returning a string which contains all the results from the operations executed in the function
const mathOperation = (value) => {
  let listTable = "";
  for (let i = 1; i <= 10; i++) {
    listTable += `${value} x ${i} = ${value * i}\n`;
  }
  return listTable;
};

// createFile - This function receives the parameters from the async function which already contains the results in a string variable. Then we'll start creating the file
// using a promise to resolve the fs.writeFile function. If the file already exists, it wont overwrite it
const createFile = (res, mult) => {
  const promise = new Promise((resolve, reject) => {
    if (!fs.existsSync(`table-${mult}.txt`)) {
      fs.writeFile(`table-${mult}.txt`, res, (err) => {
        if (err) reject(err);
        resolve("File successfully created");
      });
    } else {
      reject(`File table-${mult}.txt already exists`);
    }
  });
  return promise;
};

// getData - This function will call the math operation so it can return the results as a string and then call the promise to create the files
const getData = async (mult) => {
  const table = await mathOperation(mult);
  return table;
};

// tableFilesAmount - The amount of files which contains the multiplication tables starting from 1. If you want to change the amount of files to create, set a different value for this variable.
const tableFilesAmount = 5;

// This cycle will run until it reaches the desired tableFilesAmount.
for (let i = 1; i <= tableFilesAmount; i++) {
  getData(i)
    .then((res) => {
      return createFile(res, i);
    })
    .then((fileRes) => console.log(fileRes))
    .catch((err) => console.log(err));
}
