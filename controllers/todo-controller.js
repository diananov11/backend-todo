const Todo = require("../models/Todo");

module.exports = {
  addTodo: async (req, res) => {
    try {
      const newTodo = new Todo(req.body);
      await newTodo.save();

      res.status(201).json({
        message: "data Todo berhasil dibuat",
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: "Gagal membuat data todo, pastikan data title telah diinput",
      });
    }
  },

  addBulkTodo: async (req, res) => {
    try {
      const data = req.body;
      Todo.insertMany(data);

      res.status(201).json({
        message: "data Bulk Todo berhasil dibuat",
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message:
          "Gagal membuat data Bulk Todo, pastikan data title sudah benar",
      });
    }
  },

  getAllTodo: async (req, res) => {
    try {
      const data = await Todo.find({});

      res.status(200).json({
        message: "Berhasil mendapatkan semua data Todo",
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: "Terjadi Error, Gagal mendapatkan semua data todo",
      });
    }
  },

  getTodoById: async (req, res) => {
    try {
      const data = await Todo.findById(req.params.id).exec();

      if (!data) {
        return res
          .status(404)
          .json({ message: `Todo ${req.params.id} tidak ditemukan` });
      }

      res.status(200).json({
        message: `Berhasil mendapatkan data Todo ${req.params.id}`,
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: `Gagal mendapatkan data todo ${req.params.id} `,
      });
    }
  },

  editTodoById: async (req, res) => {
    try {
      const data = await Todo.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });

      if (!data) {
        return res
          .status(404)
          .json({ message: `Todo ${req.params.id} tidak ditemukan` });
      }

      res.status(200).json({
        message: `Berhasil mengedit data Todo ${req.params.id}`,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: `Gagal mengedit data todo ${req.params.id} `,
      });
    }
  },

  deleteTodoById: async (req, res) => {
    try {
      const data = await Todo.findByIdAndDelete(req.params.id);

      if (!data) {
        return res
          .status(404)
          .json({ message: `Todo ${req.params.id} tidak ditemukan` });
      }

      res.status(200).json({
        message: `Berhasil menghapus data Todo ${req.params.id}`,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: `Terjadi Error, gagal menghapus data todo ${req.params.id} `,
      });
    }
  },

  deleteAllTodo: async (req, res) => {
    try {
      await Todo.deleteMany({});
      res.json({ message: "Berhasil menghapus semua data Todo" });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: "Terjadi Error, gagal menghapus semua data todo",
      });
    }
  },
};
