const express = require("express");
const {
  addTodo,
  getAllTodo,
  getTodoById,
  editTodoById,
  deleteAllTodo,
  deleteTodoById,
} = require("../controllers/todo-controller");
const route = express.Router();

//  Membuat todo baru
route.post("/", addTodo);

// Melihat semua todo
route.get("/", getAllTodo);

// Melihat detail todo
route.get("/:id", getTodoById);

// Mengubah todo
route.put("/:id", editTodoById);

// Menghapus todo
route.delete("/:id", deleteTodoById);

// Menghapus semua todo
route.delete("/", deleteAllTodo);

module.exports = route;
