// Main.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Main/Home";
import Shop from "./Main/Shop";
import Checkout from "./Main/Checkout";

const Main = ({ cartItems, addToCart, isVisible, openCart, shopItems, incrementItem }) => {

  return (
    <div>
      {isVisible &&
        <Checkout 
          openCart={openCart}
          cartItems={cartItems}
          shopItems={shopItems}
          addToCart={addToCart}
          incrementItem={incrementItem}
        />
      }
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop" element={
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