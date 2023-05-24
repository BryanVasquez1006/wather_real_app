import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiCurrentLocation } from "react-icons/bi";
import Shower from "../imgs/Shower.png";
import GlobeLocation from "../imgs/globelocation.png";
import { Offcanvas } from "react-bootstrap";
import OffCanvas from "./OffCanvas";


export function AsideInformation({info}) {
  return (
    <aside className="vh-100 aside-info d-flex flex-column">
      <nav className="navBarArea p-3">
        <div className="buttons-container d-flex justify-content-between ">
          <OffCanvas/>
          <button className="locationIcon btn btn-secondary rounded-5">
            <BiCurrentLocation className="shadow-lg"/>
          </button>
        </div>
      </nav>

      <section className="aside-weather">
        <div className="weather-img pt-5 d-flex justify-content-center">
          <img src={Shower} alt="Weather Status" />
        </div>

        {/* Grades meassures */}
        <div className="d-flex justify-content-center align-items-center mt-4">
          <h1 className="aside-degrees">{info.current.wind_mph}</h1>
          <h3 className="aside-temperature">C°</h3>
        </div>

        <div className=" weatherInfo d-flex flex-column align-items-center align-content-evenly">
          <h2>Shower</h2>
          <p className="today-date">{info.location.localtime}</p>
          <div className="location-info d-flex pt-4">
            <img
              src={GlobeLocation}
              alt="location icon"
              className="location-globe"
            />
            <p className="pt-2">{info.location.region}</p>
          </div>
        </div>
      </section>
    </aside>
  );
}

export default AsideInformation;
