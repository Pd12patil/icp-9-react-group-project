import oilsData from "../../config/oilsc.json"
import Navbar from "../Navbar/Navbar";
import OilsCard from "./OilsCard";
import React, { useState, useEffect } from 'react';
import toast,{Toaster} from 'react-hot-toast';

function OilsC() {
  const getCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  };

  const [cart, setCart] = useState(getCartFromLocalStorage());

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {

      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 } 
          : cartItem
      ));
      toast.success("Product Added Success");
    } else {

      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

 
  return (
    
    <div>
    <Navbar cartCount={cart.length} />

    <h1 className="text-4xl py-4 font-bold ml-10">Oils</h1>
    <div className="flex flex-wrap justify-center">
      {oilsData.map((item) => {
        const { id, name, pimage, price, newprice, description } = item;
        return (
          <OilsCard 
            key={id} 
            id={id} 
            name={name} 
            pimage={pimage} 
            price={price} 
            newprice={newprice} 
            description={description}
            addToCart={addToCart}  
          />
        );
      })}
    </div>
    <Toaster/>
   
  </div>
  )
}

export default OilsC