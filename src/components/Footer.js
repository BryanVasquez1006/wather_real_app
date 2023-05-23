import React from "react";
import { ProgressBar } from "react-bootstrap";



export default function Footer({info}) {
  return (
      <div className="container row">
        <h2 className="today">Today's Highlights</h2>
      <div className="col col-lg-6">
        <div className="container highlight-container  d-flex flex-column justify-content-center align-items-center">
          <h3 className="">Wind status</h3>
          <div className="wind-speed d-flex">
            <h1 className="wind-speed-i">{info.wind.speed}</h1>
            <p className="wind-speed-i">mph</p>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="col col-lg-6">
        <div className="container highlight-container d-flex flex-column justify-content-center align-items-center">
          <h3 className="">Humidity</h3>
          <div className="wind-speed d-flex">
            <h1 className="wind-speed-i">{info.main.humidity}%</h1>
              <ProgressBar now={75}/>
            <div className="container">
            </div>
          </div>
        </div>
      </div>

      {/* Third Card */}
      <div className="col col-lg-6">
        <div className="container highlight-container-small d-flex flex-column justify-content-center align-items-center">
          <h3 className="">Visibility</h3>
          <div className="wind-speed d-flex">
            <h1 className="wind-speed-i">{info.visibility}</h1>
            <p className="wind-speed-i">miles</p>
          </div>
        </div>
      </div>

      {/* Fourth Card */}
      <div className="col col-lg-6">
        <div className="container highlight-container-small  d-flex flex-column justify-content-center align-items-center">
          <h3 className="">Air Pressure</h3>
          <div className="wind-speed d-flex">
            <h1 className="wind-speed-i">{info.main.pressure}</h1>
            <p className="wind-speed-i">mb</p>
          </div>
        </div>
      </div>
    </div>
  );
}
