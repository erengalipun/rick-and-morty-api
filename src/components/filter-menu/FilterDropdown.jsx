import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CharFilterPanel from "./panels/CharFilterPanel.jsx";
import EpiFilterPanel from "./panels/EpiFilterPanel.jsx";
import LocFilterPanel from "./panels/LocFilterPanel.jsx";
import "../../assets/styles/FilterDropdown.scss";

function FilterDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const renderFilterPanel = () => {
    const filterPanels = {
      "/locpage": <LocFilterPanel />,
      "/epipage": <EpiFilterPanel />,
      "/charpage": <CharFilterPanel />,
    };

    return filterPanels[location.pathname] || null;
  };

  return (
    <div className={`filter-dropdown ${isOpen ? "open" : ""}`}>
      {renderFilterPanel()}
      <button onClick={handleToggle}>
        <span
          style={{ fontSize: "1rem" }}
          className="material-symbols-outlined"
        >
          {isOpen ? "filter_alt_off" : "filter_alt"}
        </span>
      </button>
    </div>
  );
}

export default FilterDropdown;
