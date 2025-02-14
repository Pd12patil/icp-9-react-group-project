import React from 'react';
import re from "./../../assets/iconfotter.png"
import { Facebook, Twitter, Instagram } from 'lucide-react'; // Import social media icons from lucide-react

const Footer = () => {
  return (
    <footer className="relative text-black">
      
      <video
        className="absolute top-0 left-0 h-[500px] md:h-[760px]  object-cover z-[-1]"
        autoPlay
        loop
        muted
      >
        <source src="https://cdn.shopify.com/videos/c/o/v/2f74fc9020624fb09059c766e538177a.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 bg-black opacity-50 z-[-1]"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">

        <div className="mb-6">
          <img
            src={re} // Replace with your logo URL
            alt="Company Logo"
            className="h-[100px] mx-auto"
          />
        </div>

        <p className="mb-6 text-xl md:text-2xl font-semibold">Empowering the Future with Innovative Solutions</p>

        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-[50px] h-[50px] rounded-full border-2 p-1 hover:text-blue-500" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-[50px] h-[50px] rounded-full border-2 p-1 hover:text-blue-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-[50px] h-[50px] rounded-full border-2 p-1 hover:text-pink-500" />
          </a>
        
        </div>

        <div className="flex justify-center space-x-6 text-lg">
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>

        <div className="mt-6 text-sm">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
