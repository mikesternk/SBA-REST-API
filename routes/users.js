const express = require("express");
const router = express.Router();
const users = require("../data/users");

router.use(logger);

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  // Within the POST request route, we create a new user with the data given by the client.
  if (req.body.name && req.body.gender && req.body.email) {
    if (users.find((u) => u.email == req.body.email)) {
      res.json({ error: `${u.email} already exists` });
      return;
    }

    const newUser = {
      id: users[users.length - 1].id + 1,
      name: req.body.name,
      gender: req.body.gender,
      email: req.body.email,
    };

    users.push(newUser);
    res.json(users[users.length - 1]);
  } else {
    res.json({ error: `Insufficient Data` });
  }
});

router
  .route("/:id")
  .get((req, res) => {
    // console.log(req.users);
    // res.send(`Get user with ID: ${req.params.id}`);
    const user = users.find((u) => u.id == req.params.id);
    if (user) res.json(user);
    else next();
  })
  .put((req, res) => {
    res.send(`Update user with ID: ${req.params.id}`);
  })
  .delete((req, res, next) => {
    const index = users.findIndex((u) => u.id == req.params.id);
    if (index !== -1) {
      const deletedUser = users.splice(index, 1)[0];
      res.json(deletedUser);

      if (users) res.json(users);
    } else next();

    console.log(`Delete Request called for /${req.params.id} endpoint`);
    // res.send(`Delete user with ID: ${req.params.id}`);
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
