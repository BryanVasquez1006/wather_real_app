import React from "react";
import CardImage from "../imgs/LightCloud.png";

export default function WeatherCard({info }) {
  return (
    <figure className="mt-5 d-flex container">
      <div className="container cards-container d-flex align-items-center m-4 row">
        <h2 className="pt-5 text-center">Tomorrow</h2>
        <div className="card-img-container d-flex justify-content-center">
          <img src={CardImage} alt="weatherImage" className="weatherImg"></img>
        </div>
        <div className="temperature-info d-flex justify-content-between pt-5">
          <p>16 °C</p>
          <p>11 °C</p>
        </div>
      </div>
    </figure>
  );
}
