// import React, { useState, useEffect } from 'react';
// import toast,{Toaster} from 'react-hot-toast';
// import Navbar from "../Navbar/Navbar";
// import StaplesCard from "./StaplesCard";
// import StaplesData from "../../config/staples.json"; // Your JSON file
// import { IndianRupee, ShoppingCart, Plus, Minus } from "lucide-react";
// // import { Toaster } from 'react-hot-toast';

// function StaplesC() {

//   const getCartFromLocalStorage = () => {
//     const storedCart = localStorage.getItem('cart');
//     return storedCart ? JSON.parse(storedCart) : [];
//   };

//   const [cart, setCart] = useState(getCartFromLocalStorage());

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (item) => {
//     const existingItem = cart.find(cartItem => cartItem.id === item.id);
//     if (existingItem) {

//       setCart(cart.map(cartItem => 
//         cartItem.id === item.id 
//           ? { ...cartItem, quantity: cartItem.quantity + 1 } 
//           : cartItem
//       ));
//       toast.success("Product Added Success");
//     } else {

//       setCart([...cart, { ...item, quantity: 1 }]);
//     }
//   };

//   return (
//     <div>
//       <Navbar cartCount={cart.length} />

//       <h1 className="text-4xl py-4 font-bold ml-10">Staples</h1>
//       <div className="flex flex-wrap justify-center">
//         {StaplesData.map((item) => {
//           const { id, name, pimage, price, newprice, description } = item;
//           return (
//             <StaplesCard 
//               key={id} 
//               id={id} 
//               name={name} 
//               pimage={pimage} 
//               price={price} 
//               newprice={newprice} 
//               description={description}
//               addToCart={addToCart}  
//             />
//           );
//         })}
//       </div>
//       <Toaster/>
//     </div>
//   );
// }

// export default StaplesC;


import React from 'react';
import Navbar from "../Navbar/Navbar";
import { useCart } from '../ProductCard/useCard'; // Import the custom hook
import ProductCard from '../ProductCard/ProductCard'; // Reusable card component
import StaplesData from "../../config/staples.json"; // Your JSON file

function StaplesC() {
  const { cart, addToCart } = useCart(); // Use the cart hook

  return (
    <div>
      <Navbar cartCount={cart.length} />

      <h1 className="text-4xl py-4 font-bold ml-10">Staples</h1>
      <div className="flex flex-wrap justify-center">
        {StaplesData.map((item) => {
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

export default StaplesC;
