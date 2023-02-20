// ItemCard.js

import React from "react";

const ItemCard = ({ cartItem, addToCart, incrementItem }) => {

  return (
    <div className="itemCard">
      <img src={cartItem.image} alt={cartItem.title} />
      <p>{cartItem.title}</p>
      <p>{cartItem.price * cartItem.quantity}</p>
      <button id={cartItem.id} onClick={incrementItem}>-</button>
      {cartItem.quantity}
      <button id={cartItem.id} onClick={incrementItem}>+</button>
    </div>
  )
}

export default ItemCard;