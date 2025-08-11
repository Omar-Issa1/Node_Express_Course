const fs = require("fs");

const readable = fs.createReadStream("bigfile.txt");
const writable = fs.createWriteStream("copy.txt");

readable.on("open", () => {
  console.log("تم فتح الملف للقراءة");
});

writable.on("open", () => {
  console.log("تم فتح الملف للكتابة");
});

readable.pipe(writable);
