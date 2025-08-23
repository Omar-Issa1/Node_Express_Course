import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About page");
});
app.all(/.*/, (req, res) => {
  res.status(404).send("<h1>404</h1>\n<h1>Page not found</h1>");
});
app.listen(5000, () => {
  console.log("serever is online on 5000");
});
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
