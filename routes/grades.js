const express = require("express");
const router = express.Router();
const grades = require("../data/grades");

router.get("/", (req, res) => {
  //   res.render("grades", { title: "Report Card" });
  res.send(grades);
});

router.post("/", (req, res) => {
  res.send("Grades for all students");
});

router
  .route("/:id")
  .get((req, res) => {
    // console.log(req.grades);
    // res.send(grades[userId]);
    res.send(`Get grades with userID: ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update grades with userID: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete grades with userID: ${req.params.id}`);
  });

router.param("id", (req, res, next, id) => {
  req.grades = grades[id];
  //   console.log(id);
  next();
});

module.exports = router;
