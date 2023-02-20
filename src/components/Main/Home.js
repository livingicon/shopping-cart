// Home.js

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div id="home">
      <h1 id="journey">"Going on your journey in style."</h1>
      <p id="photoCredit">Photo by <a href="https://unsplash.com/@jcremer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jérémie Crémer</a> on <a href="https://unsplash.com/photos/M5xVtIv1Lo8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
      <Link to='/shop'>
        <button id="shopNowBtn">shop now</button>
      </Link>
    </div>
  )
}

export default Home;