const express = require("express");
const { createCoupon, getAllCoupon, getUserSellCoupon, getUserBuyCoupon } = require("../controllers/coupon.controller");
const { verifyUser } = require("../middlewares/verifyUser");

const couponRouter = express.Router();

couponRouter.post("/createCoupon",verifyUser,createCoupon);
couponRouter.get("/getAllCoupon",getAllCoupon);
couponRouter.get("/getUserSellCoupon",verifyUser,getUserSellCoupon);
couponRouter.get("/getUserBuyCoupon",verifyUser,getUserBuyCoupon);

module.exports = couponRouter;