import React from "react";

function Product({ name, price, description }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{price}</h2>
      <h3>{description}</h3>
    </div>
  );
}

export default Product;
