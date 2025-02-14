
import why1 from "./../../assets/aboutimg/img1whychose.webp";
import why2 from "./../../assets/aboutimg/img1whychose2.webp";
import why3 from "./../../assets/aboutimg/img1whychose3.webp";
import Footer from "./../../components/Footer/Footer";

import React, { useState, useEffect, useCallback } from "react";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";
import Navbar from "../../components/Navbar/navbar1";


import img1 from "./../../assets/aboutimg/mainimg.webp";
import img2 from "./../../assets/aboutimg/whoweare.avif";
import img3 from "./../../assets/aboutimg/whoweare2.jpg";


const About = () => {
 
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Navbar />

      <div className=" px-6 py-10 bg-gray-100 md:px-16 lg:px-24">
        
        

        <nav className="text-sm text-gray-500 mb-4">
          <span className="text-green-700 cursor-pointer hover:underline">Home</span> &gt; <span className="font-semibold">About Us</span>
        </nav>

        <div className="flex flex-col md:flex-row items-center gap-10">
          
          <div className="md:w-1/3 pl-0 md:pl-10 ml-0 md:ml-10">
            <img
              src={img1}
              alt="Organic Mandya - Our Story"
              className="rounded-xl shadow-lg w-full"
            />
          </div>

       
          <div className="md:w-1/2 pl-0 md:pl-30">
            <h2 className="text-3xl font-bold text-green-800">Who We Are</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
            At <b>Green Organic Farm</b>, we are dedicated to providing fresh, chemical-free, and sustainably grown organic produce. Our mission is to promote a healthier lifestyle by bringing you farm-fresh staples, fruits, vegetables, and dairy products, all cultivated with eco-friendly farming practices.

We believe in purity, sustainability, and quality, ensuring that every product you receive is fresh, natural, and free from harmful additives. Join us in embracing a greener, healthier way of living! 🌱✨
            </p>

            
            <div className="flex gap-4 mt-4">
              <img
                src={img2}
                alt="Our Store - 1"
                className="w-20 h-20 rounded-lg shadow-md"
              />
              <img
                src={img3}
                alt="Our Store - 2"
                className="w-20 h-20 rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
     









  <Footer />





     
      <div>
       
        <a
          href="https://wa.me/919590922000"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
          aria-label="Chat with us on WhatsApp"
        >
          <FaWhatsapp size={24} />
        </a>

        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-green-800 transition-all"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default About;
