import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import toast from 'react-hot-toast';
import { IndianRupee, Minus, Plus } from "lucide-react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SnacksJsonData from "../../config/staples.json";
import OilsJsonData from "../../config/oilsc.json";
import DairyJsonData from "../../config/dairy.json";
import DryFruitsJsonData from "../../config/dryfruits.json"
import HomeEssentialJsonData from "../../config/Home.json";
import PersonalCareJsonData from "../../config/personalcare.json";
import SnacksJsonDataa from "../../config/snacks.json";
import FruitsVJsonData from "../../config/fruits.json";
import BeveragesJsonData from "../../config/Beverages.json";


const ProductPreview = () => {
  const { id } = useParams();

  const [productData, setProductData] = useState({
    id: null,
    name: "",
    pimage: "",
    price: "",
    newprice: "",
    description: "",
    im: "",
    quantity: 1,
  });

  useEffect(() => {
    const snack = SnacksJsonData.find((item) => item.id == id);
    const oil = OilsJsonData.find((item) => item.id == id);
    const dairy = DairyJsonData.find((item) => item.id == id);
    const dryfruits = DryFruitsJsonData.find((item) => item.id == id);
    const homees = HomeEssentialJsonData.find((item) => item.id == id);
    const personalcare = PersonalCareJsonData.find((item) => item.id == id);
    const snacks = SnacksJsonDataa.find((item) => item.id == id);
    const fruitsv = FruitsVJsonData.find((item) => item.id == id);
    const beverages = BeveragesJsonData.find((item) => item.id == id);

    if (snack) {
      setProductData({ ...snack, quantity: 1 });  
    } 
    else if (oil) {
      setProductData({ ...oil, quantity: 1 }); 
    }
    else if (dairy) {
      setProductData({ ...dairy, quantity: 1 }); 
    }
    else if (dryfruits) {
      setProductData({ ...dryfruits, quantity: 1 }); 
    }
    else if (homees) {
      setProductData({ ...homees, quantity: 1 }); 
    }
    else if (personalcare) {
      setProductData({ ...personalcare, quantity: 1 }); 
    }
    else if (snacks) {
      setProductData({ ...snacks, quantity: 1 }); 
    }
    else if (fruitsv) {
      setProductData({ ...fruitsv, quantity: 1 }); 
    }
    else if (beverages) {
      setProductData({ ...beverages, quantity: 1 }); 
    }


  }, [id]);

  // const [imgSrc, setImgSrc] = useState(productData?.pimage || "");

  const price = parseFloat(productData?.newprice.replace(/[^\d.-]/g, '')) || 0;
  const subtotal = price * productData?.quantity;

  const getCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  };

  const [cart, setCart] = useState(getCartFromLocalStorage());

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const incrementQuantity = () => {
    setProductData((prevData) => ({
      ...prevData,
      quantity: prevData.quantity + 1, 
    }));
  };

  const decrementQuantity = () => {
    setProductData((prevData) => ({
      ...prevData,
      quantity: prevData.quantity > 1 ? prevData.quantity - 1 : 1, 
    }));
  };

  const addToCart = () => {
    const existingProduct = cart.find(item => item.id === productData.id);

    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === productData.id 
          ? { ...item, quantity: item.quantity + productData.quantity } 
          : item
      ));
      toast.success("Product Added Success");
    } else {
      setCart([...cart, { ...productData, quantity: productData.quantity }]);
    }
  };

  const changeImg = (newImg) => {
    setImgSrc(newImg);
  };

  return (
    <>
      <Navbar cartcount={cart.length}/>
      <div className="container1 mx-auto flex flex-wrap justify-around p-5 max-w-screen-xl">
        <img 
          src={productData?.pimage} 
          alt={productData?.name} 
          className="md:h-[400px] md:w-[400px] object-cover border border-gray-300 shadow-lg rounded-xl p-3 cursor-pointer mx-auto md:my-auto" 
        />
        
        {/* <div className="flex m-auto md:flex-col">
          <img src={productData?.im} alt="celebration-cakes" className="h-[80px] w-[80px] object-cover border border-gray-400 rounded-lg m-2 md:mb-2 cursor-pointer" onClick={() => changeImg(productData?.im)} />
          <img src={productData?.pimage} alt="celebration-cakes" className="h-[80px] w-[80px] object-cover border border-gray-400 rounded-lg m-2 md:mb-2 cursor-pointer" onClick={() => changeImg(productData?.pimage)} />
          <img src={productData?.pimage} alt="celebration-cakes" className="h-[80px] w-[80px] object-cover border border-gray-400 rounded-lg m-2 md:mb-2 cursor-pointer" onClick={() => changeImg('./../../img/almond5.webp')} />
        </div> */}

        <div className="flex flex-col p-5 w-full max-w-[400px]">
          <h1 className="text-2xl font-semibold">{productData?.name}</h1>
          <hr className="my-4" />
          <p>Availability: In Stock</p>
          <p>Product Type: Granola</p>
          <hr className="my-4" />
          
          <div className="flex">
            <p className="flex text-2xl font-semibold text-[#15171d]">
              <IndianRupee />
              <span>{productData?.newprice}</span>
            </p>
            <del className="text-[#595b5f] bg">
              <p className="ml-7 flex text-xl text-[#595b5f]">
                <IndianRupee />
                <span>{productData?.price}</span>
              </p>
            </del>
          </div>
          
          <div className="mt-5 flex">
            <label className="block text-xl mr-4">Weight: </label>
            <select className="px-2 py-1 border border-gray-300 rounded-lg text-lg">
              <option>250g</option>
            </select>
          </div>

          <div className="mt-5 flex items-center">
            <span className="flex">
              <button
                className="px-2 py-1 text-sm bg-gray-200 rounded cursor-pointer"
                onClick={decrementQuantity} 
              >
                <Minus size={20} />
              </button>
              <span className="mx-2">{productData?.quantity}</span>
              <button
                className="px-2 py-1 flex text-sm bg-gray-200 rounded cursor-pointer"
                onClick={incrementQuantity}  
              >
                <Plus size={20} />
              </button>
            </span>
          </div>

          <p className="mt-5 flex"><span className="text-2xl items-center">Total:</span> <IndianRupee /> <span className="text-2xl items-center">{subtotal}</span></p>

          <hr className="my-4" />
          <h2 className="text-xl font-semibold">Description</h2>
          <p>{productData?.description}</p>

          <div className="mt-6 flex gap-4">
            <button onClick={addToCart} className="flex-1 py-3 bg-green-900 hover:bg-green-950 text-white rounded-lg cursor-pointer">ADD TO CART</button>
            <button className="flex-1 py-3 border border-[#18283f] text-[#18283f] rounded-lg cursor-pointer">BUY NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPreview;
