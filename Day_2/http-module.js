const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcom to home page");
    return;
  }

  if (req.url === "/about") {
    res.end("leave me alone ");
    return;
  }

  res.writeHead(302, {
    Location: "https://www.youtube.com/watch?v=FfxlWKiNOfU",
  });
  res.end();
});
server.listen(8000, () => {
  console.log("server port is: 8000");
});
