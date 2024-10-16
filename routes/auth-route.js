const express = require("express");
const { login, register } = require("../controllers/auth-controller");
const route = express.Router();

route.post("/register", register);
route.post("/login", login);

module.exports = route;
