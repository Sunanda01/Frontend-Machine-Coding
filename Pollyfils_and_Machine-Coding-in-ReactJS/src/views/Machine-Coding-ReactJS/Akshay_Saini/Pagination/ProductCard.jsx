import React from "react";
import "./index.css";
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.images[0]} alt={product.title} />
      <span>{product.title}</span>
    </div>
  );
};

export default ProductCard;
