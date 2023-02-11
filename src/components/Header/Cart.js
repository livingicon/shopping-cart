// Cart.js

import React from "react";

const Cart = () => {
  
  const openCart = () => {
    console.log('clicked');
  }
  
  return (
    <div>
      <h4 id="cart" onClick={openCart}>Cart Logo</h4>
    </div>
  )
}

export default Cart;