const express = require("express");

const carRouter = express.Router();

carRouter.get("/all");
carRouter.get("/:carId");
carRouter.post("/add");
carRouter.put("/:carId/update");
carRouter.delete("/:carId/delete");

module.exports = carRouter;