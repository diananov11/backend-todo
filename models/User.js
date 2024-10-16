const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  todo: {
    type: mongoose.ObjectId,
    ref: "Todo",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
