import React from "react";
import "../assets/styles/Card.scss";

function Card({ data }) {
  return (
    <div className="card">
      <img src={data.image} alt="Character" />
      <div className="card-content">
        <div>
          <h1>{data.name}</h1>
          <h3>
            <span>Status: </span>
            {data.status}
          </h3>
        </div>
        <section>
          <label>
            Species: <span>{data.species}</span>
          </label>
          <label>
            Gender: <span>{data.gender}</span>
          </label>
          <label>
            Origin Location: <span>{data.origin.name}</span>
          </label>
        </section>
      </div>
    </div>
  );
}

export default Card;
