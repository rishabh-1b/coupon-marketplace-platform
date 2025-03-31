const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dbconnect = require("./config/dbconnect");
const userRouter = require("./routes/user.route");
const couponRouter = require("./routes/coupon.route");
const paymentRouter = require("./routes/payment.route");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors({
  origin : "http://localhost:5173",
  credentials : true,
}));

dbconnect();

app.use(userRouter);
app.use(couponRouter);
app.use(paymentRouter);

app.listen(process.env.PORT);