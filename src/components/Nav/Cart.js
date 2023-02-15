// Cart.js

import React, { useState } from "react";

const Cart = ({cartItems}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const openCart = () => !isVisible ? setIsVisible(true) : setIsVisible(false);
  
  return (
    <div>
      <h4 id="cart" onClick={openCart}>Cart Logo</h4>
      <div id="cartItems">
        {cartItems.length ? cartItems.length : null}
      </div>
      {/* {isVisible && 
        <Checkout 
          showCart={openCart}
          cartItems={cartItems}
        />
      } */}
    </div>
  )
}

export default Cart;