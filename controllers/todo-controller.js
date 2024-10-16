const Todo = require("../models/Todo");

module.exports = {
  addTodo: (req, res) => {
    const data = req.body;

    const newTodo = new Todo(data);
    newTodo.save();

    res.json({
      message: "data Todo berhasil dibuat",
      data,
    });
  },

  getAllTodo: async (req, res) => {
    const data = await Todo.find({});

    res.json({
      message: "Berhasil mendapatkan semua data Todo",
      data,
    });
  },

  getTodoById: async (req, res) => {
    const data = await Todo.findById(req.params.id).exec();

    res.json({
      message: "Berhasil mendapatkan data Todo",
      data,
    });
  },

  editTodoById: async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });

    res.json({
      message: "Berhasil mengedit data Todo",
    });
  },

  deleteTodoById: async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);

    res.json({
      message: "Berhasil menghapus data Todo",
    });
  },

  deleteAllTodo: async (req, res) => {
    await Todo.deleteMany({});
    res.json({ message: "Berhasil menghapus semua data Todo" });
  },
};
