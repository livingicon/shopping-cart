// ItemCard.js

import React from "react";

const ItemCard = ({ cartItem, addToCart, incrementItem }) => {

  return (
    <div className="itemCard">
      <div className="itemCardInfo">
        <p className="itemCardName">{cartItem.title}</p>
        <p className="itemCardPrice">${cartItem.price * cartItem.quantity}</p>
        <div className="quantityBtns">
          <button className="incrementBtn" id={cartItem.id} onClick={incrementItem}>-</button>
          {cartItem.quantity}
          <button className="decrementBtn" id={cartItem.id} onClick={incrementItem}>+</button>
        </div>
      </div>
      <div className="itemCardImage">
        <img className="itemCardImg" src={cartItem.image} alt={cartItem.title} />
      </div>
    </div>
  )
}

export default ItemCard;