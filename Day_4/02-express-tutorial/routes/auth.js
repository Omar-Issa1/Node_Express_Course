import express from "express";
const router = express.Router();

// POST request - login (simple example)
router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    // if name exists → login success
    return res.status(201).send(`Welcome ${name}`);
  }
  // if no name → unauthorized
  return res.status(401).send("please enter a name");
});

export default router;
