// Main.js

import React, {useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Main/Home";
import Shop from "./Main/Shop";
import Checkout from "./Main/Checkout";

const Main = ({ cartItems, addToCart, isVisible, openCart }) => {
  const [shopItems, setShopItems] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    setShopItems(shopItems.concat(await fetchItems()));
  }
  
  const fetchItems = async () => {
    const fakeStoreURL = 'https://fakestoreapi.com/products/';
    const response = await fetch(fakeStoreURL);
    const products = await response.json();
    return products;
  };
  return (
    <div>
      {isVisible &&
        <Checkout 
          openCart={openCart}
          cartItems={cartItems}
          shopItems={shopItems}
        />
      }
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/shop" element={
          <Shop 
            addToCart={addToCart}
            shopItems={shopItems}
          />
        } />
      </Routes>
    </div>
  )
}

export default Main;