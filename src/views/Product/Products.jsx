import React,{useState} from 'react'
import { Link } from 'react-router';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import StaplesC from '../../components/StaplesCard/StaplesC'
import OilsC from '../../components/OilsCard/OilsC'
import DryFruitsC from '../../components/DryFruits/DryFruitsc'
function Products() {
    const getCartFromLocalStorage = () => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
      };
    
      const [cart, setCart] = useState(getCartFromLocalStorage());
    
    
  return (
    <div>
        <Navbar cartcount={cart.length}/>
        {/* <nav className="text-sm text-gray-500 m-8">
          <Link to="/products" className="font-semibold cursor-pointer hover:underline text-lg hover:text-black">Products</Link> &gt;
          <Link to="/fruitsc" className="font-semibold text-lg hover:underline hover:text-black">Vegetables</Link>

        </nav> */}
        <StaplesC/>
        <OilsC/>
        <DryFruitsC/>
       <Footer/>
    </div>
  )
}

export default Products