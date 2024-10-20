import React from "react";
import styles from "./productCard.module.css";
function ProductCard({ productEach, handleProductView,handleAddtoCart }) {
  const { id, title, description, price } = productEach;
  return (
    <div className={styles.ProductCard} onClick={() => handleProductView(id)}>
      <div>
        <img src="" alt="image here" />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <span>$ {price}</span>
      <button onClick={()=>handleAddtoCart()}> Add to Cart</button>
    </div>
  );
}

export default ProductCard;
