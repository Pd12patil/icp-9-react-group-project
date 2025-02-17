import React, { useState, useEffect } from 'react';
import { IndianRupee, Minus, Plus, ShoppingCart, Trash } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import toast,{Toaster} from 'react-hot-toast';

function CartPage() {
  const navigate = useNavigate(); 

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
    toast.error("Remove this Product")
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

  const handleCheckout = () => {
    
    navigate('/checkout');
  };

  return (
    <>
      <Navbar cartcount={cart.length} />
      <h2 className="mt-5 mb-8 text-4xl font-semibold text-center">Your Cart</h2>

      <div className="1max-w-6xl 1mx-auto p-4 flex flex-wrap justify-around">
        {/* <h2 className="mt-5 mb-8 text-4xl font-semibold text-center">Your Cart</h2> */}
        {/* <div  className="flex flex-wrap justify-around"> */}
        {cart.length > 0 ? (
          <div className="md:flex justify-around overflow-x-scroll">
            {/* Table to display cart items */}
            <table className="min-w-[700px] table-auto border-collapse">
              <thead className="hidden md:table-header-group">
                <tr className="border-b">
                  <th className="px-4 py-2 text-left">Product</th>
                  <th className="px-4 py-2 text-left">Price</th>
                  <th className="px-4 py-2 text-left">Quantity</th>
                  <th className="px-4 py-2 text-left">Total</th>
                  <th className="px-4 py-2 text-left">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-2 flex items-center">
                      <img
                        src={item.pimage}
                        alt={item.name}
                        className="w-16 h-16 object-contain mr-4"
                      />
                      {item.name}
                    </td>
                    <td className="px-4 py-2">
                    <span className="flex"><IndianRupee /> {item.newprice}</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="flex">
                      <button
                        className="px-2 py-1 text-sm bg-gray-200 rounded cursor-pointer"
                        onClick={() => decrementQuantity(item.id)}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="px-2 py-1 flex text-sm bg-gray-200 rounded cursor-pointer"
                        onClick={() => incrementQuantity(item.id)}
                      >
                        <Plus size={16} />
                      </button>
                      </span>
                    </td>
                    <td className="px-4 py-2">
                     <span className="flex"> <IndianRupee />
                      {(
                        parseFloat(item.newprice.replace(/[^\d.-]/g, '')) * item.quantity
                      ).toFixed(2)}</span>
                    </td>
                    <td className="px-4 py-2">
                      <button
                        className="text-red-600 hover:text-red-800 cursor-pointer"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            
          </div>
        ) : (
          <p className="text-2xl text-center mt-6">Your cart is empty.</p>
        )}
        {/* </div> */}
        {/* Total Price and Checkout Button */}
        <div className="my-10 p-4 h-[160px] w-[300px] md:w-[500px] border-1 border-gray-200 rounded-lg">
              <div className="m-6 flex font-semibold">
                <span className="text-2xl">Total Price: </span>
                <span className="text-green-600 flex text-2xl">
                  <IndianRupee /> {totalPrice.toFixed(2)}
                </span>
              </div>

              <div className="mt-4">
                <button
                  className="bg-green-950 text-white py-2 px-4 rounded-lg flex items-center justify-center"
                  onClick={handleCheckout} // checkout navigation
                >
                  <ShoppingCart size={20} className="mr-2" /> Checkout
                </button>
              </div>
            </div>
      </div>
      <Footer />
      <Toaster/>
    </>
  );
}

export default CartPage;
