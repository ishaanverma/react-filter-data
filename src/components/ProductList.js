import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => 
  products.map((item) => (
    <ProductCard
      key={item.productId}
      brandName={item.brand}
      productName={item.productName}
      price={item.price}
      imgUrl={item.images[0]}
    />
  ));

export default ProductList;
