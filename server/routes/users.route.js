const express = require("express");
const userController = require("../controllers/user.controller.js");

const userRouter = express.Router();

userRouter.get("/all", userController.getUsers);
userRouter.get("/:userId", userController.getUser);
userRouter.put("/:userId/update", userController.updateUser);
userRouter.delete("/:userId/delete", userController.deleteUser);

module.exports = userRouter;