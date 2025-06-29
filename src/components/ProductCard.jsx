import React from "react";

const ProductCard = ({ product, onToggle, isSelected, theme }) => {
  return (
    <div className={`border p-4 rounded shadow-md text-center transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <img src={product.image} alt={product.name} className="h-32 mx-auto mb-2" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-sm italic">{product.brand}</p>
      <p className="font-semibold">{product.price}</p>
      <ul className="text-sm list-disc text-left pl-5 mt-2">
        {product.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
      <button
        className={`mt-3 px-4 py-1 rounded ${
          isSelected ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
        }`}
        onClick={() => onToggle(product)}
      >
        {isSelected ? 'Remove' : 'Add to Compare'}
      </button>
    </div>
  );
};

export default ProductCard;