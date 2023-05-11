import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [categoryFilter, setCategoryFilter] = useState("All");

  const categories = ["All", ...new Set(items.map((item) => item.category))];

  function handleCategoryFilterChange(event) {
    setCategoryFilter(event.target.value);
  }

  function filterItems() {
    if (categoryFilter === "All") {
      return items;
    } else {
      return items.filter((item) => item.category === categoryFilter);
    }
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select
          name="filter"
          value={categoryFilter}
          onChange={handleCategoryFilterChange}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <ul className="Items">
        {filterItems().map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
