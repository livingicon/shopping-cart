// App.js

import React from "react";
import { BrowserRouter as Browser } from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {

  return (
    <Browser>
      <Header />
      <Main />
      <Footer />
    </Browser>
  );
};

export default App;
