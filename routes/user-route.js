const express = require("express");
const {
  addUser,
  getAllUser,
  getUserById,
  editUserById,
  deleteAllUser,
  deleteUserById,
  addBulkUser,
} = require("../controllers/user-controller");
const route = express.Router();

//  Membuat User baru
route.post("/", addUser);

// Membuat bulk data user
route.post("/seeder", addBulkUser);

// Melihat semua User
route.get("/", getAllUser);

// Melihat detail User
route.get("/:id", getUserById);

// Mengubah User
route.put("/:id", editUserById);

// Menghapus User
route.delete("/:id", deleteUserById);

// Menghapus semua User
route.delete("/", deleteAllUser);

module.exports = route;
