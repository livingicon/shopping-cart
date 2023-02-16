// Checkout.js

import React from "react";

const Checkout = ({ openCart }) => {

  return (
    <div>
      <p>item</p>
      {/* {checkOutItems} */}
      <button onClick={openCart}>continue shopping</button>
    </div>
  )
}

export default Checkout;