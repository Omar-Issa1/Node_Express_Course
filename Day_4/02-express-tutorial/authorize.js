const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "omar") {
    req.user = { name: "omar", id: 3 };
    next();
  } else {
    return res.status(401).send("Unaauthorized");
  }
};

export default authorize;
