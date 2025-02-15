import React from "react";
import "./../../index.css";
import { FaHeart, FaShoppingCart, FaUser, FaPhone, FaMapMarkerAlt, FaBars } from "react-icons/fa";
import BrowseCategories from "../browsecategory/browsecategory";
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
    
      <div className="flex justify-between items-center text-sm text-gray-500 px-4">
      <span className="animate-blink text-red-600 font-semibold">
          Free shipping starts from ₹499*
        </span>
        <span className="flex items-center">
          Need help? Call Us: <FaPhone className="ml-2 text-green-600" /> +91 9590922000
        </span>
      </div>

      
      <div className="flex justify-between items-center py-3 px-4 md:px-8">
      
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-bold text-green-700">Green Organic Farm</h1>
          <input
            type="text"
            placeholder="Search organic products..."
            className="border p-2 rounded-md w-80 focus:outline-none focus:ring-2 focus:ring-green-500 hidden md:block"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-gray-700 cursor-pointer">
            <FaMapMarkerAlt className="text-green-600" />
            <span>Deliver to</span>
          </div>
          <FaHeart className="text-green-700 text-xl cursor-pointer hover:text-green-500" />
          <FaShoppingCart className="text-green-700 text-xl cursor-pointer hover:text-green-500" />
          <FaUser className="text-green-700 text-xl cursor-pointer hover:text-green-500" />
          <FaPhone className="text-green-700 text-xl cursor-pointer hover:text-green-500" />
        </div>
      </div>

      {/* Bottom Navbar - Navigation Links */}
      <div className="bg-gray-100 py-2 px-4 md:px-8">
        <div className="flex justify-between items-center">
          <button className="bg-green-600 text-white py-2 px-4 rounded-md flex items-center">
            <FaBars className="mr-2" />
            <BrowseCategories />
          </button>
          <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-green-600">Co-Op Member</a>
            <a href="#" className="hover:text-green-600">Farming As A Service</a>
            <a href="#" className="hover:text-green-600">Lab Test Reports</a>
            <a href="#" className="hover:text-green-600">Store Locations</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
