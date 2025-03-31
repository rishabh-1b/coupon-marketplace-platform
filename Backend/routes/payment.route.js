const express = require("express");
const { createOrder, verifyPayment } = require("../controllers/payment.controller");
const { verifyUser } = require("../middlewares/verifyUser");

const paymentRouter = express.Router();

paymentRouter.post('/createOrder', verifyUser,createOrder);
paymentRouter.post('/verifyPayment', verifyUser,verifyPayment);

module.exports = paymentRouter;