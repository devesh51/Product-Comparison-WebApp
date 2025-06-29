import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, selected, onToggle, theme }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isSelected={selected.some((p) => p.id === product.id)}
          onToggle={onToggle}
          theme={theme}
        />
      ))}
    </div>
  );
};

export default ProductList;