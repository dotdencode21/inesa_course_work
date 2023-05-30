const express = require("express");
const userController = require("../controllers/user.controller.js");

const userRouter = express.Router();

userRouter.get("/all", userController.getUsers);
userRouter.post("/current", userController.getUser);
userRouter.put("/update", userController.updateUser);
userRouter.delete("/:userId/delete", userController.deleteUser);

module.exports = userRouter;