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

const PORT = process.env.PORT || 5000;

function start() {
  try {
     app.listen(PORT, () => {
      console.log(`Server has been started on port: ${PORT}`);
    });
  } catch (e) {
    console.error(e);
  }
};

start();