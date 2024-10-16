const express = require("express");
const route = express.Router();

const authRoute = require("./auth-route");
const todoRoute = require("./todo-route");
const studentRoute = require("./student-route");

route.get("/", (req, res) => {
  res.json({
    message:
      "please see the documentation at https://github.com/diananov11/backend-todo",
  });
});

route.use("/auth", authRoute);
route.use("/todos", todoRoute);
route.use("/students", studentRoute);

module.exports = route;
