// Cart.js

import React from "react";
import { Link } from "react-router-dom";
import cartOutline from "../../images/cartOutline.svg";

const Cart = ({ cartItems, openCart }) => {
  
  return (
    <Link to="./shop">
      <div id="nav-cart" onClick={openCart}>
        <img src={cartOutline} alt="cart" id="cartIcon" />
        <div id="cartNum" onClick={openCart}>
          {cartItems.length ? cartItems.length : null}
        </div>
      </div>
    </Link>

  )
}

export default Cart;