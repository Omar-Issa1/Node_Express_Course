const fs = require("fs");
console.log("start");

const first = fs.readFileSync("./content/first.txt", "utf8");
const second = fs.readFileSync("./content/second.txt", "binary");

fs.writeFileSync(
  "./content/result.txt",
  `Hello Node js and the result is : ${first} , ${second}`
);
console.log("done with this task");
console.log("starting next task");
