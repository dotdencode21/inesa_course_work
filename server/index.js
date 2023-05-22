require("dotenv").config();
const cors = require("cors");
const router = require("./router");

const express = require("express");

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

router.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

function start() {
  app.listen(process.env.PORT, () => {
    console.log(`Server has been started on port: ${process.env.PORT}`);
  });
};

start();