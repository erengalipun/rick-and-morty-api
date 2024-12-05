import React, { useState } from "react";

function EpiFilterPanel({ updateFilters }) {
  const [filters, setFilters] = useState({
    name: "",
    episode: "",
  });
  const episodes = [];

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
        />
      </div>
      <div className="filter-episode">
        <label>Episodes: </label>
        <select
          value={filters.episode}
          onChange={(e) => {
            handleChange("episode", e.target.value);
          }}
        >
          <option value="">All</option>
          {episodes}
        </select>
      </div>
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
}

export default EpiFilterPanel;
