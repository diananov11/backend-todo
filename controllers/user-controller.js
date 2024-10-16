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

  addBulkUser: async (req, res) => {
    const data = req.body;

    const todos = User.insertMany(data);

    res.json({
      message: "data Bulk User berhasil dibuat",
      data,
    });
  },

  getAllUser: async (req, res) => {
    const data = await User.find({}).populate("todo");

    res.json({
      message: "Berhasil mendapatkan semua data User",
      data,
    });
  },

  getUserById: async (req, res) => {
    const data = await User.findById(req.params.id).populate("todo").exec();

    res.json({
      message: "Berhasil mendapatkan data User",
      data,
    });
  },

  editUserById: async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });

    res.json({
      message: "Berhasil mengedit data User",
    });
  },

  deleteUserById: async (req, res) => {
    await User.findByIdAndDelete(req.params.id);

    res.json({
      message: "Berhasil menghapus data User",
    });
  },

  deleteAllUser: async (req, res) => {
    await Todo.deleteMany({});
    res.json({ message: "Berhasil menghapus semua data User" });
  },
};
