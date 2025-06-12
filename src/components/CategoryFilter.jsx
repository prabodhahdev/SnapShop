import React from "react";

const CategoryFilter = ({ categories, selected, onSelect }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label>Filter by category: </label>
      <select value={selected} onChange={(e) => onSelect(e.target.value)}>
        {categories.map((cat, i) => (
          <option key={i} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
