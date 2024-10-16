const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.json({
    message: "selamat datang di todo apps",
  });
});

// router.use("/todos");

module.exports = route;
