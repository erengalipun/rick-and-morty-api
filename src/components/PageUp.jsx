import React, { useState } from "react";
import "../assets/styles/PageUp.scss";

function PageUp() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
      className="page-up"
    >
      <span class="material-symbols-outlined">arrow_upward</span>
    </button>
  );
}

export default PageUp;
