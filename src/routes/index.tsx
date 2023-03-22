import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import { Countries } from "../pages/Countries";
import CountryData from "../pages/CountryData";
import ErrorPage from "../pages/ErrorPage";
import FavouriteCountries from "../pages/FavouriteCountries";
import Footer from "../components/Footer/Footer";
import Welcome from "../pages/Welcome";

const Index = () => {
  return (
    <BrowserRouter>
      <header>
       <Navbar />
      </header>
      <main>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:countryName" element={<CountryData />} />
        <Route path="/favoutite-countries" element={<FavouriteCountries />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
};

export default Index;
