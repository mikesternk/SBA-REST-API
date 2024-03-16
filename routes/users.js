const express = require("express");
const router = express.Router();
const users = require("../data/users");

router.use(logger);

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  res.send("Create User");
});

router
  .route("/:id")
  .get((req, res) => {
    // console.log(req.users);
    res.send(`Get user with ID: ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user with ID: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with ID: ${req.params.id}`);
  });

router.param("id", (req, res, next, id) => {
  req.users = users[id - 1];
  //   console.log(id);
  next();
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

module.exports = router;
