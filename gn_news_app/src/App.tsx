import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";

const App: React.FC = () => {
  return (
    <>
      <Header title="GN News" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:countryName" element={<CountryPage />} />
      </Routes>
    </>
  );
};

export default App;
