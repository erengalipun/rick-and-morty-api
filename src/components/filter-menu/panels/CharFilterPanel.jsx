import React, { useState } from "react";

function CharFilterPanel({ updateFilters }) {
  const [filters, setFilters] = useState({
    name: "",
    status: "",
    species: "",
    gender: "",
  });
  const genders = ["female", "male", "genderless", "unknown"];
  const species = [
    "human",
    "alien",
    "humanoid",
    "poopybutthole",
    "mythological-creature",
    "animal",
    "robot",
    "disease",
    "unknown",
  ];
  const statuses = ["alive", "dead", "unknown"];

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
      <div className="filter-status">
        <label>Status: </label>
        <select
          value={filters.status}
          onChange={(e) => {
            handleChange("status", e.target.value);
          }}
        >
          <option value="">All</option>
          {statuses.map((status, index) => (
            <option key={index} value={status}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-species">
        <label>Species: </label>
        <select
          value={filters.species}
          onChange={(e) => {
            handleChange("species", e.target.value);
          }}
        >
          <option value="">All</option>
          {species.map((species, index) => (
            <option key={index} value={species}>
              {species.charAt(0).toUpperCase() + species.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-gender">
        <label>Gender: </label>
        <select
          value={filters.gender}
          onChange={(e) => {
            handleChange("gender", e.target.value);
          }}
        >
          <option value="">All</option>
          {genders.map((gender, index) => (
            <option key={index} value={gender}>
              {gender.charAt(0).toUpperCase() + gender.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
}

export default CharFilterPanel;
