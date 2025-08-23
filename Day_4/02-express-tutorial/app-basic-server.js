import http from "http";
import { readFileSync } from "fs";
const homePage = readFileSync("./navbar-app/index.html");
const homeStyle = readFileSync("./navbar-app/styles.css");
const homeLogo = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");
const server = http.createServer((req, res) => {
  // console.log(req.method);
  // console.log(req.url);
  const url = req.url;
  // home
  if (url === "/" || url === "/index.html") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  //about page
  else if (url === "/about.html" || url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>this is About page</h1>");
    res.end();
  }
  // styles
  else if (url.endsWith(".css")) {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyle);
    res.end();
  }
  // logo
  else if (url.endsWith(".svg")) {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeLogo);
    res.end();
  }
  // logic
  else if (url.endsWith(".js")) {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  }
  //not found
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found<h1>\n<h1>404</h1>");
    res.end();
  }
});

server.listen(5000);
