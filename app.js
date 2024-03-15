const express = require("express");
const indexRouter = require("./routes/index.js");
const app = express();
const port = 5000;

app.set("views", "views");
app.set("view engine", "ejs");

const bodyParser = require("body-parser");
const users = require("./data/users.js");
const grades = require("./data/grades.js");

// MIDDLEWARE
app.use("/", indexRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json({ extended: true }));

// GET
app.get("/", (req, res) => {
  res.send("Application that calculates Grades");
});
// POST
// PUT
// Listener
app.listen(port, () => {
  console.log(`Express is running on port: ${port}`);
});
