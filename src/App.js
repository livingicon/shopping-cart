// App.js

import React, { useState } from "react";
import { BrowserRouter as Browser } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (e) => {
    setCartItems(cartItems.concat(e.target.id));
  }

  return (
    <Browser>
      <div className="App">
        <Nav 
          cartItems={cartItems}
        />
        <Main 
          cartItems={cartItems}
          addToCart={addToCart}
        />
        <Footer />
      </div>
    </Browser>
  );
};

export default App;
