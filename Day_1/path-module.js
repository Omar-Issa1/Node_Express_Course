const path = require("path");

const filePath = path.join("folder", "subfolder", "test.txt");
console.log(filePath);
const fullPath = path.resolve("folder", "subfolder", "test.txt");
console.log(fullPath);
