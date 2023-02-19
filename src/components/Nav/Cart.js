// Cart.js

import React from "react";
import cartOutline from "../../images/cartOutline.svg";

const Cart = ({ cartItems, openCart }) => {
  
  return (
    <div id="nav-cart" onClick={openCart}>
      <img src={cartOutline} alt="cart" id="cartIcon" />
      <div id="cartNum" onClick={openCart}>
        {cartItems.length ? cartItems.length : null}
      </div>
    </div>
  )
}

export default Cart;