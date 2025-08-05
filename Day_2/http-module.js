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

  res.end(`<h1>404</h1>
    <p>wtf are you doing</p>
    <a href="/">Back Home</a>`);
});
server.listen(8000);
