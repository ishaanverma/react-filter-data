/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const ProductCard = ({ brandName, productName, price, imgUrl }) => {
  return (
    <div className="col">
      <div className="product-card">
        <img 
          className="img-fluid"
          src={imgUrl.src}
          height={400}
          width={300}
        />
        <div className="product-card__info">
          <p className="product-card__brand">{brandName}</p>
          <p className="product-card__name">{productName}</p>
          <p className="product-card__price">Rs. {price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
