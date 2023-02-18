// Checkout.js

import React from "react";
import uniqid from "uniqid";
import ItemCard from "./ItemCard";

const Checkout = ({ openCart, cartItems, addToCart, incrementItem }) => {

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
      <button onClick={openCart}>continue shopping</button>
    </div>
  )
}

export default Checkout;