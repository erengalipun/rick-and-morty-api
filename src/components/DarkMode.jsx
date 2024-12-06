import React from "react";
import { useTheme } from "../ThemeContext";

function DarkMode() {
  const { isLight, toggleTheme } = useTheme();

  return (
    <button
      className="material-symbols-outlined icon-reset"
      onClick={toggleTheme}
    >
      dark_mode
    </button>
  );
}

export default DarkMode;
