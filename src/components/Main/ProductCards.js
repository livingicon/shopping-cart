// ProductCards.js

import React from "react";

const ProductCards = ({ item, addToCart }) => {

  return (
    <div className="itemCard">
      <img className='itemImg' src={item.image} alt={item.title}/>
      <p className='itemName'>{item.title}</p>
      <div className="shopping">
        <p className='itemPrice'>${item.price.toFixed(2)}</p>
        <button className='itemBtn' id={item.id} onClick={addToCart}>add to cart</button>
      </div>
    </div>
  )
}

export default ProductCards;