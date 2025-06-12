import React from "react";

const Navbar = ({ categories, selected, onSelect }) => {
  return (
    <nav className="navbar">
      <div className="logo">🛒 SnapShop</div>
      <div className="category-filter">
        <label htmlFor="category-select">Category: </label>
        <select
          id="category-select"
          value={selected}
          onChange={(e) => onSelect(e.target.value)}
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
