import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import "../src/stylesheets/NavBar.css";
import "../src/stylesheets/DetailedInformation.css";
import "../src/stylesheets/Footer.css";
import AsideInformation from "./components/AsideInformation";
import WeatherCard from "./components/DetailedInformation";
import Footer from "./components/Footer";
import CountryData from "./components/API/CountryData";

function App() {
  return (
    <div className="App">
      <CountryData/>
    </div>
  );
}

export default App;
