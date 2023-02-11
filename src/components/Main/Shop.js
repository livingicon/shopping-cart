// Shop.js

import React, { useEffect } from "react";

const Shop = () => {

  useEffect(() => {
    fetchClothes();
  }, []);
  
  const fetchClothes = () => {
    console.log('working');
  // const fetchClothes = async () => {
  //   const fakeStoreURL = 'https://fakestoreapi.com/products';
  //   const response = await fetch(fakeStoreURL, {mode: 'no-cors'});
  //   let data = await response.json();
  //   console.log(data);
  //   // setClothes(clothes.concat(data));
  //   return data;
  };
  
  return (
    <div>
      <h1>Shop Page</h1>
      {/* {Clothes} */}
    </div>
  );
}

export default Shop;