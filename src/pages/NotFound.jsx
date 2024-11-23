import React from "react";
import "../assets/styles/NotFound.scss";
import notfoundlogo from "../assets/images/rnm-404.png";
import { useNavigate } from "react-router-dom";

function NotFound() {
  let navigate = useNavigate();

  return (
    <div className="not-found">
      <div>
        <h1>Oops...</h1>
        <h4>404 Page not found</h4>
        <p>Perhaps what you're searching for isn't here after all.</p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
      <img src={notfoundlogo} alt="404" />
    </div>
  );
}

export default NotFound;
