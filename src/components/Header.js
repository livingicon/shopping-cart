// Header.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Header/Nav";
import Home from "./Main/Home";
import Shop from "./Main/Shop";
import './style.css';

const Header = () => {

  return (
    <div className="Header">
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  )
}

export default Header;