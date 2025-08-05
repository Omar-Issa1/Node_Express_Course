const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next task");

// const { readFile, writeFile } = require("fs");
// writeFile("./content/first.txt", "oh my god", (err) => {
//   if (err) throw err;
//   console.log("done");
// });
// readFile("./content/first.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// const first = fs.readFile("./content/first.txt", "utf8");
// const second = fs.readFile("./content/second.txt", "binary");
// console.log(first, second);

// fs.writeFile(
//   "./content/result.txt",
//   `Hello Node js and the result is : ${first} , ${second}`
// );
