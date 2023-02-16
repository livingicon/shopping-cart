// Checkout.js

import React from "react";
import uniqid from "uniqid";
import ItemCard from "./ItemCard";

const Checkout = ({ openCart, cartItems, shopItems }) => {

  const checkOutItems = cartItems.map((cartItem) => (
    <ItemCard 
      key={uniqid()}
      cartItem={cartItem}
      shopItems={shopItems}
    />
  ));

  return (
    <div>
      {checkOutItems}
      <button onClick={openCart}>continue shopping</button>
    </div>
  )
}

export default Checkout;