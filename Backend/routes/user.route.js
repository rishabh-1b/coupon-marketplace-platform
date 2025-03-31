const express = require("express");
const { signup, login, signout, sendOtp, isLogin } = require("../controllers/user.controller");
const { verifyUser } = require("../middlewares/verifyUser");

const userRouter = express.Router();

userRouter.post("/sendOtp",sendOtp)
userRouter.post("/signup",signup);
userRouter.post("/login",login);
userRouter.get("/isLogin",verifyUser,isLogin);
userRouter.get("/signout",verifyUser,signout);

module.exports = userRouter;