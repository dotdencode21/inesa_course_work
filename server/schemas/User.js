const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  age: Number,
  phoneNumber: String,
  comment: {
    message: String,
    departureDate: {
      type: Date, 
      default: Date.now 
    }
  },
  role: {
    type: String,
    default: "USER"
  },
  orders: [],
  carRentalStartDate: { 
    type: Date, 
    default: Date.now 
  },
  carRentalEndDate: Date
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);