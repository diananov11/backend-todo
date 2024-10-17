const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  register: async (req, res) => {
    try {
      const data = req.body;

      //hash using bcrypt
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(data.password, salt);
      data.password = hash; //timpa data password db dengan hashing

      //simpan di db
      const newUser = new User(data);
      await newUser.save();

      res.status(201).json({
        message: "Berhasil melakukan register",
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: "Gagal melakukan register",
      });
    }
  },

  login: async (req, res) => {
    try {
      const data = req.body;

      // cari data user dengan username yg diinput
      const user = await User.findOne({ username: data.username }).exec();
      if (!user) {
        return res.status(404).json({ message: "Username tidak ditemukan" });
      }

      // bandingkan password dengan data db yg sudah dihash
      const checkPassword = bcrypt.compareSync(data.password, user.password);
      if (!checkPassword) {
        return res.status(401).json({ message: "Password salah" });
      }

      // buat token jwt
      const token = jwt.sign(
        { username: data.username },
        process.env.PRIVATE_KEY
      );

      res.status(200).json({
        message: "Berhasil login",
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: "Gagal melakukan login",
      });
    }
  },
};
