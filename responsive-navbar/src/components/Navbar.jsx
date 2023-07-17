import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className="navbar-container">
      <div className={isMobile ? 'menu-icon-open' : 'menu-icon-close'} onClick={handleClick}>
        <i class="bi bi-list"></i>
      </div>

      <div className="logo">
        <h1>ERIGO</h1>
      </div>

      <div className={isMobile ? 'nav-link-active' : 'nav-link'}>
        <NavLink to="/">Erigo</NavLink>
        <div className="dropdown">
          <NavLink to="collaboration">Collaboration</NavLink>
          <div className="dropdown-content">
            <p>this is a dropdown</p>
          </div>
        </div>
        <NavLink to="tour">Erigo Tour</NavLink>
        <NavLink to="order">Track Order</NavLink>
      </div>

      <div className="nav-right">
        <a href="#">Sign In</a>
        <i class="bi bi-search"></i>
        <i class="bi bi-heart"></i>
        <div className="cart">
          <i class="bi bi-cart3"></i>
          <div className="count"></div>
        </div>
      </div>
    </div>
  );
};
