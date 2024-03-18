const express = require("express");
const router = express.Router();
const teachers = require("../data/teachers");

router.get("/", (req, res) => {
  res.send(teachers);
});

module.exports = router;
