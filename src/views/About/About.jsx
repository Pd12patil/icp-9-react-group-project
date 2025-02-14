import React,{ useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'

function About() {
  const getCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  };

  const [cart, setCart] = useState(getCartFromLocalStorage());

  return (
    <>
    <Navbar cartCount={cart.length}/>
        <div>About</div>
    </>
  )
}

export default About