import React, { useState, useEffect } from 'react';
import { IndianRupee, Minus, Plus, ShoppingCart, Trash } from 'lucide-react';

function CartPage() {
  
  const getCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  };

  const [cart, setCart] = useState(getCartFromLocalStorage());

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const incrementQuantity = (id) => {
    setCart(cart.map(item => 
      item.id === id 
        ? { ...item, quantity: item.quantity + 1 } 
        : item
    ));
  };

  const decrementQuantity = (id) => {
    setCart(cart.map(item => 
      item.id === id && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    ));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.newprice.replace(/[^\d.-]/g, '')) * item.quantity, 0);
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div className="mt-10 mx-10 absolute top-10 right-5">
      <h2 className="text-2xl font-semibold">Your Cart</h2>
      {cart.length > 0 ? (
        <div className="mt-4">
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center p-2 border-b border-gray-300 md:w-[500px] md:h-[160px]">
                <div className="flex items-center">
                <span><img src={item.pimage} alt={item.name} className="h-[200px] block mx-auto w-full object-contain md:my-4 md:rounded-lg mix-blend-darken"/></span>
                  <span>{item.name}</span>
                  <span className="mx-4 flex text-gray-600"><IndianRupee /> {item.price}</span>
                </div>
                <div className="flex items-center">
                  <button 
                    className="px-2 py-1 text-sm bg-gray-200 rounded"
                    onClick={() => decrementQuantity(item.id)} 
                  >
                    <Minus size={16} />
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button 
                    className="px-2 py-1 text-sm bg-gray-200 rounded"
                    onClick={() => incrementQuantity(item.id)} 
                  >
                    <Plus size={16} />
                  </button>
                  <button 
                    className="ml-4 text-red-600"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash/>
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="m-6 flex font-semibold">
            <span className='text-2xl'>Total Price: </span>
            <span className="text-green-600 flex text-2xl"><IndianRupee /> {totalPrice.toFixed(2)}</span>
          </div>

          <div className="mt-4">
            <button className="bg-green-950 text-white py-2 px-4 rounded-lg flex items-center justify-center">
              <ShoppingCart size={20} className="mr-2" /> Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center mt-6">Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartPage;
