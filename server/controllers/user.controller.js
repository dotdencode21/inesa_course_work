const jwt = require("jsonwebtoken");

const User = require("../schemas/User");

class UserController {
  getUsers(req, res) {}

  async getUser(req, res) {
    const { token } = req.body;

    try {
      const { userId } = jwt.verify(token, process.env.SECRET_KEY);

      const currentUser = await User.findById({ _id: userId });
  
      return res.status(200).json(currentUser);
    } catch (e) {
      return res.status(500).json({ message: "Failed to decode token" });
    }
  }
  
  async updateUser(req, res) {
    const { token } = req.body;

    try {
      const { userId } = jwt.verify(token, process.env.SECRET_KEY);

      const updatedUser = await User.findByIdAndUpdate({ _id: userId }, {
        ...req.body,
        orders: req.body.orders
      }, { new: true });
  
      return res.status(200).json(updatedUser);
    } catch (e) {
      return res.status(500).json({ message: "Failed to decode token" });
    }
  }

  deleteUser(req, res) {}
};

module.exports = new UserController();