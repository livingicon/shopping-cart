// Shop.js

import React, { useState, useEffect } from "react";
import ProductCards from "./ProductCards";

const Shop = () => {
  // add loader?
  const [items, setItems] = useState([]);

  useEffect(() => {
    const displayItems = async () => {
      setItems(await fetchProducts());
    }
    displayItems();
  }, []);
  
  const fetchProducts = async () => {
    const items = [];
    for (let i = 1; i <= 15; i++) {
      const fakeStoreURL = `https://fakestoreapi.com/products/${i}`;
      const response = await fetch(fakeStoreURL);
      const products = await response.json();
      const itemID = products.id;
      const itemName = products.title;
      const itemPrice = products.price;
      const itemImg = products.image;
      items.push({ itemID, itemImg, itemName, itemPrice });
    }
    console.log(items);
    return items;
  };

  const addToCart = () => {
    console.log("add it to cart");
  }

  const productCards = items.map((item) => (
    <ProductCards
      addToCart={addToCart}
      item={item}
      key={item.itemID} 
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