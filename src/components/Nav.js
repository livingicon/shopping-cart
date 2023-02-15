// Nav.js

import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Nav/Cart";
import './style.css';

const Nav = ({ cartItems }) => {

  return (
    <nav>
      <h1>Company Logo</h1>
      <ul className="nav-links">
        <Link className="link" to=''>
          <li>Home</li>
        </Link>
        <Link className="link" to='/shop'>
          <li>Shop</li>
        </Link>
      </ul>
      <Cart
        cartItems={cartItems}
      />
    </nav>
  )
}

export default Nav;