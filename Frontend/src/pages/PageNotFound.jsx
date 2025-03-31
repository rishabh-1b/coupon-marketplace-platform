import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-gray-500 mb-6">It seems like you've hit a broken link or typed the wrong URL.</p>
        <Link
          to="/"
          className="inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md text-lg transition-colors"
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
