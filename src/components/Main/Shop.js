// Shop.js

import React from "react";
import ProductCards from "./ProductCards";
import uniqid from "uniqid";

const Shop = ({ addToCart, shopItems }) => {
  // const [shopItems, setShopItems] = useState([]);

  // useEffect(() => {
  //   loadItems();
  // }, []);

  // const loadItems = async () => {
  //   setShopItems(shopItems.concat(await fetchItems()));
  // }
  
  // const fetchItems = async () => {
  //   const fakeStoreURL = 'https://fakestoreapi.com/products/';
  //   const response = await fetch(fakeStoreURL);
  //   const products = await response.json();
  //   return products;
  // };

  const productCards = shopItems.map((item) => (
    <ProductCards
      key={uniqid()}
      item={item}
      addToCart={addToCart}
    />
  ));
  
  return (
    <div>
      <h1>Items for Sale</h1>
      {productCards}
    </div>
  );
}

export default Shop;