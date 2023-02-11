// Header.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Header/Nav";
import Home from "./Main/Home";
import Shop from "./Main/Shop";
// import Cart from "./Header/Cart";
import './style.css';

const Header = () => {

  return (
    <div className="Header">
      <h1>Company Logo</h1>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      {/* <Cart /> */}
    </div>
  )
}

export default Header;