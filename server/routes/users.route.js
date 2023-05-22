const express = require("express");

const userRouter = express.Router();

userRouter.get("/all");
userRouter.get("/:userId");
userRouter.put("/:userId/update");
userRouter.delete("/:userId/delete");

module.exports = userRouter;