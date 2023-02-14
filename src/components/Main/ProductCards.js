// ProductCards.js

import React from "react";
// import { Routes, Route } from "react-router-dom";

const ProductCards = ({ item, addToCart }) => {

  return (
    <div className="card">
      <img src={item.image} alt={item.description}/>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <button onClick={addToCart}>add to cart</button>
    </div>
  )
}

export default ProductCards;