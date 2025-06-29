import React from "react";

const ComparisonView = ({ selected, onRemove, onClear, theme }) => {
  if (selected.length < 2) return null;

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Compare Products</h2>
        <button className="text-red-500" onClick={onClear}>
          Clear All
        </button>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {selected.map((product) => (
          <div key={product.id} className={`border p-4 rounded transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
            <img src={product.image} alt={product.name} className="h-24 mx-auto mb-2" />
            <h4 className="font-bold">{product.name}</h4>
            <p>{product.brand}</p>
            <p>{product.price}</p>
            <ul className="text-sm list-disc pl-5 mt-2">
              {product.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <button className="text-sm text-red-500 mt-2" onClick={() => onRemove(product)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonView;