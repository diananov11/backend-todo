const Student = require("../models/Student");

module.exports = {
  addStudent: async (req, res) => {
    try {
      const newStudent = new Student(req.body);
      await newStudent.save();

      res.status(201).json({
        message: "data Student berhasil dibuat",
        data: newStudent,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message:
          "Gagal membuat data Student, pastikan data name dan age sudah benar",
      });
    }
  },

  addBulkStudent: async (req, res) => {
    try {
      const data = req.body;
      const Students = Student.insertMany(data);

      res.status(201).json({
        message: "data Bulk Student berhasil dibuat",
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message:
          "Gagal membuat data Bulk Student, pastikan data name dan age sudah benar",
      });
    }
  },

  getAllStudent: async (req, res) => {
    try {
      //masukin query parameter
      const { age, name, todoDone } = req.query;

      const query = {};
      // query age harus angka
      if (age) query.age = parseInt(age);
      // query name bisa pakai "" dan case insensitive
      if (name) {
        const cleanName = name.replace(/"/g, "");
        query.name = { $regex: new RegExp(cleanName, "i") };
      }

      // Execute query with Mongoose and populate the 'todo' field
      let students = await Student.find(query).populate("todo");

      // filter todo berdasarkan done dan
      if (todoDone !== undefined) {
        const isDone = todoDone === "false"; // convert param query ke boolean
        students = students.filter((student) => student.todo.done === isDone);
      }

      // Check if students exist after filtering
      if (!students.length) {
        return res
          .status(404)
          .json({ message: "tidak ada students yang sesuai kriteria" });
      }

      // Return the filtered students
      res.status(200).json({
        message: "Berhasil mendapatkan semua data Student",
        data: students,
      });
    } catch (error) {
      console.error("Error:", error.message, error);
      res.status(500).json({
        message: "Terjadi Error, Gagal mendapatkan semua data Student",
      });
    }
  },

  getStudentById: async (req, res) => {
    try {
      const data = await Student.findById(req.params.id)
        .populate("todo")
        .exec();

      if (!data) {
        return res
          .status(404)
          .json({ message: `Student ${req.params.id} tidak ditemukan` });
      }

      res.status(200).json({
        message: `Berhasil mendapatkan data Student ${req.params.id} `,
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: `Gagal mendapatkan data Student ${req.params.id} `,
      });
    }
  },

  editStudentById: async (req, res) => {
    try {
      const data = await Student.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });

      if (!data) {
        return res
          .status(404)
          .json({ message: `Student ${req.params.id} tidak ditemukan` });
      }

      res.status(200).json({
        message: `Berhasil mengedit data Student ${req.params.id} `,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: `Gagal mengedit data Student ${req.params.id} `,
      });
    }
  },

  deleteStudentById: async (req, res) => {
    try {
      const data = await Student.findByIdAndDelete(req.params.id);

      if (!data) {
        return res
          .status(404)
          .json({ message: `Student ${req.params.id} tidak ditemukan` });
      }

      res.status(200).json({
        message: `Berhasil menghapus data Student ${req.params.id} `,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: `Terjadi Error, gagal menghapus data Student ${req.params.id} `,
      });
    }
  },

  deleteAllStudent: async (req, res) => {
    try {
      await Student.deleteMany({});
      res
        .status(200)
        .json({ message: "Berhasil menghapus semua data Student" });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: "Terjadi Error, gagal menghapus semua data Student",
      });
    }
  },
};
