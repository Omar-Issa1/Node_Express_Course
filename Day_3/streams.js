const { createReadStream } = require("fs");

const readStream = createReadStream("./content/big.txt", {
  highWaterMark: 16 * 1024,
  //   encoding: "utf8",
});

readStream.on("data", (result) => {
  console.log("------------------------------------");
  console.log(result);
});
readStream.on("end", () => {
  console.log("proseese done-----------------------");
});
readStream.on("error", (err) => console.log(err));

const fs = require("fs");

const readable = fs.createReadStream("bigfile.txt");
const writable = fs.createWriteStream("copy.txt");
