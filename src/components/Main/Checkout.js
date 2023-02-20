// Checkout.js

import React from "react";
import uniqid from "uniqid";
import ItemCard from "./ItemCard";
import closeCart from "../../images/close-circle.svg";

const Checkout = ({ openCart, cartItems, addToCart, incrementItem }) => {

  const total = () => {
    return cartItems
      .reduce((total, item) => total + (item.price * item.quantity), 0)
      .toFixed(2);
  }
  
  const checkOutItems = cartItems.map((cartItem) => (
    <ItemCard 
      key={uniqid()}
      cartItem={cartItem}
      addToCart={addToCart}
      incrementItem={incrementItem}
    />
  ));

  return (
    <div id="cart-container">
      <div id="cart">
        <img id="closeCart" onClick={openCart} src={closeCart} alt="close cart" />
        <h1>Cart</h1>
        {checkOutItems}
        <p>Total: ${total()}</p>
        {(cartItems.length > 0) && <button onClick={openCart}>checkout</button>}
        <button id="coninueShopBtn" onClick={openCart}>continue shopping</button>
      </div>
    </div>
  )
}

export default Checkout;