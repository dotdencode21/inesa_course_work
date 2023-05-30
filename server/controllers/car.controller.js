const { validationResult } = require("express-validator");

const Car = require("../schemas/Car");

class CarController {
  async getCars(req, res) {
    try {
      const cars = await Car.find();

      return res.status(200).json(cars);
    } catch (e) {
      return res.status(500).json({ message: "Failed to get cars" });
    }
  }

  async addCar(req, res) {
    try {
      const validationErrors = validationResult(req);

      if (!validationErrors.isEmpty()) {
        return res.status(400).json(validationErrors);
      }

      const { 
        name,
        serialNumber,
        yearOfManufacture,
        gearboxType,
        fuelType,
        category,
        pricePerHour
       } = req.body;

      const newCar = new Car({
        name,
        serialNumber,
        yearOfManufacture,
        gearboxType,
        fuelType,
        category,
        pricePerHour
      });

      await newCar.save().then(() => {
        return res.status(200).json(newCar);
      });
    } catch (e) {
      return res.status(500).json({ message: "Failed to add car" });
    }
  }

  async updateCar(req, res) {
    try {
      const { carId } = req.body;

      const updatedCar = await Car.findByIdAndUpdate(carId, req.body, { new: true });

      return res.status(200).json(updatedCar);
    } catch (e) {
      return res.status(500).json({ message: "Failed to update car" });
    }
  }

  async deleteCar(req, res) {
    try {
      const { carId } = req.body;

      await Car.findByIdAndDelete(carId);

      return res.status(200).json({ message: "Car has been succesfully deleted" });
    } catch (e) {
      return res.status(500).json({ message: "Failed to delete car" });
    }
  }
};

module.exports = new CarController();