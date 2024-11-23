import React from "react";
import logo from "../assets/images/e9u.png";
import "../assets/styles/Card.scss";

function Card() {
  return (
    <div className="card">
      <img src={logo} alt="Character" />
      <div className="card-content">
        <h1>Character Name</h1>
        <h3>
          <span>Icon|</span>Character Status
        </h3>
        <label>
          Gender: <span>M/F/U</span>
        </label>
        <label>
          Location: <span>Earth</span>
        </label>
      </div>
    </div>
  );
}

export default Card;
