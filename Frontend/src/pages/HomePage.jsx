import React, { useEffect, useState } from 'react';
import CouponCard from '../components/CouponCard';
import Footer from '../components/Footer';
import axios from 'axios';

const HomePage = ({ user }) => {

  const [coupons, setCoupons] = useState([]);

  async function fetchAllCoupons() {
    const response = await axios.get("http://localhost:3000/getAllCoupon",
      { withCredentials: true }
    );
    setCoupons(response.data.coupons);
  }

  useEffect(
    () => { fetchAllCoupons() },
    []
  );

  const categories = ['All', 'Electronics', 'Fashion', 'Food', 'Travel','Entertainment','Hotels','Education','Health'];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCoupons = selectedCategory === 'All' ? coupons : coupons.filter(coupon => coupon.category === selectedCategory);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen py-8">
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

        {filteredCoupons.length > 0 ?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCoupons.map(coupon => (
              <CouponCard
                key={coupon._id}
                coupon={coupon}
                user={user}
              />
            ))}
          </div>
          :
          <div className="text-center text-gray-500 text-lg">
            No coupons available in this category.
          </div>
        }
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
