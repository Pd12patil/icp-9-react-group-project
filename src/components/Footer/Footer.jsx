import React from 'react';
import re from "./../../assets/iconfotter.png"
import { Facebook, Twitter, Instagram } from 'lucide-react'; // Import social media icons from lucide-react
import { Link } from 'react-router';
const Footer = () => {
  return (
    <footer className="relative text-black mt-15">
      
      <video
        className="absolute top-0 left-0 h-[800px] md:h-[760px]  object-cover z-[-1]"
        autoPlay
        loop
        muted
      >
        <source src="https://cdn.shopify.com/videos/c/o/v/2f74fc9020624fb09059c766e538177a.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 bg-black opacity-50 z-[-1]"></div>

      <div className="container pl-8 relative z-10">

        <div className="mb-6">
          <Link to="/">
          <img
            src={re}
            alt="Company Logo"
            className="h-[100px]"
          /></Link>
        </div>

        {/* <p className="mb-6 text-xl md:text-2xl font-semibold">Empowering the Future with Innovative Solutions</p> */}
        <div>
        <p className="text-xl">
          <span className="font-semibold">Call Us: </span><a href="tel:8626012928">+91 8626010000</a></p>
          <p className="text-xl">
          <span className="font-semibold">Email: </span><a href="mailto:support@greenorganicfarm">support@greenorganicfarm </a></p>
        </div>

        <div className="flex space-x-6 my-6">
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

        <div className="flex flex-wrap">

        <div className="flex flex-col justify-center space-x-6 text-lg">
          <h1 className="text-2xl mb-2">Company</h1>
          <Link to={"/about"} className="hover:underline">About Us</Link>
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>

       
        <div className="flex flex-col justify-center space-x-6 text-lg md:ml-8">
          <h1 className="text-2xl mb-2">Our Products</h1>
          <Link to={"/staplesc"} className="hover:underline">Staples</Link>
          <Link to="/oilsc" className="hover:underline">Oils</Link>
          <Link to="/dryfruits" className="hover:underline">DryFruits</Link>
          <Link to="/beveragesc" className="hover:underline">Beverages</Link>
          <Link to="/fruitsc" className="hover:underline">Vegetables</Link>
        </div>

        </div>

        <div className="mt-6 text-sm text-center">
          <p className=" text-lg md:text-2xl">&copy; 2025 Green Organic Farm. All rights reserved.</p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
