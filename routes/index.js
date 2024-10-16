const express = require("express");
const route = express.Router();

const todoRoute = require("./todo-route");
const studentRoute = require("./student-route");

route.use("/todos", todoRoute);
route.use("/students", studentRoute);

module.exports = route;
