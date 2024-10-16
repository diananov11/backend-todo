const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  todo: {
    type: mongoose.ObjectId,
    ref: "Todo",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
