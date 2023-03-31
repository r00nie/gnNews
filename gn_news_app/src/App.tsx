import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import Footer from "./components/Footer";
import { ThemeProvider } from "@material-ui/core/styles";
import globalTheme from "./styles/globalTheme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={globalTheme}>
      <Header title="GN News" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:countryName" element={<CountryPage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
