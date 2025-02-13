// // Footer.js
// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="relativ text-white py-6 mt-12 overflow-hidden">
//       {/* Video background */}
//       <video
//         className="w-full h-full object-cover z-[-1]"
//         autoPlay
//         loop
//         muted
//       >
//         <source src="https://cdn.shopify.com/videos/c/o/v/2f74fc9020624fb09059c766e538177a.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <p className='text-black'>ojj</p>

//       {/* Overlay to darken the video for better text visibility */}
//       <div className="absolute top-0 left-0 w-full h-ful opacity-50 z-[-1]"></div>

//       {/* Content on top of the video */}
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="flex justify-between items-center">
//           <p>&copy; 2025 Your Company. All rights reserved.</p>
//           <nav>
//             <ul className="flex space-x-6">
//               <li><a href="/about" className="hover:underline">About Us</a></li>
//               <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
//               <li><a href="/contact" className="hover:underline">Contact</a></li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// Footer.js
import React from 'react';
import re from "./../../assets/react.svg"
import { Facebook, Twitter, Instagram } from 'lucide-react'; // Import social media icons from lucide-react

const Footer = () => {
  return (
    <footer className="relative text-black">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 h-[500px] md:h-[760px]  object-cover z-[-1]"
        autoPlay
        loop
        muted
      >
        <source src="https://cdn.shopify.com/videos/c/o/v/2f74fc9020624fb09059c766e538177a.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken the video for better text visibility */}
      <div className="absolute top-0 left-0 bg-black opacity-50 z-[-1]"></div>

      {/* Content on top of the video */}
      <div className="container mx-auto px-4 relative z-10 text-center">

        {/* Company Logo */}
        <div className="mb-6">
          <img
            src={re} // Replace with your logo URL
            alt="Company Logo"
            className="h-16 mx-auto"
          />
        </div>

        {/* Company Description or Slogan */}
        <p className="mb-6 text-xl md:text-2xl font-semibold">Empowering the Future with Innovative Solutions</p>

        {/* Social Media Links */}
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

        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 text-lg">
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>

        {/* Copyright Info */}
        <div className="mt-6 text-sm">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
