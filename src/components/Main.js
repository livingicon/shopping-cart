// Main.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Main/Home";
import Shop from "./Main/Shop";

const Main = () => { //delete?

  return (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
  </Routes>
    // this actually needs to be home
  )
}

export default Main;