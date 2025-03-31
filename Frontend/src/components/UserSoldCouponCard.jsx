import React from 'react';

function UserSoldCouponCard({ coupon }) {
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

      <div className="mt-4">
        <div className="text-sm text-gray-900 font-medium mb-2">
          Price: ₹{coupon.price}
        </div>
        <div className="text-sm text-gray-900 font-medium">
          <div className="flex justify-between items-center">
            <span>Coupon Code: {coupon.couponCode}</span>
            <span
              className={`text-sm font-medium px-2 py-1 rounded-full ${
                coupon.isSell ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
              }`}
            >
              {coupon.isSell ? 'Sold' : 'Available for Sale'}
            </span>
          </div>
        </div>
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
}

export default UserSoldCouponCard;
