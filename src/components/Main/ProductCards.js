// ProductCards.js

import React from "react";

const ProductCards = ({ item, addToCart }) => {

  return (
    <div className="itemCard">
      <img className='itemImg' src={item.image} alt={item.title}/>
      <p className='itemName'>{item.title}</p>
      <p className='itemPrice'>{item.price}</p>
      <button className='itemBtn' id={item.id} onClick={addToCart}>add to cart</button>
    </div>
  )
}

export default ProductCards;