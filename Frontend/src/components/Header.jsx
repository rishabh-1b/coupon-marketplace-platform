import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header({ user }) {
  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center">
            <NavLink to="/" className="ml-2 text-xl font-bold text-gray-900">
              CouponHub
            </NavLink>
          </div>

          <nav className="flex items-center space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${isActive
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`
              }
            >
              Browse
            </NavLink>
            <NavLink
              to="/sell"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${isActive
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`
              }
            >
              Sell
            </NavLink>

            {user ? (
              <Link
                to="/myAccount"
                className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-700"
              >
                {user.name[0]}
              </Link>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${isActive
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`
                }
              >
                Login
              </NavLink>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
