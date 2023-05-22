require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const router = require("./router");

app.use(express.json());
app.use(cors());
app.use(router);

router.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await mongoose.connect(process.env.DB_URL);
    app.listen(PORT, () => {
      console.log(`Server has been started on port: ${PORT}`);
    });
  } catch (e) {
    console.error(e);
  }
};

start();