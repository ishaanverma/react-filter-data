import React from 'react';
import ProductList from "./ProductList";

const ProductPage = ({ products }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {products.isLoading ? (
          <p>Loading...</p>
        ) : (
          <ProductList products={products.filtered} />
        )}
      </div>
    </div>
  );
}

export default ProductPage;
