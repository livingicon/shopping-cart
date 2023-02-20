// ProductCards.js

import React from "react";

const ProductCards = ({ item, addToCart }) => {

  return (
    <div className="productCard">
      <img className='productImg' src={item.image} alt={item.title}/>
      <div className="productName"></div>
      <p className='productName'>{item.title}</p>
      <div className="shopping">
        <p className='productPrice'>${item.price.toFixed(2)}</p>
        <button className='productBtn' id={item.id} onClick={addToCart}>add to cart</button>
      </div>
    </div>
  )
}

export default ProductCards;