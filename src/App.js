// App.js

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  const [shopItems, setShopItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

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
    const lessProducts = products.filter((i) => i.category === "men's clothing" || i.category === "women's clothing");
    return lessProducts;
  };

  const addToCart = (e) => {
    let added = shopItems.filter((i) => i.id === Number(e.target.id));
    if (!cartItems.length || (cartItems.filter((i) => i.id === Number(e.target.id)).length === 0)) {
      added[0].quantity = 1;
      setCartItems(cartItems.concat(added[0]));
    } else {
      const newCartItems = [...cartItems];
      for (let i=0; i<newCartItems.length; i++) {
        if (newCartItems[i].id === Number(e.target.id)) {
          newCartItems[i].quantity = newCartItems[i].quantity + 1;
        }
        setCartItems(newCartItems);
      }
    }
  }

  const incrementItem = (e) => {
    let cartItemsCopy = [...cartItems];
    for (let i=0; i<cartItemsCopy.length; i++) {
      if (cartItemsCopy[i].id === Number(e.target.id) && e.target.innerHTML === '+') {
        cartItemsCopy[i].quantity = cartItemsCopy[i].quantity + 1;
      } else if (cartItemsCopy[i].id === Number(e.target.id) && e.target.innerHTML === '-' && cartItemsCopy[i].quantity) {
        cartItemsCopy[i].quantity = cartItemsCopy[i].quantity - 1;
      }
      const itemsNotZero = cartItemsCopy.filter((i) => i.quantity)
      setCartItems(itemsNotZero); 
    }
  }

  const openCart = () => !isVisible ? setIsVisible(true) : setIsVisible(false);

  return (
    <Router basename="/">
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
          incrementItem={incrementItem}
        />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
