const razorpayInstance = require("../config/razorpayInstance");
const crypto = require('crypto');
const paymentModel = require("../models/payment.model");
const couponModel = require("../models/coupon.model");

exports.createOrder = async (req, res) => {
  try {
    const {amount,couponId} = req.body; 

    const coupon = await couponModel.findOne({_id : couponId})
    
    if(coupon.isSell)
    {
      return res.status(400).send(
        {
          success : false,
          message : "Coupon is already sell"
        }
      )
    }

    const options = {
      amount: Number(amount) * 100,
      currency : "INR",
    };

    const order = await razorpayInstance.orders.create(options);

    await paymentModel.create({
      orderId : order.id,
      amount : order.amount,
      user : req.user.id,
      coupon : couponId
    })

    res.status(200).json(
      {
        success : true,
        message : "Payment order created successfully",
        order,
        key : process.env.RAZORPAY_KEY_ID
      }
    )
  } catch (error) {
    res.status(500).json(
      {
        success : false,
        message : "Error occurred while creating the payment order",
        error
      }
    )
  }
}

exports.verifyPayment = async (req,res) =>
{
  try{
    const {razorpay_order_id, razorpay_payment_id, razorpay_signature} =req.body

    const hashSignature = crypto
        .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest('hex');

    if(hashSignature===razorpay_signature)
    {
      const payment = await paymentModel.findOne({orderId : razorpay_order_id}).populate("coupon");

      payment.status = true
      payment.coupon.isSell = true
      payment.coupon.buyer = payment.user

      await payment.coupon.save();
      await payment.save();

      return res.status(200).json(
        {
          success : true,
          message : "Payment successful"
        }
      )
    }
    res.status(400).json(
      {
        success : false,
        message : "Payment failed"
      }
    )
  }
  catch(error)
  {
    res.status(500).json(
      {
        success : false,
        message : "Error occurred while making a payment"
      }
    )
  }
}