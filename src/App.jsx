import { Trash2 as TrashIcon } from "lucide-react"; // icons
import React, { useEffect, useState } from 'react';
import bg1 from "./assets/bg1.webp";
import bg2 from "./assets/bg2.webp";
import Navbar from "./components/Navbar/Navbar.jsx";
import Product from './views/Product/Product.jsx';
import Footer from "./components/Footer/Footer.jsx";


const ImageWithText = ({ imageSrc, text, textColor }) => {
  return (
    <div className="relative w-full h-[300px] md:h-[500px] flex justify-center mb-4 mt-2">
      <img
        className="object-cover rounded-xl md:rounded-[30px] shadow-lg"
        src={imageSrc}
        alt={text}
        style={{
          width: '95%',
          height: '100%',
          margin: '10px',
          padding: '2px'
        }}
      />

      {/* Text overlay on the image */}
      <div className={`absolute top-20 left-10  md:left-30 right-0 ${textColor} text-4xl md:text-3xl font-bold p-10`}>
        {text}
      </div>
    </div>
  );
};

// AdditionalText Component
// const AdditionalText = ({ text, textColor }) => {
//   return (
//     // <div className={`hidden absolute top-40 md:top-35 md:left-30 left-10 right-0 ${textColor}  text-lg md:text-2xl p-4`}>
//     //   {text}
//     // </div>
//     <div className={`hidden md:visible absolute md:top-35 md:left-30 right-0 ${textColor} md:text-2xl p-4`}>
//     {text}
//   </div>
//   );
// };
const AdditionalText = ({ text, textColor }) => {
  return (
    <div className={`md:block hidden absolute top-35 left-35 right-0 ${textColor} md:text-2xl p-8`}>
      {text}
    </div>
  );
};


// App Component
const App = () => {
  // List of images you want to switch between
  const images = [bg1, bg2];

  // Corresponding text for each image
  const texts = [
    "Reserve the Best Of the Harvest for you.",
    "Snack Clean, Snack Green",
  ];

  // Text colors for each image
  const textColors = [
    "text-white", 
    "text-green-700", 
  ];

  
  const additionalTexts = [
    "Join the COSO for wholesale prices on organic product.",
    "Unleash the power of tomorrow's technology today.",
  ];

  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Set up interval to change image every 3 seconds (3000ms)
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Cleanup interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs only once




  const getCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  };

  const [cart, setCart] = useState(getCartFromLocalStorage());



  return (
    <>
      <Navbar cartcount={cart.length}/>
      <div className='flex flex-col items-center relative'>
        {/* Image with text */}
        <ImageWithText
          imageSrc={images[currentImageIndex]}
          text={texts[currentImageIndex]}
          textColor={textColors[currentImageIndex]}
        />

        {/* Additional text content */}
        <AdditionalText text={additionalTexts[currentImageIndex]}
        textColor={textColors[currentImageIndex]}
        />

      </div>
      {/* <CardC/> */}
      <Product/>
      {/* <div className="relative bg-cover bg-center h-[450px] w-[450px] md:h-[500px] md:w-[1550px] rounded-4xl" style={{ margin: "10px auto" ,backgroundImage: "url('https://organicmandya.com/cdn/shop/files/a954ba231cb5304f081ed1be7fe36efb.jpg?v=1724066706&width=1584')" }}>
        <div className="absolute top-50 md:left-110 left-60 transform -translate-x-1/2 -translate-y-1/2 text-green-900 font-serif ">

        <p className="text-3xl font-bold">Stay home & get your daily needs from our shop</p>
        
        <p className="text-xl  mt-4">Start YourDaily Shopping With</p>
        <div className="mt-4 flex border-1 md:border-none rounded-lg"> 
          <input type="email" placeholder="Your email address" className="text-xl border-1 border-green-900 px-4 py-1  focus:border-none rounded-l-lg" />
          <button  className="bg-green-900 text-white text-2xl px-2 rounded-r-lg cursor-pointer">Subscribe</button>
        </div>
        </div>
        
      </div> */}
      
      <Footer/>
    </>
  );
};

export default App;
