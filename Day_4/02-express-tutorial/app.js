// always remember to put a return before any (res.) response
import express from "express"; // import express framework
const app = express(); // create an express app
import people from "./routes/people.js";
import auth from "./routes/auth.js";
// serve static files from "methods-public" folder (e.g. html, css, js)
app.use(express.static("./methods-public"));

// parse form data (from HTML form submissions)
app.use(express.urlencoded({ extended: false }));

// parse JSON data (from API clients like Postman / axios)
app.use(express.json());

app.use("/api/people", people);
app.use("/login", auth);

// start the server on port 5000
app.listen(5000, () => {
  console.log("server is online on port 5000");
});
