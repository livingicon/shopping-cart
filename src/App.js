// App.js

import React from "react";
import { BrowserRouter as Browser } from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {

  return (
    <Browser>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </Browser>
  );
};

export default App;
