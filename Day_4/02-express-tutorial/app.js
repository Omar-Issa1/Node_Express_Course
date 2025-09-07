// always rememper to put a return before any (res.)respone
import express from "express";
import logger from "./loggerMiddleware.js";
import authorize from "./authorize.js";
const app = express();
app.use([logger, authorize]);
// app.use(express.static("./public"));
app.get("/", (req, res) => {
  return res.send("Home");
});

app.get("/about", (req, res) => {
  return res.send("About");
});

app.get("/api/books", (req, res) => {
  return res.send("we have books here");
});

app.get("/api/videos", (req, res) => {
  console.log(req.user);
  return res.send("we have videos here");
});
app.listen(5000, () => {
  console.log("server is online on port 5000");
});
