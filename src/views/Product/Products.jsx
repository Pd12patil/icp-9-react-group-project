import React,{useState} from 'react'
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
        <Navbar cartCount={cart.length}/>
        <StaplesC/>
        <OilsC/>
        <DryFruitsC/>
       <Footer/>
    </div>
  )
}

export default Products