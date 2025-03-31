const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  couponCode: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  discount: {
    type: Number,
    required: true,
    min: 1,
    max: 100
  },
  storeName: {
    type: String,
    required: true,
    trim: true
  },
  expiryDate: {
    type: Date,
    required: true,
    index: { expires: 0 }
  },
  category: {
    type: String,
    required: true,
    enum: ["Electronics", "Fashion", "Food", "Travel", "Entertainment", "Hotels", "Education", "Health"]
  },
  price: {
    type: Number,
    required: true,
    min: 1
  },
  terms: {
    type: [String],
    required: true
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  isSell: {
    type: Boolean,
    default: false,
    required: true
  },
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    default : null
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const couponModel = mongoose.model("coupon", couponSchema);

module.exports = couponModel;