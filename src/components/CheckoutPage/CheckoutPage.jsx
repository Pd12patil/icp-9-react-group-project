import React, { useState, useEffect } from 'react';
import { IndianRupee } from 'lucide-react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function CheckoutPage() {
  const [cart, setCart] = useState([]); 
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart)); 
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setOrderPlaced(true);
  };

  
  const calculateTotalPrice = () => {
    if (cart && Array.isArray(cart)) {
      return cart.reduce(
        (total, item) =>
          total + parseFloat(item.newprice.replace(/[^\d.-]/g, '')) * item.quantity,
        0
      );
    }
    return 0; 
  };

  const totalPrice = calculateTotalPrice();

  return (
    <>
      <Navbar cartCount={cart.length} />
      <div className="max-w-6xl mx-auto p-4">
        <h2 className="mt-5 text-4xl font-semibold text-center">Checkout</h2>

        {orderPlaced ? (
          <div className="mt-10 text-center">
            <h3 className="text-xl font-semibold">Your order has been placed successfully!</h3>
            <p>Thank you for your purchase!</p>
          </div>
        ) : (
          <div className="flex justify-between md:flex-row-reverse flex-col-reverse gap-8">
            {/* Display Product Information */}
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Product Details</h3>
              <div className="w-full md:w-[700px] overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead className="hidden md:table-header-group">
                  <tr className="border-b">
                    <th className="px-4 py-2">Product</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Quantity</th>
                    <th className="px-4 py-2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.length > 0 ? (
                    cart.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="px-4 py-2 flex items-center">
                          <img src={item.pimage} alt={item.name} className="w-12 h-12 object-contain mr-4" />
                          <span className="">{item.name}</span>
                        </td>
                
                        <td className="px-4 py-2">
                          <span className="flex"><IndianRupee /> {item.price}</span>
                        </td>
                        <td className="px-4 py-2 text-center">{item.quantity}</td>
                        <td className="px-4 py-2">
                          <span className="flex"><IndianRupee /> {(parseFloat(item.newprice.replace(/[^\d.-]/g, '')) * item.quantity).toFixed(2)}</span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="px-4 py-2 text-center">No products in the cart</td>
                    </tr>
                  )}
                </tbody>
              </table>
              </div>
              <div className="mt-6">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total Price: </span>
                  <span className="text-green-600 flex">
                    <IndianRupee /> {totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
              
            </div>

            {/* Display Checkout Form */}
            <div className="w-full md:w-[400px]">
              <h3 className="text-2xl font-semibold mb-4">Billing Information</h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold">
                      Address
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold">
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-6 py-2 px-4 bg-green-950 text-white rounded-md"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default CheckoutPage;
