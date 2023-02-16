// Checkout.js

import React from "react";
import uniqid from "uniqid";
import ItemCard from "./ItemCard";

const Checkout = ({ openCart, cartItems }) => {

  const checkOutItems = cartItems.map((item) => (
    // console.log('working');
    <ItemCard 
      key={uniqid()}
      item={item}
      // id={item.id}
      // price={item.price}
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