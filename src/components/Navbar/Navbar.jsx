// import React from 'react'

// function Navbar() {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar

import { NavLink, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { Link } from 'react-router';
import { headerdata } from '../../config/config';
import { Toaster } from 'react-hot-toast';
// import brandIcon from "./../../../src/images/nav/logo2.png";
import brandIcon from "./../../assets/green-organic.png"
import "./Navbar.css"
import { Menu } from "lucide-react";
import { ShoppingCart } from 'lucide-react';

function Navbar({ cartCount }) {
  const location = useLocation();
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className='header-container'>
      <header className="header">
        <nav className="navbar">
          <div className="nav-logo">
            <NavLink to="/">
              <img src={brandIcon} alt="brand logo" className='brand-logo' />
            </NavLink>
          </div>

          <ul className={`nav-menu ${menuActive ? 'active' : ''}`} >

            {headerdata.map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  to={item.to}
                  style={({ isActive }) =>
                    isActive ? { color: 'white' } : { color: '#999999' }
                  }
                  className="nav"
                >
                  {item.name}
                  
                </NavLink>
                
              </li>
              
            ))}
            <Link to="/cart">
          {/* <span className="">{cartCount}</span> */}
          <span className='flex text-2xl text-gray-400'>
          <ShoppingCart cartCount={cartCount} size={40} color={'#999999'} className='ml-12 md:ml-0'  />{cartCount}</span>
        </Link>
          </ul>
          {/* <nav className="bg-green-950 text-white p-4 flex justify-between items-center"> */}
      {/* Store Name */}
      {/* <div className="text-2xl font-semibold">Your Store</div> */}

      {/* Cart Count with Link to Cart Page */}
      {/* <div className="text-white">
        <Link to="/cart">
          {/* <span className="">{cartCount}</span> */}
          {/* <ShoppingCart cartCount={cartCount} size={24} />
        </Link>
      </div>  */}
    {/* </nav> */}

          <div className="dropdown-items" onClick={toggleMenu}>
          <Menu className="text-white w-[40px] h-[40px]" />
            {/* <span></span>
            <span></span>
            <span></span> */}
          </div>
        </nav>
      </header>

      <Toaster />
    </div>
  );
}

export default Navbar;
