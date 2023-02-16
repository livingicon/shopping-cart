// ItemCard.js

import React from "react";

const ItemCard = ({ cartItem, shopItems }) => {

const displayItemArr = shopItems.filter((i) => i.id === Number(cartItem));
const displayItem = displayItemArr[0];

  return (
    <div>
      <img src={displayItem.image} alt={displayItem.title} />
      <p>{displayItem.title}</p>
      <p>{displayItem.price}</p>
      <button>add</button>
      <button>remove</button>
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