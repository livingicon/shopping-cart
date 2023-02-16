// ItemCard.js

import React from "react";

const ItemCard = ({ item }) => {

  return (
    <div>
      <p>{item}</p>
      <button>add</button>
      <button>remove</button>
    </div>
  )
}

export default ItemCard;