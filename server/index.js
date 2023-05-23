require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());

const authRouter = require("./routes/auth.route.js");
const userRouter = require("./routes/users.route.js");
const carRouter = require("./routes/cars.route.js");

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/cars", carRouter);

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