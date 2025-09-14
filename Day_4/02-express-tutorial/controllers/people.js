import { people } from "../data.js"; // import sample data (array of people)

const getPeople = (req, res) => {
  return res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    // if no name provided → return error
    return res
      .status(400)
      .json({ success: false, msg: "pls put a valed name" });
  }
  // success → return the new person name
  return res.status(201).json({ success: true, person: name });
};

const createPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "pls put a valed name" });
  }
  // return old list + new person
  return res.status(201).json({ success: true, data: [...people, name] });
};

const updatePerson = (req, res) => {
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
};

const removePerson = (req, res) => {
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
};

export default {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  removePerson,
};
