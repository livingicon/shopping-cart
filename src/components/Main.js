// Main.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Main/Home";
import Shop from "./Main/Shop";
import Checkout from "./Main/Checkout";

const Main = ({ cartItems, addToCart, isVisible, openCart }) => {

  return (
    <div>
      {isVisible &&
        <Checkout 
          openCart={openCart}
          // cartItems={cartItems}
        />
      }
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/shop" element={
          <Shop 
            addToCart={addToCart}
          />
        } />
      </Routes>
    </div>
  )
}

export default Main;