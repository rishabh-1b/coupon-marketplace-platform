const couponModel = require("../models/coupon.model")

exports.createCoupon = async (req,res) =>
{
  try{

    const {title, description, couponCode, discount, storeName, expiryDate, category, price, terms} = req.body;

    if(!title || !description || !couponCode || !discount || !storeName || !expiryDate || !category || !price || !terms)
    {
      return res.status(400).json(
        {
          success : false,
          message : "Please Fill all the details"
        }
      )
    }
    
    await couponModel.create(
      {
        title,
        description,
        couponCode,
        discount,
        storeName,
        expiryDate,
        category,
        price,
        terms : terms.split("\n"),
        seller : req.user.id,
      }
    );

    res.status(201).json(
      {
        success : true,
        message : "Coupon created successfully"
      }
    )

  }
  catch(error)
  {
    return res.status(500).json(
      {
        success : false,
        message : "Coupon cannot created, please try again later",
        error
      }
    )
  }
}

exports.getAllCoupon = async (req,res) =>
{
  try{
    const coupons = await couponModel.find({isSell : false}).populate(
      {
        path : "seller",
        select : "name"
      }
    ).select("-couponCode")

    res.status(200).json(
      {
        success : true,
        message : "All coupon fetch Successfully",
        coupons
      }
    )
  }
  catch(error)
  {
    res.status(500).json(
      {
        success : false,
        message : "Error occurred while fetching all coupons",
        error
      }
    )
  }
}

exports.getUserSellCoupon = async (req,res) =>
{
  try{
    const userSellCoupon = await couponModel.find({seller : req.user.id});
    res.status(200).json(
      {
        success : true,
        message : "User sell coupon fetch Successfully",
        userSellCoupon
      }
    )
  }
  catch(error)
  {
    res.status(500).json(
      {
        success : false,
        message : "Error occurred while fetching user sell coupon",
        error
      }
    )
  }
}

exports.getUserBuyCoupon = async (req,res) =>
{
  try{
    const userBuyCoupon = await couponModel.find({isSell : true,buyer : req.user.id}).populate(
      {
        path : "seller",
        select : "name"
      }
    );
    res.status(200).json(
      {
        success : true,
        message : "User buy coupon fetch Successfully",
        userBuyCoupon
      }
    )
  }
  catch(error)
  {
    res.status(500).json(
      {
        success : false,
        message : "Error occured while user buy coupon are fetch",
        error
      }
    )
  }
}