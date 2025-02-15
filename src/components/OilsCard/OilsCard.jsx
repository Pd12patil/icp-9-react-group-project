import React from 'react';
import Navbar from "../Navbar/Navbar";
import { useCart } from '../ProductCard/useCard'; // Import the custom hook
import ProductCard from '../ProductCard/ProductCard'; // Reusable card component
import oilsData from "../../config/oilsc.json"; // Your JSON file

function OilsC() {
  const { cart, addToCart } = useCart(); // Use the cart hook

  return (
    <div>
      <Navbar cartCount={cart.length} />

      <h1 className="text-4xl py-4 font-bold ml-10">Oils</h1>
      <div className="flex flex-wrap justify-center">
        {oilsData.map((item) => {
          const { id, name, pimage, price, newprice, description } = item;
          return (
            <ProductCard 
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
    </div>
  );
}

export default OilsC;
