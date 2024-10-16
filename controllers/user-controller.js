const User = require("../models/User");

module.exports = {
  addUser: (req, res) => {
    const data = req.body;

    const newUser = new User(data);
    newUser.save();

    res.json({
      message: "data User berhasil dibuat",
    });
  },

  getAllUser: async (req, res) => {
    const data = await User.find({}).populate("todo");

    res.json({
      message: "Berhasil mendapatkan semua data User",
      data,
    });
  },
  getUserById: (req, res) => {},
  editUserById: (req, res) => {},
  deleteUserById: (req, res) => {},
  deleteAllUser: (req, res) => {},
};
