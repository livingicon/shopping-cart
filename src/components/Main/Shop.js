// Shop.js

import React from "react";
import ProductCards from "./ProductCards";
import uniqid from "uniqid";

const Shop = ({ addToCart, shopItems }) => {

  const productCards = shopItems.map((item) => (
    <ProductCards
      key={uniqid()}
      item={item}
      addToCart={addToCart}
    />
  ));
  
  return (
    <div>
      <h1>Items for Sale</h1>
      {productCards}
    </div>
  );
}

export default Shop;