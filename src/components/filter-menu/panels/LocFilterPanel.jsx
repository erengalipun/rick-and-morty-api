import React, { useState } from "react";

function LocFilterPanel({ updateFilters }) {
  const [filters, setFilters] = useState({
    name: "",
    type: "",
    dimension: "",
  });

  const dimensions = [];

  return (
    <div className="filter-panel">
      <h2>FilterLoc</h2>
    </div>
  );
}

export default LocFilterPanel;
