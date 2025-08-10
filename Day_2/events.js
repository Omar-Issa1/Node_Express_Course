const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("respones", (name) => {
  console.log(`data resive from: ${name}`);
});
customEmitter.emit("respones", "omar");
