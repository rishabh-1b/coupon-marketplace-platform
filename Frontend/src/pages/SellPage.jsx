import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

function SellPage({user}) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(null);
  const [storeName, setStoreName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(null);
  const [terms, setTerms] = useState("");

  async function handleOnSubmit(e) {
    e.preventDefault();
    toast.dismiss();
    if(!user)
    {
      toast.error("Please login to sell coupons")
    }
    else
    {
      try {
        const response = await axios.post("http://localhost:3000/createCoupon",
          { title, description, couponCode, discount, storeName, expiryDate, category, price, terms },
          { withCredentials: true }
        );
        if (response.data.success) {
          toast.success(response.data.message);
          setTitle("");
          setDescription("");
          setCouponCode("");
          setDiscount(null);
          setStoreName("");
          setExpiryDate("");
          setCategory("");
          setPrice(null);
          setTerms("")
        }
        else {
          toast.error(response.data.message);
        }
      }
      catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          toast.error(error.response.data.message);
        }
        else {
          toast.error("Coupon cannot created, please try again later.");
        }
      }
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Sell Your Coupon</h1>

      <form onSubmit={(e) => handleOnSubmit(e)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Coupon Code</label>
            <input
              type="text"
              name="code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Discount Percentage</label>
            <input
              type="number"
              name="discount"
              value={discount ? discount : null}
              onChange={(e) => setDiscount(Number(e.target.value))}
              min="1"
              max="100"
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Store Name</label>
            <input
              type="text"
              name="store"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
            <input
              type="date"
              name="expiryDate"
              value={expiryDate}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            >
              <option value="">Select a category</option>
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Hotels">Hotels</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={price ? price : null}
              onChange={(e) => setPrice(Number(e.target.value))}
              min="1"
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Terms & Conditions</label>
          <textarea
            name="terms"
            value={terms}
            onChange={(e) => setTerms(e.target.value)}
            rows={4}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter each term on a new line"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          List Coupon
        </button>
      </form>
    </div>
  );
}

export default SellPage;
