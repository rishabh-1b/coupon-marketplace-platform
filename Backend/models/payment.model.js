const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  orderId: { 
    type: String, 
    required: true 
  },
  amount : { 
    type: Number, 
    required: true 
  },
  status: { 
    type: Boolean, 
    default : false,
    required: true 
  },
  user : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "user",
    required : true
  },
  coupon : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "coupon",
    required : true
  },
},{timestamps : true});

const paymentModel = mongoose.model('Payment', PaymentSchema);

module.exports = paymentModel;
