const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  age: Number,
  phoneNumber: String,
  entity: Boolean,         // физ. лицо
  individual: Boolean,     // юр. лицо
  role: {
    type: String,
    default: "user"
  },
  orders: [],
  carRentalStartDate: { 
    type: Date, 
    default: Date.now 
  },
  carRentalEndDate: Date
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);