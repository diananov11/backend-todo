const express = require("express");
const route = express.Router();

const todoRoute = require("./todo-route");
const userRoute = require("./user-route");

route.use("/todos", todoRoute);
route.use("/users", userRoute);

module.exports = route;
