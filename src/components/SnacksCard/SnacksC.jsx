import React from 'react';
import Navbar from "../Navbar/Navbar";
import { useCart } from '../ProductCard/useCard'; 
import ProductCard from '../ProductCard/ProductCard';
import SnacksData from "../../config/snacks.json";

function SnacksC() {
  const { cart, addToCart } = useCart(); 

  return (
    <div>
      <Navbar cartcount={cart.length} />

      <h1 className="text-4xl py-4 font-bold ml-10">Snacks</h1>
      <div className="flex flex-wrap justify-center">
        {SnacksData.map((item) => {
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

export default SnacksC;
