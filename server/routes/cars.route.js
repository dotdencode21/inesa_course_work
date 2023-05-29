const express = require("express");
const { body } = require("express-validator");

const carController = require("../controllers/car.controller.js");

const carRouter = express.Router();

carRouter.get("/all", carController.getCars);
carRouter.post(
  "/add", 
  body("name")
    .notEmpty()
    .withMessage("Field 'Name' cannot be empty"),
  body("serialNumber")
    .notEmpty()
    .withMessage("Field 'Serial number' cannot be empty"),
  body("yearOfManufacture")
    .isNumeric()
    .withMessage("Field 'Year of manufacture' must be a number")
    .isLength({ min: 1900 })
    .withMessage("Incorrect year of manufacture"),
  body("gearboxType")
    .notEmpty()
    .withMessage("Field 'Gearbox type' cannot be empty"),
  body("fuelType")
    .notEmpty()
    .withMessage("Field 'Gearbox type' cannot be empty"),
  body("category")
    .notEmpty()
    .withMessage("Field 'Category' cannot be empty"),
  carController.addCar
);
carRouter.put("/:carId/update", carController.updateCar);
carRouter.delete("/:carId/delete", carController.deleteCar);

module.exports = carRouter;