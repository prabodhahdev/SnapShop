import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import './app.css';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Navbar
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <div className="container">
        <h1>{selectedCategory === "All" ? "All Products" : selectedCategory}</h1>
        <ProductList products={filteredProducts} />
      </div>
    </>
  );
}

export default App;
