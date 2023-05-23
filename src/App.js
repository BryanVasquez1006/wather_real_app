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
    <div className="App row-container row">
      <div className="col-lg-4">
        <AsideInformation />
      </div>

      {/* CARDS */}
      <div className="col-lg-8">
        <div className="row">
          <div className="col col-sm-6 col-lg-2">
            <WeatherCard />
          </div>
          <div className="col col-sm-6 col-lg-2">
            <WeatherCard />
          </div>
          <div className="col col-sm-6 col-lg-2">
            <WeatherCard />
          </div>

          <div className="col col-sm-6 col-lg-2">
            <WeatherCard />
          </div>
          <div className="col col-sm-6 col-lg-2">
            <WeatherCard />
          </div>
      <CountryData/>
        </div>
      </div>
    </div>
  );
}

export default App;
