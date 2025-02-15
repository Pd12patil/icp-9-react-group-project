
import why1 from "./../../assets/aboutimg/img1whychose.webp";
import why2 from "./../../assets/aboutimg/img1whychose2.webp";
import why3 from "./../../assets/aboutimg/img1whychose3.webp";
import Footer from "./../../components/Footer/Footer";
import { Link } from 'react-router';
import React, { useState, useEffect, useCallback } from "react";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";
import Navbar from "./../../components/Navbar/navbar1";
/*import React from "react";*/

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
          <a   href="/" className="text-green-700 cursor-pointer hover:underline text-lg">Home</a> &gt; <a href="/about" className="font-semibold text-lg">About Us</a>
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
      <section className="px-6 md:px-16 lg:px-24 py-12 bg-gray-100">
  <h2 className="text-3xl font-bold text-center mb-8 text-green-800">What We Provide?</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
      <img src={why1} alt="Delivering Good Health" className="w-full h-80 object-cover rounded-md mb-4"/>
      <h3 className="text-xl font-semibold mb-2 text-green-700">Delivering Good Health</h3>
      <p className="text-gray-700 text-center">
        At <strong>Green Organic Farm</strong>, we are committed to delivering good health through organically grown products.
        Free from harmful chemicals and rich in essential nutrients, our produce supports a healthier lifestyle.
      </p>
    </div>

    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
      <img src={why2} alt="Empowering Farmers" className="w-full h-80 object-cover rounded-md mb-4"/>
      <h3 className="text-xl font-semibold mb-2 text-green-700">Empowering Farmers with Fair Pricing</h3>
      <p className="text-gray-700 text-center">
        We believe in fair pricing for farmers, ensuring they are rewarded justly for their dedication to sustainable agriculture. 
        By offering them a fair price, we empower them to continue growing organic crops and improve their livelihoods.
      </p>
    </div>

    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
      <img src={why3} alt="Protecting Our Planet" className="w-full h-80 object-content rounded-md mb-4"/>
      <h3 className="text-xl font-semibold mb-2 text-green-700">Nurturing Nature, Protecting Our Planet</h3>
      <p className="text-gray-700 text-center">
        Protecting Mother Earth is at the heart of what we do. Our organic farming practices restore soil health, reduce water pollution, 
        and minimize harmful chemicals, ensuring a sustainable and balanced ecosystem.
      </p>
    </div>
  </div>

 
  <div className="mt-12 bg-green-700 text-white py-10 px-4 rounded-lg text-center">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div>
        <h3 className="text-3xl font-bold">9+</h3>
        <p>Glorious Years</p>
      </div>
      <div>
        <h3 className="text-3xl font-bold">12000+</h3>
        <p>Farmers</p>
      </div>
      <div>
        <h3 className="text-3xl font-bold">100K+</h3>
        <p>Happy Customers</p>
      </div>
      <div>
        <h3 className="text-3xl font-bold">20000+</h3>
        <p>Acres of Farming Lands</p>
      </div>
      <div className="col-span-2 md:col-span-1">
        <h3 className="text-3xl font-bold">200+</h3>
        <p>Workshops Completed</p>
      </div>
    </div>
  </div>
</section>





<section className="px-6 md:px-16 lg:px-24 py-12 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Our Social Impact</h2>
          <p className="text-gray-600">
            Green Organic Farm is a social enterprise dedicated to revolutionizing traditional farming by promoting 
            sustainable, chemical-free agriculture. We collaborate closely with local farmers to encourage organic 
            cultivation methods, ensuring a healthier future for both people and the planet.
          </p>
        </div>

       
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Our Goal</h2>
          <p className="text-gray-600">
            Our mission is threefold: to support farmers in achieving a sustainable livelihood, to provide 100% 
            natural organic food to consumers, and to contribute to a cleaner environment. We strive to improve 
            soil health, enhance biodiversity, and reduce water pollution. Choosing our organic products means 
            actively participating in the preservation of nature for future generations.
          </p>
        </div>

        {/* Why Green Organic Farm? */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Why Green Organic Farm?</h2>
          <p className="text-gray-600">
            At Green Organic Farm, we are committed to delivering carefully selected, high-quality organic produce. 
            Through our dedication to purity, sustainability, and fair pricing, we empower farmers while ensuring 
            the best for consumers. Our approach fosters eco-friendly farming, ethical trade, and a healthier 
            lifestyle—creating a positive impact on both agriculture and the environment.
          </p>
        </div>

      </div>
    </section>



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


// import React from 'react'

// function About() {
//   return (
//     <div>About</div>
//   )
// }

// export default About