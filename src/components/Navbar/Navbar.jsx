// import React from 'react'

// function Navbar() {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar

import { NavLink, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { headerdata } from '../../config/config';
import { Toaster } from 'react-hot-toast';
// import brandIcon from "./../../../src/images/nav/logo2.png";
import brandIcon from "./../../assets/react.svg"
import "./Navbar.css"
import { Menu } from "lucide-react";

function Navbar() {
  const location = useLocation();
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className='header-container1 h-[70px]'>
      <header className="header">
        <nav className="navbar1 flex justify-between items-center bg-green-950 py-2">
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
          </ul>

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
