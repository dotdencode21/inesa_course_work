const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const User = require("../schemas/User");

class AuthController {
  async signUp(req, res) {
    try {
      const validationErrors = validationResult(req);

      if (!validationErrors.isEmpty()) {
        return res.status(400).json(validationErrors);
      }

      const { username, password } = req.body;

      const candidate = await User.findOne({ username });

      if (candidate) {
        return res.status(400).json({ message: `User with username ${username} is already exists` });
      }

      const hashPassword = await bcrypt.hash(password, 8);

      if (username === "admin" && password === "admin") {
        const user = new User({ username, password: hashPassword, role: "ADMIN" });

        await user.save();

        return res.status(200).json({ message: "User has been succesfully registered" });
      }

      const user = new User({ username, password: hashPassword });

      await user.save();

      return res.status(200).json({ message: "User has been succesfully registered" });
    } catch (e) {
      return res.status(400).json({ message: "Registartion failed" });
    }
  }

  async signIn(req, res) {
    try {
      const validationErrors = validationResult(req);

      if (!validationErrors.isEmpty()) {
        return res.status(400).json(validationErrors);
      }
      
      const { username, password } = req.body;

      const user = await User.findOne({ username });

      if (!user) {
        return res.status(401).json({ message: `User with username ${username} not found` });
      }

      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        return res.status(401). json({ message: "Wrong password" });
      }

      const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: "72h" });

      return res.status(200).json({ token });
    } catch (e) {
      return res.status(401).json({ message: "Authorization failed" });
    }
  }
};

module.exports = new AuthController();