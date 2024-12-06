import React from "react";
import { Routes, Route } from "react-router-dom";
import CharPage from "./pages/CharPage.jsx";
import EpiPage from "./pages/EpiPage.jsx";
import LocPage from "./pages/LocPage.jsx";
import MainPage from "./pages/MainPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import { useTheme } from "./ThemeContext.jsx";
import "./App.scss";

function App() {
  const { isLight } = useTheme();
  return (
    <div className={`App ${isLight ? "light-mode" : "dark-mode"}`}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/charpage" element={<CharPage />} />
        <Route path="/locpage" element={<LocPage />} />
        <Route path="/epipage" element={<EpiPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
