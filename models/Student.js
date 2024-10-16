const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
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

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
