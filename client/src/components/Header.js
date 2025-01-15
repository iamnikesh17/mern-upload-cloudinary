import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="#" className="hover:text-gray-200">MyShop</Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <Link to="#" className="hover:text-gray-300">Home</Link>
          <Link to="#" className="hover:text-gray-300">Products</Link>
          <Link to="#" className="hover:text-gray-300">About Us</Link>
          <Link to="#" className="hover:text-gray-300">Contact</Link>
        </nav>

        {/* User Icon */}
        <div>
          <button className="flex items-center space-x-2 focus:outline-none">
            <span className="text-sm">Account</span>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 19.121a5 5 0 007.071 0 5 5 0 017.071 0M12 11a5 5 0 100-10 5 5 0 000 10z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
