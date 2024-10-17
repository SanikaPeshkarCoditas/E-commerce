import React from "react";

function ProductView({ product }) {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <div>
        <p>{product.warrantyInformation}</p>
      </div>
    </div>
  );
}

export default ProductView;
