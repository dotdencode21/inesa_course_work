require("dotenv").config();
const cors = require("cors");

const express = require("express");

const app = express();

app.use(express.json());
app.use(cors());

function start() {
  app.listen(process.env.PORT, () => {
    console.log(`Server has been started on port: ${process.env.PORT}`);
  });
};

start();