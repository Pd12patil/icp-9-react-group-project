import React from 'react';
import { IndianRupee } from "lucide-react";

export default function StaplesCard({ id, name, pimage, price, newprice, description, addToCart }) {
  return (
    <div className="md:w-[300px] md:h-auto m-5 py-4 px-6 shadow-lg hover:shadow-xl border border-gray-300 hover:border-gray-400 hover:bg-slate-50 rounded-md cursor-pointer">
        <img src={pimage} alt={name} className="h-[200px] block mx-auto w-full object-contain md:my-4 md:rounded-lg mix-blend-darken"/>
        <h1 className='text-xl font-semibold mb-4'>{name}</h1>
        <div className='flex flex-col'>
            <p className="flex flex-row mb-2"><IndianRupee /><span className='font-bold'>{price}</span></p>
            <p className="flex flex-row text-green-600 bg-green-50"><IndianRupee /><span className='font-bold'>{newprice}</span></p>
        </div>
        <button 
          className="bg-green-950 text-white py-1 px-3 text-xl rounded-lg mt-3"
          onClick={() => addToCart({ id, name, pimage, price, newprice, description })}
        >
          Add to Cart
        </button>
    </div>
  );
}



