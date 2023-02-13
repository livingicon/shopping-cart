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

  const productCards = items.map((item) => (
    <ProductCards
      // addToCart={addtoCart}
      item={item}
      key={item.itemID} 
      // name={item.itemName}
      // price={item.itemPrice}
      // img={item.itemImg}
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

// {
//   "id":1,
//   "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   "price":109.95,
//   "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   "category":"men's clothing",
//   "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   "rating":{"rate":3.9,"count":120}
// }