// App.js

import React, { useState, useEffect } from "react";
import { BrowserRouter as Browser } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
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
    // create the array I want here (image, title, price, quantity);
    return products;
  };

  const addToCart = (e) => { // has to be here (cartItems to Nav and Main)
    let added = shopItems.filter((i) => i.id === Number(e.target.id));
    added[0].quantity = 1;
    setCartItems(cartItems.concat(added[0]));
  }

  const openCart = () => !isVisible ? setIsVisible(true) : setIsVisible(false);

  return (
    <Browser>
      <div className="App">
        <Nav 
          cartItems={cartItems}
          openCart={openCart}
        />
        <Main 
          cartItems={cartItems}
          addToCart={addToCart}
          openCart={openCart}
          isVisible={isVisible}
          shopItems={shopItems}
        />
        <Footer />
      </div>
    </Browser>
  );
};

export default App;
