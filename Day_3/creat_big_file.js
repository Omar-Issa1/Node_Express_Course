const { writeFileSync } = require("fs");
for (i = 0; i < 150000; i++) {
  writeFileSync(
    "./content/big.txt",
    `hello world in my worled i am the king omar molotov the man who knocks fuck my hear ${i}\n`,
    { flag: "a" }
  );
}
