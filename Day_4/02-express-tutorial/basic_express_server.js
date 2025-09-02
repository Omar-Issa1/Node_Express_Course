import express from "express";
import path from "path";
// راجع علي دي
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
let port = 5000;
// شوف اي حوار use و express.static
app.use(express.static("./public"));
// شوق اي حوار ال resolve
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// });

app.all(/.*/, (req, res) => {
  res.status(404).send("<h1>404</h1>\n<h1>Page not found</h1>");
});
app.listen(port, () => {
  console.log(`serever is online on ${port}`);
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
