// App.js

import React from "react";
import { BrowserRouter as Browser } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  // change Main to Nav?
  return (
    <Browser>
      <div className="App">
        <Nav />
        <Main />
        <Footer />
      </div>
    </Browser>
  );
};

export default App;
