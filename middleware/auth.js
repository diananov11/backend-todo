require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = {
  validateToken: (req, res, next) => {
    const header = req.headers.authorization;

    if (!header) {
      return res.status(400).json({ message: "invalid header" });
    }

    const token = header.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "unauthorized" });
    }

    try {
      const payload = jwt.verify(token, process.env.PRIVATE_KEY);
      req.payload = payload;
      next();
    } catch (error) {
      console.log(error);
      return res.status(401).json({ message: "unauthorized" });
    }
  },
};
