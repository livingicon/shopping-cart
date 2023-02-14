// Main.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Main/Home";
import Shop from "./Main/Shop";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  )
}

export default Main;