import React, { useState } from "react";

function LocFilterPanel({ updateFilters }) {
  const [filters, setFilters] = useState({
    name: "",
    type: "",
  });

  const types = [
    "planet",
    "cluster",
    "space station",
    "microverse",
    "tv",
    "resort",
    "fantasy town",
    "dream",
  ];

  const handleChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleApplyFilters = () => {
    const query = Object.entries(filters)
      .filter(([_, value]) => value)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
    updateFilters(query);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      handleApplyFilters();
    }
  };

  const capitalize = (s) => {
    return String(s)
      .replace(/_/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="filter-panel">
      <h2>Filter</h2>
      <div className="filter-name">
        <label>Name:</label>
        <input
          type="search"
          placeholder="Search"
          value={filters.name}
          onChange={(e) => {
            handleChange("name", e.target.value);
          }}
          onKeyDown={handleEnterKey}
        />
      </div>
      <div className="filter-type">
        <label>Type: </label>
        <select
          value={filters.type}
          onChange={(e) => {
            handleChange("type", e.target.value);
          }}
        >
          <option value="">All</option>
          {types.map((type, index) => (
            <option key={index} value={type}>
              {capitalize(type)}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
}

export default LocFilterPanel;
