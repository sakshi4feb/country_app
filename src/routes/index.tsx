import Navbar from "../components/Navbar/Navbar";
import { Countries } from "../pages/Countries";
import CountryData from "../pages/CountryData";
import ErrorPage from "../pages/ErrorPage";
import FavouriteCountries from "../pages/FavouriteCountries";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = () => {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path=":countryName" element={<CountryData />} />
        <Route path="/favoutiteCountries" element={<FavouriteCountries />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
