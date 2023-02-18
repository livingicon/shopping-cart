// Cart.js

import React from "react";

const Cart = ({ cartItems, openCart }) => {
  
  return (
    <div>
      <h4 id="cartLogo" onClick={openCart}>Cart Logo</h4>
      <div id="cartItems">
        {cartItems.length ? cartItems.length : null}
      </div>
    </div>
  )
}

export default Cart;