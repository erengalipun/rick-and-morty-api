import React from "react";

function CharFilterPanel() {
  const status = ["alive", "dead", "unknown"];
  const species = [
    "human",
    "alien",
    "humanoid",
    "poopybutthole",
    "mythological-creature",
    "animal",
    "robot",
    "cronenberg",
    "disease",
    "unknown",
  ];
  const genders = ["male", "female", "genderless", "unknown"];

  const capitalize = (s) => {
    return String(s[0]).toUpperCase() + String(s).slice(1);
  };

  return (
    <div className="filter-panel">
      <h2>Filter</h2>
      <div className="filter-name">
        <label>Name:</label>
        <input type="search" placeholder="Search" />
      </div>
      <div className="filter-status">
        <label>Status: </label>
        <select>
          {status.map((status, index) => (
            <option key={index}>{capitalize(status)}</option>
          ))}
        </select>
      </div>
      <div className="filter-species">
        <label>Species: </label>
        <select>
          {species.map((species, index) => (
            <option key={index}>{capitalize(species)}</option>
          ))}
        </select>
      </div>
      <div className="filter-gender">
        <label>Gender: </label>
        <select>
          {genders.map((gender, index) => (
            <option key={index}>{capitalize(gender)}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CharFilterPanel;
