const express = require("express");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const gradesRouter = require("./routes/grades");
const app = express();
const port = 5000;

// Views
app.set("views", "views");
app.set("view engine", "ejs");

const bodyParser = require("body-parser");
const users = require("./data/users.js");
const grades = require("./data/grades.js");

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", indexRouter);

app.use("/users", usersRouter);
app.use("/grades", gradesRouter);

// Listener
app.listen(port, () => {
  console.log(`Express is running on port: ${port}`);
});
