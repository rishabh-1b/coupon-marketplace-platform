import React from 'react';

const AboutUs = ({ user }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6">
          About CouponHub
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          At CouponHub, we connect people who want to save money with those looking to share or sell their unused coupons.
          Whether you're hunting for a discount on your favorite brand or looking to make extra cash by selling a coupon,
          we've got you covered!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              We aim to simplify the way people buy and sell coupons by offering a secure and
              user-friendly platform. Our goal is to help users save more, spend less, and make
              the most out of every deal available.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h2>
            <p className="text-gray-600">
              Selling a coupon? Simply list your coupon on our platform with details like validity
              and discount value. Looking to buy? Browse through a wide range of offers, purchase
              your desired coupon, and enjoy amazing savings.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Why Choose CouponHub?
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-600">
            <li>Secure transactions for buyers and sellers.</li>
            <li>Wide variety of coupons for products and services.</li>
            <li>Simple, intuitive platform for everyone.</li>
            <li>Verified users and transparent pricing.</li>
            <li>24/7 support to address your queries.</li>
          </ul>
        </div>

        {!user &&
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Us Today!
            </h2>
            <p className="text-gray-600 mb-6">
              Start saving more or earn extra cash by buying or selling coupons on CouponHub.
              Your next great deal is just a few clicks away!
            </p>
            <a
              href="/signup"
              className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Sign Up Now
            </a>
          </div>
        }
      </div>
    </div>
  );
};

export default AboutUs;
