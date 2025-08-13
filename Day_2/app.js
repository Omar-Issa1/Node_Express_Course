const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("welcom to home page");
    res.end();
  } else if (req.url === "/about") {
    res.write("leave me alone ");
    res.end();
  } else {
    res.end("404");
  }
});
server.listen(8000, () => {
  console.log("server port is: 8000");
});
