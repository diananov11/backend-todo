const express = require("express");
const {
  addStudent,
  getAllStudent,
  getStudentById,
  editStudentById,
  deleteAllStudent,
  deleteStudentById,
  addBulkStudent,
} = require("../controllers/student-controller");
const route = express.Router();

//  Membuat Student baru
route.post("/", addStudent);

// Membuat bulk data Student
route.post("/seeder", addBulkStudent);

// Melihat semua Student
route.get("/", getAllStudent);

// Melihat detail Student
route.get("/:id", getStudentById);

// Mengubah Student
route.put("/:id", editStudentById);

// Menghapus Student
route.delete("/:id", deleteStudentById);

// Menghapus semua Student
route.delete("/", deleteAllStudent);

module.exports = route;
