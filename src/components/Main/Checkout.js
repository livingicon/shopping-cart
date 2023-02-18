// Checkout.js

import React, { useState } from "react";
import uniqid from "uniqid";
import ItemCard from "./ItemCard";

const Checkout = ({ openCart, cartItems, addToCart, incrementItem }) => {

  const total = () => {
    if (cartItems.length === 0) {
      return 0;
    } else if (cartItems.length === 1) {
      return cartItems[0].price;
    } else {
      return cartItems
        .reduce((a,b) => (a.price*a.quantity) + (b.price*b.quantity))
        .toFixed(2);
    }
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
    <div>
      <h1>Cart</h1>
      {checkOutItems}
      <p>Total: {total()}</p>
      {(cartItems.length > 0) && <button onClick={openCart}>checkout</button>}
      <button onClick={openCart}>continue shopping</button>
    </div>
  )
}

export default Checkout;