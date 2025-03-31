import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import UserSoldCouponCard from '../components/UserSoldCouponCard';
import UserBoughtCouponCard from '../components/UserBoughtCouponCard';

function MyAccount({ user, setUser }) {

  if (!user) {
    return <div className="text-center py-8">Loading...</div>;
  }

  const [soldCoupons, setSoldCoupons] = useState([]);
  const [boughtCoupons, setBoughtCoupons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSoldCoupons = async () => {
      const response = await axios.get("http://localhost:3000/getUserSellCoupon",
        { withCredentials: true }
      );
      setSoldCoupons(response.data.userSellCoupon);
    };
    const fetchBoughtCoupons = async () => {
      const response = await axios.get("http://localhost:3000/getUserBuyCoupon",
        { withCredentials: true }
      );
      setBoughtCoupons(response.data.userBuyCoupon);
    }
    fetchSoldCoupons();
    fetchBoughtCoupons();
  }, []);

  const handleLogout = async () => {
    toast.dismiss();
    try {
      const response = await axios.get('http://localhost:3000/signout', { withCredentials: true });
      if (response.data.success) {
        setUser(null);
        toast.success(response.data.message);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Logout failed. Please try again later.');
    }
  };

  const [selectedCategory, setSelectedCategory] = useState('Coupon Sold By Me');

  const categories = ['Coupon Sold By Me', 'Coupon Bought By Me'];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">My Account</h1>

      <div className="mb-6 p-4 border border-gray-300 rounded-md shadow-sm bg-gray-50">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile Details</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Joined On:</strong> {`${user.joinOn.slice(8, 10)}-${user.joinOn.slice(5, 7)}-${user.joinOn.slice(0, 4)}`}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full ${selectedCategory === category
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
          >
            {category}
          </button>
        ))}
      </div>


      {selectedCategory === categories[0] ? (
        <>
          {soldCoupons.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"> {/* Adjusted grid for larger width */}
              {soldCoupons.map(coupon => (
                <UserSoldCouponCard
                  key={coupon._id}
                  coupon={coupon}
                />
              ))}
            </div>
          ) : (
            <p>No coupons sold yet.</p>
          )}
        </>
      ) : (
        <>
          {boughtCoupons.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {boughtCoupons.map(coupon => (
                <UserBoughtCouponCard
                  key={coupon._id}
                  coupon={coupon}
                />
              ))}
            </div>
          ) : (
            <p>No coupons bought yet.</p>
          )}
        </>
      )}

      <div className="mt-6 py-3">
        <button
          onClick={handleLogout}
          className="w-32 py-2 px-4 bg-red-600 text-white font-semibold rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default MyAccount;
