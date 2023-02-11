// Header.js

import React from "react";
import { Router, Route } from "react-router-dom";
import Nav from "./Header/Nav";
import Home from "./Header/Home";
import Shop from "./Header/Shop";

const Header = () => {

  return (
    <div className="Header">
      <Nav />
      <Router>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Router>
    </div>
  )
}

export default Header;