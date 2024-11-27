import React from "react";
import "../assets/styles/Card.scss";

function Card({ char }) {
  return (
    <div className="card">
      <img src={char.image} alt="Character" />
      <div className="card-content">
        <div>
          <h1>{char.name}</h1>
          <h3>
            <span>Status: </span>
            {char.status}
          </h3>
        </div>
        <section>
          <label>
            Species: <span>{char.species}</span>
          </label>
          <label>
            Gender: <span>{char.gender}</span>
          </label>
          <label>
            Origin Location: <span>{char.origin.name}</span>
          </label>
        </section>
      </div>
    </div>
  );
}

export default Card;
