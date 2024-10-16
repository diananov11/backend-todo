require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const allRoutes = require("./routes"); // import routing endpoint
const db = require("./db");

// cek koneksi db
db.then(() => {
  console.log("berhasil connect db todos");
}).catch(() => {
  console.log("gagal connect ke db todos");
});

app.use(express.json());
app.use(allRoutes); // import routing endpoint

app.listen(PORT, () => {
  console.log("server running on PORT " + 3000);
});
