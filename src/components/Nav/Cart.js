// Cart.js

import React from "react";
import cartOutline from "../../images/cartOutline.svg";

const Cart = ({ cartItems, openCart }) => {
  
  return (
    <div id="nav-cart">
      <img src={cartOutline} alt="cart" id="cartIcon" onClick={openCart} />
      <div id="cartNum">
        {cartItems.length ? cartItems.length : null}
      </div>
    </div>
  )
}

export default Cart;