import React, { useEffect, useState } from "react";
import styles from './productList.module.css'
function ProductList() {
  const [allProductsData, setallProductsData] = useState([]);

  const storeAllProductsData = () => {
    const productsObject = getAllProducts();

    setallProductsData(productsObject.products);
  };
  useEffect(() => {
    storeAllProductsData();
  }, []);
  return (
    <div className={styles.ProductList}>
      {allProductsData.map((productEach, index) => {
        return <ProductCard productEach={productEach} />;
      })}
    </div>
  );
}

export default ProductList;
