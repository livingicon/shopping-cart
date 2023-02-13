// ProductCards.js

import React from "react";
// import { Routes, Route } from "react-router-dom";

const ProductCards = ({ item }) => {

  return (
    <div className="card" id={item.key}>
      <img src={item.itemImg} alt={item.itemName} id={item.itemName}/>
      <p className="cardTitle" id={item.itemName}>{item.itemName}</p>
      <p className="cardPrice" id={item.name}>{item.itemPrice}</p>
    </div>
  )
}

export default ProductCards;