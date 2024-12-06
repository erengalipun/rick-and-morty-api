import React, { useState } from "react";

function EpiFilterPanel({ updateFilters }) {
  const [name, setName] = useState("");

  const handleApplyFilters = () => {
    if (name.trim()) {
      updateFilters({ name });
    }
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      handleApplyFilters();
    }
  };

  return (
    <div className="filter-panel">
      <h2>Filter</h2>
      <div className="filter-name">
        <label>Name:</label>
        <input
          type="search"
          placeholder="Search"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          onKeyDown={handleEnterKey}
        />
      </div>
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
}

export default EpiFilterPanel;
