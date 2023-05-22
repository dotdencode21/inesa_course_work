const express = require("express");
const carController = require("../controllers/car.controller.js");

const carRouter = express.Router();

carRouter.get("/all", carController.getCars);
carRouter.get("/:carId", carController.getCar);
carRouter.post("/add", carController.addCar);
carRouter.put("/:carId/update", carController.updateCar);
carRouter.delete("/:carId/delete", carController.deleteCar);

module.exports = carRouter;