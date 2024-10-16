const User = require("../models/User");

module.exports = {
  addUser: async (req, res) => {
    try {
      const data = req.body;
      const newUser = new User(data);
      const savedUser = await newUser.save();

      res.status(201).json({
        message: "data User berhasil dibuat",
        data: savedUser,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message:
          "Gagal membuat data user, pastikan data name dan age sudah benar",
      });
    }
  },

  addBulkUser: async (req, res) => {
    try {
      const data = req.body;
      const todos = User.insertMany(data);

      res.status(201).json({
        message: "data Bulk User berhasil dibuat",
        data: todos,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message:
          "Gagal membuat data Bulk User, pastikan data name dan age sudah benar",
      });
    }
  },

  getAllUser: async (req, res) => {
    try {
      const data = await User.find({}).populate("todo");

      res.status(200).json({
        message: "Berhasil mendapatkan semua data User",
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: "Terjadi Error, Gagal mendapatkan semua data user",
      });
    }
  },

  getUserById: async (req, res) => {
    try {
      const data = await User.findById(req.params.id).populate("todo").exec();

      if (!data) {
        return res
          .status(404)
          .json({ message: `User ${req.params.id}  tidak ditemukan` });
      }

      res.status(200).json({
        message: `Berhasil mendapatkan data User ${req.params.id} `,
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: `Gagal mendapatkan data user ${req.params.id} `,
      });
    }
  },

  editUserById: async (req, res) => {
    try {
      const data = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });

      if (!data) {
        return res
          .status(404)
          .json({ message: `User ${req.params.id} tidak ditemukan` });
      }

      res.status(200).json({
        message: `Berhasil mengedit data User ${req.params.id} `,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: `Gagal mengedit data user ${req.params.id} `,
      });
    }
  },

  deleteUserById: async (req, res) => {
    try {
      const data = await User.findByIdAndDelete(req.params.id);

      if (!data) {
        return res
          .status(404)
          .json({ message: `User ${req.params.id} tidak ditemukan` });
      }

      res.status(200).json({
        message: `Berhasil menghapus data User ${req.params.id} `,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: `Terjadi Error, gagal menghapus data user ${req.params.id} `,
      });
    }
  },

  deleteAllUser: async (req, res) => {
    try {
      await Todo.deleteMany({});
      res.res(200).json({ message: "Berhasil menghapus semua data User" });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: "Terjadi Error, gagal menghapus semua data user",
      });
    }
  },
};
