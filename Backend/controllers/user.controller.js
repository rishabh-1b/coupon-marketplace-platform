const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");
const otpModel = require("../models/otp.model");
const generateToken = require("../utils/generateJwtToken");
const { generateOtp } = require("../utils/generateOtp");
const { sendMail } = require("../utils/sendMail");
const isValidEmail = require("../utils/validEmail");

exports.sendOtp = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json(
        {
          success: false,
          message: "Please fill all the details"
        }
      )
    }

    if (!isValidEmail(email)) {
      return res.status(400).json(
        {
          success: false,
          message: "Invalid email format"
        }
      )
    }

    if (password.length < 8) {
      return res.status(400).json(
        {
          success: false,
          message: "Password must be at least 8 characters long"
        }
      );
    }

    if (password != confirmPassword) {
      return res.status(400).json(
        {
          success: false,
          message: "Password and Confirm password should be same"
        }
      );
    }

    const existUser = await userModel.findOne({ email });

    if (existUser) {
      return res.status(400).json(
        {
          success: false,
          message: "User already exist!",
        }
      );
    }

    const otp = generateOtp();

    await otpModel.findOneAndUpdate(
      { email },
      { otp, createdAt: Date.now() },
      { upsert: true, new: true }
    );

    sendMail(email,
      "Your OTP for Signup",
      `Dear User,
      \nYour One Time Password (OTP) for Signup : ${otp}
      \nOTP is valid only for 5:00 mins. Do not share this OTP with anyone.`
    )
    res.status(201).json({
      success: true,
      message: "OTP sent to your email. Enter it below to verify your account.",
    });
  }
  catch (error) {
    res.status(500).json(
      {
        success: false,
        message: "Something went wrong, please try again later.",
        error
      }
    );
  }
}

exports.signup = async (req, res) => {

  try {
    const { name, email, password, otp } = req.body;

    const stored = await otpModel.findOne({ email })

    if (!stored) {
      return res.status(400).json(
        {
          success: false,
          message: "Invalid OTP",
        }
      );
    }

    if (otp != stored.otp) {
      return res.status(400).json(
        {
          success: false,
          message: "OTP is Incorrect",
        }
      );
    }

    await otpModel.findOneAndDelete({ email });

    const bcryptPassword = await bcrypt.hash(password, 10);

    await userModel.create({ name, email, password: bcryptPassword });

    res.status(201).json({
      success: true,
      message: "Profile created successfully",
    });
  }
  catch (error) {
    res.status(500).json(
      {
        success: false,
        message: "User cannot signup, please try again later",
        error,
      }
    );
  }
}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json(
        {
          success: false,
          message: "Please fill all the details"
        }
      );
    }

    const user = await userModel.findOne({ email: email });

    if (!user) {
      return res.status(404).json(
        {
          success: false,
          message: "User does not exist!",
        }
      );
    }

    const response = await bcrypt.compare(password, user.password);

    if (!response) {
      return res.status(401).json({
        success: false,
        message: "Password is incorrect",
      });
    }
    const token = generateToken({
      id: user._id,
      name: user.name,
      email: user.email,
      joinOn: user.createdAt
    });

    res.cookie("token", token, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: 'Lax'
    })
    res.status(200).json({
      success: true,
      message: "User login successfully",
      user : {
        id : user._id,
        name : user.name,
        email : user.email,
        joinOn : user.createdAt
      }
    });
  }
  catch (error) {
    res.status(500).json(
      {
        success: false,
        message: "User Cannot be login, please try again later.",
        error,
      }
    );
  }
}

exports.isLogin = (req, res) => {
  res.status(200).json(
    {
      success: true,
      message: "Yes, User is login",
      user: req.user,
    }
  )
}

exports.signout = (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json(
      {
        success: true,
        message: "User logged out successfully",
      }
    )
  }
  catch (error) {
    res.status(500).json(
      {
        success: false,
        message: "User Cannot be logout, please try again later",
        error
      }
    )
  }
}