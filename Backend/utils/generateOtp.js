const otpGenerator = require('otp-generator');

exports.generateOtp = () => {

    return otpGenerator.generate(6, { 
        lowerCaseAlphabets : false,
        upperCaseAlphabets : false,
        specialChars : false
    });
};
