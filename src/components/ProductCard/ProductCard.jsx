import React from "react";
import styles from "./productCard.module.css";
function ProductCard({ productEach }) {
  const { title, description, price } = productEach;
  return (
    <div className={styles.ProductCard}>
      <div>
        <img src="" alt="image here" />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <span>$ {price}</span>
    </div>
  );
}

export default ProductCard;
