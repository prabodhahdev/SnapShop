import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} style={{ width: "100%" }} />
      <h3>{product.title}</h3>
      <p> <span>Price: </span>$ {product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
