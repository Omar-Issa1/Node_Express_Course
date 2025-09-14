import express from "express";
import peopleController from "../controllers/people.js";
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  removePerson,
} = peopleController;
const router = express.Router();

// GET request - return all people
router.get("/", getPeople);

// POST request - add a new person (basic)
router.post("/", createPerson);

// POST request - add new person with Postman (returns updated list)
router.post("/postman", createPersonPostman);

// PUT request - update a person's name by ID
router.put("/:id", updatePerson);
// DELETE request - remove a person by ID
router.delete("/:id", removePerson);

// router.delete("/:id", removePerson);
// router.route('/').get(getPeople).post(createPerson)
// router.route('/postman').post(createPersonPostman)
// router.route('/:id').put(updatePerson).delete(deletePerson)

export default router;
