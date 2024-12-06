import React, { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(true);

  const toggleTheme = () => setIsLight((prev) => !prev);

  useEffect(() => {
    const className = isLight ? "light-mode" : "dark-mode";
    document.body.classList = className;
  }, [isLight]);

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
