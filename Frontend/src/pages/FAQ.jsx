import React from 'react';

const FAQ = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Here are the most commonly asked questions about CouponHub. If you have any further questions, feel free to reach out to our support team.
        </p>

        <div className="space-y-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              1. How do I buy coupons on CouponHub?
            </h2>
            <p className="text-gray-600">
              To buy coupons, simply browse through our available coupons on the platform, select the ones you like, and make a purchase through our secure payment system.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              2. How do I sell coupons on CouponHub?
            </h2>
            <p className="text-gray-600">
              If you have a coupon you’d like to sell, simply create a seller account, list the coupon by providing its details, and set a price. Once your coupon is approved, it will be available for purchase.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              3. Is it safe to buy and sell coupons on CouponHub?
            </h2>
            <p className="text-gray-600">
              Yes, CouponHub ensures a secure environment for all transactions. We verify all listings and ensure that the buyers and sellers are protected through secure payment processing and transaction monitoring.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              4. What types of coupons can I buy and sell on CouponHub?
            </h2>
            <p className="text-gray-600">
              You can buy and sell coupons for a variety of products and services including electronics, clothing, food, online services, and more. Just browse the listings and pick the deals that best fit your needs.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              5. How do I redeem my coupon after purchasing it?
            </h2>
            <p className="text-gray-600">
              After purchasing a coupon, you’ll receive a code or voucher along with instructions on how to redeem it. Simply follow the instructions provided with the coupon to use it at the respective retailer or service provider.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              6. Can I return a coupon if I change my mind?
            </h2>
            <p className="text-gray-600">
              Coupons sold on CouponHub are non-refundable unless there is a valid issue with the coupon (e.g., invalid code, expired coupon). Please review the terms and conditions of each coupon before purchasing.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              7. How can I contact customer support if I need help?
            </h2>
            <p className="text-gray-600">
              If you need assistance, you can contact our customer support team by emailing us at couponhub.deals@gmail.com or through the contact form available on our Contact Us page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
