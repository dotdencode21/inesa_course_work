const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: String,
  serialNumber: String,
  yearOfManufacture: Number,
  gearboxType: String,
  fuelType: String,
  category: String,
  pricePerHour: Number
}, { timestamps: true });

module.exports = mongoose.model("Car", carSchema);