import React from "react";
import { Routes, Route } from "react-router-dom";
import CharPage from "./pages/CharPage.jsx";
import EpiPage from "./pages/EpiPage.jsx";
import LocPage from "./pages/LocPage.jsx";
import MainPage from "./pages/MainPage.jsx";
import "./App.scss";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <div className="App">
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
