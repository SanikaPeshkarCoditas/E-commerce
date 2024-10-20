import React, { useEffect, useState } from "react";
import styles from "./productList.module.css";
import ProductView from "../ProductView/ProductView";
function ProductList() {
  const [allProductsData, setallProductsData] = useState([]);
  const [isPopupOpen, setPopupopen] = useState(false);
  const [clickedProduct, setClickedProduct] = useState([]);

const [cartData,setCartData]=useState([])
  const storeAllProductsData = () => {
    const productsObject = getAllProducts();

    setallProductsData(productsObject.products);
  };

  const handleAddtoCart = (productId) => {
    const addedProduct = allProductsData.filter((f) => f.id === productId);
    setCartData([...cartData,addedProduct]);
  };

  const handlePopupClose = () => {
    setPopupopen(false);
  };

  const handleProductView = (productId) => {
    const selectedProduct = allProductsData.filter((f) => f.id === productId);
    setClickedProduct(selectedProduct);
    setPopupopen(true);
  };
  useEffect(() => {
    storeAllProductsData();
  }, []);
  return (
    <>
      <div className={styles.ProductListContainer}>
        {allProductsData.map((productEach, index) => {
          return (
            <ProductCard
              productEach={productEach}
              handleProductView={handleProductView}
              handleAddtoCart={handleAddtoCart}
            />
          );
        })}
      </div>

      {isPopupOpen && (
        <Popup onCLose={handlePopupClose}>
          <ProductView productClicked={clickedProduct} />
        </Popup>
      )}
    </>
  );
}

export default ProductList;
