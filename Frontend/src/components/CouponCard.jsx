import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

const CouponCard = ({ coupon, user }) => {

  async function handleOnPayment(amount, couponId) {
    toast.dismiss();
    if (!user) {
      toast.error("Please login to purchase a coupon");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:3000/createOrder", 
        { amount, couponId }, 
        { withCredentials: true }
      );
  
      const { order, key } = response.data;
  
      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "CouponHub",
        description: "Payment for buying a coupon",
        order_id: order.id,
        prefill: {
          name: user.name,
          email: user.email
        },
        theme: {
          color: "#3399cc",
        },
        handler: async function (response) {
          try {
            const verifyResponse = await axios.post("http://localhost:3000/verifyPayment", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }, { withCredentials: true });
  
            if (verifyResponse.data.success) {
              toast.success(verifyResponse.data.message);
            } else {
              toast.error(verifyResponse.data.message);
            }
          } catch (error) {
            toast.error("Error verifying payment. Please try again.");
          }
        },
        modal: {
          ondismiss: () => {
            toast.error("Payment cancelled.");
          }
        }
      };
  
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      toast.error("Error initiating payment. Please try again.");
    }
  }  

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{coupon.title}</h3>
          <p className="text-gray-600 mt-1">{coupon.description}</p>
        </div>
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm text-center font-medium">
          {coupon.discount}% OFF
        </span>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600">
          <span className="mr-2">Store:</span>
          <span>{coupon.storeName}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <span className="mr-2">Expires:</span>
          <span>{`${coupon.expiryDate.slice(8, 10)}-${coupon.expiryDate.slice(5, 7)}-${coupon.expiryDate.slice(0, 4)}`}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <span className="mr-2">Category:</span>
          <span>{coupon.category}</span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-900 font-medium">Seller: {coupon.seller.name}</p>
          </div>
        </div>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          onClick={() => handleOnPayment(coupon.price, coupon._id)}
        >
          Buy for ₹{coupon.price}
        </button>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="text-sm text-gray-600">Key Terms:</div>
        <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
          {coupon.terms.map((term, index) => (
            <li key={index}>{term}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CouponCard;
