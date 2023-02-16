// App.js

import React, { useState } from "react";
import { BrowserRouter as Browser } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const addToCart = (e) => setCartItems(cartItems.concat(e.target.id));
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
        />
        <Footer />
      </div>
    </Browser>
  );
};

export default App;
