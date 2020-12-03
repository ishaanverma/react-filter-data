import React from 'react';
import ProductList from "./ProductList";
import LoadingIndicator from "./LoadingIndicator";

const ProductPage = ({ products }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {products.isLoading ? (
          <LoadingIndicator />
        ) : (
          <ProductList products={products.filtered} />
        )}
      </div>
    </div>
  );
}

export default ProductPage;
