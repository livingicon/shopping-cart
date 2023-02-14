// Shop.js

import React, { useState, useEffect } from "react";
import ProductCards from "./ProductCards";
import uniqid from "uniqid";

const Shop = ({ addToCart }) => {
  // add loader?
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    setItems(items.concat(await fetchItems()));
  }
  
  const fetchItems = async () => {
    const fakeStoreURL = 'https://fakestoreapi.com/products/';
    const response = await fetch(fakeStoreURL);
    const products = await response.json();
    return products;
  };

  const itemCards = items.map((item) => (
    <ProductCards
      addToCart={addToCart}
      item={item}
      key={uniqid()}
    />
  ));
  
  return (
    <div>
      <h1>Items for Sale</h1>
      {itemCards}
    </div>
  );
}

export default Shop;