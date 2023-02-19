// Nav.js

import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Nav/Cart";
import './style.css';

const Nav = ({ cartItems, openCart }) => {

  return (
    <nav>
      <h1 id="storeName">Clothing Store</h1>
      <ul className="nav-links">
        <Link className="nav-link" to=''>
          <li>Home</li>
        </Link>
        <Link className="nav-link" to='/shop'>
          <li>Shop</li>
        </Link>
      </ul>
      <Cart
        cartItems={cartItems}
        openCart={openCart}
      />
    </nav>
  )
}

export default Nav;