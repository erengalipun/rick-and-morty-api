import React from "react";
import "../assets/styles/List.scss";

function List({ data, fields }) {
  const capitalize = (s) => {
    return String(s)
      .replace(/_/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="list">
      {data.map((item, index) => (
        <div key={index} className="list-item">
          {fields.map((field) => (
            <div key={field} className="list-field">
              <h4 className="field-label">{capitalize(field)}: </h4>
              <span className="field-value">{capitalize(item[field])}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default List;
