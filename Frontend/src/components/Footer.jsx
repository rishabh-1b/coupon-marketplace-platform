import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          <div>
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p className="text-sm text-gray-400">
              CouponHub is a platform for buying and selling coupons for various services
              and products. Our mission is to provide users with access to the best deals
              while ensuring a seamless experience. Whether you want discounts on top 
              brands or are looking to sell unused coupons, we help you maximize your savings.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Useful Links</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p className="text-sm text-gray-400">Email: couponhub.deals@gmail.com, rishabh01b@gmail.com</p>
            <p className="text-sm text-gray-400">Phone: +91 8368744383</p>
            <p className="text-sm text-gray-400">Address: Sector-86, Noida</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
          <p> Copyright © {new Date().getFullYear()} CouponHub. </p>
          <p> All rights reserved. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
