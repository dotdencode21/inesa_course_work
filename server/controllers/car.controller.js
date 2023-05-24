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

  async getCar(req, res) {
    try {
      const { carId } = req.body;

      const car = await Car.findById(carId);

      return res.status(200).json(car);
    } catch (e) {
      return res.status(500).json({ message: "Failed to get car" });
    }
  }

  async addCar(req, res) {
    try {
      const validationErrors = validationResult(req);

      if (!validationErrors.isEmpty()) {
        return res.status(400).json(validationErrors);
      }

      const newCar = await Car.insertMany(req.body);

      return res.status(200).json(newCar);
    } catch (e) {
      return res.status(500).json({ message: "Failed to add car" });
    }
  }

  async updateCar(req, res) {
    try {
      const { carId } = req.params;

      const updatedCar = await Car.findByIdAndUpdate(carId, req.body, { new: true });

      return res.status(200).json(updatedCar);
    } catch (e) {
      return res.status(500).json({ message: "Failed to update car" });
    }
  }

  async deleteCar(req, res) {
    try {
      const { carId } = req.params;

      await Car.findByIdAndDelete(carId);

      return res.status(200).json({ message: "Car has been succesfully deleted" });
    } catch (e) {
      return res.status(500).json({ message: "Failed to delete car" });
    }
  }
};

module.exports = new CarController();