const express = require("express");
const { body } = require("express-validator");

const authController = require("../controllers/auth.controller.js");

const authRouter = express.Router();

authRouter.post(
  "/sign-up",
  body("username")
    .notEmpty()
    .withMessage("Field 'Username' cannot be empty"),
  body("password")
    .isLength({ min: 5, max: 10 })
    .withMessage("Field 'Password' must contaions from 5 to 10 characters"),
  authController.signUp
);
authRouter.post(
  "/sign-in", 
  body("username")
    .notEmpty()
    .withMessage("Field 'Username' cannot be empty"),
  body("password")
    .isLength({ min: 5, max: 10 })
    .withMessage("Field 'Password' must contaions from 5 to 10 characters"),
  authController.signIn
);

module.exports = authRouter;