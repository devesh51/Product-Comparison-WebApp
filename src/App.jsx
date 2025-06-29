import React, { useEffect, useState } from "react";
import products from "./data/product";
import ProductList from "./components/ProductList";
import ComparisonView from "./components/ComparisonView";

function App() {
  const [selected, setSelected] = useState(() => {
    const stored = localStorage.getItem("compareList");
    return stored ? JSON.parse(stored) : [];
  });

  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleProduct = (product) => {
    if (selected.find((p) => p.id === product.id)) {
      setSelected(selected.filter((p) => p.id !== product.id));
    } else if (selected.length < 3) {
      setSelected([...selected, product]);
    }
  };

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-screen-xl mx-auto min-h-screen transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
  <input
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className={`px-3 py-2 w-full md:w-1/2 rounded shadow-md ${
      theme === "dark" ? "input-dark" : "input-light"
    }`}
  />

  <div className="ml-4 flex items-center gap-3">
    <span>{theme === "dark" ? "🌙 Dark" : "☀ Light"}</span>
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`relative inline-flex items-center justify-between w-16 h-8 p-1 rounded-full transition-colors duration-500 ${
        theme === "dark" ? "bg-gray-700" : "bg-gray-300"
      }`}
    >
      <span
        className={`inline-block w-6 h-6 transform bg-white rounded-full shadow-md transition-transform duration-500 ${
          theme === "dark" ? "translate-x-8" : "translate-x-0"
        }`}
      ></span>
    </button>
    </div>
    </div>
      <ProductList
        products={filtered}
        selected={selected}
        onToggle={toggleProduct}
        theme={theme}
      />
      <ComparisonView
        selected={selected}
        onRemove={toggleProduct}
        onClear={() => setSelected([])}
        theme={theme}
      />
    </div>
  );
}

export default App;
