// always remember to put a return before any (res.) response
import express from "express"; // import express framework
import { people } from "./data.js"; // import sample data (array of people)

const app = express(); // create an express app

// serve static files from "methods-public" folder (e.g. html, css, js)
app.use(express.static("./methods-public"));

// parse form data (from HTML form submissions)
app.use(express.urlencoded({ extended: false }));

// parse JSON data (from API clients like Postman / axios)
app.use(express.json());

// POST request - login (simple example)
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    // if name exists → login success
    return res.status(201).send(`Welcome ${name}`);
  }
  // if no name → unauthorized
  return res.status(401).send("please enter a name");
});
// GET request - return all people
app.get("/api/people", (req, res) => {
  return res.status(200).json({ success: true, data: people });
});

// POST request - add a new person (basic)
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    // if no name provided → return error
    return res
      .status(400)
      .json({ success: false, msg: "pls put a valed name" });
  }
  // success → return the new person name
  return res.status(201).json({ success: true, person: name });
});

// POST request - add new person with Postman (returns updated list)
app.post("/api/people/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "pls put a valed name" });
  }
  // return old list + new person
  return res.status(201).json({ success: true, data: [...people, name] });
});

// PUT request - update a person's name by ID
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params; // get id from URL
  const { name } = req.body; // get new name from body

  // check if person exists
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ succes: false, msg: `No person foun with id ${id}` });
  }

  // update name in array
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  // return updated array
  res.status(200).json({ success: true, data: newPeople });
});
// DELETE request - remove a person by ID
app.delete("/api/people/:id", (req, res) => {
  // find the person by id
  const person = people.find((person) => person.id === Number(req.params.id));

  // if person not found → return 404 error
  if (!person) {
    return res
      .status(404)
      .json({ succes: false, msg: `No person found with id ${req.params.id}` });
  }

  // create a new array without the deleted person
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );

  // return the updated list
  return res.status(200).json({ success: true, data: newPeople });
});

// start the server on port 5000
app.listen(5000, () => {
  console.log("server is online on port 5000");
});
