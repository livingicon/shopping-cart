// ItemCard.js

import React from "react";

const ItemCard = ({ cartItem, shopItems }) => {

  return (
    <div className="itemCard">
      <img src={cartItem.image} alt={cartItem.title} />
      <p>{cartItem.title}</p>
      <p>{cartItem.price}</p>
      <button>-</button>
      {cartItem.quantity}
      <button>+</button>
    </div>
  )
}

export default ItemCard;

// category: "men's clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// rating: {rate: 3.9, count: 120}
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"