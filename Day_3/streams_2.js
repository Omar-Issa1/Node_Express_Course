const fs = require("fs");

const readable = fs.createReadStream("bigfile.txt");
const writable = fs.createWriteStream("copy.txt");

readable.on("open", () => {
  console.log("done opening reading file");
});

writable.on("open", () => {
  console.log("تم فتح الملف للكتابة");
});

readable.pipe(writable);
